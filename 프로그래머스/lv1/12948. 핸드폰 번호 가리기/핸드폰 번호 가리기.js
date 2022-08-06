function solution(phone_number) {
    let leftNumbers = phone_number.substring(phone_number.length - 4, phone_number.length)
    let star = ""
    for (let i=0; i<phone_number.length-4; ++i) {
        star += "*"
    }
    return star+leftNumbers
}