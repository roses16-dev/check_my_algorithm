// 신고 결과 받기

function solution(id_list, report, k) {
  var answer = new Array(id_list.length).fill(0);
  report = Array.from(new Set(report));

  let temp = [];
  const arr_report = report.map(e => e.split(' '));

  for( element of id_list ){
      temp = arr_report.filter(e => e[1] === element);

      if(temp.length >= k ){
          temp.forEach(e => {
              answer[id_list.indexOf(e[0])]++;
          })
      }
  }
  return answer;
}