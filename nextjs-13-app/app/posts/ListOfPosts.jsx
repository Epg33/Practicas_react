import Link from 'next/link'
import LikeButton from './LikeButton'

const fetchPosts = () => {
  console.log('Fetching Posts!!!!!')
  console.log('F*ck Yeah')

  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

export default async function ListOfPosts () {
  const posts = await fetchPosts()

  return (
    <>
      {posts.slice(0, 5).map(post => {
        return (
          <article key={post.id}>
            <Link href='/posts/[id]' as={`/posts/${post.id}`}>
              <h2 style={{ color: '#09f' }}>{post.title}</h2>
              <p>{post.body}</p>
              <LikeButton id={post.id} />
            </Link>
          </article>
        )
      })}
    </>
  )
}
