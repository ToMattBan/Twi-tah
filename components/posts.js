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

export default function Post(props) {
  const { userName, profilePic, userId, timePosted, typePost, originalPost, quote } = props.post;

  return (
    <div className="post o-layout _fz14 _mvxs _pvxs _bdlightGray _bdrs4">
      <div className="o-layout__item _por _df _aic">
        <span className="_3/12">
          <Image src={profilePic} className="_bdrs50p" width="100%" height="100%" alt={`${userName} avatar`} />
        </span>
        <div className="_mlxs">
          <span className="_mrxxs _fw7">{userName}</span>

          <DatePosted stringDate={timePosted} className="_1/1 _db"/>
        </div>
      </div>
      <div className="o-layout__item _taj">
        <div className="_dn">
          <span className="_mrxxs _fw7">{userName}</span>
          <DatePosted stringDate={timePosted} />
        </div>
        <div>{originalPost}</div>
      </div>
      <div className="o-layout__item _df _jcsa _mtxs">
        <Image src={repostIcon} width="100%" className="_cps"/>
        <Image src={quoteIcon} width="100%" className="_cps"/>
      </div>
    </div>
  )
}