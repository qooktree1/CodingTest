const solution = (bridgeLength, weight, trucks) => {
    let time = 0
    const bridge = Array(bridgeLength).fill(0)
    let tmp = 0
    while (bridge.length > 0){
        time++
        tmp -= bridge.shift()
        if (trucks.length > 0){
            if (trucks[0] + tmp <= weight){
                tmp += trucks[0]
                bridge.push(trucks.shift())
            } else bridge.push(0)
        }
    }
    return time
}