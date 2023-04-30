import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1000px;
  margin: 100px auto;
`;

export const CarouselContent = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const CarouselItem = styled.div`
  ${(props) =>
    props.isActive
      ? `flex-basis: 50%; position: relative, z-index: 2`
      : "flex-basis: 25%"};
  flex-shrink: 0;
  @media screen and (max-width: 900px) {
    flex-basis: 100%;
  }
`;

export const CarouselImage = styled.img`
  width: 100%;
  vertical-align: top;
`;

export const CarouselActions = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 10px;
`;

export const CarouselDot = styled.div`
  cursor: pointer;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid;
  ${(props) =>
    props.isActive ? "background: black" : "background: transparent"}
`;

export const CarouselButtons = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 25px;
`;

export const CarouselButton = styled.button`
  width: 60px;
  height: 30px;
`;
