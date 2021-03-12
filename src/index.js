const messages = ["Diego", "Ana", "Nico", "Percy", "Laura", "Piper", "Leo", "Reyna", "Jason", "Annabeth", "Frank", "Hazel"];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];

  console.log(message);
};

module.exports = { randomMsg };
