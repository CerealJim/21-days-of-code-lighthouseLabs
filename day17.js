
const switchSpecificToggle = (toggleList, specificToggle) => {
  // Code here!
  // console.log(specificToggle)
  // console.log(toggleList[0].name)
  for(let i = 0; i < toggleList.length; i++){
    if(specificToggle === toggleList[i].name) {
      if (toggleList[i].isOn === false) {
        toggleList[i].isOn = true
      } else {
        toggleList[i].isOn = false
      }
    }
  }
  return toggleList
}