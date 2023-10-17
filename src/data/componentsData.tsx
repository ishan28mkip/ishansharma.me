import Checkbox from "../components/Checkbox";

import IconButtonMarkup from "../data/iconButtonMarkup";
import buttonMarkup from "./buttonMarkup";
import cardMarkup from "./cardMarkup";
import checkboxMarkup from "./checkboxMarkup";
import dialogMarkup from "./dialogMarkup";
import inputMarkup from "./inputMarkup";
import { Link } from "react-router-dom";
import HomeScreenInvestu from "../assets/home-screen-investu.jpeg";
import BasketScreenInvestu from "../assets/basket-screen-investu.jpeg";
import GoalScreenInvestu from "../assets/goal-screen-investu.jpeg";
import RatingCleartax from "../assets/rating-page-cleartax.jpeg";
import WatchlistCleartax from "../assets/watchlist-cleartax.jpeg";

const componentsData = [
  {
    name: "Urban Company",
    path: "urbancompany",
    component: (
      <div>
        <h1 className="font-bold capitalize text-4xl mb-12">
          {" "}
          Fullstack engineer @ Urban Company
        </h1>
        <section className="mb-12">
          <h2 className="text-2xl mb-6">
            Implemented microfrontend architecture
          </h2>
          <div className="mb-8">
            <div className="mb-4 leading-relaxed flex">
              <Checkbox defaultChecked />
              <p className="ml-2 -mt-1.5 align-top">
                <strong>Implemented the microfrontend architecture:</strong>
                <li>
                  Led a team of three people to rearchitect the frontend
                  architecture
                </li>
                <li>
                  This frontend architecture was then adopted throughout
                  frontend teams in Urban Company{" "}
                </li>
                <li>Setup verdacio for hosting internal libraries </li>
                <li>Automated versioning using git commits </li>
                <li>Live Documentation using Storybook </li>
                <li>Setup Lerna to use multiple versioned repos</li>
              </p>
            </div>
            <div className="mb-4 leading-relaxed flex">
              <Checkbox defaultChecked />
              <p className="ml-2 -mt-1.5 align-top">
                <strong>
                  Created a library to dynamically generate dashboards like
                  retool:
                </strong>
                <li>
                  Created library to covert json forms into react forms
                  dynamically
                </li>
                <li>
                  Led the revamp of data entry dashboards for business and sales
                  teams.
                </li>
                <li>
                  Enabled business team to create their own data entry
                  dashboards with little or no knowledge of tech
                </li>
              </p>
            </div>
          </div>

          <Link
            to="https://www.urbancompany.com/"
            target="_blank"
            className="flex justify-start"
          >
            <button className="w-[200px] h-12 border-black border-2 p-2.5 bg-[#A8A6FF] hover:bg-[#918efa] active:bg-[#807dfa] shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] rounded-full">
              Visit Website
            </button>
          </Link>
        </section>
      </div>
    ),
    markup: cardMarkup,
  },
  {
    name: "Oracle",
    path: "oracle",
    component: (
      <div>
        <h1 className="font-bold capitalize text-4xl mb-12">
          Software Engineer @ Oracle
        </h1>
        <section className="mb-12">
          <h2 className="text-2xl mb-6">
            Developed the service to verify metering for Oracle Cloud Identity
            Service
          </h2>
          <div className="mb-8">
            <div className="mb-4 leading-relaxed flex">
              <Checkbox defaultChecked />
              <p className="ml-2 -mt-1.5 align-top">
                <strong>
                  Developed the service to verify bills sent to customers
                </strong>
                <li>Wrong bills were sent at times to customers</li>
                <li>
                  Created the python service that executes metering logic before
                  sending the bill
                </li>
                <li>Raises notification if the billing doesn't match</li>
              </p>
            </div>
            <div className="mb-4 leading-relaxed flex">
              <Checkbox defaultChecked />
              <p className="ml-2 -mt-1.5 align-top">
                <strong>
                  Replaced identity service cache from internal tool named
                  coherence to redis
                </strong>
                <br />
                Internal caching tool was getting deprecated, shifted caching
                logic to redis
              </p>
            </div>

            <div className="mb-4 leading-relaxed flex">
              <Checkbox defaultChecked />
              <p className="ml-2 -mt-1.5 align-top">
                <strong>
                  Implemented monitoring using Prometheus and Grafana and
                  created dashboards for business usecases
                </strong>
                <li>
                  Created dashboards to monitor various technical and business
                  usecases
                </li>
                <li>
                  Technical teams could now view service uptimes, loads, etc in
                  realtime
                </li>
                <li>
                  Management could now view business metrics like billing to
                  date in realtime
                </li>
              </p>
            </div>
          </div>
        </section>
      </div>
    ),
    markup: buttonMarkup,
  },
  {
    name: "Investu",
    path: "investu",
    component: (
      <div>
        <h1 className="font-bold capitalize text-4xl mb-12">
          {" "}
          Founder @ Investu.in
        </h1>
        <section className="mb-12">
          <h2 className="text-2xl mb-6">
            Investu.in was a direct plan mutual fund investment platform that
            focussed on goal based investments
          </h2>
          Goal based investments has been repeatedly shown in research to give
          superior returns as well as being more fulfilling. This happens
          because people save more when they are invested to reach a goal.
          <li>
            Uses a goal first approach to investments, investments can only be
            made for a goal
          </li>
          <li>
            Platform provides very specific goals like saving for iPhone 13, or
            an Audi A8, or sister's marriage which allows people to perceive
            goals, just saving for a car or phone placeholder isn't appealing on
            its own
          </li>
          <li>
            Platform gamifies investments and gives rewards on investments when
            goals are achieved
          </li>
          <br />
          <div className="mb-8">
            <div className="mb-4 leading-relaxed flex">
              <Checkbox defaultChecked />
              <p className="ml-2 -mt-1.5 align-top">
                <strong>Responsibilities: </strong>I was responsible for the
                building & managing the product, delivering the financial
                logistics, and leading the tech team. Co-founder was managing
                sales, marketing and customer acquisition.
              </p>
            </div>
            <div className="mb-4 leading-relaxed flex">
              <Checkbox defaultChecked />
              <p className="ml-2 -mt-1.5 align-top">
                <strong>Team:</strong>
                <li>
                  Had two software engineers working in backend and DevOps,
                  developing the backend in NestJS(Node.js) and DevOps was done
                  via AWS.
                </li>
                <li>
                  Had a react native developer, developing the app for both play
                  store and app store
                </li>
                <li>
                  Two economics graduates from Delhi University were managing
                  financial operations and algorithm
                </li>
              </p>
            </div>
          </div>
          <h2 className="text-2xl mb-6 font-bold">Screenshots from the app</h2>
          <div className="flex space-x-10">
            <img
              src={HomeScreenInvestu}
              alt="thumbnail"
              className=" h-[700px]"
            />
            <img
              src={GoalScreenInvestu}
              alt="thumbnail"
              className="h-[700px]"
            />
            <img
              src={BasketScreenInvestu}
              alt="thumbnail"
              className=" h-[700px]"
            />
          </div>
        </section>
      </div>
    ),
    markup: IconButtonMarkup,
  },
  {
    name: "Cleartax",
    path: "cleartax",
    component: (
      <div>
        <h1 className="font-bold capitalize text-4xl mb-12">
          {" "}
          Senion Software Engineer @ Cleartax
        </h1>
        <section className="mb-12">
          <h2 className="text-2xl mb-6">
            Part of the core team that developed the investment app
          </h2>
          <div className="mb-8">
            <div className="mb-4 leading-relaxed flex">
              <Checkbox defaultChecked />
              <p className="ml-2 -mt-1.5 align-top">
                <strong>Web App: </strong>Managed and stabilized the web
                application developed in React and NextJS. Was instrumental in
                solving multiple bugs and re-architecting core components using
                the micro-frontend framework.
              </p>
            </div>
            <div className="mb-4 leading-relaxed flex">
              <Checkbox defaultChecked />
              <p className="ml-2 -mt-1.5 align-top">
                <strong>Implemented features in the mobile app like: </strong>
                <li>
                  Share and compare feature, worked with product manager to
                  improve comparison parameters and worked to make share more
                  intuitive and more impactful.
                </li>
                <li>Deep linking of mutual fund pages</li>
                <li>Adding support for international mutual funds</li>
                <li>
                  In app rating support, worked with the product manager to fine
                  tune some feature parameters like behaviour of users who had
                  already rated, etc.
                </li>
              </p>
            </div>
          </div>
          <h2 className="text-2xl mb-6 font-bold">
            Screenshots of some of the features I implemented
          </h2>
          <div className="flex space-x-10">
            <img src={RatingCleartax} alt="thumbnail" className=" h-[700px]" />
            <img
              src={WatchlistCleartax}
              alt="thumbnail"
              className="h-[700px]"
            />
          </div>
        </section>
      </div>
    ),
    markup: inputMarkup,
  },
  {
    name: "Scigenom Labs",
    path: "scigenom",
    component: (
      <div>
        <h1 className="font-bold capitalize text-4xl mb-12">
          {" "}
          Head of Engineering @ Scigenom Labs
        </h1>
        <h2 className="text-2xl mb-6">
          Was part of the healthtech startup creating dashboards to empower
          cancer patients by giving them insights based on their medical report
          data
        </h2>
        <section className="mb-12">
          <h2 className="text-2xl mb-6">
            Hired the initial team and created the prototype
          </h2>
          <div className="mb-8">
            <div className="mb-4 leading-relaxed flex">
              <Checkbox defaultChecked />
              <p className="ml-2 -mt-1.5 align-top">
                <strong>Hired the engineering team:</strong>
                <p>
                  Got top talent for frontend engineering, backend engineering
                  and data science.
                </p>
              </p>
            </div>
            <div className="mb-4 leading-relaxed flex">
              <Checkbox defaultChecked />
              <p className="ml-2 -mt-1.5 align-top">
                <strong>
                  Created a scheduling and video call service for the doctors
                  like cal.com
                </strong>
              </p>
            </div>
            <div className="mb-4 leading-relaxed flex">
              <Checkbox defaultChecked />
              <p className="ml-2 -mt-1.5 align-top">
                <strong>
                  Implemented a machine learning pipeline to gain insights from
                  medical reports
                </strong>
              </p>
            </div>
          </div>
        </section>
      </div>
    ),
    markup: dialogMarkup,
  },
  {
    name: "magify.design",
    path: "magify",
    component: (
      <div>
        <h1 className="font-bold capitalize text-4xl mb-6">magify.design</h1>
        <section className="mb-12">
          <h2 className="text-2xl">Midjourney for product design</h2>
          <div className="mb-6">
            Generative UI/UX using AI prompts based on your Design System
          </div>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5AtNYATIWwY?si=Gr7acGo_FzWPbE67"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <Link
            to="https://magify.design"
            target="_blank"
            className="flex justify-start mt-6"
          >
            <button className="w-[200px] h-12 border-black border-2 p-2.5 bg-[#A8A6FF] hover:bg-[#918efa] active:bg-[#807dfa] shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] rounded-full">
              Visit Website
            </button>
          </Link>
        </section>
      </div>
    ),
    markup: checkboxMarkup,
  },
];

export default componentsData;
