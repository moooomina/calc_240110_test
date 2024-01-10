//키,몸무게,최종목표,결과 변수생성

const height = document.querySelector("#height"); //키
const weight = document.querySelector("#weight"); //몸무게
const goals = document.querySelector("#goals"); //최종목표
let result = document.querySelector('#result'); //결과
console.log(height,weight,goals,result);

//결과보기 버튼을 눌렀을때 팝업창으로 결과 출력
//1.사용자가 키와 몸무게를 적고 결과보기 버튼을 누르면 계산이 되고
//2.적정 체중은 kg 이며 kg 초과되셨습니다.라는 팝업창 알림

result.addEventListener('click',function(){
    console.log(height.value);
    //적정체중 계산식 변수
    const calc = (height.value - 100) * 0.9;
    console.log(calc)
    //적정체중 계산값 결과
    let result = (calc);
    //초과몸무게 계산식 변수
    const overWeight = weight.value - result;
    console.log(overWeight);
    //적정체중 및 초과몸무게 계산값 결과
    console.log(`적정체중은 ${result}kg이며 ${overWeight}kg 초과되셨습니다.`);
    //팝업창 출력
    window.alert(`적정체중은 ${result}kg이며 ${overWeight}kg 초과되셨습니다.`);
});