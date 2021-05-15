import React from "react";
import { Fade, Slide, AttentionSeeker } from "react-awesome-reveal";

const events = [
  {
    name: "Hero Mission: Brock Shiffer",
    date: "16 May, 2021",
    description:
      "Brock is the definition of a “Post-9/11 Generation Veteran”, enlisting in the U.S. Navy just days after the historic event that changed the life trajectory of many individuals still serving today. His service in the Navy, where he happened to meet CEO Alex Witt, gave him a sense of pride and that close-knit family unit that he felt his life was missing. His time in service was unfortunately cut short, as Brock suffered a severe T-12 spinal cord injury as the result of a car accident. This is the point where many in his shoes would find themselves with little motivation except to quit, but warriors like Brock never quit. They drive on and figure it the f*** out.",
    pictureURL:
      "https://firebasestorage.googleapis.com/v0/b/leaderboard-d5992.appspot.com/o/Flag%20Eys-1.jpeg?alt=media&token=4072b5de-ca13-465b-bfeb-49578a3d1835",
    linkURL: "https://www.eventcreate.com/e/hero-brock",
    accomplished: false,
  },
  // {
  //   name: "Hero Mission: Mark Dahlem",
  //   date: "4 July, 2020",
  //   description:
  //     "As a police officer, Mark Dahlem was known as a cop’s cop. As a man, husband, father and friend fighting brain cancer, he was known as a fighter with a powerful spirit. In 2017, when doctors diagnosed the Palatine police officer from Cary with brain cancer, Dahlem was the first one to calm the worries of his loved ones. “He knew it was going to be one heck of a journey,” said Palatine Police Chief Alan Stoeckel. “He didn’t want people to worry about him.”  Mark died at the young age of 48. His 23 years as a police officer left a deep impression on the community.  “Mark represented all that is good and honorable in the law enforcement profession,” Stoeckel said.  He left behind a wife, Kimberly; two children, Abigail and Jack; a brother, Paul; and a mother, Janet Beguin. Dahlem served from 1995 to 2019. During that time, he held a number of jobs inside the department: patrol officer, field training officer, juvenile officer, Fremd High School liaison and crime scene technician.  It’s clear that Mark was highly respected by his peers and those he served in the community. Both officers and supervisors knew they could depend on him.  He served as a friend and informal leader to many, which is a rarity in law enforcement.",
  //   pictureURL:
  //     "https://firebasestorage.googleapis.com/v0/b/leaderboard-d5992.appspot.com/o/image1-1.png?alt=media&token=a8e8f5e1-7074-45f9-a5fd-4bfd9bca7c4e",
  //   linkURL: "",
  //   accomplished: true,
  // },
];

function HeroEventso() {
  return (
    <div>
      <Fade className="relative py-4 bg-gray-50">
        <div
          className="hidden absolute top-0 inset-x-0 h-1/2 bg-gray-50 lg:block"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto bg-primaryDark lg:bg-transparent lg:px-8">
          <div className="lg:grid lg:grid-cols-12">
            <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
              <div
                className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden z-0"
                aria-hidden="true"
              />
              <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0 z-10">
                <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 z-20">
                  <img
                    className=" object-cover object-center rounded-3xl shadow-2xl z-30"
                    src="https://firebasestorage.googleapis.com/v0/b/leaderboard-d5992.appspot.com/o/161A3682.jpeg?alt=media&token=9ed8bcc3-2fd1-43ae-9442-5656e3321c04"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="relative bg-primaryDark lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
              <div
                className="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block"
                aria-hidden="true"
              >
                <svg
                  className="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-800"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  />
                </svg>
                <svg
                  className="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-800"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  />
                </svg>
              </div>
              <div className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
                <h1
                  className="text-3xl font-extrabold text-white"
                  id="join-heading"
                >
                  Join the Challenge!
                </h1>
                <p className="text-lg text-white">
                  Unite as a country to take back what it means to be an
                  American through Fitness.
                </p>
                <p className="text-lg text-white">
                  We want YOU to challenge yourself to see where you compare vs
                  your peers and compete for a good cause. So head on over to
                  your local community gym, your garage gym, or the 104010{" "}
                  <a href="https://104010fitness.com" className="underline">
                    {" "}
                    flagship location
                  </a>{" "}
                  and earn your coin along with great cash prizes!
                </p>
                <p className="text-lg text-white">
                  Remote participants encouraged.
                </p>
                <a
                  className="block w-full py-3 px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-primary hover:bg-gray-50 sm:inline-block sm:w-auto"
                  href="https://www.eventcreate.com/e/hero-brock"
                >
                  Buy a Ticket
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <Fade className="bg-gray-50 pt-12 sm:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <a
              className="text-3xl font-extrabold text-gray-900 sm:text-4xl underline"
              href="https://www.eventcreate.com/e/hero-brock"
            >
              Next Hero Mission: Brock Shiffer
            </a>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Join us remotely or at our Deer Park, IL location to honor this
              American Hero!
            </p>
          </div>
        </div>
        <div className="mt-10 pb-12 bg-white sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r justify-center">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Date
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-secondary">
                      16 May 2021
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r justify-center">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Time
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-secondary">
                      0800-1600
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Location
                    </dt>
                    <dd className="order-1 text-xl font-extrabold text-secondary">
                      21020 N Randall Road, Kildeer, IL 60047
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <div className="bg-white">
        <Slide
          direction="up"
          className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <a
              className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
              href="https://www.battlebars.com"
            >
              <img
                className="h-24"
                src="https://firebasestorage.googleapis.com/v0/b/leaderboard-d5992.appspot.com/o/BBLogo.svg?alt=media&token=db99fffb-87e4-40c5-98d5-bff9506af086"
                alt="Tuple"
              />
            </a>
            <a
              className="col-span-1 flex justify-center items-center md:col-span-2 lg:col-span-1"
              href="https://innovativewarriortech.com"
            >
              <img
                className="h-12"
                src="https://firebasestorage.googleapis.com/v0/b/leaderboard-d5992.appspot.com/o/Group%2033.svg?alt=media&token=1f7871cc-36a2-42bc-9962-a22d052a78de"
                alt="Mirage"
              />
            </a>
            <a
              className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 items-center"
              href="https://www.enduringwarrior.org"
            >
              <img
                className="h-20"
                src="https://firebasestorage.googleapis.com/v0/b/leaderboard-d5992.appspot.com/o/uploads-292d4a85-3b0f-47c3-bac3-3d83df8e364f-logo_warrior.png?alt=media&token=9ae0466b-cea0-43e0-bf55-b2bcb772dcba"
                alt="StaticKit"
              />
            </a>
            <a
              className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1 items-center"
              href="https://chicagoculinarykitchen.com"
            >
              <img
                className="h-20"
                src="https://firebasestorage.googleapis.com/v0/b/leaderboard-d5992.appspot.com/o/preview.jpeg?alt=media&token=97eb6d65-b8a4-410b-8ede-41cc8f6bf566"
                alt="Transistor"
              />
            </a>
            <a
              className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1 items-center"
              href="https://www.whoop.com"
            >
              <img
                className="h-12"
                src="https://firebasestorage.googleapis.com/v0/b/leaderboard-d5992.appspot.com/o/uploads-292d4a85-3b0f-47c3-bac3-3d83df8e364f-whoop-logo.png?alt=media&token=6326cbf3-234f-4df7-a832-9e0c99a4e38e"
                alt="Workcation"
              />
            </a>
          </div>
        </Slide>
      </div>

      {events.map((event, index) => (
        <div className="relative bg-primaryDark" key={index}>
          {index % 2 === 0 ? (
            <div>
              <Slide
                direction="left"
                className="h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2"
              >
                <img
                  className="w-full h-full object-cover"
                  src={event.pictureURL}
                  alt={event.name}
                />
              </Slide>
              <Slide
                direction="right"
                className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
                cascade="true"
              >
                <div className="md:ml-auto md:w-1/2 md:pl-10">
                  <h2 className="text-base font-semibold uppercase tracking-wider text-primaryDark">
                    {event.date}
                  </h2>
                  <p className="mt-2 text-primaryDark text-3xl font-extrabold tracking-tight sm:text-4xl">
                    {event.name}
                  </p>
                  <p className="mt-3 text-lg text-primaryDark">
                    {event.description}
                  </p>
                  {event.linkURL === "" ? (
                    <div className="mt-8">
                      <div className="inline-flex rounded-md shadow">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/leaderboard-d5992.appspot.com/o/MISSION%20ACCOMPLISHED.png?alt=media&token=3a428d88-10f3-4706-a84c-6e9a154e7b8c"
                          alt="Mission Accomplished"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="mt-8">
                      <AttentionSeeker
                        effect="pulse"
                        className="inline-flex rounded-md shadow"
                      >
                        <a
                          href={event.linkURL}
                          className="inline-flex items-center justify-center px-10 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                        >
                          Register for event
                        </a>
                      </AttentionSeeker>
                    </div>
                  )}
                </div>
              </Slide>
            </div>
          ) : (
            <div>
              <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center md:py-48 md:text-left">
                <div className="px-4 md:w-1/2 sm:px-8 xl:pr-16">
                  <h2 className="text-base font-semibold uppercase tracking-wider text-primaryDark">
                    {event.date}
                  </h2>
                  <p className="mt-2 text-primaryDark text-3xl font-extrabold tracking-tight sm:text-4xl">
                    {event.name}
                  </p>
                  <p className="mt-3 text-lg text-primaryDark">
                    {event.description}
                  </p>
                  {event.linkURL === "" ? (
                    <div className="mt-8">
                      <div className="inline-flex rounded-md shadow">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/leaderboard-d5992.appspot.com/o/MISSION%20ACCOMPLISHED.png?alt=media&token=3a428d88-10f3-4706-a84c-6e9a154e7b8c"
                          alt="Mission Accomplished"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="mt-8">
                      <div className="inline-flex rounded-md shadow">
                        <a
                          href={event.linkURL}
                          className="inline-flex items-center justify-center px-10 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                        >
                          Register for event
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="relative w-full h-64 sm:h-72 md:absolute md:inset-y-0 md:right-0 md:w-1/2 md:h-full">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src={event.pictureURL}
                  alt={event.name}
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export const HeroEvents = React.memo(HeroEventso);
