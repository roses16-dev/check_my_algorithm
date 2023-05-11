# 2023.05.12
# 콜라츠 수열 만들기

def solution(n):
    answer = [n]
    x = n

    while x != 1:
        result = int(x / 2 if x % 2 == 0 else 3 * x + 1)
        answer.append(result)
        x = result

    return answer