import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const faqs = [
  {
    question:
      "How much fitness experience is required to participate as a competitor?",
    answer:
      "No matter what your fitness experience is, we have a division for you!  Master Chief - Advanced,  Sergeant - intermediate,  Recruit - Beginner (just for fun).  There will be coaches there to walk you through every movement and the workout details.",
  },
  {
    question: "What is the Train American Series?",
    answer:
      "The Train American Series is a collection of workouts designed to honor local American heroes.  Each workout, or Hero Mission, is created by the trainers at 104010 Fitness to reflect the FITFO mindset of each Hero.  Athletes who participate in Each Hero Mission can earn a limited edition challenge coin designed by the Hero's family.",
  },
  {
    question: "How often are these Hero Mission hosted?",
    answer:
      "Currently, 104010 fitness has two future missions: May 16th and sometime mid-July (date TBD).  As the 104010 family expands, so will the frequency of Hero Missions since each 104010 branch identifies their local community heroes. ",
  },
  {
    question: "How do I sign up for a Hero Mission?",
    answer: (
      <p>
        You can sign up via the event registration website here:{" "}
        <a
          className="text-blue-800"
          href="https://www.eventcreate.com/e/hero-brock"
        >
          Link
        </a>
        . Eventually, as the Train American technology platform expands, users
        will sign up for events directly from our web app on their smartphones.
      </p>
    ),
  },
  {
    question: "Where are these events held?",
    answer:
      "The Train American Series: Hero Missions can be done in-person or at your home or local community gym.  Those who enjoy the in-person experience sign up for a time slot at our Deer Park location.  Alternatively, those who wish to participate remotely can sign up on the same registration site but may join from anywhere.  Earning a challenge coin remotely is predicated on the honor system.",
  },
  {
    question: "How do I submit my score?",
    answer:
      "For in-person participation, a judge will provide each athlete with a filled-out scorecard recorded internally.  For remote participation, starting one week before the event, each participant will create an account on our site and upload their score from their mobile device.",
  },
  {
    question: "How can I earn a challenge coin?",
    answer:
      "Athletes can earn each mission's challenge coin by completing the workout under the time limit determined by the judges.  Workout and time limit details will be provided to remote participants 1 week before the event.  For in-person participants, challenge coins will be passed out immediately after the event.  For remote participants, challenge coins will be mailed out within0 two weeks following the event. ",
  },
  {
    question: "How long will the workout take?",
    answer:
      "Each workout will differ in time and complexity.  The upcoming Hero Mission: Brock Shiffer will take around 15 minutes.  ",
  },
  {
    question: "What will take place at the in-person event?",
    answer:
      "Each Hero Mission will start with opening remarks, an invocation, and the singing of our national anthem.  Immediately after, workouts begin.  Throughout the day, there will be multiple local vendors set up outdoors.  Participants and their families are encouraged to stay and enjoy the outdoor festivities.",
  },
  {
    question: "Who can I contact for more information?",
    answer:
      "Contact the flagship 104010 location at 224.677.5031 or dan@104010fitness.com to speak with a customer service professional.",
  },
  // More questions...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">
                          {faq.question}
                        </span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
