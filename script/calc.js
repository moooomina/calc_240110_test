//키,몸무게,최종목표,결과,계산식 변수생성

const height = document.querySelector("#height"); //키
const weight = document.querySelector("#weight"); //몸무게
const goals = document.querySelector("#goals"); //최종목표
let result = document.querySelector('#result'); //결과
const calc = (height.value - 100) * 0.9;
console.log(height,weight,goals,result,calc);

//결과보기 버튼을 눌렀을때 팝업창으로 결과 출력