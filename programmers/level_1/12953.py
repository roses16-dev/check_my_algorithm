# 2023.05.16
# N개의 최소공배수

# math.gdc 사용하지 않고 만들어보기.

def solution(arr):
    answer = 0
    max_range = 1

    for e in arr:
        max_range *= e

    for i in range(max(arr), max_range+1):
        for e in arr:
            if i % e != 0:
                answer = 0
                break
            answer = i
        
        if answer != 0:
            break

    return answer
