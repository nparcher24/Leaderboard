import React from "react";
import PhotoGallery from "../sections/PhotoGallery";
import { Fade } from "react-awesome-reveal";

const imageDict = {
  firstImage: {
    url:
      "https://firebasestorage.googleapis.com/v0/b/leaderboard-d5992.appspot.com/o/d2.jpg?alt=media&token=5ccba219-2051-4b27-89aa-7bf3959aa2fb",
    altText: "Workout class in session",
  },
  secondImage: {
    url:
      "https://firebasestorage.googleapis.com/v0/b/leaderboard-d5992.appspot.com/o/d3.jpg?alt=media&token=e1d8dbd8-7c03-4911-9d5d-1c558b698d98",
    altText: "Dahlem Event 2",
  },
  thirdImage: {
    url:
      "https://firebasestorage.googleapis.com/v0/b/leaderboard-d5992.appspot.com/o/d4.jpg?alt=media&token=9357b55e-0537-4998-b2c8-7767b05b0a14",
    altText: "Dahlem Event 3",
  },
  fourthImage: {
    url:
      "https://firebasestorage.googleapis.com/v0/b/leaderboard-d5992.appspot.com/o/d5.jpg?alt=media&token=d7118349-9350-43b2-9cff-30191046eccf",
    altText: "Dahlem Event 4",
  },
  fifthImage: {
    url:
      "https://firebasestorage.googleapis.com/v0/b/leaderboard-d5992.appspot.com/o/D6.jpg?alt=media&token=bef0b284-2544-4798-a1a0-21fe70fe1f08",
    altText: "Dahlem Event 5",
  },
};

export default function About(props) {
  return (
    <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-primary overflow-hidden">
      <div className="max-w-max lg:max-w-7xl mx-auto">
        <Fade className="relative z-10 mb-8 md:mb-2 md:px-6">
          <div className="text-base max-w-prose lg:max-w-none">
            <h2 className="leading-6 text-secondary font-semibold tracking-wide uppercase">
              About
            </h2>
            <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Train American Series
            </h1>
          </div>
        </Fade>

        <Fade className="relative">
          <svg
            className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="95e8f2de-6d30-4b7e-8159-f791729db21b"
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
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
            />
          </svg>
          <svg
            className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
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
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
            />
          </svg>
          <div className="relative md:bg-primary md:p-6">
            <div className="lg:grid lg:grid-cols-2 lg:gap-6">
              <div className="prose prose-indigo prose-lg text-gray-800 lg:max-w-none space-y-4">
                <p>
                  The idea came from the one simple belief: When you make
                  yourself healthier and stronger, you do the same for your
                  country.
                </p>
                <p>We took that idea and turned it into a workout.</p>
                {/* <p>
                  Have you ever asked yourself:{" "}
                  <strong>How can I make my country better?</strong>
                </p>
                <p>
                  <strong>This is your chance.</strong>
                </p> */}
                <p>
                  Join us in making ourselves better and our country better by
                  honoring the community heroes who lift us up, every day.
                </p>
                <p>
                  We’ve commemorated Challenge Coins stamped with the names of
                  our heroes for those who complete the challenge. Each
                  challenge is distinct and different, designed by the hero and
                  their family.
                </p>
                <p>
                  So join us and commit to improving yourself and your
                  community.
                </p>
                <p>Every workout has an in-person or remote option.</p>
                <p>
                  <strong>Let’s Train American, together</strong>
                </p>
                <div className="py-4 md:py-10">
                  <hr />
                </div>

                <p>
                  <strong>Who:</strong> Whether you’re a competitor or
                  spectator, all members of the community are encouraged to
                  attend.
                </p>
                <p>
                  <strong>What:</strong> All day fitness event celebrating local
                  community heroes, hosted by veterans, catered by the #1 rated
                  BBQ in Illinois,{" "}
                  <a
                    className="text-blue-800"
                    href="https://chicagoculinarykitchen.com/food/"
                  >
                    Chicago Culinary Kitchen
                  </a>
                  !
                </p>
                <p>
                  <strong>When: </strong> May 16th 2021 -{" "}
                  <strong>Hero Mission: Brock Shiffer</strong>
                </p>
                <p>
                  <strong>Where:</strong>{" "}
                  <a
                    className="text-blue-800"
                    href="https://104010fitness.com/"
                  >
                    10.40.10 Fitness
                  </a>
                  , Home Gym, or Local Community Gym
                </p>
                <p>
                  <strong>Why:</strong> To take back what it means to be an
                  American through inspirational fitness
                </p>
              </div>
              <div className="mt-12 prose prose-indigo prose-lg text-gray-800 lg:mt-0 space-y-10">
                <p>
                  <strong className="non-italic">
                    Earn your Challenge Coin
                  </strong>{" "}
                  <p className="pt-2 italic">
                    "Earning this coin is just such a special feeling. This
                    isn't something you can just buy off the internet. It
                    carries the name of a community hero who has sacrificed so
                    much for the betterment of our country. It is designed by
                    and rules are set by the family of the hero. You will have
                    to challenge yourself to earn it but when you do, consider
                    yourself in an Elite class of Americans who demand more of
                    themselves"
                  </p>
                </p>
                <div className="w-full grid grid-cols-2 place-items-center">
                  <img
                    className="object-fit w-full max-w-xs"
                    src="https://firebasestorage.googleapis.com/v0/b/leaderboard-d5992.appspot.com/o/Dahlem%20Coin%201.png?alt=media&token=88a69a24-7698-4406-94e4-943c9f50f308"
                    alt="Dahlem Challenge Coin"
                  />
                  <img
                    className="object-fit w-full max-w-xs"
                    src="https://firebasestorage.googleapis.com/v0/b/leaderboard-d5992.appspot.com/o/Dahlem%20Coin%202.png?alt=media&token=a1bb2bd3-084b-48a0-bf53-df6918d85b38"
                    alt="Dahlem Challenge Coin back"
                  />
                </div>
                <p>
                  <strong>Challenge coin definition:</strong> (Via{" "}
                  <a
                    className="text-blue-800"
                    href="https://en.wikipedia.org/wiki/Challenge_coin"
                  >
                    wikipedia.com
                  </a>
                  ) A challenge coin is a small coin or medallion, bearing an
                  organization's insignia or emblem and carried by the
                  organization's members. Traditionally, they might be given to
                  prove membership when challenged and to enhance morale. They
                  are also collected by service members and law enforcement
                  personnel. Historically, challenge coins were presented by
                  unit commanders in recognition of special achievement by a
                  member of the unit. They could also be exchanged in
                  recognition of visits to an organization.
                </p>
              </div>
            </div>
            <div className="mt-8 inline-flex rounded-md shadow">
              {/* <a
                href="#"
                className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primaryGreen hover:bg-opacity-80"
              >
                Contact sales
              </a> */}
            </div>

            <PhotoGallery imageDict={imageDict} />
          </div>
        </Fade>
      </div>
    </div>
  );
}
