import React from "react";
import styled from "styled-components";

import BalloonSenderImg from "../../assets/images/works/balloon_sender_img.png";

const WorkCard: React.FC = () => {
  return (
    <Wrapper>
      <Thumbnail src={BalloonSenderImg} />
      <Contents>
        <WorkTitle>balloon-sender v2</WorkTitle>
        <WorkDescription>
          Write whatever you want, tie it up to a balloon, and send it high into
          the sky!
        </WorkDescription>
      </Contents>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 3px solid #000;
  width: 250px;
`;

const Thumbnail = styled.img`
  display: block;
  width: 250px;
`;

const Contents = styled.div`
  padding: 10px;
`;

const WorkTitle = styled.h3`
  font-size: 1.2rem;
  margin-top: 0;
  text-align: center;
`;

const WorkDescription = styled.p`
  margin: 0;
`;

export default WorkCard;
