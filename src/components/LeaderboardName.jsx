import React from "react";
import Coin from "../resources/Coin.svg";
import Blank from "../resources/Blank.svg";

export default function LeaderboardName(props) {
  function calculateAge(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  return (
    <div>
      {props.athlete[props.selectedHeroMission.id] !== undefined ? (
        <div className="flex flex-row justify-between text-sm font-medium text-gray-900">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <p className="pr-2 font-semibold">
                {props.athlete.firstName + " " + props.athlete.lastName}
              </p>
              <p className="md:hidden font-semibold">
                {calculateAge(props.athlete.birthDate)}
              </p>
            </div>
            <p className="md:hidden flex flex-row">
              {props.athlete.city + ", " + props.athlete.state}
            </p>
          </div>
          <div className="">
            {props.athlete[props.selectedHeroMission.id].time <=
            props.selectedHeroMission.timeCutoff ? (
              <img src={Coin} alt="" className="h-5" />
            ) : (
              <img src={Blank} alt="" className="h-5" />
            )}
          </div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
