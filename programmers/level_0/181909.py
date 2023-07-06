# 2023.07.06
# 접미사 배열

def solution(my_string):
    answer = []

    for index in range(len(my_string)):
        answer.append(my_string[index:])

    return sorted(answer)