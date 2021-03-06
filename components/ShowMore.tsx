import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';

const ShowMoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  padding: 10px 0 10px 0;
  background: #002F2E;
`;

const ShowMoreWrapperBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: transparent;
  font-size: 16px;
  color: white;
`;

const GradientDiv = styled.div`
  height: 21px;
  background: linear-gradient(to bottom,rgb(57 143 75 / 0%) 25%,rgb(0 47 46) 100%);
`;

  interface ShowMoreProps {
    setChange: Dispatch<SetStateAction<boolean>>
  }

  const ShowMore = ({ setChange }: ShowMoreProps) => {
    const [toggled, setToggled] = useState(false)
  
    const handleToggle = () => {
      setChange(!toggled)
      setToggled(!toggled)
    }
  
  return (
    <>
      {!toggled && <GradientDiv />}
      <ShowMoreContainer>
        <ShowMoreWrapperBtn onClick={handleToggle}>
          {toggled ? 'Show less' : 'Show more'}
        </ShowMoreWrapperBtn>
      </ShowMoreContainer>
    </>
  )
};

export default ShowMore;
