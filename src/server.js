const Fastify = require("fastify");
const routes = require("./routes");
const { DEBUG } = require("./config");

const app = Fastify({
  logger: DEBUG // INTENTIONAL: debug logging enabled
});

app.register(routes);

// INTENTIONAL: HTTP only (no TLS)
app.listen({ port: 3000, host: "0.0.0.0" }, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
