import Image from "next/image";
import Link from "next/link";

export default function Header() {
  var userId = 5842369851;

  return (
    <header className="posterrHeader _pot _t0 _bgsecondary _pxs _df _jcsb _z1 _aic _elevation16">
      <Link href={`/homepage/?userId=${userId}`} as={`/userpage/${userId}`}>
        <a className="_tdn"> <div className="_fw7 _fz20 _white">Posterr</div> </a>
      </Link>
      <Image className="_bdrs50p _cp" src="https://randomuser.me/api/portraits/women/35.jpg" width="50%" height="50%" />
    </header>
  )
}