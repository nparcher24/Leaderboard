import React from "react";
import { format } from "date-fns";

function fancyTimeFormat(duration) {
  // Hours, minutes and seconds
  var hrs = ~~(duration / 3600);
  var mins = ~~((duration % 3600) / 60);
  var secs = ~~duration % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  var ret = "";

  if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }

  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;
  return ret;
}

function validateHhMm(inputField) {
  var isValid = /^([0-9][0-9]):([0-5][0-9])$/.test(inputField);
  return isValid;
}

function hmsToSecondsOnly(str) {
  var p = str.split(":"),
    s = 0,
    m = 1;

  while (p.length > 0) {
    s += m * parseInt(p.pop(), 10);
    m *= 60;
  }

  return s;
}

export default function AddTimeForm(props) {
  const [timeFormatError, setTimeFormatError] = React.useState();
  const [timeValue, setTimeValue] = React.useState();

  function submitTime() {
    //Turn the string into minutes and seconds
    if (props.currentUser[props.mission.id].time !== timeValue) {
      var updateObject = {};
      updateObject[props.mission.id] = {
        time: timeValue,
        isRegistered: true,
        division: props.currentUser[props.mission.id].division,
      };
      props.db
        .collection("athletes")
        .doc(props.currentUser.id)
        .update(updateObject)
        .then(() => {
          console.log("Updated the time to: " + timeValue);
        })
        .catch((error) => {
          console.error("Error updating document: ", error);
        });
    } else {
      // console.log("same");
    }

    // console.log(typeof timeValue);
  }

  return (
    <li key={props.mission.id} className="py-4 flex">
      {console.log(props.mission)}
      <img
        className="h-10 w-10 rounded-full object-cover my-auto"
        src={props.mission.thumbnailURL}
        alt=""
      />
      <div className="ml-3 my-auto">
        <p className="text-sm font-medium text-gray-900">
          {props.mission.name}
        </p>
        <p className="text-sm text-gray-500">
          {format(props.mission.date, "MM/dd/yyyy")}
        </p>
        <p className="text-sm text-gray-500">
          {props.currentUser[props.mission.id].division}
        </p>
      </div>
      <div className="my-auto ml-auto">
        {/* {props.mission.time != null ? ( */}
        <div className="ml-auto w-32">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            {props.mission.time == null ? "Add time" : "Time"}
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <div className="relative flex items-stretch flex-grow focus-within:z-10">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" />
              <input
                type="text"
                // pattern="[0-9]*"
                name="time"
                id="time"
                className="focus:ring-primary focus:border-primary block w-full rounded-none rounded-l-md pl-2 sm:text-sm border-gray-300"
                placeholder={
                  props.currentUser[props.mission.id].time == null
                    ? "MM:SS"
                    : fancyTimeFormat(props.currentUser[props.mission.id].time)
                }
                onChange={(event) => {
                  const newValue = event.target.value;
                  if (validateHhMm(newValue)) {
                    setTimeFormatError(null);
                    const seconds = hmsToSecondsOnly(newValue);
                    setTimeValue(seconds);
                  } else {
                    setTimeFormatError("Incorrect Format");
                  }
                }}
              />
            </div>

            <button
              type="button"
              disabled={timeFormatError == null ? false : true}
              className="-ml-px relative inline-flex items-center space-x-2 px-2 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              onClick={() => {
                //Submit the time to the db
                submitTime();
              }}
            >
              <span>
                {props.currentUser[props.mission.id].time == null
                  ? "Add"
                  : "Update"}
              </span>
            </button>
          </div>
          {timeFormatError ? (
            <div className="text-red-500 text-sm">{timeFormatError}</div>
          ) : null}
        </div>
        <div />
      </div>
    </li>
  );
}
