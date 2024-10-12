import { Container } from "semantic-ui-react"
import EventDashBoard from "../../features/events/dashboard/EventDashBoard"
import NavBar from "./nav/NavBar"
import { useState } from "react"
import { AppEvent } from "../types/event";

function App() {
  const[formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<AppEvent | null>(null);

function handleSelectEvent(event: AppEvent | null) {
  setSelectedEvent(event);
  setFormOpen(true);
}

function handleCreateFormOpen() {
  setSelectedEvent(null);
  setFormOpen(true); 
}

  return (
    <div>
      <NavBar setFormOpen={handleCreateFormOpen}/>
      <Container className="main">
        <EventDashBoard 
        formOpen={formOpen} 
        setFormOpen={setFormOpen}
        selectedEvent={selectedEvent}
        selectEvent={handleSelectEvent}
      />
      </Container>
      
    </div>
    
  )
}

export default App
