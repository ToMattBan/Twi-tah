import Image from "next/image"
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
        {typePost == 2 ? '' : quote}
        <div className="_bdlightGray _bdrs4 _mtxxs _pxxs">
          <div> {originalPost} </div>

          <div className="_fz12 _mtxxs">
            <div>Originally posted by {originalUser}</div>
            <DatePosted stringDate={originalTime} />
          </div>
        </div>
      </>
    )
  }
}

export default function Post(props) {
  const { userName, profilePic, userId, timePosted, typePost, originalPost, originalUser, originalTime, quote } = props.post;

  return (
    <section className="post o-layout _fz14 _mvxs _pvxs _bdlightGray _bdrs4">
      <div className="o-layout__item _por _df _aic">
        <span className="_3/12">
          <Image src={profilePic} className="_bdrs50p" width="100%" height="100%" alt={`${userName} avatar`} />
        </span>
        <div className="_mlxs">
          <span className="_mrxxs _fw7">{userName}</span>
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