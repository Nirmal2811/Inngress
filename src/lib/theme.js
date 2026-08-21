export function isLightMode() {
  return document.documentElement.classList.contains('light')
}

export function setLightMode(isLight) {
  document.documentElement.classList.toggle('light', isLight)
  localStorage.setItem('theme', isLight ? 'light' : 'dark')
}
