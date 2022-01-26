import React from 'react';
import styled from 'styled-components';

function Viewers() {
  return (
    <Container>
      <Wrap>
        <CoverImg src="/images/viewers-disney.png" />
        <VideoImg src="https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_C061B00E543326DA345FBF996B4D3D76422B58A49FDEE9AD9A2664618619A8F9" />
      </Wrap>
      <Wrap>
        <CoverImg src="/images/viewers-marvel.png" />
        <VideoImg src="https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_B8F3C4DDB037CD1840A53BDFA0AA0504E9FDDE7781D62D28230D5C74F2B06624" />
      </Wrap>
      <Wrap>
        <CoverImg src="/images/viewers-national.png" />
        <VideoImg src="https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_16793CC7E2AF7B8687B0DD00673503CBC14CB2C801952D62B4551B6866073650" />
      </Wrap>
      <Wrap>
        <CoverImg src="/images/viewers-pixar.png" />
        <VideoImg src="https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_92FA84DF0F5D951171B41E5947716ADA382A15AE5DA37869E9D592D043F49316" />
      </Wrap>
      <Wrap>
        <CoverImg src="/images/viewers-starwars.png" />
        <VideoImg src="https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_59F432D7A600A8F1CE36AE4D0B96570AC7C8277A0E8855BC06FABBAE090E6577" />
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  padding: 30px 0px 26px;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
const CoverImg = styled.img`
  height: 100%;
  object-fit: cover;
  opacity: 1;
  position: absolute;
  transition: opacity 500ms ease-in-out 0s;
  width: 100%;
  z-index: -1;
  top: 0;
`;
const VideoImg = styled(CoverImg)`
  opacity: 0;
  z-index: 1;
`;
const Wrap = styled.div`
  border-radius: 10px;
  padding-top: 56.25%;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms;
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }

  &:hover > ${VideoImg} {
    opacity: 1;
    z-index: -1;
  }
`;

export default Viewers;
