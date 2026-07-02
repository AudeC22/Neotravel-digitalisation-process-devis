FROM n8nio/n8n:latest

USER root

RUN npm install -g python-shell openai

USER node