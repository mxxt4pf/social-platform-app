/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Icon, Item, ItemGroup, List, Segment, SegmentGroup } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

export default function EventListItem({event}: any) {
  return (
    <>
    <SegmentGroup>
        <Segment>
            <ItemGroup>
                <Item>
                    <Item.Image size='tiny' circular src={event.hostPhotoURL} />
                    <Item.Content>
                        <Item.Header>{event.title}</Item.Header>
                        <Item.Description>
                            Hosted By {event.hostedBy}
                        </Item.Description>
                    </Item.Content>
                </Item>
            </ItemGroup>
        </Segment>
        <Segment>
            <span>
                <Icon name='clock'/> {event.date}
                <Icon name='marker'/> {event.venue}
            </span>
        </Segment>
        <Segment secondary>
            <List horizontal>
                {event.attendees.map((attendee: any) => (
                    <EventListAttendee attendee={attendee}/>
                ))}
            </List>
        </Segment>
        <Segment clearing>
            <span>{event.description}</span>
            <Button color='blue' floated='right' content='view' />
        </Segment>
    </SegmentGroup>
    </>
  )
}