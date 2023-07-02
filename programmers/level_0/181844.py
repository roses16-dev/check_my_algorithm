# 2023.07.02
# 배열의 원소 삭제하기

def solution(arr, delete_list):
    answer = []

    for e in arr:
        if e not in delete_list:
            answer.append(e)

    return answer