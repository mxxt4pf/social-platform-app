//import { ChangeEvent, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { useAppSelector } from "../../../../app/store/store";
//import { createId } from "@paralleldrive/cuid2";
//import { createEvent, updateEvent } from "../eventSlice";
import { FieldValues, useForm } from "react-hook-form";


export default function EventForm() {
    const { register, handleSubmit } = useForm();
    const {id} = useParams();
    const event = useAppSelector(state => state.events.events.find(e => e.id === id));
    //const dispatch = useAppDispatch();
   // const navigate = useNavigate();

    function onSubmit(data: FieldValues) {
        console.log(data);
        // id = id ?? createId();
        // if(event) { 
        //     dispatch(updateEvent({...event, ...values}))
        // } else {
        //     dispatch(createEvent({...values, id: createId(), hostedBy:'Meet', attendees: [], hostPhotoURL: ''}));
        // }
        //     navigate(`/events/${id}`);
    }

  return (
    <Segment clearning>
        <Header content={event ? 'Update Event' : 'Create Event'}/>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Input
                placeholder='Event title' 
                defaultValue={event?.title || ''}
                {...register('title')}
            />
        
            <Form.Input
                placeholder='Category' 
                defaultValue={event?.category || ''}
                {...register('category')}
            />
            
            <Form.Input
                placeholder='Description' 
                defaultValue={event?.description || ''}
                {...register('description')}
            />
            
            <Form.Input
                placeholder='City' 
                defaultValue={event?.city || ''}
                {...register('city')}
            />
            
            <Form.Input
                placeholder='Venue' 
                defaultValue={event?.venue || ''}
                {...register('venue')}
            />
            
            <Form.Input
                type='date'
                placeholder='Date' 
                defaultValue={event?.date || ''}
                {...register('date')}
            />
            
            <Button type="submit" floated="right" positive content="Submit" size="tiny" />
            <Button as={Link} to='/events' type="button" floated="right" positive content="Cancel" size="tiny" />
        </Form>
    </Segment>
  )
}

