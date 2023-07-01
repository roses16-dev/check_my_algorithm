# 2023.07.01
# 특별한 이차원 배열 2

def solution(arr):
    for x in range(len(arr)):
        for y in range(len(arr[x])):
            if arr[x][y] != arr[y][x]:
                return 0

    return 1