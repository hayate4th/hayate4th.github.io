import React from "react";
import styled from "styled-components";

import { getBackgroundColorFromClassName } from "../../utils/MusicBlock";
import { Colors } from "../../colors";

type MusicBlockProps = {
  color: Colors;
};

export const baseClass = "music-block";
const MusicBlock: React.FC<MusicBlockProps> = ({ color }) => {
  return <Block className={`${baseClass}-${color}`} />;
};

const Block = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 5px;
  background-color: ${(props) =>
    getBackgroundColorFromClassName(props.className!)};
`;

export default MusicBlock;
