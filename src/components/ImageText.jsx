import styled from '@emotion/styled'
import React from 'react'
import PropTypes from 'prop-types'

export default class ImageText extends React.Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired
  }
  render() {
    const Text = styled.h1({
      fontSize: "12rem",
      whiteSpace: "nowrap",
      letterSpacing: 5,
      fontWeight: 1000,
      textAlign: "center",
      backgroundImage: `url(${this.props.bg})`,
      backgroundSize: "cover",
      color: "transparent",
      MozBackgroundClip: "text",
      WebkitBackgroundClip: "text",
      textTransform: "uppercase",
      margin: "10px 0"
    })
    return (<Text>{this.props.children}</Text>)
  }
}