import { Link } from "react-router-dom";
import UrbanCompanyLogo from "../assets/urban-company-logo.webp";
import OracleLogo from "../assets/oracle-logo.png";
import CleartaxLogo from "../assets/cleartax-logo.png";
import ProfilePicture from "../assets/profile-picture.png";
import Card from "../components/Card";
import Checkbox from "../components/Checkbox";

const Home = () => {
  return (
    <div className="snap-mandatory snap-y overflow-scroll">
      {/* <section className="bg-teal-200 w-full h-[calc(100vh-80px)] snap-start snap-always shrink-0">
        <div className="w-full h-full bg-pink-200 relative">
          <Link to="/overview">
            <img
              src={SampleImage}
              alt="hero"
              className="w-full h-full object-cover"
            />
          </Link>
          <div className="absolute bottom-[120px] right-0 left-0 m-auto w-[200px] h-12 block md:hidden">
            <Link to="overview">
              <button className="w-[200px] h-12 border-black border-2 p-2.5 bg-[#FFF59F] hover:bg-[#FFF066] active:bg-[#FFE500] shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] rounded-full">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section> */}
      <section className="bg-lime-100 w-full md:h-screen lg:h-full snap-start snap-always shrink-0">
        <div className="px-5 md:px-24 h-full py-20 2xl:p-32 flex flex-col md:flex-row justify-between items-center">
          <div className="flex-1 md:mr-12 mb-12 md:mb-0">
            <h2 className="text-5xl md:text-5xl mb-12 tracking-tight font-bold">
              <p>I am Ishan.</p>
            </h2>
            <div className="flex mb-4">
              <Checkbox size="lg" defaultChecked />
              <p className="text-xl md:text-2xl ml-3">
                Senior Software Engineer - 5 years experience in Urban Company,
                Oracle, Cleartax
              </p>
            </div>
            <div className="flex  mb-4">
              <Checkbox size="lg" defaultChecked />
              <p className="text-xl md:text-2xl ml-3">
                Head of engineering - Led a small team in an early stage
                healthtech startup
              </p>
            </div>
            <div className="flex  mb-4">
              <Checkbox size="lg" defaultChecked />
              <p className="text-xl md:text-2xl ml-3">
                Entrepreneur - Ran a mutual fund investment startup in 2018,
                running an AI startup in 2023
              </p>
            </div>
            <div className="flex">
              <Checkbox size="lg" defaultChecked />
              <p className="text-xl md:text-2xl ml-3">4.9+ rated Superhost on Airbnb</p>
            </div>

            <div className="flex">
              <Checkbox size="lg" />
              <p className="text-xl md:text-2xl ml-3">
                TODO: Genius, Billionaire, Playboy, Philanthropist
              </p>
            </div>
          </div>
          <div className="flex-1 w-full h-full max-h-[600px] flex items-center justify-center">
            <img
              src={ProfilePicture}
              alt="hero"
              className="h-full max-h-[400px] hidden md:inline"
            />
            <img
              src={ProfilePicture}
              alt="hero"
              className="h-full max-h-[400px] inline md:hidden"
            />
          </div>
        </div>
      </section>
      <section className="bg-pink-200 w-full md:h-full snap-start snap-always shrink-0 ">
        <div className="px-5 md:px-24 h-full py-20 2xl:p-32">
          <h2 className="text-6xl md:text-7xl mb-12 tracking-tight font-bold">
            Experience
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-[30%] mb-12 md:mb-0">
              <Card
                thumbnail={UrbanCompanyLogo}
                date="Fullstack Engineer"
                title="Implmented microfrontend architecture"
                description="Led a team of three people to rearchitect the frontend architecture. This frontend architecture was then adopted throughout frontend teams in Urban Company"
                callToActionText="Read more"
                calllToActionLink="/components/urbancompany"
              />
            </div>
            <div className="md:w-[30%] mb-12 md:mb-0">
              <Card
                thumbnail={OracleLogo}
                date="Software engineer"
                title="Developed service to verify the billing"
                description="Worked in the cloud identity team. Developed a service to verify metering to check the billing sent to the users."
                callToActionText="Read more"
                calllToActionLink="components/oracle"
              />
            </div>
            <div className="md:w-[30%]">
              <Card
                thumbnail={CleartaxLogo}
                date="Senior Software Engineer"
                title="Developed the investment app"
                description="Was part of the core app team that developed the mutual fund investment app for the cleartax brand"
                callToActionText="Read more"
                calllToActionLink="components/cleartax"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-violet-100 w-full h-auto px-5 md:px-24 py-20 snap-start snap-always shrink-0 p-10">
        {/* <div className="px-5 md:px-24 h-full py-20 2xl:p-32 flex flex-col md:flex-row justify-between items-center"> */}
        {/* <div className="w-full md:w-6/12 md:h-full flex flex-col md:mr-12 mb-12 md:mb-0">
            <div className="w-full">
              <SyntaxHighlighter
                language="javascript"
                style={a11yDark}
                className="rounded-lg"
              >
                {cardMarkup()}
              </SyntaxHighlighter>
            </div>
          </div> */}
        <div className="w-full md:w-5/12">
          <h2 className="text-6xl md:text-7xl mb-6 tracking-tight font-bold">
            Contact me
          </h2>
          <p className="text-lg mb-12">
            I like hacking into codebases. If you give me a large codebase and
            just give me 24 hours to add a new feature then those 24 hours are
            going to be incredibly fun for me.
          </p>
          <div className="flex flex-col space-y-6 mb-10">
            <input
              className="border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
              placeholder="Name"
            />
            <input
              className="border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md"
              placeholder="Email"
            />
          </div>

          <Link to="/">
            <button className="w-[200px] h-12 border-black border-2 p-2.5 bg-[#B8FF9F] hover:bg-[#9dfc7c] active:bg-[#7df752] shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] rounded-full">
              Submit
            </button>
          </Link>
        </div>
        {/* </div> */}
      </section>
      <footer className="w-full h-[200px] m-auto flex justify-between items-center px-5 md:px-24 2xl:p-32 bg-black">
        <div>
          <Link to="/" className="text-2xl font-bold text-white">
            ishansharma.me
          </Link>
        </div>
        <div>🌈 ❤️ 🎸</div>
      </footer>
    </div>
  );
};

export default Home;
