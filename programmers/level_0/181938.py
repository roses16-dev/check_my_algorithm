# 2023.05.10
# 두 수의 연산값 비교하기

def solution(a, b):
    answer = max(2 * a * b, int(f'{a}{b}'))
    return answer