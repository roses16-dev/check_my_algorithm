# 2023.05.31
# 영어 끝말잇기

def solution(n, words):
    for index in range(1, len(words)):
       if words[index-1][-1] != words[index][0] or words[index] in words[:index]:
          return [index % n + 1 , index // n + 1]
       
    return [0, 0]
  