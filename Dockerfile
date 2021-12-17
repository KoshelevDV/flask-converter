FROM ubuntu:latest
RUN apt update && \
    apt install -y python3 python3-pip python-dev build-essential
COPY . /app
WORKDIR /app
RUN pip install -r requirements.txt
ENTRYPOINT ['python']
CMD ['app.py']