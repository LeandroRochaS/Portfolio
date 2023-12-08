import React, { useState } from "react";
import styled from "styled-components";

const SvgWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Tooltip = styled.div`
  position: absolute;
  top: 150%;
  left: 50%;
  transform: translateX(-50%);
  background-color: transparent;
  color: #fff;
  font-size: 1.2rem;
  padding: 5px;
  border-radius: 3px;
  transition: all 200ms;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
`;

const ImageWithTooltip = ({
  imageName,
  svg,
}: {
  imageName: string;
  svg: React.ReactNode;
}) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  return (
    <SvgWrapper
      onMouseEnter={() => setTooltipVisible(true)}
      onMouseLeave={() => setTooltipVisible(false)}
    >
      <Tooltip isVisible={isTooltipVisible}>{imageName}</Tooltip>
      {svg}
    </SvgWrapper>
  );
};

export default ImageWithTooltip;
