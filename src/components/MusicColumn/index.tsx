import React from "react";
import styled from "styled-components";

import MusicBlock from "../MusicBlock";

export type Props = {
  length: number;
  color: number;
};

const MusicColumn: React.FC<Props> = ({ length, color }) => {
  const range = Array.from({ length }, (v, k) => k);
  return (
    <Column>
      {range.map((index) => (
        <MusicBlock key={index} color={color} />
      ))}
    </Column>
  );
};

const Column = styled.div`
  align-self: flex-end;

  div {
    margin-bottom: 5px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export default MusicColumn;
