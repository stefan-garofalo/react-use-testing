import { cache } from 'react'

export const getData = cache(async (param) => {
  console.log(param)
  const res = await fetch('http://localhost:3000/api/', { method: 'GET' })
  return res.json()
})
