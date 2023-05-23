# 2023.05.24
# 구명보트

def solution(people, limit):
    answer = 0
    sorted_people = sorted(people, reverse=True)

    left = 0
    right = len(sorted_people)-1

    while True:
        length = right - left + 1

        # 반복문 종료조건
        if length <= 1:
            answer += length
            break

        # 혼자서 탈 수 밖에 없는 무게
        if sorted_people[left] + sorted_people[right] > limit:
            count = 1
            answer += 1
            left += 1
        # 짝 지어주기
        else:
            answer += 1
            left += 1
            right -= 1

    return answer