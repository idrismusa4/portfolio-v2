export function getScrollProgress(): number {
  const winScroll = window.scrollY
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  return (winScroll / height) * 100
}

