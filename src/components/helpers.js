export const selectEffect = (effect) => {
  switch (effect) {
    case 1:
      return `caption-effect-${effect}`
    case 2:
      return `caption-effect-${effect}`
    case 3:
      return `caption-effect-${effect}`
    case 4:
      return `caption-effect-${effect}`
    case 5:
      return `caption-effect-${effect}`
    default:
      return `caption-effect-1`
  }
}

export const randomEffect = () => Math.floor(Math.random() * 5) + 1
