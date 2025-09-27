const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

/* ----------  USER  ---------- */
const User = [
  /* Patients */
  { email: "a@test.com", name: "Alice", auth0_id: "auth0|test-alice" },
  { email: "jane.doe@test.com", name: "Jane", auth0_id: "auth0|test-jane" },
  { email: "bart.joe@test.com", name: "Bart", auth0_id: "auth0|test-bart" },
  { email: "johnny.test@example.com", name: "Johnny", auth0_id: "auth0|test-johnny" },
  { email: "david.duncan@example.com", name: "David", auth0_id: "auth0|test-david" },
  { email: "Larry.foster@example.com", name: "Larry", auth0_id: "auth0|test-larry" }
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