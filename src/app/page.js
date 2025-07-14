import Link from "next/link";

export default function Home() {
  return (
    <>
    
          <Link href={'/packages'}><h1>packages
    </h1></Link>

              <Link href={'/packageDetails'}><h1>packageDetails
    </h1></Link>



    </>
  );
}
