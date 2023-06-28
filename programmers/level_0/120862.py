# 2023.06.28
# 최댓값 만들기 (2)

def solution(numbers):
    numbers.sort()
    return max(numbers[0] * numbers[1], numbers[-1] * numbers[-2])
    