import { MenuItem, Button } from "semantic-ui-react";

export default function SignedOutButtons() {
  return (
    <MenuItem position="right">
        <Button basic inverted content="Login"/>
        <Button basic inverted content="SignUp" style={{marginLeft: "0.4em"}}/>
    </MenuItem>
  )
}