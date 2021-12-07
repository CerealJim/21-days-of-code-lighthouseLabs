
const bookFreePlatform = (platformList, missionDate) => {
  // Code here!
  console.log(platformList)
  for(let i = 0; i < platformList.length; i++) {
    if(platformList[i].bookDate === undefined) {
      platformList[i].bookDate = missionDate;
      console.log(platformList)
      return platformList
    }
  }
}