import Link from "next/link"

export default function Article(props) {
  return (
    <article>
      <header>
        <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.75rem', marginBottom: '0.4375rem' }}>
          <Link href={ '/' + props.title.replace(/ /g, '-') }>
            <a style={{ boxShadow: 'none' }} rel="bookmark">
              { props.title }
            </a>
          </Link>
        </h3>
        <small>{ new Date(new Date('2021', 0).getTime() + (props.id - 1) * 24 * 3600 * 1000).toDateString().substring(4).replace(/ (\d{4})$/, ', $1') } • ☕️☕️☕️ 14 min read</small>
      </header>
      <p>{ props.body }</p>
    </article>
  )
}
