import Image from "next/image";
import { useEffect, useState } from "react/cjs/react.development";
import DateFormated from "../dateFormated";
import Post from "../posts";

import profilePlaceholder from "../../public/favicon.ico"

export default function User({ userId, isModal }) {
  const [userInfo, setUserInfo] = useState({});
  const [profilePic, setProfilePic] = useState(profilePlaceholder);
  const [posts, setPosts] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    fetch("/api/users/" + userId)
      .then((res) => res.json())
      .then((userInfo) => {
        setUserInfo(userInfo)
        setProfilePic(userInfo.profilePic)
        setPosts(userInfo.posts)
        setIsFollowing(userInfo.isFollowing)
      })
  }, [])

  function toggleFollow() {
    setIsFollowing(isFollowing ? false : true)
  }

  return (
    <main className={isModal ? "" : "o-wrapper _mtxs"}>
      <article className="o-layout o-layout--xxs _df _aic">
        <section className="o-layout__item _3/12">
          <Image className="_bdrs50p _cp" src={profilePic} width="100%" height="100%" />
        </section>
        <section className="o-layout__item _9/12 _tac">
          <div className="_df _jcsa _aic">
            <span className="_fw7">{userInfo.userName}</span>
            <button onClick={toggleFollow} className="c-btn--primary c-btn--inverted _bd0 _bdrs4 _fz14 _phxs" style={{paddingTop: '3px', paddingBottom: "3px"}}>
              {isFollowing ? "Following" : "Follow"}
            </button>
          </div>
          <div className="_fz12 _mtxxs">
            <span>In Posterr since </span>
            <DateFormated stringDate={userInfo.dateJoined} />
          </div>
        </section>
      </article>

      <article className="_df _jcsb _tac">
        <section>
          <div>Followers</div>
          <div>{userInfo.numFollowers}</div>
        </section>
        <section>
          <div>Following</div>
          <div>{userInfo.numFollowing}</div>
        </section>
        <section>
          <div>Posts</div>
          <div>{userInfo.numPosts}</div>
        </section>
      </article>

      <article className="_mtxl o-wrapper">
        {
          posts.map((post, index) => {
            return (
              <Post post={post} key={post + index} />
            )
          })
        }
      </article>
    </main >
  )
}