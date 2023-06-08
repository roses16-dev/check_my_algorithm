# 2023.06.08
# 푸드 파이트 대회

def solution(food):
    answer = ''

    for index in range(1, len(food)):
        answer += str(index) * (food[index] // 2)

    return answer + '0' + answer[::-1]