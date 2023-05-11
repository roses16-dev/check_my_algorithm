# 2023.05.11
# 수 조작하기 1

def solution(n, control):
    answer = n

    command = {'w': 1, 'a': -10, 's': -1, 'd': 10}
    for c in control:
        answer += command[c]

    return answer
