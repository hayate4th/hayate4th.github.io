import React from "react";
import styled from "styled-components";

type MusicBlockProps = {
  color: number;
};

export const baseClass = "music-block";
const MusicBlock: React.FC<MusicBlockProps> = ({ color }) => {
  return (
    <Block
      className={`${baseClass}-${color}`}
      style={{ backgroundColor: `hsl(${color}, 100%, 50%)` }}
    />
  );
};

const Block = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 5px;
`;

export default MusicBlock;
