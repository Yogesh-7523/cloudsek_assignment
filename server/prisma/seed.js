import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function seed() {
  await prisma.post.deleteMany()
  await prisma.user.deleteMany()
  const rahul = await prisma.user.create({ data: { name: "rahul" } })
  const kavita = await prisma.user.create({ data: { name: "kavita" } })
  

  const post1 = await prisma.post.create({
    data: {
      body: "CloudSEK’s SVigil identified a security lapse in a Life Insurance Mobile Application, revealing a vulnerability that could allow unauthorized access to sensitive user data. The issue stems from a hardcoded IP address in the app, which exposes real-time user activity, transaction details, and personally identifiable information, creating a potential risk of exploitation by malicious attackers.",
      title: "Post 1",
    },
  })
  const post2 = await prisma.post.create({
    data: {
      body: "In 2023, CloudSEK found a loophole in India’s banking system exploited by Chinese cybercriminals. They orchestrated a large-scale money laundering scheme using numerous compromised “money mule” accounts to funnel illicit funds through fraudulent payment channels, ultimately transferring them back to China.",
      title: "Post 2",
    },
  })

  

  const comment1 = await prisma.comment.create({
    data: {
      message: "I am a root comment",
      userId: rahul.id,
      postId: post1.id,
    },
  })

  const comment2 = await prisma.comment.create({
    data: {
      parentId: comment1.id,
      message: "I am a nested comment",
      userId: kavita.id,
      postId: post1.id,
    },
  })
  const comment3 = await prisma.comment.create({
    data: {
      message: "I am  root comment",
      userId: kavita.id,
      postId: post1.id,
    },
  })




}

seed()
