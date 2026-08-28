/**
 * ContactSection
 *
 * Single-column contact info block (the contact form has been removed —
 * this section is intentionally info-only for now).
 */
function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[linear-gradient(135deg,#F0FDF4_0%,#FFFFFF_100%)] px-4 py-12 xs:px-6 xs:py-[60px] md:px-8 md:py-[70px] lg:px-10 lg:py-[90px]"
    >
      <div className="mx-auto max-w-[560px] text-center">
        <div className="fade-up mb-2.5 font-mono text-[10px] font-light uppercase tracking-[0.2em] text-green md:text-[11px]">Get In Touch</div>
        <h2 className="fade-up d1 mb-4 font-serif text-[clamp(20px,5vw,32px)] font-black leading-[1.1] tracking-[-0.03em] xs:text-[clamp(24px,3vw,36px)] md:text-[clamp(32px,4vw,48px)]">
          Let's <em className="italic text-green">build</em> something great together.
        </h2>
        <p className="fade-up d2 mb-2 text-sm leading-[1.8] text-gray">
          Open to full-time roles, freelance projects, and consulting engagements.
          Based in Jakarta — available remotely worldwide.
        </p>

        <div className="fade-up d3 mt-7 flex flex-col items-center gap-5">
          {[
            { icon: '📧', label: 'Email', value: 'haryrnasution@gmail.com' },
            { icon: '📍', label: 'Location', value: 'Jakarta, Indonesia' },
            { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/hary-ramadhana-n' },
          ].map(({ icon, label, value }) => (
            <div key={label} className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-green-lighter text-lg">
                {icon}
              </div>
              <div className="text-left">
                <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-gray-light">
                  {label}
                </div>
                <div className="text-sm font-semibold text-dark">
                  {value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactSection
