const server = require("./api/server");

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
