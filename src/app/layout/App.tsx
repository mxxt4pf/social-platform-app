import { Container } from "semantic-ui-react"
import EventDashBoard from "../../features/events/dashboard/EventDashBoard"
import NavBar from "./nav/NavBar"

function App() {

  return (
    <div>
      <NavBar />
      <Container className="main">
        <EventDashBoard />
      </Container>
      
    </div>
    
  )
}

export default App
