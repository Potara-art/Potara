const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

/* ----------  USER  ---------- */
const User = [
  /* Patients */
  { email: "a@test.com", name: "Alice" },
  { email: "jane.doe@test.com", name: "Jane" },
  { email: "bart.joe@test.com", name: "Bart" },
  { email: "johnny.test@example.com", name: "Johnny" },
  { email: "david.duncan@example.com", name: "David" },
  { email: "Larry.foster@example.com", name: "Larry" }
];

async function main() {
  for (const user of User) {
    await prisma.user.create({ data: user });
  }

  console.log("Database seeded successfully!");
}

main().then(() => prisma.$disconnect()).catch(e => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
