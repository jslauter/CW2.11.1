function alphaSeq (str) {
  let sorted=str.toLowerCase().split('').sort();
  let repeating=sorted.map(v=>v.charCodeAt()-96);
  return sorted.map((v,i)=>v.repeat(repeating[i]).slice(0,1).toUpperCase()+
                           v.repeat(repeating[i]).slice(1)).join(',');
}
