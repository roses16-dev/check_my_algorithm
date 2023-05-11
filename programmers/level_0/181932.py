# 2023.05.11
# 코드 처리하기

def solution(code):
    answer = ''
    mode = False
    
    for i, a in enumerate(code):
        if a == '1':
            mode = not mode
            continue;
        
        if mode:
            answer += a if i % 2 != 0 else ''
        else:
            answer += a if i % 2 == 0 else ''
            
    return answer if answer != '' else 'EMPTY'

solution('abc1abc1abc')