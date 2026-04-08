type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
}

function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="page-hero">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="hero-copy">{description}</p>
    </section>
  )
}

export default PageHero
