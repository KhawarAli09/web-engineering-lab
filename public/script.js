function greet(name) {
  return `Hello, ${name}!`;
}

if (typeof document !== "undefined") {
  document.getElementById("greeting").textContent = greet("Khawar");
}

if (typeof module !== "undefined") {
  module.exports = { greet };
}
