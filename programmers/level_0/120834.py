# 2023.07.02
# 외계행성의 나이

def solution(age):
    answer = ''  

    for c in str(age):
        answer += chr(int(c) + 97)

    return answer