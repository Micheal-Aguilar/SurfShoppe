import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: #f7e7be;

  .container {
    /* width: 50%; */
    display: flex;
    gap: 53em;
    padding-left: 24em;
  }
`;

export const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

export const CarouselItem = styled.div`
  min-width: 100%;
  img {
    padding-top: 50px;
    padding-left: 24em;
    width: 100vh;
  }
`;
