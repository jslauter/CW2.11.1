function highAndLow(numbers){
 let arr = numbers.split(" ")
 let numArr = arr.map(i => Number(i))
 let biggest = -999
 let smallest = 999

 for(i=0; i < arr.length; i++){
    if(numArr[i] >= biggest){
      biggest = numArr[i]
    }
  }
 for(j=0; j < arr.length; j++){
   if(numArr[j] <= smallest){
     smallest = numArr[j]
   }
 }

 return `${biggest} ${smallest}`

}


console.log(highAndLow("3 3"))
