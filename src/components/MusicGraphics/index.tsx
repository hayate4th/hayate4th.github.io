import React, { useEffect, useState } from "react";
import styled from "styled-components";
import anime from "animejs";

import MusicColumn, { Props as ColumnProps } from "../MusicColumn";

type Props = {
  columnProps: ColumnProps[];
};

const MusicGraphics: React.FC<Props> = ({ columnProps }) => {
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
    if (isAnimationStopped) {
      anime.remove(".animated-music-block");
      anime.remove(".animated-music-graphics");

      anime({
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
        duration: 3000,
        easing: "linear",
      });
    }
  }, [isAnimationStopped]);

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
  font-weight: bold;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  appearance: none;
  color: white;
  font-size: 80px;
  position: absolute;
  border: 10px solid white;
  border-radius: 5px;
  padding: 10px 50px;
  z-index: 9999;
  top: 45%;

  // TODO: Make the text color transparent
  &:hover {
    background-color: white;
    color: black;
  }
`;

export default MusicGraphics;
