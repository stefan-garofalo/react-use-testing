export async function POST(request) {
  const body = await request.json();
  await new Promise(resolve => setTimeout(resolve, 1500));
  return Response.json({ message: "Hello World" + JSON.stringify(body) });
}
