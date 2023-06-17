import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const experience = [
  {
    id: 0,
    company: { name: "KLA", url: "https://www.kla.com/" },
    title: "Application Engineer",
    period: "November 2021 - July 2022",
    disc: [
      "Devised a Python tool that reduces the time of XML data processing up to four hours which results in earlier issue identification and better team productivity.",
      "Maximized daily inspection throughput by adjusting parameters and deploying latest build code onto tools.",
      "Analyzed and resolved technical issues for customers and coordinated with R&D team for continuous improvement.",
    ],
  },
  {
    id: 1,
    company: { name: "NSPO", url: "https://www.tasa.org.tw/" },
    title: "Graduate Research Assistant",
    period: "September 2019 - February 2021",
    disc: [
      "Identified necessary satellite metadata for dynamic image generation of Formosat-8 satellite.",
      "Developed a GUI in Python to compute satellite data, digital elevation model (DEM), and ortho-image, enabling the generation of dynamic images based on collinearity equations.",
    ],
  },
  {
    id: 2,
    company: { name: "NCKU", url: "https://www.ncku.edu.tw/" },
    title: "Undergraduate Research Assistant",
    period: "September 2016 - January 2018",
    disc: [
      "Improved the existing marker-based localization algorithm for more precise indoor positioning and lower computing resources compared to the feature-based localization algorithm.",
      "Employed computer vision and neural network techniques for distance estimation, and trilateral positioning algorithm for determining user location.",
    ],
  },
];

function Button({ children, onShow, isActive }) {
  return (
    <button
      className={`btn tab__menu--btn ${isActive ? "active" : ""}`}
      onClick={onShow}
    >
      {children}
    </button>
  );
}

function TabContent({ title, company, period, disc }) {
  const discList = disc.map((disc) => (
    <li className="list-item" key={uuidv4()}>
      {disc}
    </li>
  ));
  return (
    <>
      <h3>
        <span className="tab__title">{title}</span>
        <span className="link">
          &nbsp;@&nbsp;
          <a className="link--underline" href={company.url} target="_blank">
            {company.name}
          </a>
        </span>
      </h3>
      <p className="tab__period">{period}</p>
      <ul className="tab__list">{discList}</ul>
    </>
  );
}

function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  const experienceTabs = experience.map(
    ({ id, company, title, period, disc }) => ({
      id,
      company,
      title,
      period,
      disc,
      isActive: activeIndex === id,
    })
  );

  const tabButtons = experienceTabs.map(({ id, company, isActive }) => (
    <Button
      key={id}
      isActive={isActive}
      onShow={() => {
        setActiveIndex(id);
      }}
    >
      {company.name}
    </Button>
  ));

  const tabContent = experienceTabs.map(
    ({ isActive, ...props }) =>
      isActive && <TabContent key={props.id} {...props}></TabContent>
  );

  return (
    <section className="section-experience" id="experience">
      <div className="container">
        <div className="subheading">experience</div>
        <h2>Where I've Worked</h2>
        <div className="tab">
          <div className="tab__menu">{tabButtons}</div>
          <div className="tab__content">{tabContent}</div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
