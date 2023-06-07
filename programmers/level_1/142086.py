# 2023.06.06
# 가장 가까운 같은 글자

def solution(s):
    answer = [-1]

    arr = list(s)
    print(arr)

    for i in range(1, len(arr)):
        try:
            find_index = arr[:i].index(arr[i])
            answer.append(i - find_index)

        except:
            answer.append(-1)
    return answer

print(solution("banana"))