# 2023.06.11
# 추억 점수

def solution(name, yearning, photo):
    answer = []
    dictionary = dict(zip(name, yearning))

    for p in photo:
        point = 0
        for people in p:
            if people in dictionary:
                point += dictionary[people]
        answer.append(point)

    return answer