import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";

const Section = (props) => {
  const { src, name, desc, leftBtnTxt, rightBtnTxt } = props.obj;

  return (
    <Wrap src={src}>
      <Fade bottom>
        <ItemText>
          <H1>{name}</H1>
          <H2>{desc}</H2>
        </ItemText>
      </Fade>
      <div>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnTxt}</LeftButton>
            {rightBtnTxt && <RightButton>{rightBtnTxt}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" alt="down-arrow" height="24px" width="24px" />
      </div>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.section`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.src});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const H1 = styled.h1`
  font-size: 40px;
  line-height: 48px;
  font-weight: 500;
  color: #393c41;
`;

const H2 = styled.h2`
  color: #5c5d61;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.5px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }
`;

const LeftButton = styled.button`
  background-color: #171a20cc;
  border-radius: 32px;
  height: 40px;
  width: 256px;
  color: #ffffff;
  border: none;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
`;

const RightButton = styled(LeftButton)`
  background-color: #ffffffa6;
  color: #393c41;
`;

const DownArrow = styled.img`
  height: 40px;
  margin-top: 20px;
  animation: animateUpDown infinite 1.5s;
  cursor: pointer;
`;
