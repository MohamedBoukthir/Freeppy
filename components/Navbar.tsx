import Image from "next/image"
import Container from "./Container"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="sticky top-0 w-full bg-slate-200 z-30 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Link href='/'>
              <Image 
                src='/logo.png' 
                alt="logo" 
                width={74}
                height={29}
              />
            </Link>
            <div className="hidden md:block">search</div>
            <div className="flex items-center gap-8 md:gap-12">
              <div>cart</div>
              <div>user</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar


