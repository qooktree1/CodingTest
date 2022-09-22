answer = []


def dfs(begin, target, words, count, visited):
    if begin == target:
        global answer
        answer.append(count)
        
    for index in range(len(words)):
        onediff = 0
        if visited[index] == 0:
            
            for i in range(len(begin)):
                if begin[i] != words[index][i]:
                    onediff += 1

            if onediff == 1:
                visited[index] = 1
                dfs(words[index], target, words, count + 1, visited)
                visited[index] = 0


def solution(begin, target, words):
    # 변환 불가인 경우
    if target not in words:
        return 0
    
    visited = [0] * len(words)
    dfs(begin, target, words, 0, visited)
    return min(answer)