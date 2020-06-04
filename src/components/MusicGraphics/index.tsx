import React, { useEffect } from "react";
import styled from "styled-components";
import anime from "animejs";

import MusicColumn, { Props as ColumnProps } from "../MusicColumn";

type Props = {
  columnProps: ColumnProps[];
};

const MusicGraphics: React.FC<Props> = ({ columnProps }) => {
  useEffect(() => {
    anime({
      targets: ".animated-music-graphics",
      scale: [0.85, 1.15],
      duration: 250,
      easing: "linear",
      direction: "alternate",
      loop: true,
    });
  }, []);

  return (
    <FlexWrapper className="animated-music-graphics">
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

export default MusicGraphics;
