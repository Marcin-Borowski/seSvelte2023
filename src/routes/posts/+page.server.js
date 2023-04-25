import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const load = async () => {
  
  const posts = await prisma.post.findMany({
    select: {
      slug: true,
      title: true,
      abstract: true
    },
    where: {
      active: true
    },
    take: 3
  })
  
  await prisma.$disconnect()
  
  return {
    posts,
  }
}