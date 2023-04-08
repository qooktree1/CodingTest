function solution(want, number, discount) {
	const dict = {}
	let ans = 0
    
	for (let i = 0; i < want.length; i++) dict[want[i]] = number[i]  // want: number 딕셔너리
    
	for (let i = 0; i <= discount.length - 10; i++) {  // 10개씩 검사        
		const tmp = discount.slice(i, i + 10)  // 10개씩 검사
        
		let check = true
        for (let i=0; i<want.length; i++){
            if (dict[want[i]] !== tmp.filter(x => x === want[i]).length){
                check = false
                break
            }
        }
        if (check) ans++
	}
	return ans
}