# 2023.06.24
# 가위 바위 보

def solution(rsp):
    return rsp.translate(str.maketrans("205", "052"))