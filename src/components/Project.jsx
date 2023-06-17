import { GithubLogo, ArrowSquareOut } from "@phosphor-icons/react";

const projectList = [
  {
    id: 0,
    title: "Personal Protfolio",
    imgName: "00_portfolio.png",
    desc: "Welcome to my personal portfolio website, the very one you are currently exploring! As you navigate through this site, powered by React and utilizing React hooks, HTML, CSS, and JavaScript, you'll experience an interactive browsing journey. Take a closer look at my diverse range of projects and delve into my background to gain a deeper understanding of my skills. Hope you enjoy your time here.",
    tech: ["React", "JS", "CSS", "HTML"],
  },
  {
    id: 1,
    title: "Recipe Website",
    imgName: "01_forkify.png",
    desc: "A responsive recipe website integrates API for recipe searching. This dynamic platform incorporates features such as bookmarking your favorite recipes, uploading your own recipes, adjusting ingredient amounts, and search suggestions for a personalized user experience.",
    tech: ["JavaScript", "CSS", "HTML"],
    links: {
      github: "https://github.com/May7331/forkify-js-project",
      website: "https://forkify-mayc.netlify.app/",
    },
  },
  {
    id: 2,
    title: "Automatic High Definition Map Generation",
    imgName: "02_hdmap.png",
    desc: "An automated process of generating traffic sign HD maps for autonomous vehicles. Tailored the PointNet neural network model to enhance traffic sign segmentation, resulting in 83% average recall rate. Adjusted GoogLeNet model to attain an accuracy rate over 90% in classifying traffic signs. The proposed process provides a more efficient approach to extracting information from mobile mapping systems.",
    tech: ["Python", "3D & 2D Deep Learning", "Tensorflow-gpu"],
    links: {
      github: "https://github.com/May7331/HD-Map-Generation",
      website:
        "https://drive.google.com/file/d/1b710lmBtdIYD5Ess13uiv5YyWPSeKTIu/view?usp=sharing",
    },
  },
  {
    id: 3,
    title: "Dynamic Image Generation of Formosat-8 Frame Sensor",
    imgName: "03_formosat8.png",
    desc: "Developed a GUI in Python that enables data upload, target coordinate specification for generating dynamic image of Formosat-8. Obtained pixel value through collinearity equation with the establishment of perspective relationship between image and object space from inputs such as ephemeris, digital elevation models (DEM), and ortho-images.",
    tech: ["Python", "tkinter", "vectorization", "gdal"],
    links: {
      github: "https://github.com/May7331/NSPO-Formosat-8",
    },
  },
];

function getImgUrl(imgName) {
  return new URL(`../assets/project/${imgName}`, import.meta.url).href;
}

function ProjectItem({ project }) {
  const { title, imgName, desc, tech, links } = project;

  return (
    <li className="project__item grid grid--12-cols">
      <div className="project__img">
        <div className="project__img--wrapper">
          <img src={getImgUrl(imgName)} alt={title}></img>
        </div>
      </div>

      <div className="project__info">
        <h3 className="project__title">{title}</h3>
        <p className="project__desc">{desc}</p>
        <ul className="project__tech--list">
          {tech.map((tech, i) => (
            <li className="project__tech--item" key={i}>
              {tech}
            </li>
          ))}
        </ul>
        {links && (
          <div className="project__links">
            {links.github && (
              <a className="link--icon" href={links.github} target="_blank">
                <GithubLogo />
              </a>
            )}
            {links.website && (
              <a className="link--icon" href={links.website} target="_blank">
                <ArrowSquareOut />
              </a>
            )}
          </div>
        )}
      </div>
    </li>
  );
}

function Project() {
  return (
    <section className="section-project" id="project">
      <div className="container">
        <div className="subheading">projects</div>
        <h2>What I've Built</h2>
        <ul className="project__list">
          {projectList.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Project;
