// const checkAllGauges = (gaugeList) => {
//   // Code here!
//   const gaugeListCheck = gaugeList.map((individualgauge)=> {
//     if(individualgauge.current > individualgauge.min && individualgauge.current < individualgauge.max) {
//       // console.log(individualgauge.current, individualgauge.min, individualgauge.max)
//       return true
//     } else {
//       return false
//     }
//   })
//   console.log(gaugeListCheck)
//   let check = true
//   for (let i = 0; i < gaugeListCheck.length; i++) {
//     if(gaugeListCheck[i] === false) {
//       check = false
//     }
//   }
//   console.log(check)
//   return check
// }



const checkAllGauges = (gaugeList) => {
  // Code here!
  // let check = true
  for (let i = 0; i < gaugeList.length; i++) {
    if(gaugeList[i].current > gaugeList[i].min && gaugeList[i].current < gaugeList[i].max) {
    } else {
      // check = false
      return false
    }
  }
  return true
}
