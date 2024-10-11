import { Button, Icon, Item, ItemGroup, List, Segment, SegmentGroup } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

export default function EventListItem() {
  return (
    <>
    <SegmentGroup>
        <Segment>
            <ItemGroup>
                <Item>
                    <Item.Image size='tiny' circular src='/user.png' />
                    <Item.Content>
                        <Item.Header>Event Title</Item.Header>
                        <Item.Description>
                            Hosted By Meet
                        </Item.Description>
                    </Item.Content>
                </Item>
            </ItemGroup>
        </Segment>
        <Segment>
            <span>
                <Icon name='clock'/> Date
                <Icon name='marker'/> Venue
            </span>
        </Segment>
        <Segment secondary>
            <List horizontal>
                <EventListAttendee />
                <EventListAttendee />
                <EventListAttendee />
            </List>
        </Segment>
        <Segment clearing>
            <span>Event Description</span>
            <Button color='blue' floated='right' content='view' />
        </Segment>
    </SegmentGroup>
    </>
  )
}