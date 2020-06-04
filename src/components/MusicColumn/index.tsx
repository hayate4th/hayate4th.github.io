import React from "react";
import styled from "styled-components";

import { Colors } from "../../colors";
import MusicBlock from "../MusicBlock";

type MusicColumnProps = {
  length: number;
  color: Colors;
};

const MusicColumn: React.FC<MusicColumnProps> = ({ length, color }) => {
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
  div {
    margin-bottom: 5px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export default MusicColumn;
