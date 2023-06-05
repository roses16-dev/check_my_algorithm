# 2023.06.06
# 한 번만 등장한 문자

def solution(s):
    answer = ''

    for c in s:
        if s.count(c) == 1:
            answer += c

    answer = ''.join(sorted(list(answer)))
    
    return answer