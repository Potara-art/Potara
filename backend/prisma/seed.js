const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

/* ----------  USER  ---------- */
const User = [
  /* Patients */
  { email: "a@test.com", username: "Alice", password_hash: "123r"},
  { email: "jane.doe@test.com", username: "Jane", password_hash: "lol"  },
  { email: "bart.joe@test.com", username: "Bart", password_hash: "ahi" },
  { email: "johnny.test@example.com", username: "Johnny", password_hash: "whadtup" },
  { email: "david.duncan@example.com", username: "David", password_hash: "AAAA" },
  { email: "Larry.foster@example.com", username: "Larry", password_hash: "whatsdfasdf" }
];

async function main() {
  console.log("Seeding database...");
  for (const user of User) {
    await prisma.user.create({ data: user });
  }

  console.log("Database seeded successfully!");
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });