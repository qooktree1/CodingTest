function solution(id_pw, db) {
    const [id, pw] = [id_pw[0], id_pw[1]]
    let answer = "fail"
    for (const info of db){
        
        if (id === info[0]){
            answer = "wrong pw"
            if (pw === info[1]) return "login"
        }
    }
    return answer
}