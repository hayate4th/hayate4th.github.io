import React, { useEffect, useState } from "react";
import styled from "styled-components";
import anime from "animejs";

import MusicColumn, { Props as ColumnProps } from "../MusicColumn";

type Props = {
  columnProps: ColumnProps[];
  setAnimationHasFinished: React.Dispatch<React.SetStateAction<boolean>>;
};

const MusicGraphics: React.FC<Props> = ({
  columnProps,
  setAnimationHasFinished,
}) => {
  const [isMouseOnButton, setIsMouseOnButton] = useState(false);
  const [isAnimationStopped, setIsAnimationStopped] = useState(false);

  useEffect(() => {
    anime({
      targets: ".animated-title",
      rotate: [-20, 20],
      duration: 750,
      direction: "alternate",
      easing: "linear",
      loop: true,
    });
  }, []);

  useEffect(() => {
    (async () => {
      if (isAnimationStopped) {
        anime.remove(".animated-music-block");
        anime.remove(".animated-music-graphics");

        const promise = anime({
          targets: ".animated-music-block",
          translateX: anime.stagger(3000, {
            grid: [20, 1],
            from: "center",
            axis: "x",
          }),
          translateY: anime.stagger(3000, {
            grid: [20, 9],
            from: "center",
            axis: "y",
          }),
          scale: 5,
          duration: 1000,
          easing: "linear",
        });
        await promise.finished;
        setAnimationHasFinished(true);
      }
    })();
  }, [isAnimationStopped, setAnimationHasFinished]);

  const onMouseEnterHandler = () => setIsMouseOnButton(true);

  const onMouseLeaveHandler = () => setIsMouseOnButton(false);

  const onClickHandler = () => setIsAnimationStopped(true);

  return (
    <FlexWrapper className="animated-music-graphics">
      {!isAnimationStopped && (
        <TitleButton
          className="animated-title"
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={onMouseLeaveHandler}
          onClick={onClickHandler}
        >
          {isMouseOnButton ? "Enter Here" : "Welcome!"}
        </TitleButton>
      )}
      {columnProps.map((columnProp, index) => (
        <MusicColumn key={index} {...columnProp} />
      ))}
    </FlexWrapper>
  );
};

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  // MusicBlock height: 25px
  // Maximum Number of MusicBlocks: 15
  // MusicBlock margin-bottom: 5px
  // Maximum Number of MusicBlock margin-bottom: 14
  height: calc(25px * 15 + 5px * 14);
  padding-top: calc((25px * 15 + 5px * 14) / 3);

  & > div {
    margin-right: 5px;

    &:last-of-type {
      margin-right: 0px;
    }
  }
`;

const TitleButton = styled.button`
  appearance: none;
  background-color: transparent;
  border: 10px solid #fff;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 5rem;
  font-weight: bold;
  outline: none;
  padding: 10px 50px;
  position: absolute;
  top: 45%;
  z-index: 9999;

  // TODO: Make the text color transparent
  &:hover {
    background-color: white;
    color: black;
  }
`;

export default MusicGraphics;
