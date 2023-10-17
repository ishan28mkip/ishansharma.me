import {  useContext, useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { WindowHeightDispatchContext } from "../context/WindowHeightContext";
import cardMarkup from "../data/cardMarkup";
import componentsData from "../data/componentsData";
import SampleImage from "../assets/neo-brutalism-image1.jpg";

type displayingComponentType = {
  name: string;
  path: string;
  component: React.ReactNode;
  markup: () => string;
};

const Component = () => {
  const [displayingComponent, setDisplayingComponent] =
    useState<displayingComponentType>({
      name: "Card",
      path: "card",
      component: (
        <Card
          thumbnail={SampleImage}
          date="June 15th, 2023"
          title="Neo Brutallism"
          description="Neobrutalism is an aesthetic characterized by high contrast
              elements, bright colors, and bold shapes. It is often used to make
              a statement, as it is meant to be eye-catching and stand out to
              the viewer. It is also used in user interface and web design, with
              features such as vibrant colors and bold shapes. Neobrutalism can
              also be used in print design, with an example being a bold shape
              with a vibrant color fill applied to it."
          callToActionText="Get Started"
          calllToActionLink="/overview"
        />
      ),
      markup: cardMarkup,
    });
  const refElement = useRef<HTMLInputElement>(null);
  const windowHeightDispatch = useContext(WindowHeightDispatchContext);

  let windowInnerHeight = window.innerHeight;

  const { id } = useParams();


  const switchComopnents = (id: string) => {
    const selectedData = componentsData.find((obj) => obj.path === id);
    selectedData && setDisplayingComponent(selectedData);
  };

  useEffect(() => {
    id && switchComopnents(id);
  }, [id]);

  useEffect(() => {
    const elementHeight = Number(
      JSON.stringify(refElement?.current?.getBoundingClientRect().height)
    );
    windowHeightDispatch &&
      windowHeightDispatch({ type: elementHeight > windowInnerHeight });
  }, [displayingComponent]);

  return (
    <div className="relative" ref={refElement}>
      {displayingComponent && (
        <>
            <div>{displayingComponent?.component}</div>
        </>
      )}
    </div>
  );
};

export default Component;
