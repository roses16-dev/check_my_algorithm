# 2023.05.15
# 다음 큰 숫자

def solution(n):
    b = format(n, 'b')
    index = n+1

    while True:
        if (format(index, 'b').count('1') == b.count('1')):
            return index
        index += 1