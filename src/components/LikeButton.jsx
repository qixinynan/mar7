import styled from "@emotion/styled"
import PropTypes from 'prop-types'
import confetti from "canvas-confetti";

// Reference: https://codepen.io/marcobiedermann/pen/ExvvyLQ
export default function LikeButton({ symbol, text, count, onClick }) {
  const Button = styled.button({
    cursor: 'pointer',
    font: 'inherit',
    margin: "0 auto",
    backgroundColor: '#404663',
    color: '#fff',
    border: 0,
    fontSize: '1.2em',
    fontWeight: 400,
    padding: '0.5em 0.7em',
    borderRadius: '0.5em',
    zIndex: 999,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5em',
    boxShadow: `0px 1.7px 2.2px rgba(0, 0, 0, 0.02),
                0px 4px 5.3px rgba(0, 0, 0, 0.028),
                0px 7.5px 10px rgba(0, 0, 0, 0.035),
                0px 13.4px 17.9px rgba(0, 0, 0, 0.042),
                0px 25.1px 33.4px rgba(0, 0, 0, 0.05),
                0px 60px 80px rgba(0, 0, 0, 0.07);`,
    '&:active': {
      transform: 'scale(1.01)'
    }
  })
  const LikeCount = styled.span({
    color: '#ac2326',
    fontWeight: 'bolder',
    display: 'flex',
    alignItems: 'center',
    gap: "0.2em"
  })

  function buttonClick() {
    confetti({
      particleCount: 150,
      spread: 60,
      origin: { y: 1 }
    })
    if (onClick) {
      onClick();
    }
  }

  return (
    <Button onClick={buttonClick}>
      <span>{text}</span>
      <LikeCount>
        <span>{symbol}</span>
        <span>{count}</span>
      </LikeCount>
    </Button>

  )
}

LikeButton.propTypes = {
  symbol: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func,
}