
const timeRemaining = (launchDate, missionName, fakeToday) => {
  const today = fakeToday || new Date() // Do not alter this line!
  const launchDay = launchDate || new Date()
  console.log(Math.round(Date.parse(today) / 86400000))
  console.log(Math.round(Date.parse(launchDay) / 86400000))
  // const daysRemaining = () => {
  //   return Math.round(Date.parse(launchDay) / 86400000) - Math.round(Date.parse(today) / 86400000)
  // }
  // console.log(daysRemaining())
  const daysRemainingNum = Math.round(Date.parse(launchDay) / 86400000) - Math.round(Date.parse(today) / 86400000)
  
  const object = {
    "missionName": missionName,
    "daysRemaining": daysRemainingNum,
  }
  // Code here!
  return object
}
