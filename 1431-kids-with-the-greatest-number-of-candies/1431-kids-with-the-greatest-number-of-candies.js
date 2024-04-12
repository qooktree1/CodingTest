const kidsWithCandies = (candies, extraCandies) => {
    const maxCandy = Math.max(...candies)
    return candies.map(candy => candy + extraCandies >= maxCandy)
}