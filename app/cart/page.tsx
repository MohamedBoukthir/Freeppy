import Container from "@/components/Container"
import CartClient from "./CartClient"

const page = () => {
  return (
    <div className="pt-8">
      <Container>
        <CartClient/>
      </Container>
    </div>
  )
}

export default page