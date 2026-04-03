"use client";

import { useEffect } from "react";

export default function LegacyDesignContent() {
  useEffect(() => {
    // Load prac.css into document head
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/prac.css";
    link.id = "legacy-design-css";
    document.head.appendChild(link);

    return () => {
      const existingLink = document.getElementById("legacy-design-css");
      if (existingLink) existingLink.remove();
    };
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(function () {
      const beforeLoad = document.querySelector(".legacy-design .beforeLoad");
      const afterLoad = document.querySelector(".legacy-design .afterLoad");
      if (beforeLoad) beforeLoad.remove();
      if (afterLoad) (afterLoad as HTMLElement).style.display = "block";

      // MODAL
      const ficModal = document.querySelector<HTMLElement>("#fic-modal");
      const skinmartModal =
        document.querySelector<HTMLElement>("#skinmart-modal");
      const cstlModal = document.querySelector<HTMLElement>("#cstl-modal");
      const organizerModal =
        document.querySelector<HTMLElement>("#organizer-modal");
      const modalBtns = document.querySelectorAll(
        ".legacy-design .project-card-inner"
      );
      const closeBtns = document.querySelectorAll(".legacy-design .close");

      modalBtns.forEach((btn) => {
        btn.addEventListener("click", openModal);
      });
      closeBtns.forEach((btn) => {
        btn.addEventListener("click", closeModal);
      });
      window.addEventListener("click", outsideClick);

      function openModal(this: any) {
        if (this.id === "fic-button") {
          if (ficModal) ficModal.style.display = "flex";
        } else if (this.id === "skinmart-button") {
          if (skinmartModal) skinmartModal.style.display = "flex";
        } else if (this.id === "cstl-button") {
          if (cstlModal) cstlModal.style.display = "flex";
        } else if (this.id === "organizer-button") {
          if (organizerModal) organizerModal.style.display = "flex";
        }
      }

      function closeModal() {
        if (ficModal) ficModal.style.display = "none";
        if (skinmartModal) skinmartModal.style.display = "none";
        if (cstlModal) cstlModal.style.display = "none";
        if (organizerModal) organizerModal.style.display = "none";
      }

      function outsideClick(e: MouseEvent) {
        if (e.target === ficModal) ficModal!.style.display = "none";
        if (e.target === skinmartModal) skinmartModal!.style.display = "none";
        if (e.target === cstlModal) cstlModal!.style.display = "none";
        if (e.target === organizerModal)
          organizerModal!.style.display = "none";
      }

      // ACCORDION — get only direct children of .about
      const containers = document.querySelectorAll(
        ".legacy-design .about > .dropdown-container"
      );
      containers.forEach((container) => {
        const hdr = container.querySelector("header");
        if (hdr) {
          hdr.addEventListener("click", function () {
            containers.forEach((c) => {
              const art = c.querySelector("article") as HTMLElement;
              if (c === container && !c.classList.contains("open")) {
                c.classList.add("open");
                if (art) art.style.maxHeight = art.scrollHeight + "px";
              } else {
                c.classList.remove("open");
                if (art) art.style.maxHeight = "0px";
              }
            });
          });
        }
      });

      // VANILLA TILT — init on project cards
      const cards = document.querySelectorAll(
        ".legacy-design .project-card"
      ) as NodeListOf<HTMLElement>;
      cards.forEach((card) => {
        card.addEventListener("mousemove", function (e: MouseEvent) {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -15;
          const rotateY = ((x - centerX) / centerX) * 15;
          card.style.transform =
            "perspective(1000px) rotateX(" +
            rotateX +
            "deg) rotateY(" +
            rotateY +
            "deg)";
        });
        card.addEventListener("mouseleave", function () {
          card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg)";
          card.style.transition = "transform 0.5s ease";
        });
        card.addEventListener("mouseenter", function () {
          card.style.transition = "none";
        });
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="legacy-design">
      <div className="beforeLoad">
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="12"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="afterLoad">
        <img className="line-img" src="/into-bg.webp" alt="" />
        <div className="vl"></div>

        <div className="intro">
          <h3 className="introText">
            Hi. I am{" "}
            <u>
              <span className="enlarge name">Vipul Bhardwaj</span>
            </u>
            .<br />
            <br />A habitual <span className="enlarge">Front-End Developer</span>
            ,<br />
            <span className="enlarge">Competitve Coder</span>
            <br />
            and an <span className="enlarge">Eager Learner</span>.
          </h3>
          <img className="myImg" src="/myImg1.jpeg" alt="Vipul Bhardwaj" />
        </div>

        <div className="vl"></div>

        <div className="wrapper">
          <div className="about">
            {/* Projects */}
            <div className="dropdown-container">
              <header className="clearfix">
                <h1>Projects</h1>
                <figure className="expand">+</figure>
              </header>
              <article>
                <div className="article-inner projects">
                  {/* cbRAT */}
                  <div data-tilt className="project-card">
                    <button id="fic-button" className="project-card-inner">
                      <h4>cbRAT</h4>
                    </button>
                  </div>
                  <div id="fic-modal" className="modal">
                    <div className="modal-content">
                      <div className="modal-header">
                        <span className="close">&times;</span>
                        <h2>cbRAT (REST-API Unit Test Automation Tool</h2>
                      </div>
                      <div className="modal-body">
                        <p>
                          A REST-API Unit Test Automation Tool built in GoLang
                          that automates the generation of comprehensive unit
                          test files and modules in Python. It uses template
                          Python code and a powerful CLI interface (built with
                          COBRA framework) to generate test cases based on
                          configuration flags and API specifications provided
                          during execution. Designed to streamline test
                          automation workflows, reduce manual testing effort,
                          and accelerate development cycles for REST APIs.
                          Ideal for teams working with microservices and API-first
                          architectures.
                          <a href="https://github.com/vipbhardwaj">GitHub</a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* FIC-SGGSCC */}
                  <div data-tilt className="project-card">
                    <button id="fic-button" className="project-card-inner">
                      <h4>FIC-SGGSCC</h4>
                    </button>
                  </div>
                  <div id="fic-modal" className="modal">
                    <div className="modal-content">
                      <div className="modal-header">
                        <span className="close">&times;</span>
                        <h2>FIC - SGGSCC</h2>
                      </div>
                      <div className="modal-body">
                        <p>
                          A website undertaken as a project given to me and my
                          friend by Finance and Investment Cell (
                          <a href="https://ficsggscc.com/">FIC</a>) of Sri Guru
                          Gobind Singh College of Commerce (
                          <a href="https://www.sggscc.ac.in/">SGGSCC</a>) (under
                          Delhi University). This website is related to a fest
                          that they had taken, fest involved online trading
                          events and investment events.
                          <br />
                          Technologies used for this website were ReactJS,
                          Bootstrap, Icon Libraries for Frontend and
                          <br /> PHP, Express, Node for backend. MongoDB was
                          primarily used for database.
                          <a href="https://app.ficsggscc.com/">Website link</a>
                        </p>
                        <img
                          className="projImg"
                          src="/images/projects/fic1.png"
                          alt=""
                        />
                        <img
                          className="projImg"
                          src="/images/projects/fic2.jpeg"
                          alt=""
                        />
                        <img
                          className="projImg"
                          src="/images/projects/fic3.jpeg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  {/* Skin Mart */}
                  <div data-tilt className="project-card">
                    <button id="skinmart-button" className="project-card-inner">
                      <h4>Skin Mart</h4>
                    </button>
                  </div>
                  <div id="skinmart-modal" className="modal">
                    <div className="modal-content">
                      <div className="modal-header">
                        <span className="close">&times;</span>
                        <h2>Skin Mart</h2>
                      </div>
                      <div className="modal-body">
                        <p>
                          A website where one can check out other players
                          {`'`} Steam Inventory (including wide range of games),
                          and fetch the prices of the items they own.{" "}
                          <a href="https://skin-mart.vercel.app/">
                            Website link
                          </a>
                        </p>
                        <img
                          className="projImg"
                          src="/images/projects/skinmart1.png"
                          alt="Landing Page"
                        />
                        <img
                          className="projImg"
                          src="/images/projects/skinmart2.png"
                          alt="Inventory"
                        />
                        <img
                          className="projImg"
                          src="/images/projects/skinmart3.png"
                          alt="Info"
                        />
                        <img
                          className="projImg"
                          src="/images/projects/skinmart4.png"
                          alt="Game Info"
                        />
                      </div>
                    </div>
                  </div>

                  {/* C-STL */}
                  <div data-tilt className="project-card">
                    <button id="cstl-button" className="project-card-inner">
                      <h4>C-STL</h4>
                    </button>
                  </div>
                  <div id="cstl-modal" className="modal">
                    <div className="modal-content">
                      <div className="modal-header">
                        <span className="close">&times;</span>
                        <h2>C - STL</h2>
                      </div>
                      <div className="modal-body">
                        <p>
                          A comprehensive Standard Template Library
                          implementation for the C language, providing essential
                          data structures and algorithms. Includes fundamental
                          data structures such as Dynamic Arrays, Linked Lists,
                          Stacks, Queues, Trees, Graphs, and Hash Tables. Also
                          contains optimized implementations of common algorithms
                          including Sorting (Quick Sort, Merge Sort, Heap Sort),
                          Searching (Binary Search), String Matching (KMP, Rabin-Karp),
                          Graph Algorithms (BFS, DFS, Dijkstra), and more.
                          Perfect for competitive programming and building
                          efficient C applications.{" "}
                          <a href="https://github.com/hkhashoo/c_algo_ds_lib">
                            GitHub
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* organiz-er */}
                  <div data-tilt className="project-card">
                    <button
                      id="organizer-button"
                      className="project-card-inner"
                    >
                      <h4>organiz-er</h4>
                    </button>
                  </div>
                  <div id="organizer-modal" className="modal">
                    <div className="modal-content">
                      <div className="modal-header">
                        <span className="close">&times;</span>
                        <h2>Organiz-er</h2>
                      </div>
                      <div className="modal-body">
                        <p>
                          A collaborative time management and productivity
                          platform designed to help individuals and teams
                          organize, track, and manage their tasks effectively.
                          Features include intelligent task management with
                          priority levels and deadlines, real-time progress
                          tracking, productive hours logging and analytics,
                          team collaboration capabilities, and personalized
                          productivity insights. The platform leverages data
                          visualization and AI-driven recommendations to help
                          users optimize their workflow and maintain high
                          productivity levels. Currently in active development
                          with planned web and mobile releases.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Background */}
            <div className="dropdown-container">
              <header className="clearfix">
                <h1>Background</h1>
                <figure className="expand">+</figure>
              </header>
              <article>
                <div className="article-inner">
                  <p>
                    I{`'`}m Vipul Bhardwaj, a passionate Full Stack
                    Developer and Competitive Coder from India. Currently
                    working at Couchbase as a Software Developer 2,
                    focusing on infrastructure development and enhancement
                    leveraging AI having extensive experience in API
                    development and end to end development and CI/CD
                    automation, delivering strong results in high-pressure
                    environments. I have a deep interest in optimization,
                    distributed systems, and cloud infrastructure. I
                    specialize in building scalable, performant web
                    applications, backend facing infrastructures in GoLang
                    and Python. My competitive coding journey has honed my
                    problem-solving skills and algorithmic thinking, which
                    I apply to my development work to create efficient and
                    innovative solutions. Although I hate Dynamic
                    Programming questions in interviews.
                  </p>
                </div>
              </article>
            </div>

            {/* Current Focus */}
            <div className="dropdown-container">
              <header className="clearfix">
                <h1>Current Focus</h1>
                <figure className="expand">+</figure>
              </header>
              <article>
                <div className="article-inner">
                  <p>
                    I{`'`}m currently exploring advanced optimization
                    techniques, distributed systems design, and innovative
                    implementations of APIs. My competitive coding journey
                    keeps me sharp with algorithmic problem-solving. I am
                    also deeply interested in the intersection of AI and
                    software development, exploring how AI can enhance
                    development workflows, optimize performance, and drive
                    innovation in web applications and infrastructure. I
                    incorporate the same in the projects I work on as well,
                    leveraging AI context enhancements and efficient
                    prompting. I always use these techniques in my in-house
                    tool projects, which are used team-wide. Currently I am
                    working on Sync Gateway which is a critical component
                    used to link Couchbase Server to Couchbase Lite
                    (mobile) database and making sure the data stays in
                    sync across all the nodes involved in a single cluster.
                    This makes my data consistency and reliability concepts
                    sharp as they{`'`}re a top priority.
                  </p>
                </div>
              </article>
            </div>

            {/* Skills & Tech Stack */}
            <div className="dropdown-container">
              <header className="clearfix">
                <h1>Skills &amp; Tech Stack</h1>
                <figure className="expand">+</figure>
              </header>
              <article>
                <div className="article-inner">
                  <p>
                    React • TypeScript • Next.js • Node.js • Python • Go •
                    C++ • MongoDB • PostgreSQL • AWS
                  </p>
                </div>
              </article>
            </div>

            {/* Interests */}
            <div className="dropdown-container">
              <header className="clearfix">
                <h1>Interests</h1>
                <figure className="expand">+</figure>
              </header>
              <article>
                <div className="article-inner">
                  <p>
                    Gaming • Web Development • Competitive Programming •
                    Machine Learning • Open Source • AI • Distributed
                    Systems • Cloud Computing • Optimization • Blogging •
                    Hands-on-learning • Self projects • Infra development •
                    Performance Tuning
                  </p>
                </div>
              </article>
            </div>

            {/* Education / Experience */}
            <div className="dropdown-container">
              <header className="clearfix">
                <h1>Education / Experience</h1>
                <figure className="expand">+</figure>
              </header>
              <article>
                <div className="article-inner">
                  <div className="timeline">
                    <ul>
                      <li>
                        <div className="content">
                          <h3>Couchbase Software Developer 2</h3>
                          <p>
                            Working in a senior Capacity in the CBL (Couchbase
                            Lite) and SGW (Sync Gateway). Working on the
                            releases related to the Peer-to-Peer architecture of
                            the Mobile platform for couchbase.
                          </p>
                        </div>
                        <div className="point"></div>
                        <div className="date">
                          <h4>March 2025 - Present</h4>
                        </div>
                      </li>
                      <li>
                        <div className="content">
                          <h3>Couchbase Software Developer 1</h3>
                          <p>
                            Worked on Developing the APIs related to Capella (a
                            product that offers the capabilities of the Couchbase
                            Database on Cloud, supporting AWS, GCP and Azure
                            cloud platforms for hosting/provisioning). Worked on
                            the Management v4 Public APIs that are being released
                            in a CI/CD fasion.
                          </p>
                        </div>
                        <div className="point"></div>
                        <div className="date">
                          <h4>July 2023 - February 2025</h4>
                        </div>
                      </li>
                      <li>
                        <div className="content">
                          <h3>Couchbase Internship</h3>
                          <p>
                            6 month intern, hired during 3rd year of B-tech CS
                            degree. Worked as a developer in the in-house tool
                            development team intern, where the tools being
                            developed were used by the overall coucbase
                            developers in the conmpany, using CEAN stack
                            (Couchbase [as the Database] - ExpressJS - Angular -
                            NodeJs)
                          </p>
                        </div>
                        <div className="point"></div>
                        <div className="date">
                          <h4>January - July 2023</h4>
                        </div>
                      </li>
                      <li>
                        <div className="content">
                          <h3>Zscaler Internship</h3>
                          <p>
                            2 month summer intern, hired during 3rd year of
                            B-tech CS degree. Worked as a frontend developer,
                            using ReactJS primarily. Explored Linters, ESLint
                            primarily
                          </p>
                        </div>
                        <div className="point"></div>
                        <div className="date">
                          <h4>June - Aug 2022</h4>
                        </div>
                      </li>
                      <li>
                        <div className="content">
                          <h3>Inter</h3>
                          <p>
                            Completed my Intermediate education / Senior High
                            School / Secondary Education with a percentage of 87
                          </p>
                        </div>
                        <div className="point"></div>
                        <div className="date">
                          <h4>April 2018</h4>
                        </div>
                      </li>
                      <li>
                        <div className="content">
                          <h3>Merit</h3>
                          <p>
                            Completed my education uptil 10th grade with a score
                            of 10 GPA
                          </p>
                        </div>
                        <div className="point"></div>
                        <div className="date">
                          <h4>March 2016</h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div className="vl"></div>

        {/* Form */}
        <form className="mordernForm" method="post" name="Form">
          <hr />
          <label htmlFor="the-name">How should I recognize you?</label>
          <input type="text" id="the-name" className="gradient-text" />
          <label htmlFor="curiosity">Why so curious?</label>
          <input
            placeholder="Example : Nice Website / Crap Website"
            type="text"
            id="curiosity"
            className="gradient-text"
            list="autoComp"
          />
          <datalist id="autoComp">
            <option value="Want to know more about You."></option>
            <option value="Nice Website.."></option>
            <option value="Lets be friends! :)"></option>
            <option value="Want to learn Web Dev from you."></option>
            <option value="Want to buy you a coffee..!"></option>
            <option value="Let's catch up! We used to hang out."></option>
          </datalist>
          <label htmlFor="meter">
            On a scale of 1-100, how much do you like the portfolio
          </label>
          <input type="range" id="meter" min="0" max="100" />
          <input type="image" className="submit" src="/dm.png" alt="Submit" />
          <hr />
        </form>

        <div className="vl"></div>

        {/* Get in Touch */}
        <div className="wrapper">
          <div className="get-in-touch">
            <img
              className="get-in-touch-img"
              src="/social-media.png"
              alt="Social Media"
            />
            <p className="get-in-touch-message gradient-text">Get in Touch</p>
            <div className="links">
              <div className="links-container">
                <img
                  className="link-img"
                  src="/instagram.png"
                  alt="Instagram"
                />{" "}
                <a
                  className="gradient-text"
                  href="https://www.instagram.com/__vipul23__/"
                >
                  https://www.instagram.com/__vipul23__/
                </a>
              </div>
              <div className="links-container">
                <img
                  className="link-img"
                  src="/whatsapp.png"
                  alt="Whatsapp"
                />
                <p style={{ display: "inline" }} className="gradient-text">
                  {" "}
                  +917986237204
                </p>
              </div>
              <div className="links-container">
                <img
                  className="link-img"
                  src="/linkedin.png"
                  alt="LinkedIn"
                />{" "}
                <a
                  className="gradient-text"
                  href="https://www.linkedin.com/in/vipul-bhardwaj-051b82184/"
                >
                  https://www.linkedin.com/in/vipul-bhardwaj-051b82184/
                </a>
              </div>
              <div className="links-container">
                <img className="link-img" src="/email.png" alt="Email" />{" "}
                <p style={{ display: "inline" }} className="gradient-text">
                  vipulbhardwaj1011@gmail.com
                </p>
              </div>
              <div className="links-container">
                <img className="link-img" src="/github.png" alt="GitHub" />{" "}
                <a
                  className="gradient-text"
                  href="https://github.com/vipbhardwaj"
                >
                  https://github.com/vipbhardwaj
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="vl"></div>
        <img className="line-img-end" src="/into-bg.webp" alt="" />
      </div>
    </div>
  );
}
