
const confirmReentryPlans = (speed, missionData, checks) => {
  // Code here!
  let missionDataConfirm = false;
  let speedConfirm = false
  let confirmAll = false
  
  // console.log(missionData.astro.length, checks.dataEntries.astro)
  // console.log(missionData.bio.length, checks.dataEntries.bio)
  // console.log(missionData.physics.length, checks.dataEntries.physics)

  if(missionData.astro.length === checks.dataEntries.astro && missionData.bio.length === checks.dataEntries.bio && missionData.physics.length === checks.dataEntries.physics){
    missionDataConfirm = true
  }

  
  if(speed > checks.minSpeed && speed < checks.maxSpeed){
    speedConfirm = true
  }
  
  if (missionDataConfirm === true && speedConfirm === true) {
    confirmAll = true
  }
  console.log(confirmAll)
  return confirmAll
}
