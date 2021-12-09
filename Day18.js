
const chooseLunchWinner = (listOfChoices) => {
  //Code here!
  
  let choiceCount = {}
  // let arrCount = [choiceCount]
  listOfChoices.forEach((lunchChoice) => {
    choiceCount[lunchChoice] = (choiceCount[lunchChoice] || 0) + 1
  })
  // console.log(choiceCount)
  let winnerScore = 0
  let winnerName = ""
  for (const property in choiceCount){
    // console.log(choiceCount[property])
    if(choiceCount[property] > winnerScore){
      winnerName = property;
      winnerScore = choiceCount[property];
    }
  }
  return winnerName
  
}
