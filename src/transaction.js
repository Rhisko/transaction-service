// INTENTIONAL VULNERABILITY: eval usage
function processTransaction(amount) {
  const total = eval(amount);
  return { status: "success", amount: total };
}

module.exports = { processTransaction };
