import React from "react";
import { Menu, Icon } from "semantic-ui-react";

export default function Sidebar() {
  return (
    <div>
      <Menu inverted icon = "labeled" vertical>
        <Menu.Item name="search">
          <Icon name="search" />
          Candidates
        </Menu.Item>
        <Menu.Item name="list layout">
          <Icon name="list layout" />
          Job Titles
        </Menu.Item>
        <Menu.Item name="users">
          <Icon name="users" />
          Employers
        </Menu.Item>
      </Menu>
    </div>
  );
}
