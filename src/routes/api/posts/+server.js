import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export const GET = () => {

  const json = {
    hello: "world"
  }

  return new Response(JSON.stringify(json))
}


export const POST = async () => {
  
  const result = await prisma.post.create({

  })

  return new Response(JSON.stringify(result))
}
 

export const DELETE = async (event) => {
  const data = await event.request.json();
  const slug = data.slug;

  const result = await prisma.post.deleteMany({
    where: {
      slug
    }
  })

  const posts = await prisma.post.findMany({
    select: {
      slug: true,
      title: true,
      abstract: true
    },
    where: {
      active: true
    },
  })

  return new Response(JSON.stringify({ success: true, posts }))
}