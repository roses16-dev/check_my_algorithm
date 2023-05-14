# 2023.05.15
# 피보나치 수

def solution(num):

    a, b = 0, 1
    
    for i in range(num):
        a, b = b, a + b

    return a % 1234567