function solution(name, yearning, photo) {
    return photo.map((pics) => {
        let tmp = 0
        for (const pic of pics){
            for (let i=0; i<name.length; i++){
                if (name[i] === pic){
                    tmp += yearning[i]
                }
            }
        }
        return tmp
    })
}