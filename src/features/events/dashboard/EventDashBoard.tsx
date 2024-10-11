import { Grid } from "semantic-ui-react";
import EventList from "./EventList";

export default function EventDashBoard() {
  return (
    <>
      <Grid>
        <Grid.Column width={8}>
          <EventList  />
        </Grid.Column>
        </Grid>
        <Grid>
        <Grid.Column width={6}>
          <h1>Right Column</h1>
        </Grid.Column>
      </Grid>
    </>
  )
}
