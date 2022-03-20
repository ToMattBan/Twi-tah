import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react/cjs/react.development"
import Post from "../components/posts"

export default function Home() {
  const router = useRouter();

  const [posts, setPosts] = useState([])
  const [isLoading, setLoading] = useState(false)
  var urlPosts = "api/feed/"

  useEffect(() => {
    var filterParam = new URLSearchParams(window.location.search);
        filterParam = filterParam.get('posts');
    
    if (filterParam != 'all' && filterParam != 'following') {
      filterParam = 'all';

      router.push({
        query: { posts: 'all' }
      }, 
      undefined, { shallow: true }
      )
    } 

    console.log(urlPosts + filterParam)

    setLoading(true)
    fetch(urlPosts + filterParam)
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
        <h2>Aqui vamos fazer o quadrinho de new Post</h2>
        {
          posts.map(post => {
            return (
              <Post post={post} key={Math.random().toString()} />
            )
          })
        }
      </main>
    </div>
  )
}