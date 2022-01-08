import Article from '../components/article'

export async function getStaticProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  let posts = await res.json()
  if (!posts) { return { notFound: true } }
  posts = posts.sort((a, b) => b.id - a.id)
  return { props: { posts } }
}

export default function Home(props) {
  return (
    <main>
      { props.posts.map((post) => (
        <Article
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
        />
      )) }
    </main>
  )
}
