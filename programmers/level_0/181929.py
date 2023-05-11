# 2023.05.11
# 원소들의 곱과 합

def solution(num_list):
    answer = 0

    total = sum(num_list) ** 2
    multiply = eval('*'.join([str(n) for n in num_list]))
    
    answer = 1 if multiply < total else 0

    return answer