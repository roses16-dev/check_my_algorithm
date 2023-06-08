# 2023.06.06
# 가장 가까운 같은 글자

def solution(s):
    answer = [-1]
    arr = list(s)

    for i in range(1, len(arr)):
        try:
            find_index = arr[:i][::-1].index(arr[i])
            answer.append(find_index+1)

        except:
            answer.append(-1)

    return answer