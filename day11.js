
const averageWindSpeed = (weatherEntries) => {
  // Code here!
  let windSpeedTotal = 0
  const windSpeedArr = weatherEntries.map((individualEntry) => {
    // console.log(individualEntry.windSpeed)
    windSpeedTotal = windSpeedTotal + individualEntry.windSpeed
    // console.log(windSpeedTotal)
  })
  const windSpeedAvg = Math.round(windSpeedTotal / weatherEntries.length)
  console.log(windSpeedAvg)
  return windSpeedAvg
}
