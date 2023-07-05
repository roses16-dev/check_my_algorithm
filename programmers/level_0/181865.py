# 2023.07.05
# 간단한 식 계산하기

def solution(binomial):
    arr = binomial.split(' ');
    arr[0], arr[2] = int(arr[0]), int(arr[2])
    
    if arr[1] == "+":
        return arr[0] + arr[2]
    elif arr[1] == "-":
        return arr[0] - arr[2]
    else:
        return arr[0] * arr[2]