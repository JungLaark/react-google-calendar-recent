import React, { useContext, useState } from "react";
import GlobalContext from "../../context/GlobalContext";

const labelsClasses = [
  "indigo",
  "gray",
  "green",
  "blue",
  "red",
  "purple",
];

const EventModal = () => {

  const {
    setShowEventModal,
    daySelected,
    dispatchCalEvent,
    selectedEvent,
  } = useContext(GlobalContext);

  const [title, setTitle] = useState(
    selectedEvent ? selectedEvent.title : ""
  );
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }

    setShowEventModal(false);
  }
  return (
    <div>
      <form>
        <header>
          <span>
            drag_handle
          </span>
          <div>
            {selectedEvent && (
              <span
                onClick={() => {
                  dispatchCalEvent({
                    type: "delete",
                    payload: selectedEvent,
                  });
                  setShowEventModal(false);
                }}>
                delete
              </span>
            )}
            <button onClick={() => setShowEventModal(false)}>
              <span>
                close
              </span>
            </button>
          </div>
        </header>
        <div>
          <div>
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}/>
            <span>
              schedule
            </span>
            <p>{daySelected.format('YYYY-MM-DD')}</p>
            <span>
              segment
            </span>
            <input
              type="text"
              name="description"
              placeholder="내용을 입력해주세요."
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            />
            <span>
              bookmark_border
            </span>
            <div>
              {labelsClasses.map((lblClass, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedLabel(lblClass)}
                  className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}>
                  {selectedLabel === lblClass && (
                    <span>
                      check
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer>
          <button
            type="submit"
            onClick={handleSubmit}>
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}

export default EventModal;