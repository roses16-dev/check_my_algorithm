# 2023.06.07
# 과일 장수

def solution(k, m, score):
    answer = 0
    score = sorted(score, reverse=True)
    index = m - 1
    
    while True:
        if index >= len(score):
            break;

        answer += m * score[index]
        index += m

    return answer