import Head from "next/head"
import { useRouter } from "next/router"
import Modal from "react-modal";
import { useEffect, useState } from "react/cjs/react.development"
import Header from "../components/header";
import Post from "../components/posts"
import User from "../components/userpage";

Modal.setAppElement('#__next');

export default function Home() {
  const router = useRouter();

  const [posts, setPosts] = useState([])
  const [typeFilter, setFilter] = useState('all');
  var filterParam = 'all'
  var urlPosts = "api/feed/"

  useEffect(() => {
    filterParam = new URLSearchParams(window.location.search).get('posts');
    setFilter(filterParam);

    if (filterParam != 'all' && filterParam != 'following') {
      filterParam = 'all';
      setFilter(filterParam);
      router.push({ query: { posts: 'all' } }, undefined, { shallow: true })
    }

    fetch(urlPosts + filterParam)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts)
      })
  }, [])

  function changeFilter(e) {
    var isChecked = e.target.checked;
    var newFilter = isChecked ? 'following' : 'all';


    filterParam = newFilter;
    setFilter(filterParam);

    router.push({ query: { posts: filterParam } }, undefined, { shallow: true })

    fetch(urlPosts + filterParam)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts)
      })
  }

  return (
    <div>
      <Head>
        <title>Posterr</title>
        <meta name="description" content="Like Twi'tah but" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="o-wrapper o-wrapper--xl">

        <h2>Aqui vamos fazer o quadrinho de new Post</h2>

        <div className="_df _aic _jce _fz12">
          <span>All</span>

          <label className="c-switch _mhxxs">
            <input type="checkbox" defaultChecked={typeFilter == 'following'} onChange={changeFilter} />
            <span></span>
          </label>

          <span>Following</span>
        </div>

        <article>
          {
            posts.map(post => {
              return (
                <Post post={post} key={post} />
              )
            })
          }
        </article>
      </main>

      <Modal isOpen={!!router.query.userId} onRequestClose={() => router.push('/homepage')}>
        <User userId={router.query.userId} />
      </Modal>
    </div>
  )
}