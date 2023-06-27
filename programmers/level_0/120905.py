# 2023.06.27
# n의 배수 고르기

def solution(n, numlist):
    answer = []

    for num in numlist:
        if num % n == 0:
            answer += [num]

    return answer