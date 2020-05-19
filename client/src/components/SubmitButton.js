import React from 'react'
import submit from '../images/submit.png'
import swal from 'sweetalert'
import styled from 'styled-components/macro'

export default function SubmitButton() {
  return (
    <StyledButton type="submit">
      <img
        src={submit}
        alt="submit"
        onClick={() =>
          swal(
            'New Highscore! 🎮',
            'Your game was successfully added to the Loot-List',
            { timer: 4000 }
          )
        }
      />
    </StyledButton>
  )
}

const StyledButton = styled.button`
  margin: auto;
  margin-bottom: 16px;
  display: block;
  border: none;
  background: none;

  img {
    height: 54px;
    widht: auto;
  }
  .swal-overlay {
    background: #fd474b;
  }
  .swal-title {
    margin: 0px;
    font-size: 16px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.21);
    margin-bottom: 28px;
  }
  .swal-text {
    padding: 17px;
    display: block;
    margin: 22px;
    text-align: center;
  }
`
