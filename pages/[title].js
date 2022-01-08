import Article from '../components/article'

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const posts = await res.json()
  const paths = posts.map((post) => ({ params: { title: post.title.replace(/ /g, '-') } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const posts = await res.json()
  const post = posts.find((item) => item.title === params.title.replace(/-/g, ' '))
  if (!post) { return { notFound: true } }
  return { props: { post } }
}

export default function Post(props) {
  return (
    <main>
      <Article
        id={props.post.id}
        title={props.post.title}
        body={props.post.body}
      />
    </main>
  )
}
