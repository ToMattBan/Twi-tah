import Head from "next/head"
import { useRouter } from "next/router"
import Modal from "react-modal";
import { useEffect, useState } from "react"
import Header from "../components/header";
import NewPostBox from "../components/newPostBox";
import Post from "../components/posts"
import User from "../components/user";

Modal.setAppElement('#__next');

export default function Home() {
  const router = useRouter();

  const [posts, setPosts] = useState([])
  const [typeFilter, setFilter] = useState('all');
  var urlPosts = "api/feed/"
  
  useEffect(() => {
    var filterParam = 'all'
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

    setFilter(newFilter);
    router.push({ query: { posts: newFilter } }, undefined, { shallow: true })

    fetch(urlPosts + newFilter)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts)
      })
  }

  function newPost(post) {
    setPosts([post, ...posts]);
  }

  return (
    <div>
      <Head>
        <title>Twi&apos;tah</title>
        <meta name="description" content="Like Twi'tah but" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="o-wrapper">

        <NewPostBox onNewPost={newPost} />

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
            posts.map((post, index) => {
              return (
                <Post post={post} key={post + index} onNewPost={newPost} />
              )
            })
          }
        </article>
      </main>

      <Modal isOpen={!!router.query.userId} onRequestClose={() => router.push('/homepage')}>
        <User userId={router.query.userId} isModal={true} />
      </Modal>
    </div>
  )
}