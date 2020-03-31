// Add your functions here
function map(sourceArray, funct) {
  let result = []
  for (const element of sourceArray) {
      result.push(funct(element))
  }
  return result
}

function reduce(sourceArray, funct, staringPoint =0) {
  let total;
  if (staringPoint) {
      total = staringPoint
  } else {
      total = sourceArray[0]
      sourceArray.shift()
  }
  sourceArray.forEach(elem => {
      total = funct(elem, total)
  })
  return total
}