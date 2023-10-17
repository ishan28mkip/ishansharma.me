import Checkbox from "../components/Checkbox";

const AboutMe = () => {
  return (
    <div>
      <h1 className="font-bold capitalize text-4xl mb-12"> About me</h1>
      <section className="mb-12">
        <h2 className="text-2xl mb-6"></h2>
        <div className="mb-8">
          <div className="mb-4 leading-relaxed flex">
            <Checkbox defaultChecked/>
            <p className="ml-2 -mt-1.5 align-top">
              <strong>I like solving difficult challenges: </strong> Challenges
              and hard problems excite me, when someone says this is impossible
              it creates this urge in me to prove them wrong.
            </p>
          </div>
          <div className="mb-4 leading-relaxed flex">
            <Checkbox defaultChecked/>
            <p className="ml-2 -mt-1.5 align-top">
              <strong>
                If the job requires learning something new I will do it:{" "}
              </strong>{" "}
              Over my career I have worked in devops, backend, frontend, app
              development and now I am learning machine learning for my current
              startup.
            </p>
          </div>
          <div className="leading-relaxed flex">
            <Checkbox defaultChecked/>
            <p className="ml-2  -mt-1.5 align-top">
              <strong>Love to dance and travel:</strong> Yes, I have a life too.
            </p>
          </div>
        </div>
        <a href="mailto:ishan28mkip@gmail.com" className="flex justify-start">
          <button className="w-[200px] h-12 border-black border-2 p-2.5 bg-[#A8A6FF] hover:bg-[#918efa] active:bg-[#807dfa] shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] rounded-full">
            Contact Me
          </button>
        </a>
      </section>
    </div>
  );
};

export default AboutMe;
