# 2023.06.15
# 길이에 따른 연산

def solution(num_list):
    answer = 1

    if len(num_list) <= 10:
      # from math import prod 함수로 해결할 수도 있다.
      for num in num_list:
          answer *= num
    else:
       answer = sum(num_list)

    return answer