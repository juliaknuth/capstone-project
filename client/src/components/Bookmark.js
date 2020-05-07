import React, { useState } from 'react'
import styled from 'styled-components/macro'
import star from '../images/star.svg'

export default function Bookmark() {
  const [toggled, setToggled] = useState(false)

  return (
    <BookmarkImage
      onClick={() => setToggled(!toggled)}
      isVisible={toggled}
      src={star}
      alt="bookmark"
    ></BookmarkImage>
  )
}

const BookmarkImage = styled.img`
  margin-top: 20px;
  height: 32px;
  justify-content: right;
  margin-left: 58px;
  filter: ${(props) =>
    props.isVisible ? 'invert(55%) sepia(80%) saturate(4161%)' : 'invert(30%)'};
`
