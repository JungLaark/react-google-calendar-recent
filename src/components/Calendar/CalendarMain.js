import React, { useState, useContext, useEffect } from "react";
import getMonth from '../../util/util';
import CalendarHeader from "./CalendarHeader";
import Sidebar from "../Aside/Sidebar";
import Month from "./Month";
import GlobalContext from "../../context/GlobalContext";
import EventModal from "../Modal/EventModal";

const CalendarMain = () => {
    const [currenMonth, setCurrentMonth] = useState(getMonth());
    const { monthIndex, showEventModal } = useContext(GlobalContext);
  
    useEffect(() => {
      setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex]);
  
    return (
      <React.Fragment>
        {showEventModal && <EventModal />}
        <div>
          <CalendarHeader />
          <div>
            <Sidebar />
            <Month month={currenMonth} />
          </div>
        </div>
      </React.Fragment>
    );
};

export default CalendarMain;