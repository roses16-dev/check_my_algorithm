# 2023.06.20
# 문자열 바꿔서 찾기

def solution(myString, pat):
    pat = pat.replace("A", "C").replace("B", "A").replace("C", "B")    
    return int(pat in myString)