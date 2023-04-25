import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const load = async ({params}) => {
  
  const slug = params.slug;
  
  const post = await prisma.post.findFirst({
    where: {
      slug
    }
  })
  
  await prisma.$disconnect()
  
  return {
    post,
  }
}