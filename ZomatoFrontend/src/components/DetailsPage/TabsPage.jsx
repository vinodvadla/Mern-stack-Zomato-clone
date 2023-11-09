import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function TabsPage() {
  return (
    <div className="p4 mt-10">
      <Tabs className={"px-10"}>
        <TabList>
          <Tab color="red">title 1</Tab>
          <Tab>title 2</Tab>
        </TabList>
        <TabPanel>
          <h1>first </h1>
        </TabPanel>
        <TabPanel>
          <h1>second</h1>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default TabsPage;
