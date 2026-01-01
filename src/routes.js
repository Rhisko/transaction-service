const { processTransaction } = require("./transaction");

async function routes(fastify) {
  fastify.get("/health", async () => {
    return { status: "ok" };
  });

  fastify.post("/transaction", async (request) => {
    // INTENTIONAL: no input validation
    const { amount } = request.body || {};
    return processTransaction(amount);
  });
}

module.exports = routes;
