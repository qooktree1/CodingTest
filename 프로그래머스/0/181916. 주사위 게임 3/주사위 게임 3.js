const solution = (a, b, c, d) => {
    const [x, y, z, r] = [a, b, c, d].sort((a,b) => a-b)
    
    // 네 주사위에서 같은 숫자가 나올 경우
    if (x === y && y === z && z === r) return 1111 * x
    
    // 세 주사위에서 같은 숫자가 나올 경우
    if (x === y && y === z) return (10 * x + r) ** 2
    if (y === z && z === r) return (10 * y + x) ** 2
    
    // 주사위가 두 개씩 같은 값이 나올 경우
    if (x === y && z === r) return (x + z) * Math.abs(x - z)
    
    // 네 주사위 모두 다른 경우
    if (x !== y && x !== z && x !== r && y !== z && y !== r && z !== r) return x
    
    // 어느 두 주사위는 같고 나머지 두 자사위는 다른 숫자가 나올 경우
    if (x === y) return z * r
    if (y === z) return x * r
    if (z === r) return x * y
}