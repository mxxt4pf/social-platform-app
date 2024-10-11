import { Button, Container, Menu, MenuItem } from "semantic-ui-react";

export default function NavBar() {
  return (
    <Menu inverted={true} fixed="top" size="tiny">
        <Container>
            <MenuItem header>
            <img src="/logo.png" alt="logo"/>
            Events Social App
            </MenuItem>
            <MenuItem name="Events"/>
            <MenuItem>
            <Button floated="right" positive={true} inverted={true} content="Create Event"/>
            </MenuItem>
            <MenuItem position="right">
            <Button basic inverted content="Login"/>
            <Button basic inverted content="SignUp" style={{marginLeft: "0.4em"}}/>
            </MenuItem>
        </Container>

    </Menu>
  )
}