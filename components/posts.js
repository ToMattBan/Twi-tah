import Image from "next/image"
import Link from "next/link";
import DateFormated from "./dateFormated";
import ReactionBox from "./reactionBox";

function UserPost({ typePost, originalPost, originalUser, originalTime, quote }) {
  if (typePost == 1)
    return (<> {originalPost} </>)
  else {
    return (
      <>
        <div className="_mvxs">{typePost == 2 ? '' : quote}</div>
        <div className="_bdlightGray _bdrs4 _pxxs">
          <div> {originalPost} </div>

          <div className="_fz12 _mtxxs">
            <div>Originally posted by <span className="_cp">{originalUser}</span></div>
            <DateFormated stringDate={originalTime} />
          </div>
        </div>
      </>
    )
  }
}

export default function Post(props) {
  const { userName, profilePic, userId, timePosted, typePost, originalPost, originalUser, originalTime, quote } = props.post;

  return (
    <section className="post o-layout _m0 _fz14 _mvxs _pvxs _bdlightGray _bdrs4">
      <div className="o-layout__item _por _df _aic">
        <span className="_3/12">
          <Link href={`/homepage/?userId=${userId}`} as={`/userpage/${userId}`}>
            <a>
              <Image src={profilePic} className="_bdrs50p _cp" width="100%" height="100%" alt={`${userName} avatar`} />
            </a>
          </Link>
        </span>
        <div className="_mlxs">
          <span className="_mrxxs _fw7 _cp">{userName}</span>
          <DateFormated stringDate={timePosted} className="_1/1 _db" />
        </div>
      </div>
      <div className="o-layout__item _taj">
        <UserPost typePost={typePost} originalPost={originalPost}
          originalUser={originalUser} originalTime={originalTime} quote={quote} />
      </div>
      <ReactionBox originalPost={originalPost} originalUser={originalUser} originalTime={originalTime} />
    </section>
  )
}