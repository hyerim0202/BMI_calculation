function calculateBMI(){

  let h; //키
  let w; //몸무게

  h = Number(document.querySelector("#height").value);
  w = Number(document.querySelector("#weight").value);

  h = h/100; //cm -> m, 170 -> 1.7

  let bmi;
  bmi = w/(h*h);
  
  

  document.querySelector("#result").textContent = "BMI: " + bmi.toFixed(2);

  if(bmi >= 25){
    document.querySelector("#state").textContent = "비만";
  } else if(bmi >= 23){
    document.querySelector("#state").textContent = "과체중";
  } else if(bmi >= 18.5){
    document.querySelector("#state").textContent = "정상";
  } else{document.querySelector("#state").textContent = "저체중";}

  // ===== ✨ 여기부터 추가 : 바 위 하트 위치 정하기 =====
  // 바 비율 → 저체중 25% | 정상 20% | 과체중 20% | 비만 35%
  let pos;
  let level;

  if(bmi >= 25){
    pos = 65 + (bmi - 25) / 10 * 35;     // 25 ~ 35   → 65% ~ 100%
    level = "obese";
  } else if(bmi >= 23){
    pos = 45 + (bmi - 23) / 2 * 20;      // 23 ~ 25   → 45% ~ 65%
    level = "over";
  } else if(bmi >= 18.5){
    pos = 25 + (bmi - 18.5) / 4.5 * 20;  // 18.5 ~ 23 → 25% ~ 45%
    level = "normal";
  } else{
    pos = (bmi - 10) / 8.5 * 25;         // 10 ~ 18.5 → 0% ~ 25%
    level = "under";
  }

  pos = Math.min(Math.max(pos, 3), 97);  // 하트가 바 밖으로 안 나가게

  document.querySelector("#marker").style.left = pos + "%";
  document.body.dataset.level = level;   // CSS에서 색 바꿀 때 사용
  // ===== ✨ 여기까지 추가 =====
}