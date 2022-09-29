import styled from "styled-components";

interface BtnProps {
    width?: string;
    height?: string;
    bgColor?: string;
    text?: string;
}

const Btn = styled.button<BtnProps>`
  position: relative;
  display: block;
  width: ${props =>
          props.width === 's' ? '100px'
                  : props.width === 'm' ? '140px'
                          : props.width === 'l' && '180px'
  };

  height : ${props =>
          props.height === 's' ? '40px'
                  : props.height === 'm' ? '50px'
                          : props.height === 'l' && '70px'
  };
  
  transition: 0.3s ease-out;
  border: 1px solid #000;
  
  
  & + & {
    margin-top: 10px;
  }
        
`

function Button({width, height, bgColor, text} : BtnProps) {
    return (
        <>
            <Btn width={width} height={height} bgColor={bgColor}>
                {text}
            </Btn>
        </>
    );
}

export default Button;