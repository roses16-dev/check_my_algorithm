# 2023.05.10
# 홀짝에 따라 다른 값 반환하기

def solution(n):
    answer = 0
    
    if n % 2 == 0:
        answer = sum([i ** 2 for i in range(2, n+1, 2)])
    else:
        answer = sum(range(1, n+1, 2))
    
    return answer