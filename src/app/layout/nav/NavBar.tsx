import { NavLink } from "react-router-dom";
import { Button, Container, Menu, MenuItem, Segment } from "semantic-ui-react";
import SignedInMenu from "./SignedInMenu";



export default function NavBar() {
  return (
    <Segment>
    <Menu inverted={true} fixed="top" size="tiny">
        <Container>
            <MenuItem header as={NavLink} to='/' size="tiny">
            <img src="/logo.png" alt="logo"/>
            Events Social App
            </MenuItem>
            <MenuItem name="Events" as={NavLink} to='/events'/>
            <MenuItem>
            <Button 
              as={NavLink}
              to={'/createEvent'}
              floated="right" 
              positive={true} 
              inverted={true} 
              content="Create Event"/>
            </MenuItem>
            <SignedInMenu />
        </Container>
    </Menu>
    </Segment>
  )
}