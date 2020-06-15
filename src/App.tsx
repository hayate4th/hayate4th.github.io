import React, { useState } from "react";

import { Props as ColumnProps } from "./components/MusicColumn";
import MusicGraphics from "./components/MusicGraphics";
import MainPortfolio from "./components/MainPortfolio";

const App = () => {
  const [animationHasFinished, setAnimationHasFinished] = useState(false);
  const createColumnProps = (columnLength: number): ColumnProps[] => {
    const results = [];
    const startColor = Math.floor(Math.random() * 20);
    for (let i = 0; i < columnLength; i++) {
      results.push({
        id: i,
        length: Math.floor(Math.random() * 15) + 1,
        color: 10 * (i + startColor),
      });
    }
    return results;
  };

  return (
    <>
      {!animationHasFinished ? (
        <MusicGraphics
          columnProps={createColumnProps(20)}
          setAnimationHasFinished={setAnimationHasFinished}
        />
      ) : (
        <MainPortfolio />
      )}
    </>
  );
};

export default App;
