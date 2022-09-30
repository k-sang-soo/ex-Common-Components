import styled from "styled-components";

interface BtnProps {
  width?: string;
  height?: string;
  bgColor?: string;
  text?: string;
  disabled?: boolean;
}

const Btn = styled.button<BtnProps>`
  position: relative;
  display: block;
  width: ${(props) =>
    props.width === "s"
      ? "100px"
      : props.width === "m"
      ? "140px"
      : props.width === "l" && "180px"};

  height: ${(props) =>
    props.height === "s"
      ? "40px"
      : props.height === "m"
      ? "50px"
      : props.height === "l" && "70px"};

  background-color: ${(props) =>
    props.bgColor === "light"
      ? "transparent"
      : props.bgColor === "gray"
      ? props.theme.palette.gray
      : props.bgColor === "orange" && props.theme.palette.orange};

  border: 1px solid
    ${(props) =>
      props.bgColor === "light" ? props.theme.palette.black : "transparent"};
  transition: 0.3s ease-out;

  & + & {
    margin-top: 10px;
  }

  &:disabled {
    background-color: ${(props) => props.theme.palette.gray};
    color: ${(props) => props.theme.palette.lightgray};
    opacity: 0.6;
    cursor: default;
  }
`;

function Button({ width, height, bgColor, disabled, text }: BtnProps) {
  return (
    <>
      <Btn width={width} height={height} bgColor={bgColor} disabled={disabled}>
        {text}
      </Btn>
    </>
  );
}

export default Button;
