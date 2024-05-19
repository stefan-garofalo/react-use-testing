export default async function Footer({ data }) {
  const footer = await data
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="mt-8 text-center">
          <p className="text-base text-gray-500">{footer.content}</p>
        </div>
      </div>
    </footer>
  )
}
