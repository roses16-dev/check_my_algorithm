# 2023.06.23
# l로 만들기

def solution(myString):
    for c in "abcdefghijk":
        myString = myString.replace(c, "l")

    return myString