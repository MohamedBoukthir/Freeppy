import Container from "@/components/Container"
import FormWrap from "@/components/FormWrap"
import LoginForm from "./LoginForm"

const page = () => {
  return (
    <Container>
        <FormWrap>
            <LoginForm/>
        </FormWrap>
    </Container>
  )
}

export default page