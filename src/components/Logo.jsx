function Logo({ className = 'h-9' }) {
  return (
    <>
      <img
        src="/logo-dark.png"
        alt="Inngress Techsolutions LLP"
        className={`${className} w-auto object-contain light:hidden`}
      />
      <img
        src="/logo-light.png"
        alt="Inngress Techsolutions LLP"
        className={`${className} hidden w-auto object-contain light:block`}
      />
    </>
  )
}

export default Logo
