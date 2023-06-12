# 2023.06.12
# 덧칠하기

def solution(n, m, section):
    answer = 0
    num_fixed = 0

    for i in section:
        if num_fixed >= i:
            continue
        
        answer += 1
        num_fixed = i + m - 1
        
    return answer