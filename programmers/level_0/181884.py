# 2023.06.15
# n보다 커질 때까지 더하기

def solution(numbers, n):
    answer = 0

    for number in numbers:
        if answer > n:
            break;
        
        answer += number

    return answer