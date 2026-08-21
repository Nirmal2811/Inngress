import { motion } from 'framer-motion'

const LOGOS = [
  { src: '/Amazon-Web-Services-Logo.png', darkSrc: '/aws dark.png', name: 'Amazon Web Services' },
  { src: '/Red_Hat_logo_PNG2.png', darkSrc: '/redhat dark.png', name: 'Red Hat', big: true },
  { src: '/Veeam_logo_PNG2.png', name: 'Veeam' },
  { src: '/dell_logo_png.png', name: 'Dell' },
  { src: '/fortinet-logo.png', darkSrc: '/fortinet dark.png', name: 'Fortinet', big: true },
  { src: '/hp_logo_png.png', name: 'HP' },
  { src: '/hpe_logo_png.png', darkSrc: '/hpe dark.png', name: 'HPE', big: true },
  { src: '/lenovo.png', name: 'Lenovo', big: true },
  { src: '/microsoft_PNG7.png', name: 'Microsoft' },
  { src: '/nutanix-logo.png', name: 'Nutanix', xbig: true },
  { src: '/proxmox_par.png', darkSrc: '/proxmox dark.png', name: 'Proxmox' },
  { src: '/sophos_logo_png.png', name: 'Sophos', big: true },
]

function LogoRow() {
  return (
    <div className="flex shrink-0 items-center gap-24 pr-24">
      {LOGOS.map((logo, i) => (
        <div
          key={i}
          className={`flex shrink-0 items-center justify-center ${
            logo.xbig ? 'h-36 sm:h-40' : logo.big ? 'h-28 sm:h-32' : 'h-14 sm:h-16'
          }`}
        >
          {logo.darkSrc ? (
            <>
              <img
                src={logo.darkSrc}
                alt={logo.name}
                className="h-full w-auto object-contain light:hidden"
              />
              <img
                src={logo.src}
                alt={logo.name}
                className="hidden h-full w-auto object-contain light:block"
              />
            </>
          ) : (
            <img
              src={logo.src}
              alt={logo.name}
              className="h-full w-auto object-contain"
            />
          )}
        </div>
      ))}
    </div>
  )
}

function Collaborators() {
  return (
    <section
      id="partners"
      className="relative overflow-hidden bg-charcoal text-white light:bg-paper-dim light:text-ink"
    >

      <div className="mx-auto flex max-w-[1440px] items-center gap-8 px-6 py-10 sm:px-10 lg:gap-14 lg:px-24">
        <h2 className="shrink-0 text-2xl font-extrabold leading-tight sm:text-3xl">
          Our
          <br />
          Partners
        </h2>

        <span className="hidden h-14 w-px shrink-0 bg-white/15 light:bg-ink/10 sm:block" />

        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <motion.div
            className="flex w-max items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 26, ease: 'linear', repeat: Infinity }}
          >
            <LogoRow />
            <LogoRow />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Collaborators
