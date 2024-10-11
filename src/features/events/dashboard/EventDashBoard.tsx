import { Grid, Segment } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "./forms/EventForm";
import { sampleData } from "../../../app/api/sampleData";
import { useEffect, useState } from "react";
import { AppEvent } from "../../../app/types/event";

type Props = {
  formOpen: boolean
  setFormOpen: (value: boolean) => void
}

export default function EventDashBoard({formOpen, setFormOpen}: Props) {
  const [events, setEvents] = useState<AppEvent[]>([])

  useEffect(() => {
    setEvents(sampleData);
  }, [])

  function addEvent(event: AppEvent) {
    setEvents(prevState => {
      return [...prevState, event]
    })
  }

  return (
      <Segment>
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events}/>
        </Grid.Column>
        
        <Grid.Column width={6}>
          {formOpen && 
          <EventForm setFormOpen = {setFormOpen} addEvent={addEvent}/>}
        </Grid.Column>
      </Grid>
      </Segment>
    
  )
}
