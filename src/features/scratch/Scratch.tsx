import { useAppSelector } from "../../app/store/store"

export default function Scratch() {
    const {data} =  useAppSelector(state => state.test)
  return (
    <div>
        <h1>Scratch Page</h1>
        <h3>The data is: {data}</h3>
    </div>
  )
}