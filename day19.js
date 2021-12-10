
const organizeData = (receivedData) => {
  // Code here!
  
  const output = {}
  
  receivedData.forEach((info) => {
    let finalKeys = Object.keys(output) //["astro", "bio", "physics"]
    
    // find out data.type is in array finalKey
    let keyExist = false
    for(let i = 0; i < finalKeys.length; i++){
      // console.log(info.type, finalKeys)
      if(info.type === finalKeys[i]){
        keyExist = true
      } 
    }
    
    // if data.type is in array finalKeys, you push to an existing record
    if(keyExist === true){
      output[info.type].push(info.data)
    } else {
    // else, create a propery
      output[info.type] = [info.data]
    }
  })
  console.log(output)
  return output
}