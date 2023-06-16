# 2023.06.16
# 원하는 문자열 찾기

def solution(myString, pat):
    return int(pat.lower() in myString.lower())