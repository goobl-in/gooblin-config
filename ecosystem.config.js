
module.exports = {
  apps : [{
    name   : "Gooblin-API",
    script : "./index.js",
    cwd    : "/home/ubuntu/gooblin-api", 
    env_production: {
       NODE_ENV: "production"
    },
    env_development: {
       NODE_ENV: "development"
    }
  }]
}

