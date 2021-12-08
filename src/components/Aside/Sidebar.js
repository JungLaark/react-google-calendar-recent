import React from "react";
import CreateEventButton from "../Button/CreateEventButton";
import SmallCalendar from "../Calendar/SmallCalendar";
import Labels from "./Labels";

const Sidebar = () => {
  return (
    <aside>
      <CreateEventButton />
      <SmallCalendar />
      <Labels />
    </aside>
  );
}

export default Sidebar;
