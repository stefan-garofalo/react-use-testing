import { use } from 'react'

export default function Header({ data }) {
  const menu = use(data)

  return (
    <header className="flex items-center justify-between flex-wrap">
      <div className="flex items-center flex-shrink-0 sm:text-xl">
        <span className="font-semibold">{menu.title}</span>
      </div>
      <div className="flex-grow flex gap-10">
        {menu.map((item) => (
          <a
            key={item.title}
            href={item.href}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            {item.title}
          </a>
        ))}
      </div>
    </header>
  )
}
