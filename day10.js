
const listAstronautJobs = (roster) => {
  // Code here!
  const newArr = roster.map((individualRoster) => {
    // console.log(individualRoster.job)
    return individualRoster.job
  })
  // console.log(newArr)
  return(newArr)
}
