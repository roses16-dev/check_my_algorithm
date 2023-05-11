# 2023.05.11
# 이어 붙인 수

def solution(num_list):
    answer = 0
    
    even = ''
    odd = ''
    
    for num in num_list:
        if num % 2 == 0:
            even = f'{even}{num}'
        else:
            odd = f'{odd}{num}'
            
    answer = int(even) + int(odd)
    
    return answer