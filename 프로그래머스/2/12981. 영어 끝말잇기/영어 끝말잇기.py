import math


def solution(n, words):
    ans = [0, 0]
    prev_word = words[0]
    visited = set([prev_word])
    for index, word in enumerate(words[1:]):
        if prev_word[-1] != word[0] or word in visited:
            return [(index + 1) % n + 1,  math.ceil((index + 2) / n)]
        prev_word = word
        visited.add(word)
    
    
    return ans