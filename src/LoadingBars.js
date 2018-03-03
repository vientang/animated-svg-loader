import React, { Component } from 'react'
import LoadingBar from './LoadingBar'
import { barGroup1, barGroup2 } from './barData'

const LoadingBars = () =>
  <svg width={550} height={240}>
    <title>Animated SVG Loader</title>

    <g id="group1" y="0" x="0" visibility="visible">
      {barGroup1.map((barProps, i) => <LoadingBar key={i} {...barProps} />)}
      <animateMotion
        from="0,0"
        to="0,-250"
        dur="2s"
        begin="line8_anim.end"
        repeatCount="indefinite"
      />
    </g>

    <g id="group2">
      {barGroup2.map((barProps, i) => <LoadingBar key={i} {...barProps} />)}
      <animateMotion
        from="0,0"
        to="0,-250"
        dur="2s"
        begin="2s"
        repeatCount="indefinite"
      />
    </g>
  </svg>

export default LoadingBars
