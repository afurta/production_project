export const useDetectDevice = () => {
  const isMobile = window.matchMedia
  if (!isMobile) return false

  const device = isMobile('(min-width: 420px)')
  return device.matches
}
