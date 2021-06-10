import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import Sidebar from "./Sidebar";
import Section from "./Section";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <GridColumn width={2}>
          <Sidebar />
        </GridColumn>

        <GridColumn width={14}>
          <Section></Section>
        </GridColumn>
      </Grid>
    </div>
  );
}
