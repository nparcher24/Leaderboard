import React, { useEffect, useState } from "react";
import DropDown from "../components/DropDown";
import LeaderboardName from "../components/LeaderboardName";
import firebase from "firebase/app";

function calculateAge(dob) {
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

export default function Scoreboard(props) {
  const firebaseApp = firebase.app();
  const db = firebaseApp.firestore();
  const [athletes, setAthletes] = useState([]);
  const sexes = [{ name: "Male" }, { name: "Female" }];
  const [selectedSex, setSelectedSex] = useState({ name: "Male" });
  const divisions = [
    { name: "Recruit" },
    { name: "Sergeant" },
    { name: "Master Chief" },
    { name: "Adaptive" },
  ];
  const [selectedDivision, setSelectedDivisions] = useState({
    name: "Master Chief",
  });

  useEffect(() => {
    if (props.selectedHeroMission != null) {
      const searchString = `${props.selectedHeroMission.id}.time`;
      const searchStringDiv = `${props.selectedHeroMission.id}.division`;

      console.log(searchStringDiv);
      const athletesObserver = db
        .collection("athletes")
        .where(searchString, ">", 0)
        .where(searchStringDiv, "==", selectedDivision.name)
        .where("sex", "==", selectedSex.name)
        .orderBy(searchString, "asc")
        .onSnapshot((querySnapshot) => {
          var newAthletes = [];
          querySnapshot.forEach((doc) => {
            console.log("Doc data: ", doc.data());
            var newAthlete = createScoreboardAthlete(doc);

            newAthlete.time = fancyTimeFormat(
              doc.data()[props.selectedHeroMission.id].time
            );
            // Get the index of the old object
            let match = newAthletes.find((ath) => {
              return ath.id === newAthlete.id;
            });

            if (match !== undefined) {
              newAthletes = athletes.map((athlete) => {
                return athlete.id === newAthlete.id ? newAthlete : athlete;
              });
            } else {
              newAthletes = [...newAthletes, newAthlete];
              // console.log(athletes);
            }
          });
          // newAthletes.sort((a, b) => (a.time < b.time ? 1 : -1));
          setAthletes(newAthletes);
        });

      return () => athletesObserver();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.selectedHeroMission, selectedSex, selectedDivision]);

  function createScoreboardAthlete(doc) {
    return {
      ...doc.data(),
      birthDate: doc.data().birthDate ? doc.data().birthDate.toDate() : null,
      id: doc.id,
    };
  }

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

  return (
    <div>
      <div className="flex flex-col mt-5">
        <div className="z-10 mb-8 px-6 md:px-14 md:flex md:flex-row md:justify-between items-center space-y-4">
          <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Hero Missions Leaderboard
          </h1>
          <div className="space-x-3">
            <button
              type="button"
              className="inline-flex items-center px-10 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primaryGreen hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => {
                if (!props.isSignedIn) {
                  props.setDisplaySignIn(true);
                } else {
                  props.setShowAccount(true);
                }
              }}
            >
              Submit Score
              {/* <MailIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" /> */}
            </button>

            {props.isSignedIn ? (
              <button
                type="button"
                className="inline-flex items-center px-10 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-secondaryTan hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => {
                  props.auth.signOut().then(
                    function () {
                      console.log("Signed Out");
                    },
                    function (error) {
                      console.error("Sign Out Error", error);
                    }
                  );
                }}
              >
                Logout
              </button>
            ) : (
              <div />
            )}
          </div>
        </div>
        <div
          // className="px-6 md:px-14 py-10 max-w-xl flex-row w-full bg-red-500"
          className="px-6 md:px-14 py-10 mt-6 grid grid-cols-1 gap-y-6 gap-x-4 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
        >
          <DropDown
            label="Hero Mission"
            selectedItem={props.selectedHeroMission}
            setSelectedItem={props.setSelectedHeroMission}
            items={props.heroMissions}
          />
          <DropDown
            label="Sex"
            selectedItem={selectedSex}
            setSelectedItem={setSelectedSex}
            items={sexes}
          />
          <DropDown
            label="Division"
            selectedItem={selectedDivision}
            setSelectedItem={setSelectedDivisions}
            items={divisions}
          />
        </div>

        {/* Large screen Table */}
        <div className="-my-2 overflow-x-auto px-6 ">
          <div className="py-2 align-middle inline-block min-w-full md:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 rounded-md sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell"
                    >
                      Location
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell"
                    >
                      Age
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {athletes.length > 0 ? (
                    athletes.map((athlete) => [
                      <tr key={athlete.email}>
                        {/* {console.log("Updated!!!!!!! " + athlete.time)} */}
                        <td className="px-6 py-4 whitespace-nowrap">
                          <LeaderboardName {...props} athlete={athlete} />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell ">
                          <div className="text-sm text-gray-900">
                            {athlete.city + ", " + athlete.state}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                          <div className="text-sm text-gray-500">
                            {calculateAge(athlete.birthDate)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {athlete.time}
                        </td>
                      </tr>,
                    ])
                  ) : (
                    <div />
                  )}
                </tbody>
              </table>
              {athletes.length === 0 ? (
                <div>
                  <p className="p-2 bg-gray-100">
                    There are no entries yet....{" "}
                  </p>
                </div>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
