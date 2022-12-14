import Link from 'next/link'

const fetchSinglePost = (id) => {
  
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

export default async function Post ({ params }) {
  const { id } = params
  const post = await fetchSinglePost(id)

  return <article>
    <h1>{post.title}</h1>
    <h1>{post.body}</h1>
    <Link href={`/posts/${id}/comments`}>Ver Comentarios</Link>
  </article>
}

