import React from 'react'
import styled from 'styled-components/macro'

export default function ToggleButton({
    isActive, 
    onClick,
    defaultText,
    activeText
}) {
return <Wrapper 
    onClick={onClick} 
    isActive={isActive}
>{isActive ? activeText : defaultText}</Wrapper>
}


const Wrapper = styled.section`
  background: ${props => props.isActive ? 'skyblue' : 'hotpink'};
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  box-shadow: 0 6px 8px #0004;
`