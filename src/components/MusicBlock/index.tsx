import React from "react";
import styled from "styled-components";

type MusicBlockProps = {
  color: number;
};

const MusicBlock: React.FC<MusicBlockProps> = ({ color }) => {
  return (
    <Block
      className="animated-music-block"
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
