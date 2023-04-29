import styled from '@emotion/styled'
import { Global } from '@emotion/react'
import LikeButton from './components/LikeButton'
import HeaderView from './components/HeaderView';
import { useState } from 'react';


const globalStyles = {
  ":root": {
    fontFamily: "Avenir, Helvetica, Arial, sans-serif",
    colorScheme: "light dark",
    color: "rgba(255, 255, 255, 0.87)",
    backgroundColor: "#242424",
    fontSynthesis: "none",
    textRendering: "optimizeLegibility",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    WebkitTextSizeAdjust: "100%"
  }
}

function resizeListener() {
  let designSize = 1280;
  let html = document.documentElement;
  let clientW = html.clientWidth;
  let htmlRem = (clientW * 12) / designSize;
  html.style.fontSize = htmlRem + 'px';
}

const Root = styled.div({
  margin: "0 auto",
  padding: "2rem",
  textAlign: "center",
  fontSize: "16px"
})

function App() {
  resizeListener();
  window.addEventListener('resize', resizeListener)
  const [loveCount, setLoveCount] = useState(10)
  return (
    <Root>
      <Global styles={globalStyles} />
      <HeaderView></HeaderView>
      <LikeButton text='我喜欢三月七' symbol='❤️' count={loveCount} onClick={() => setLoveCount(loveCount + 1)}></LikeButton>
    </Root>
  )
}

export default App
