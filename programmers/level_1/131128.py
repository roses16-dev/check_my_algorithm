# 2023.07.10
# 숫자 짝꿍
# 푸는 중인 문제, 11~15번 케이스 시간초과 실패

def solution(X, Y):
    arr_z = []
    arr_x = list(X)
    arr_y = list(Y)

    for num in arr_x:
        if num in arr_y:
            arr_z.append(num)
            arr_y.remove(num)

    if len(arr_z) == 0:
        return "-1"
    
    if len(arr_z) == arr_z.count("0"):
        return "0"
    
    return ''.join(sorted(arr_z, reverse=True))

print(solution("100",	"2345"))