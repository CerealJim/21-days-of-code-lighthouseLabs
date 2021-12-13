
// Add parseMessage here if you want!

const parseMissionSummary = (exchanges, missionData) => {
  // Code here!
  
  const output = {
    transcript: [],
    missionData
    }
    // console.log(exchanges.message)
  for(let i = 0; i < exchanges.length; i++){
    // console.log(exchanges[i].message)
    output.transcript.push(`${exchanges[i].origin}: ${exchanges[i].message}`)
  }
  console.log(output)
  return output
}
