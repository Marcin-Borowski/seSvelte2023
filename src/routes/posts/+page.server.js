import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'
import slugify from 'slugify'

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
    // take: 3
  })

  await prisma.$disconnect()

  return {
    posts,
  }
}


/** @type {import('./$types').Actions} */
export const actions = {
  'create': async (event) => {

    const data = await event.request.formData()
    const title = data.get('title')
    const abstract = data.get('abstract')

    // console.log('create:', title, abstract)

    const result = await prisma.post.create({
      data: {
        title,
        slug: slugify(title, {
          lower: true,
          locale: 'pl',
        }),
        abstract,
        body: faker.company.name()
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

    await prisma.$disconnect()

    return { posts }
  },
  'other': async (event) => {

    console.log('other:', event.request)

    return {}
  }
};