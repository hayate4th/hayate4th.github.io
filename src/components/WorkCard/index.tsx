import React from "react";
import styled from "styled-components";

import BalloonSenderImg from "../../assets/images/works/balloon_sender_img.png";

const WorkCard: React.FC = () => {
  return (
    <Wrapper>
      <Thumbnail src={BalloonSenderImg} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 3px solid #000;
  padding: 20px;
`;

const Thumbnail = styled.img`
  width: 200px;
`;

export default WorkCard;
