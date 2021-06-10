import React from "react";
import { Container, Menu, Button, Icon } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top" size="large">
        <Container>
          <Menu.Item name="chart pie" size="large">
            <Icon name="chart pie" size="large"/>
              HRMS
            
          </Menu.Item>
          <Menu.Item name="home" />
          <Menu.Item name="Job Postings" />

          <Menu.Menu position="right">
            <Menu.Item>
              <Button.Group>
                <Button>Login</Button>
                <Button.Or />
                <Button positive>Register</Button>
              </Button.Group>
            </Menu.Item>
            <Menu.Item></Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
