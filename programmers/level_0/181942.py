# 2023.05.10
# 문자열 섞기

def solution(str1, str2):
    answer = ''
    for i in range(len(str1)):
        answer += str1[i]+str2[i]
    return answer