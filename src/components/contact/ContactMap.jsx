const ADDRESS =
  'No.64, Periya Subbannan Street, KK Pudur, Saibaba-colony, Coimbatore-641038'

function ContactMap() {
  return (
    <section className="relative overflow-hidden bg-ink light:bg-paper">

      <iframe
        title="Office location map"
        src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
        className="h-[420px] w-full grayscale-[0.3] contrast-[1.05]"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  )
}

export default ContactMap
