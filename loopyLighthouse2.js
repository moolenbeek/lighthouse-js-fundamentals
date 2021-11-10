const loopyLighthouse = function(range, multiples, words) {
  const start = range[0]
  const stop = range[1] + 1
  for (let i = start; i < stop ; i++){
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      console.log(words[0] + words[1])
    } else if(i % multiples[0] === 0){
      console.log(words[0])
    } else if (i % multiples[1] === 0) {
      console.log(words[1])
    } else {
      console.log(i)
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"])