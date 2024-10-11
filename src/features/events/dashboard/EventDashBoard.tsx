import { Grid, Segment } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "./forms/EventForm";
import { sampleData } from "../../../app/api/sampleData";

export default function EventDashBoard() {
  return (
    <Segment>
      <Grid>
        <Grid.Column width={10}>
          <EventList events={sampleData}/>
        </Grid.Column>
        <Grid.Column width={6}>
          <EventForm />
        </Grid.Column>
      </Grid>
    </Segment>
  )
}
