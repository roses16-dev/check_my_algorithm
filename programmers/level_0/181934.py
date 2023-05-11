# 2023.05.11
# 조건 문자열

def solution(ineq, eq, n, m):
    answer = 0
    sign = f'{ineq}{eq}'

    if sign == ">=":
      answer = n >= m    
    elif sign == "<=":
       answer = n <= m    
    elif sign == ">!":
       answer = n > m    
    elif sign == "<!":
       answer = n < m    
        
    return int(answer)