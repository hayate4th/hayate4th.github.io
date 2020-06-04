import React from "react";

import { Props as ColumnProps } from "./components/MusicColumn";
import MusicGraphics from "./components/MusicGraphics";

const App = () => {
  const createColumnProps = (columnLength: number): ColumnProps[] => {
    const results = [];
    const startColor = Math.floor(Math.random() * 20);

    for (let i = 0; i < columnLength; i++) {
      results.push({
        length: Math.floor(Math.random() * 15) + 1,
        color: 10 * (i + startColor),
      });
    }
    return results;
  };

  return (
    <>
      <MusicGraphics columnProps={createColumnProps(20)} />
    </>
  );
};

export default App;
