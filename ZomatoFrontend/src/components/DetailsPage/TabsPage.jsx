import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../styles/Details.css";

function TabsPage({ mobile, name, address, cuisines, city }) {
  return (
    <div className="p4 mt-10 px-10">
      <Tabs className="w-full" defaultFocus={true} selectedTabClassName="tab">
        <TabList>
          <Tab>
            <h1 className="font-bold">Overview</h1>
          </Tab>
          <Tab>
            <h1 className="font-bold">Contact</h1>
          </Tab>
        </TabList>
        <div>
          <TabPanel>
            <div className="w-full h-[50vh]">
              <h1 className="font-bold tracking-wide text-xl">Special Items</h1>
              <h1 className="font-bold tracking-wide text-xl">Cuisines</h1>
              {cuisines&&cuisines.map((e, i) => {
                return <p key={i}>{e.name}</p>;
              })}
            </div>
          </TabPanel>
          <TabPanel className={"duration-200"}>
            <div className="w-full h-[50vh] py-4">
              <h1 className="font-bold tracking-wide text-xl">Phone Number</h1>
              <h2 className="text-lg font-medium text-red-500">+{mobile}</h2>
              <div className="py-10">
                <h1 className="font-bold tracking-wide text-xl">{name}</h1>
                <p className="text-sm">{address}</p>
                <p className="text-sm">{city}</p>
              </div>
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
}

export default TabsPage;
