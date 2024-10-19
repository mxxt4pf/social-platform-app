import { Button } from "semantic-ui-react"
import { useAppDispatch, useAppSelector } from "../../app/store/store"
import { decrement, increment, incrementByAmount } from "./testSlice";
import { openModal } from "../../app/common/modals/modalSlice";

export default function Scratch() {
    const {data} =  useAppSelector((state) => state.test);
    const dispatch = useAppDispatch();
  return (
    <div>
        <h1>Scratch Page</h1>
        <h3>The data is: {data}</h3>
        <Button onClick={() => dispatch(increment())} color="green" content="Increment" />
        <Button onClick={() => dispatch(decrement())} color="red" content="Decrement" />
        <Button onClick={() => dispatch(incrementByAmount(5))} color="blue" content="Increment By Amount" />
        <Button onClick={() => 
          dispatch(openModal({type: 'TestModal', data: data}))} color="blue" content="Open Modal" />
    </div>
  )
}