# 2023.06.22
# 홀수 vs 짝수

def solution(num_list):
        return max(sum(num_list[1::2]), sum(num_list[::2]))