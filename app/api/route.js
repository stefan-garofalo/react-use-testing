export async function GET(request) {
  await new Promise((resolve) => setTimeout(resolve, 1500))
  return Response.json({ message: 'Hello World' })
}
