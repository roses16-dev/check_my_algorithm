# 2023.06.08
# 명예의 전당 (1)

def solution(k, score):
    answer = []
    score_day = []

    for e in score:
        score_day.append(e)

        if len(score_day) > k:
            score_day.remove(min(score_day))
        
        answer.append(min(score_day))
        
    return answer
