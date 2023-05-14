# 2023.05.15
# 삼총사

# 'from itertools import combinations' 모듈로 간단하게 작성할 수 있다.

def solution(number):
    answer = 0
    length = len(number)

    for i in range(0, length-2):
        for j in range(i+1, length-1):
            for k in range(j+1, length):
                print(i, j, k)
                if (number[i] + number[j] + number[k] == 0):
                    answer += 1

    return answer