# 2023.07.10~11
# 숫자 짝꿍

def solution(X, Y):
    answer = ''

    for num in range(9, -1, -1):
        answer += str(num) * min(X.count(str(num)), Y.count(str(num)))

    if len(answer) == 0:
        return "-1"
    
    if len(answer) == answer.count("0"):
        return "0"
    
    return answer
