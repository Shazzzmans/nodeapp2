FROM 'localhost:5000/pragra/centos'
WORKDIR /app
ENV USER_NAME 'DOCKER VIVEK'
ENV APP_PORT 3000
COPY . /app/
RUN curl -sL https://rpm.nodesource.com/setup_14.x | bash - && \
    yum install -y nodejs && \
    npm install -g yarn
RUN yarn install 
CMD [ "node", "app" ]
