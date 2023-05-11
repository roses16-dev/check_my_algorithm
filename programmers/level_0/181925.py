# 2023.05.11
# 수 조작하기 2

def solution(numLog):
    answer = ''
    command = {1: 'w', -10: 'a', -1: 's', 10: 'd'}
    
    for i in range(len(numLog)-1):
        answer += command[numLog[i+1] - numLog[i]]

    return answer
