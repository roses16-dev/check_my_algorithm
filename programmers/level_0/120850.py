# 2023.06.29
# 문자열 정렬하기 (1)

def solution(my_string):
    answer = []

    for n in my_string:
        try:
            answer.append(int(n))
        except:
            continue

    return sorted(answer)