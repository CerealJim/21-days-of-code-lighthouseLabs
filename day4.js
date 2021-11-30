
const checkGaugeStatus = (gauge) => {
  // Code here!
  if(gauge.current > gauge.min && gauge.current < gauge.max) {
    return true
  } else {
    return false
  }
  // Remember to return a value!
};