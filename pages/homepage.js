import Head from "next/head"
import { useEffect, useState } from "react/cjs/react.development"
import Post from "../components/posts"

export default function Home() {
  const [posts, setPosts] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch("api/feed/all")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!posts) return <p>No posts today =(</p>

  return (
    <div>
      <Head>
        <title>Posterr</title>
        <meta name="description" content="Like Twi'tah but" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="o-wrapper o-wrapper--xl">
        <header>Posterr</header>
        <h2>Aqui vamos fazer o quadrinho de new Post</h2>
        {
          posts.map(post => {
            return (
              <Post post={post} key={Math.random().toString()}/>
            )
          })
        }
      </main>
    </div>
  )
}