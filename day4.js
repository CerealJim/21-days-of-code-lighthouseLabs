
const switchToggle = (toggle) => {
  // Code here!
  if(toggle.isOn === true) {
      toggle.name = 'toggleA',
      toggle.isOn = false
      return toggle
  } else if (toggle.isOn === false) {
      toggle.name = 'toggleB',
      toggle.isOn = true
      return toggle
  }
  // Remember to return a value!
};

