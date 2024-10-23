import { Grid } from "semantic-ui-react";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedChat from "./EventDetailedChat";
import EventDetailedSidebar from "./EventDetailedSidebar";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../app/store/store";
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../../app/config/firebase";
import { actions } from "../eventSlice";
import { toast } from "react-toastify";
import LoadingComponent from "../../../../app/layout/LoadingComponent";

export default function EventDetailsPage() {
  const {id} = useParams();
  const event = useAppSelector(state => state.events.data.find(e => e.id === id));
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(!id) return;
    const unsubscribe = onSnapshot(doc(db, 'events', id), {
      next: doc => {
        dispatch(actions.success({id: doc.id, ...doc.data()} as any))
        setLoading(false);
      },
      error: err => {
        console.log(err);
        toast.error(err.message);
        setLoading(false);
      }
    })
    return () => unsubscribe()
  }, [id, dispatch]);

  if(loading) return <LoadingComponent />

  if(!event) return <h2>Event not found</h2>

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event} />
        <EventDetailedInfo event={event} />
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar />
      </Grid.Column>
    </Grid>
  )
}