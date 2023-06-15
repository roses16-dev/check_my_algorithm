# 2023.06.14
# 모음 제거

def solution(my_string):
    answer = ''

    for c in my_string:
        if c in ["a", "e", "i", "o", "u"]:
            continue
        
        answer += c

    return answer