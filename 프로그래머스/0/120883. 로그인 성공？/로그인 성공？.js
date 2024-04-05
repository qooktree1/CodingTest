const solution = (idPw, db) => {
    for (const [dbId, dbPw] of db) {
        if (idPw[0] === dbId && idPw[1] === dbPw) return "login"
        if (idPw[0] === dbId && idPw[1] !== dbPw) return "wrong pw"
    }
    return "fail"
}