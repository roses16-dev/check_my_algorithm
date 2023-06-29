# 2023.06.29
# 할 일 목록

def solution(todo_list, finished):      
    return [todo for index, todo in enumerate(todo_list) if not finished[index]]