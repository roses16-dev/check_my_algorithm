# 2023.06.09
# 카드 뭉치

def solution(cards1, cards2, goal):

    for e in goal:
        if len(cards1) != 0 and e == cards1[0]:
            cards1.pop(0)
        elif len(cards2) != 0 and e == cards2[0]:
            cards2.pop(0)
        else:
            return 'No'
        
    return 'Yes'