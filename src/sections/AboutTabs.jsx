import React from "react";

/* This example requires Tailwind CSS v2.0+ */

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AboutTabs(props) {
  const [tabs, setTabs] = React.useState([
    { name: "Hero Mission", href: "/HeroSeries/Events", current: true },
    { name: "About", href: "/HeroSeries/About", current: false },
    { name: "Leaderboard", href: "/HeroSeries/Leaderboard", current: false },
    { name: "FAQ", href: "/HeroSeries/FAQ", current: false },
  ]);

  //   const didClickTab = (tabName) => {
  //     let oldTabs = tabs;
  //     let oldIndex = tabs.findIndex((x) => x.current);
  //     let oldTab = { ...tabs[oldIndex], current: false };
  //     tabs[oldIndex] = oldTab;

  //     // //Find the new tab
  //     let index = tabs.findIndex((x) => x.name === tabName);
  //     let tab = {
  //       ...tabs[index],
  //       current: true,
  //     };
  //     oldTabs[index] = tab;
  //     setTabs(oldTabs);
  //     // console.log("Did click tab: " + tabs[1].current);
  //   };

  const didClickTab = (tabName) => {
    setTabs((tabs) =>
      tabs.map((tab) => ({
        ...tab,
        current: tab.name === tabName,
      }))
    );
    props.setCurrentTab(tabName);
  };

  return (
    <div className="border-b border-gray-200 md:pt-5 flex justify-center">
      <div className="sm:flex sm:items-baseline">
        <div className="mt-4 sm:mt-0 sm:ml-10">
          <nav className="-mb-px flex space-x-4 md:space-x-16">
            {tabs.map((tab) => [
              <button
                key={tab.name}
                href={tab.href}
                className={classNames(
                  tab.current
                    ? "border-textPrimary text-primary"
                    : "border-transparent text-secondary hover:text-secondary hover:border-secondary",
                  "whitespace-nowrap pb-4 px-1 border-b-2 font-bold text-sm md:text-lg"
                )}
                aria-current={tab.current ? "page" : undefined}
                onClick={() => {
                  //Handle Click
                  didClickTab(tab.name);
                }}
              >
                {tab.name}
              </button>,
            ])}
          </nav>
        </div>
      </div>
    </div>
  );
}
