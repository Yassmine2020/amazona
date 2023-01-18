import data from '../../utils/data';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function handler() {
  // ... you will write your Prisma Client queries here
  await prisma.user.deleteMany();
  // await prisma.user.insertMany(data.users);
  console.log({ message: 'seeded successfully' });
}

handler()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
