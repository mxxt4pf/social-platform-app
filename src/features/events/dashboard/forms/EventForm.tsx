import { Button, Form, Header, Segment } from "semantic-ui-react";

export default function EventForm() {
  return (
    <Segment>
        <Header content="Create Event" />
        <Form>
            <Form.Field>
                <input type="text" placeholder='Event title' />
            </Form.Field>
            <Form.Field>
                <input type="text" placeholder='Category' />
            </Form.Field>
            <Form.Field>
                <input type="text" placeholder='Description' />
            </Form.Field>
            <Form.Field>
                <input type="text" placeholder='City' />
            </Form.Field>
            <Form.Field>
                <input type="text" placeholder='Venue' />
            </Form.Field>
            <Form.Field>
                <input type="text" placeholder='Date' />
            </Form.Field>
            <Button type="submit" floated="right" positive content="Submit" size="tiny" />
            <Button type="button" floated="right" positive content="Cancel" size="tiny" />
        </Form>
    </Segment>
  )
}