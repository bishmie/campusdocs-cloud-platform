module.exports = {
  apps: [
    {
      name: "config-server",
      script: "./config-server/target/config-server-0.0.1-SNAPSHOT.jar",
      interpreter: "java",
      interpreter_args: "-jar -Xms256m -Xmx512m",
      log_file: "./logs/config-server.log",
      autorestart: true
    },
    {
      name: "eureka-server",
      script: "./eureka-server/target/eureka-server-0.0.1-SNAPSHOT.jar",
      interpreter: "java",
      interpreter_args: "-jar -Xms256m -Xmx512m",
      log_file: "./logs/eureka-server.log",
      autorestart: true,
      wait_ready: true,
      listen_timeout: 10000
    },
    {
      name: "api-gateway",
      script: "./api-gateway/target/api-gateway-0.0.1-SNAPSHOT.jar",
      interpreter: "java",
      interpreter_args: "-jar -Xms256m -Xmx512m",
      log_file: "./logs/api-gateway.log",
      autorestart: true,
      wait_ready: true,
      listen_timeout: 15000
    }
  ]
};