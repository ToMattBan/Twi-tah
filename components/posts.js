import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/router";

import repostIcon from "../public/repost.svg"
import quoteIcon from "../public/quote.svg"

function DatePosted({ stringDate, className }) {
  stringDate = new Date(stringDate);
  stringDate = stringDate.toLocaleDateString('en-us', { year: "numeric", month: "long", day: "numeric" })

  return (
    <span className={className}>{stringDate}</span>
  )
}

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
            <DatePosted stringDate={originalTime} />
          </div>
        </div>
      </>
    )
  }
}

export default function Post(props) {
  const router = useRouter();
  const { userName, profilePic, userId, timePosted, typePost, originalPost, originalUser, originalTime, quote } = props.post;

  return (
    <section className="post o-layout _fz14 _mvxs _pvxs _bdlightGray _bdrs4">
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
          <DatePosted stringDate={timePosted} className="_1/1 _db" />
        </div>
      </div>
      <div className="o-layout__item _taj">
        <UserPost typePost={typePost} originalPost={originalPost}
          originalUser={originalUser} originalTime={originalTime} quote={quote} />
      </div>
      <div className="o-layout__item _df _jcsa _mtxs">
        <Image src={repostIcon} width="100%" className="_cp" />
        <Image src={quoteIcon} width="100%" className="_cp" />
      </div>
    </section>
  )
}