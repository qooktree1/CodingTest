function solution(rny_string) {
    while (true){
        const tmp = rny_string.replace("m", "rn")
        if (tmp === rny_string) return tmp
        rny_string = tmp
    }
}