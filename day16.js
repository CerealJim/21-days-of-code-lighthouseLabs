
const getAverageSpeed = (firstPosition, secondPosition) => {
  // code here!
  const avgSpeed = Math.round((secondPosition.altitude - firstPosition.altitude) / (secondPosition.time - firstPosition.time) * 10) / 10
  console.log(avgSpeed)
  return avgSpeed
}