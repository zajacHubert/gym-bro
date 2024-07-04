import { prisma } from "@/lib/prismaClient"

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      include: {
        sports: {
          include: {
            sport: {
              include: {
                level: true,
              },
            },
          },
        },
      },
    })

    return Response.json(users)
  } catch (error) {
    Response.json({ message: 'error' })
  }

  return Response.json({ message: 'ok' }, { status: 500 })
}
