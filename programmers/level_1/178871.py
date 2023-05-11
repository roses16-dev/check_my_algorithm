# 2023.05.12
# 달리기 경주

# 모든 입력값을 탐색할경우 시간초과
# callings 배열에서 연속되는 이름의 횟수를 카운트하여 players 배열 내 index 탐색을 줄였으나 시간초과
# 이름과 등수를 indexing하여 탐색해야할 것으로 판단되어 dict사용


def solution(players, callings):
    answer = players
    dict_players = {name: i for i, name in enumerate(players)}

    for name in callings:
        index = dict_players[name]
        
        answer[index], answer[index-1] = answer[index-1], answer[index]

        dict_players[answer[index]] += 1
        dict_players[answer[index-1]] -= 1

    return answer
