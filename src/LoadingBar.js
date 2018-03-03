import React, { Component } from 'react'

// Animation attributes:
// attributeName: name of the attribute to animate - width
// from, to: values of the attribute to animate from and to - width starts at 'from' to 'to'
// dur: duration of the animation
// fill: determines the behaviour of the animation when it completes - 'freeze' means that the animation doesn’t loop
// id: unique id to reference the animation from within other animations
// begin: specify when to begin the animation - reference the previous animation id and append '.end' or give a time value '2s'
// rx, ry: radius of the bar - similar to border-radius

const LoadingBar = ({
    animateProperty,
    animateId,
    animateFrom,
    animateTo,
    animateBegin,
    animateDuration,
    animateFill,
    id,
    fill,
    height,
    width,
    x,
    y,
    rx = 10,
    ry = 10
}) =>
    <rect
        id={id}
        width={width}
        height={height}
        fill={fill}
        x={x}
        y={y}
        rx={rx}
        ry={ry}
    >
        <animate
            attributeName={animateProperty}
            from={animateFrom}
            to={animateTo}
            dur={animateDuration}
            fill={animateFill}
            id={animateId}
            begin={animateBegin}
        />
    </rect>

export default LoadingBar
