export default async function Page({ data }) {
  const page = await data
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {page.title}
        </h2>
        <p className="mt-3 text-xl text-gray-500">{page.content}</p>
      </div>
    </div>
  )
}