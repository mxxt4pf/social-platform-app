import { useAppSelector } from "../../app/store/store"
import ModalWrapper from "../../app/common/modals/modalWrapper";

export default function TestModal() {

    const {data} = useAppSelector(state => state.modals);

  return (
        <ModalWrapper header={'Testing 123'}>
            <div>Test Data is{data}</div>
        </ModalWrapper>
  )
}