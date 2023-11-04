import Container from "@/components/Container"
import FormWrap from "@/components/FormWrap"
import RegisterForm from "./RegisterForm"

const page = () => {
  return (
    <Container>
        <FormWrap>
            <RegisterForm/> 
        </FormWrap>
    </Container>
  )
}

export default page