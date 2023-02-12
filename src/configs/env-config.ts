export default () => ({
  env: process.env.ENV ?? 'dev',
  port: process.env.APP_PORT ?? 8090,
  mongodb: {
    mongodb_uri: process.env.MONGODB_URI
  }
});
