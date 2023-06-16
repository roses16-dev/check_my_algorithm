# 2023.06.16
# 조건에 맞게 수열 변환하기 1

def solution(arr):
    answer = []

    for num in arr:
        if num >= 50 and num % 2 == 0:
            answer.append(num / 2)
            continue
        if num < 50 and num % 2 != 0:
            answer.append(num * 2)
            continue
        
        answer.append(num)

    return answer