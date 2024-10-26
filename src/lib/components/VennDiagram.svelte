<script>
  import {SVG} from '@svgdotjs/svg.js'
  import {onMount} from 'svelte'
  import {DEFAULT_VALUE} from '@utils/constants'

  let {handleClick} = $props()

  let leftCircleEl = $state(null)
  let leftCircleTextEl = $state(null)
  let intersectOfCircleEl = $state(null)
  let rightCircleEl = $state(null)
  let rightCircleTextEl = $state(null)

  let sqlState = $state(DEFAULT_VALUE)

  const animatePath = (path, isSelected = false) => {
    const fillColor = (() => {
      if (isSelected) {
        return '#c25827'
      }
      return '#3a3a3a'
    })()

    path
      .animate({
        duration: 600,
        delay: 0,
        when: 'now'
      })
      .attr({
        fill: fillColor
      })
  }

  const handlePathClick = (options = {}) => {
    let [left, center, right] = sqlState.split('.').map((i) => Number(i))

    if (options.left) {
      left = left === 1 ? 0 : 1
      animatePath(leftCircleEl, left === 1)
    }
    if (options.center) {
      center = center === 1 ? 0 : 1
      animatePath(intersectOfCircleEl, center === 1)
    }
    if (options.right) {
      right = right === 1 ? 0 : 1
      animatePath(rightCircleEl, right === 1)
    }

    sqlState = [left, center, right].map((i) => String(i)).join('.')

    if (handleClick) {
      handleClick.call(null, sqlState)
    }
  }

  onMount(() => {
    leftCircleEl = SVG('path#leftCircle')
    leftCircleTextEl = SVG('text#leftCircleText')
    intersectOfCircleEl = SVG('path#intersectOfCircle')
    rightCircleEl = SVG('path#rightCircle')
    rightCircleTextEl = SVG('text#rightCircleText')

    leftCircleEl.on('click', () => handlePathClick({left: true}))
    leftCircleTextEl.on('click', () => handlePathClick({left: true}))
    intersectOfCircleEl.on('click', () => handlePathClick({center: true}))
    rightCircleEl.on('click', () => handlePathClick({right: true}))
    rightCircleTextEl.on('click', () => handlePathClick({right: true}))

    return () => {
      leftCircleEl.off('click')
      leftCircleTextEl.off('click')
      intersectOfCircleEl.off('click')
      rightCircleEl.off('click')
      rightCircleTextEl.off('click')
    }
  })
</script>

<style lang="postcss">
  #sqlJoinControlSvg {
    height: 12rem;
  }

  @media (min-width: 420px) and (max-width: 1440px) {
    #sqlJoinControlSvg {
      height: calc(12rem + (16 - 12) * ((100vw - 420px) / (1440 - 420)));
    }
  }
  @media (min-width: 1440px) {
    #sqlJoinControlSvg {
      height: 16rem;
    }
  }

  #leftCircle,
  #leftCircleText,
  #intersectOfCircle,
  #rightCircleText,
  #rightCircle {
    cursor: pointer;
    user-select: none;
  }
</style>

<svg
  id="sqlJoinControlSvg"
  enable-background="new 0 0 332.609 198.913"
  viewBox="0 0 332.609 198.913"
  xmlns="http://www.w3.org/2000/svg">
  <g id="mainLayer" fill="#3a3a3a" stroke="#fff" stroke-width="2">
    <path
      id="leftCircle"
      d="m100.736 194.11c-52.499 0-95.21-42.394-95.21-94.5s42.711-94.5 95.21-94.5c22.376 0 44.062 7.863 61.197 22.166-19.975 18.744-31.408 45.041-31.408 72.334s11.433 53.59 31.408 72.334c-17.134 14.303-38.82 22.166-61.197 22.166"
    ></path>
    <path
      id="intersectOfCircle"
      d="m165.735 168.593c-19.211-17.847-30.21-42.937-30.21-68.984 0-26.048 10.999-51.136 30.21-68.984 19.21 17.848 30.208 42.937 30.208 68.984s-10.997 51.136-30.208 68.984"
    ></path>
    <path
      id="rightCircle"
      d="m230.735 194.11c-22.378 0-44.063-7.863-61.199-22.166 19.976-18.744 31.408-45.041 31.408-72.334s-11.433-53.59-31.408-72.334c17.136-14.303 38.821-22.166 61.199-22.166 52.498 0 95.208 42.393 95.208 94.5s-42.71 94.5-95.208 94.5"
    ></path>
  </g>
  <text
    id="leftCircleText"
    fill="#fff"
    font-family="'Roboto Slab', serif"
    font-size="30"
    x="80"
    y="112">A</text>
  <text
    id="rightCircleText"
    fill="#fff"
    font-family="'Roboto Slab', serif"
    font-size="30"
    x="230"
    y="112">B</text>
</svg>
