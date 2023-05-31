# 2023.05.31
# 영어 끝말잇기

def solution(n, words):
    checked_words = [words[0]]
    words = words[1:]

    for word in words:
        if word[0] != checked_words[-1][-1]:
          break

        if checked_words.count(word) >= 1:
           break
        
        checked_words.append(word)

    if len(words) + 1 == len(checked_words):
       return [0, 0]
    else:
       return [len(checked_words) % n + 1, len(checked_words) // n + 1]
