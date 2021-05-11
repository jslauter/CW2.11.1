function feast(beast, dish) {
let firstBeastLett = beast[0]
let lastBeastLett = beast[beast.length - 1]
let firstDishLett = dish[0]
let lastDishLett = dish[dish.length - 1]

if(firstBeastLett == firstDishLett && lastBeastLett == lastDishLett){
  return true
}else return false

}
