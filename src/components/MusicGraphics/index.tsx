import React from "react";
import styled from "styled-components";

import MusicColumn, { Props as ColumnProps } from "../MusicColumn";

type Props = {
  columnProps: ColumnProps[];
};

const MusicGraphics: React.FC<Props> = ({ columnProps }) => {
  return (
    <FlexWrapper>
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
