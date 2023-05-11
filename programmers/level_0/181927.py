# 2023.05.11
# 마지막 두 원소

def solution(num_list):
    answer = num_list

    answer.append(num_list[-1] - num_list[-2] if num_list[-1] > num_list[-2] else num_list[-1] * 2)

    return answer
