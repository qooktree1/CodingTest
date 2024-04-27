const solution = (cards1, cards2, goals) => {
    for (const goal of goals) {
        if (goal === cards1[0]) cards1.shift()
        else if (goal === cards2[0]) cards2.shift()
        else return "No"
    }
    return "Yes"
}