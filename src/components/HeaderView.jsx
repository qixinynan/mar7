import styled from '@emotion/styled'
import mar7Logo from '/mar7.jpg'
import titleBg from '../assets/titlebg.jpg'
import ImageText from './ImageText'
export default function HeaderView() {
  const Logo = styled.a({
    img: {
      height: "11rem",
      padding: "0.5em",
      willChange: "filter",
      transition: "filter 300ms",
      borderRadius: 20,
      "&:hover": {
        filter: "drop-shadow(0 0 2em #646cffaa)"
      }
    }
  })
  const Subtitle = styled.h2({
    fontSize: "7rem",
    margin: 0
  })
  return (
    <>
      <Logo href="https://github.com/qixinynan/mar7" target="_blank" rel="noreferrer">
        <img src={mar7Logo} alt="三月七" />
      </Logo>
      <ImageText bg={titleBg}>March 7th</ImageText>
      <Subtitle>三月七</Subtitle>
      <div>
        <p>三月七爱好者们的小网站</p>
        <p>正在开发中，预计五一期间正式上线！</p>
      </div>
    </>
  )
}