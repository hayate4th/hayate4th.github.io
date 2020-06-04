import React, { useEffect } from "react";
import styled from "styled-components";
import anime from "animejs";

import MusicBlock from "../MusicBlock";

export type Props = {
  id: number;
  length: number;
  color: number;
};

const MusicColumn: React.FC<Props> = ({ id, length, color }) => {
  useEffect(() => {
    anime({
      targets: `.animated-music-column-${id} .animated-music-block`,
      opacity: ["0", "1"],
      delay: anime.stagger(anime.random(10, 50), {
        grid: [1, length],
        from: "last",
      }),
      direction: "alternate",
      duration: 150,
      loop: true,
    });
  }, [id, length]);

  const range = Array.from({ length }, (v, k) => k);
  return (
    <Column className={`animated-music-column-${id}`}>
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
