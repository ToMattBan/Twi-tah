import { useRouter } from "next/router"
import Header from "../../components/header";
import User from "../../components/userpage";

export default function Userpage() {
  const router = useRouter();
  const { userId } = router.query;

  return (
    <>
      <Header />
      <User userId={userId} />
    </>
  )
}