const config = {
  url: process.env.DB_URL || 'mongodb+srv://robert:<PASSWORD>@movieapicluster.ozxtocz.mongodb.net/appmessagesdb?retryWrites=true&w=majority',
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'http://localhost'
};

module.exports = config;