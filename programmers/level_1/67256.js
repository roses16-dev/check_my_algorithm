// [카카오 인턴] 키패드 누르기

let xy_left  = '30';
let xy_right = '32';

function solution(numbers, hand){
    var answer = '';
    let move_hand;
    for (e of numbers){
        if([1, 4, 7].includes(e))
          move_hand = 'left';
        else if ([3, 6, 9].includes(e))
          move_hand = 'right';
        else
          move_hand = calc_hand(e, hand);

        f_move_hand(e, move_hand);
        answer += move_hand[0].toUpperCase();
    }
    return answer;
}

function f_move_hand(destination, movehand){
    // 좌표를 저장한다.
    let xy_destination = '';

    if( destination === 0) xy_destination = '31';
    else {
        xy_destination += Math.trunc((destination-1) / 3).toString();
        xy_destination += Math.trunc((destination-1) % 3).toString();
    }
    movehand === 'right' ? xy_right = xy_destination : xy_left = xy_destination;
}

// 목적지와 주로 쓰는 손을 받아 어떤 손이 움직어야하는지 계산해주는 함수
function calc_hand(destination, hand){
    // 좌표를 저장한다.
    let xy_destination = '';
    let move_hand;

    if(destination === 0)      xy_destination = '31';
    else {
        xy_destination += Math.trunc((destination-1) / 3).toString();
        xy_destination += Math.trunc((destination-1) % 3).toString();
    }
    
    // 좌표와 손의 거리를 계산한다.
    let right_dist = Math.abs(xy_destination[0] - xy_right[0] ) + Math.abs( xy_destination[1] - xy_right[1]);
    let left_dist = Math.abs(xy_destination[0] - xy_left[0] ) + Math.abs( xy_destination[1] - xy_left[1]);
        
    if(right_dist === left_dist) move_hand = hand;
    else move_hand = right_dist > left_dist ? 'left' : 'right';

    return move_hand;
}
