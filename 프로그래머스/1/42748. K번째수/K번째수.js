const solution = (array, commands) => commands.map(([i, j, k]) => {
        const tmpArr = array.slice()
        return tmpArr.slice(i - 1, j).sort((a,b) => a - b)[k - 1]
    })