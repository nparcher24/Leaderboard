import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { parse, isDate, format } from "date-fns";
import EventsList from "../components/EventsList";

// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Required";
//   }

//   if (!values.lastName) {
//     errors.lastName = "Required";
//   }

//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }

//   if (!values.city) {
//     errors.city = "Required";
//   }
//   if (!values.state) {
//     errors.state = "Required";
//   }

//   return errors;
// };

function parseDateString(value, originalValue) {
  const parsedDate = isDate(originalValue);
  // console.log("CurrentValue: " + value + ", originalValue: " + originalValue);
  if (parsedDate) {
    // console.log("Is a date");
    return originalValue;
  } else {
    // console.log("is a string");

    const newDate = parse(originalValue, "MM/dd/yyyy", new Date());
    // console.log("newDate: " + newDate);
    return newDate;
  }
}

const today = new Date();

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  city: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  state: Yup.string()
    .min(2, "Too Short!")
    .max(2, "Abbreviation please")
    .required("Required"),
  // sex: Yup.string().min(2, "Please choose your sex").required("Required"),
  birthDate: Yup.date()
    .typeError("Invalid format")
    .transform(parseDateString)
    .max(today, `Date needs to be before today`)
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export default function AccountForm(props) {
  const formik = useFormik({
    initialValues: props.currentUser,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      values.birthDate = parseDateString(null, values.birthDate);
      if (values.heroMissions !== null) {
        delete values.heroMissions;
      }
      if (values[props.selectedHeroMission.id] !== null) {
        delete values[props.selectedHeroMission.id];
      }
      console.log(values);
      props.db
        .collection("athletes")
        .doc(props.currentUser.id)
        .update(values)
        .then(() => {
          console.log("New user written successfully");
          props.setShowFeedbackChick("Saved successfully");
          setTimeout(() => {
            props.setShowFeedbackChick("");
          }, 5000);
        })
        .catch((error) => {
          console.log("Error writing account data: " + error);
        });
      props.setShowAccount(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="pt-8">
        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="first_name"
              className="block text-sm font-medium text-gray-700"
            >
              First name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="given-name"
                autoFocus
                value={formik.values.firstName}
                onChange={formik.handleChange}
                className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
              />
              {formik.errors.firstName ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.firstName}
                </div>
              ) : null}
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="last_name"
              className="block text-sm font-medium text-gray-700"
            >
              Last name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="lastName"
                id="lastName"
                autoComplete="family-name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
              />
              {formik.errors.lastName ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.lastName}
                </div>
              ) : null}
            </div>
          </div>

          <div className="sm:col-span-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                // value={props.currentUser.email}
                value={formik.values.email}
                onChange={formik.handleChange}
                className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
              />
              {formik.errors.email ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="city"
                id="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
              />
              {formik.errors.city ? (
                <div className="text-red-500 text-sm">{formik.errors.city}</div>
              ) : null}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-700"
            >
              State
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="state"
                id="state"
                value={formik.values.state}
                onChange={formik.handleChange}
                className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
              />
              {formik.errors.state ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.state}
                </div>
              ) : null}
            </div>
          </div>

          <div className="sm:col-span-4">
            <label
              htmlFor="birthday"
              className="block text-sm font-medium text-gray-700"
            >
              Birthday
            </label>
            <div className="mt-1">
              <input
                id="birthDate"
                name="birthDate"
                type="tel"
                autoComplete="birthDate"
                // value={props.currentUser.email}
                placeholder="MM/DD/YYYY"
                value={
                  isDate(formik.values.birthDate)
                    ? format(formik.values.birthDate, "MM/dd/yyyy")
                    : formik.values.birthDate
                }
                onChange={(event) => {
                  var prevValue = formik.values.birthDate;
                  if (prevValue == null) {
                    prevValue = "";
                  }
                  var value = event.target.value;
                  if (prevValue.length === 1 && value.length === 2) {
                    value = value + "/";
                  } else if (prevValue.length === 4 && value.length === 3) {
                    value = value.slice(0, -1);
                  } else if (prevValue.length === 4 && value.length === 5) {
                    value = value + "/";
                  } else if (prevValue.length === 7 && value.length === 6) {
                    value = value.slice(0, -1);
                  }
                  var newEvent = event;
                  event.target.value = value;

                  console.log(
                    "Prev Value: " + prevValue + " New Value: " + value
                  );
                  formik.handleChange(newEvent);
                }}
                className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
              />
              {formik.errors.birthDate ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.birthDate}
                </div>
              ) : null}
            </div>
          </div>

          {/* <div className="sm:col-span-4">
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Division
            </label>
            <select
              id="division"
              name="division"
              className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
              defaultValue=""
            >
              <option></option>
              <option>Recruit</option>
              <option>Sergeant</option>
              <option>Master Chief</option>
            </select>
            {formik.errors.state ? (
              <div className="text-red-500 text-sm">{formik.errors.state}</div>
            ) : null}
          </div> */}

          <div className="sm:col-span-2">
            <label
              htmlFor="sex"
              className="block text-sm font-medium text-gray-700"
            >
              Sex
            </label>
            <select
              id="sex"
              name="sex"
              className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
              defaultValue=""
              value={formik.values.sex}
              onChange={formik.handleChange}
            >
              <option></option>
              <option>Male</option>
              <option>Female</option>
            </select>
            {formik.errors.state ? (
              <div className="text-red-500 text-sm">{formik.errors.state}</div>
            ) : null}
          </div>
        </div>

        <div className="my-5 mt-10">
          <label
            htmlFor="events"
            className="block text-xl font-bold text-gray-700"
          >
            SUBMIT SCORE:
          </label>
          <label
            htmlFor="events"
            className="block text-sm font-medium text-gray-700 py-2"
          >
            Score submission will be enabled once you are registered for an
            event
          </label>
          <EventsList {...props} />
        </div>
      </div>{" "}
      <div className="flex-shrink-0 px-4 py-4 flex justify-end">
        <button
          type="button"
          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => props.setShowAccount(false)}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primaryGreen hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button>
      </div>
    </form>
  );
}
