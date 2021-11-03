module.exports = {
  apps : [{
  name: "app",
  script: "./src/server.js",
  instances: 3,
  env: {
  NODE_ENV: "development",
  },
  env_production: {
  NODE_ENV: "production",
  }
  }]
  }
