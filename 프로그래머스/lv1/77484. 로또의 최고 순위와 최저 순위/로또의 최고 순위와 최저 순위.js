function solution(lottos, win_nums) {
    const certainty = lottos.filter(lotto => win_nums.includes(lotto)).length  // 확실히 맞는 번호 개수
    const zeros = lottos.filter(lotto => lotto === 0).length  // 0의 개수
    const min = 7 - certainty >= 6 ? 6 : 7 - certainty  // 일치하는 번호가 1개 이하일 경우 6등
    const max = 7 - (certainty + zeros) >= 6 ? 6 : 7 - (certainty + zeros)
    return [max, min]
}