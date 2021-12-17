FROM alpine:latest
RUN apk add --update --no-cache python3 py3-pip
COPY . /app
WORKDIR /app
RUN pip install -r requirements.txt
ENTRYPOINT ["python3"]
CMD ["main.py"]