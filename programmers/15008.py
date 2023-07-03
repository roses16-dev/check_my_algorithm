# 2023.07.03
# [PCCP 모의고사 #1] 외톨이 알파벳

def solution(input_string):
    chars = 'abcdefghijklmnopqrstuvwxyz'
    answer = ''

    for c in chars:
        if not c in input_string:
            continue
        
        start = input_string.find(c)
        end = input_string.rfind(c)

        if input_string[start:end] != c * (end-start):
            answer += c

    return answer if len(answer) else "N"