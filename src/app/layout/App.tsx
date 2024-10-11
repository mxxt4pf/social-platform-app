import { Container } from "semantic-ui-react"
import EventDashBoard from "../../features/events/dashboard/EventDashBoard"
import NavBar from "./nav/NavBar"
import { useState } from "react"

function App() {
  const[formOpen, setFormOpen] = useState(false);

  return (
    <div>
      <NavBar setFormOpen={setFormOpen}/>
      <Container className="main">
        <EventDashBoard formOpen={formOpen} setFormOpen={setFormOpen}/>
      </Container>
      
    </div>
    
  )
}

export default App
