const findLcm = (num1, num2) => {
//     let gcd = 1
//     const [minNum, maxNum] = [Math.min(num1, num2), Math.max(num1, num2)]
    
//     for (let i=1; i<=maxNum; i++) {
//         if (maxNum % i === 0) gcd = i
//     }
//     return (num1 * num2) / gcd
    let lcm = 1;
   
    while(true){
      if((lcm % num1 == 0) && (lcm % num2 == 0)){
        break;
      }
      lcm++;
    }
  	return lcm
}

const solution = arr => {
    const arrLen = arr.length
    let maxLcm = 1
    
    while (arr.length > 1) {
        const a = arr.pop()
        const b = arr.pop()
        maxLcm = Math.max(maxLcm, findLcm(a, b))
        arr.push(maxLcm)
    }
    return maxLcm
}