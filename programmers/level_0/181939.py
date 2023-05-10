# 2023.05.10
# 더 크게 합치기

def solution(a, b):
    ab = int(f'{a}{b}')
    ba = int(f'{b}{a}')
    
    answer = max(ab, ba)
    
    return answer