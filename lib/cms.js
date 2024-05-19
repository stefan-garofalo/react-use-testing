export const homepage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500))
  return {
    title: 'Homepage',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  }
}

export const menu = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return [
    {
      title: 'Homepage',
      href: '/',
    },
    {
      title: 'About',
      href: '/about',
    },
  ]
}

export const footer = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return {
    title: 'Footer',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  }
}