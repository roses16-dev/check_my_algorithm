# 2023.05.17
# 카펫

def solution(brown, yellow):
    answer = []

    for i in range(1,  + 1):
        if (yellow % i == 0 and i * 2 + (yellow // i) * 2 + 4 == brown):
            answer = [i+2, yellow // i+2]
            return sorted(answer, reverse=True)

    return answer
