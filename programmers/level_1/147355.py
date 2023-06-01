# 2023.06.01
# 크기가 작은 부분문자열

def solution(t, p):
    answer = 0

    lenP = len(p)
    p = int(p)

    for index in range(len(t) - lenP + 1):
        if int(t[index:index+lenP]) <= p:
            answer += 1
        
    return answer