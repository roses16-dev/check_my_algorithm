# 2023.06.24
# 개미 군단

def solution(hp):
    return (hp // 5) + (hp % 5 // 3) + (hp % 5 % 3)