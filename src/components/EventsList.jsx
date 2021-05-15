import React from "react";

import AddTimeForm from "./AddTimeForm";

export default function EventsList(props) {
  const [displayEvents, setDisplayEvents] = React.useState([]);

  React.useEffect(() => {
    console.log(props.currentUser.heroMissions);

    if (props.currentUser.heroMissions != null) {
      var tempEvents = [];

      for (const idx in props.heroMissions) {
        const anEvent = props.heroMissions[idx];
        // console.log("EVENT: ");
        // console.log(anEvent);
        if (props.currentUser[anEvent.id] != null) {
          tempEvents.push(anEvent);
        }
      }

      //Filter only events that user did compete in
      // tempEvents = tempEvents.filter((event) => {
      //   return event.isRegistered;
      // });
      // console.log("Just set display events: " + tempEvents.length);

      setDisplayEvents(tempEvents);
    }

    // console.log(tempEvents[0]);
  }, [props.heroMissions, props.currentUser]);

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md my-2 p-2">
      {displayEvents.length > 0 ? (
        <ul className="divide-y divide-gray-200">
          {displayEvents.map((mission) => (
            <AddTimeForm {...props} key={mission.id} mission={mission} />
          ))}
        </ul>
      ) : (
        <h4>You are not registered for any events yet.</h4>
      )}
    </div>
  );
}
