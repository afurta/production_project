export const useDetectDevice = () => {
  const isMobile = window.matchMedia
  if (!isMobile) return false

  const device = isMobile('(min-width: 768px)')
  return device.matches
}
