
// Add your parseMessage function here if you want!

const parseTranscripts = (messages) => {
  // Code here!
  const arr = messages.map((individualMessage)=> {
    const origin = individualMessage.origin 
    const message = individualMessage.message
    console.log(origin, message)
    return `${origin}: ${message}`
  })
  console.log(arr)
  return arr
}
