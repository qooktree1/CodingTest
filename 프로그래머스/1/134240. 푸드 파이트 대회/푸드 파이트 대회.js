const solution = foods => {
    let foodOrder = ""
    foods.slice(1).forEach((food, idx) => {
        foodOrder += String(idx + 1).repeat(Math.floor(food / 2))
    })
    return foodOrder + '0' + foodOrder.split("").reverse().join("")
}