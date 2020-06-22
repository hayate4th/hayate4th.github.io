import React from "react";
import styled from "styled-components";

import WorkCard from "../WorkCard";

const WorksPage: React.FC = () => {
  return (
    <>
      <PageTitle>Works</PageTitle>
      <WorkCard />
    </>
  );
};

const PageTitle = styled.h2`
  font-size: 2rem;
  margin-top: 0;
  text-align: center;
`;

export default WorksPage;
