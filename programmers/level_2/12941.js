// 최솟값 만들기

function solution(A,B){
    var answer = 0;

    A.sort((a, b) => a-b)
    B.sort((a, b) => b-a)
    
    answer = A.reduce((p, c, i) => {
        return p + (c * B[i])
    }, 0)
    
    return answer;
}