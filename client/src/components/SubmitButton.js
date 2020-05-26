import React from 'react'
import swal from 'sweetalert'
import styled from 'styled-components/macro'

export default function SubmitButton() {
  return (
    <ContentWrapper>
      <button
        type="submit"
        alt="submit"
        onClick={() =>
          swal(
            'New Highscore! 🎮',
            'Your game was successfully added to the Loot-List',
            { timer: 3000, button: false }
          )
        }
      >
        Submit!
      </button>
    </ContentWrapper>
  )
}

const ContentWrapper = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;

  button {
    color: white;
    font-weight: 300;
    background: #fd474b;
    background: radial-gradient(
      circle,
      rgba(255, 95, 98, 1) 1%,
      rgba(253, 71, 75, 1) 100%
    );
    box-shadow: 1px 1px 2px #525252;
    border-radius: 5px;
    border: none;
    font-size: 16pt;
    font-family: 'Rajdhani', sans-serif;
    padding: 12px;
    margin: 20px;
  }

  .swal-overlay {
    background: #fd474b;
    z-index: 9999;
  }
  .swal-title {
    margin: 0px;
    font-size: 16px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.21);
    margin-bottom: 28px;
    text-align: center;
  }
  .swal-text {
    padding: 17px;
    display: block;
    margin: 22px;
    text-align: center;
  }
`
