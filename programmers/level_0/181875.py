# 2023.06.16
# 배열에서 문자열 대소문자 변환하기

def solution(strArr):
    answer = []
    
    for i, str in enumerate(strArr):
        if i % 2 == 0:
            answer.append(str.lower())
        else:
            answer.append(str.upper())
    
    return answer