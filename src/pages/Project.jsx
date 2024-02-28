import { Navbar,Projects,Container} from "../components"

function Project() {
  return (
    <>
      <Navbar/>
      <Container minHeight="80vh">
        <Projects/>
      </Container>
    </>
  )
}

export default Project