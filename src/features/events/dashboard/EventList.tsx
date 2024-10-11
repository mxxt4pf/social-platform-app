/* eslint-disable @typescript-eslint/no-explicit-any */
import EventListItem from "./EventListItem";

export default function EventList(props: any) {
  return (
    <>
    {props.events.map((event: any) => (
        <EventListItem event={event}/>
    ))}
    
    </>
  )
}