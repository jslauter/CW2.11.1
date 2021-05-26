function shorter_reverse_longer(a,b){
  let longWord = ""
  let shortWord = ""


  if(a.length > b.length || a.length == b.length){
    longWord = a
    shortWord = b
  }else{
    longWord = b
    shortWord = a
  }

  let reverseLongWord = longWord.split("").reverse().join("")
  return (`${shortWord}${reverseLongWord}${shortWord}`)
}

console.log(shorter_reverse_longer("pir", "alpha"))
