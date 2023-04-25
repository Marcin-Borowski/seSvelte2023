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