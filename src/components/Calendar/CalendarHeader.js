import dayjs from "dayjs";
import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import GlobalContext from "../../context/GlobalContext";

const CalendarHeader = () => {

  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  }
  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  }
  const handleReset = () => {
    setMonthIndex(
      monthIndex === dayjs().month() ? monthIndex + Math.random() : dayjs().month());
  }
  return (
    <header>
      <img src={logo} alt="calendar"/>
      <h1>
        Calendar
      </h1>
      <button onClick={handleReset}>
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span>
          chevron_left
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span>
          chevron_right
        </span>
      </button>
      <h2>
        {dayjs(new Date(dayjs().year(), monthIndex)).format('YYYY-MM-DD')}
      </h2>
    </header>
  );
}

export default CalendarHeader;