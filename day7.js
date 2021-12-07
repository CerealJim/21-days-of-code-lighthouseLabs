
const storeWeatherConditions = (temperature, condition, windSpeed, windDirection) => {
  // Code here!
  const object = {
    "condition": condition,
  }
    object.temperature = Math.round((temperature - 32) * 5 / 9)
    object.windSpeed = Math.round(windSpeed / 2.237)
    object.windDirection = windDirection
    // object.condition = condition
  // const object = {
    // temperature = temperature
  console.log(object)
  // Remember to return an object!
  return object
}
