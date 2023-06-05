# 2023.06.05
# 숨어있는 숫자의 덧셈 (1)

def solution(my_string):
    answer = 0

    for e in my_string:
        if e.isdigit():
            answer += int(e)

    return answer