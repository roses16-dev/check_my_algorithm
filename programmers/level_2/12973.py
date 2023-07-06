# 2023.07.06
# 짝지어 제거하기

def solution(s):
    arr = [s[0]]
    s = s[1:]
    
    for c in s:
        if len(arr) > 0 and c  == arr[-1]:
            arr.pop()
        else:
            arr.append(c)

    if arr:
        return 0
    else:
        return 1