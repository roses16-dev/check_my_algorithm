# 2023.06.13
# 머쓱이보다 키 큰 사람

def solution(array, height):
    length = len(array)
    array.sort()

    for index in range(length):
        if array[index] > height:
            return length - index
        
    return 0