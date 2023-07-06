# 2023.07.06
# ad 제거하기

def solution(strArr):
    answer = []

    for str in strArr:
        if "ad" in str:
            continue
        answer += [str]
    return answer