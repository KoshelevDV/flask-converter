pipeline {
  agent {
    kubernetes {
      yamlFile 'jenkins-pod.yaml'
      defaultContainer 'git'
    }
  }
  stages {
    stage('Clone repo') {
      steps {
        container(name: 'git', shell: '/bin/sh') {
          git branch: 'fb/1.0', credentialsId: 'test-jenkins-github-token', url: 'https://github.com/KoshelevDV/flask-converter'
        }
      }
    }
    stage('Build image and push'){
      environment {
        GIT_HASH=sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
      }
      steps {
        container(name: 'kaniko', shell: '/busybox/sh') {
          retry(count: 3){
            sh """
            /kaniko/executor \
            --dockerfile Dockerfile \
            --context `pwd`/ \
            --destination gcr.io/koshelev/flask-converter:"${GIT_HASH}" \
            --verbosity debug \
            """
          }
        }
      }  
    }
    stage("Test Develop Branch") {
      environment {
        GIT_HASH=sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
        ENV = ''
        if (env.BRANCH_NAME == 'development'){
            ENV = 'dev'
        }
        else {
            ENV = 'prod'
        }
      }
      steps{
        script {
          if (env.BRANCH_NAME == 'development' || env.BRANCH_NAME == 'main') {
            stage("Auth to gcloud") {
              container(name: 'gcloud', shell: 'sh') {
              sh 'printenv'
              sh "gcloud auth activate-service-account --key-file /key/credentials.json"
              sh "gcloud container clusters get-credentials cluster --zone=us-central1-a"
              }
            }
            stage("Get helm") {
              container(name: 'gcloud', shell: 'sh') {
              sh 'curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3'
              sh 'chmod 700 get_helm.sh'
              sh './get_helm.sh'
              }
            }
            stage("Deploy to k8s"){
              container(name: 'gcloud', shell: 'sh'){
                sh 'helm version'
                sh 'helm list -n "${ENV}"'
                sh '''helm template charts/flask-converter \
                --set tag="${GIT_HASH}" \
                --set env="${ENV}" \
                --set service.type=LoadBalancer
                '''
                sh '''
                helm upgrade --install flask-converter charts/flask-converter \
                --set tag="${GIT_HASH}" \
                --set env="${ENV}" \
                --set service.type=LoadBalancer
                '''
              }
            }
          }
          else {
            stage("Skipp"){
              sh "printenv"
              echo GIT_HASH
              echo ENV
              echo env.BRANCH_NAME
            }
          }
        }
      }
    }
  }
}
