function bmiCalculation(){
  var winput =document.getElementById("bodyWeight").value;
  var hinput =document.getElementById("bodyHeight").value;
  var paragraph = document.getElementById("bmiParagraph");
  if(hinput==="" || winput===""){
    paragraph.innerHTML="Please,check your weight and height."
    return;
  }
  var Weight = Number(document.getElementById("bodyWeight").value);
  var Height = Number(document.getElementById("bodyHeight").value)/100;
  var bmi = Weight/Height**2;
  if (bmi < 18.5){
    paragraph.innerHTML = "you are underweight and your BMI is <span id ='result'>&nbsp;"+bmi.toFixed(1)+"</span>"
  }else if (bmi >= 18.5 && bmi <= 24.9){
    paragraph.innerHTML = "You are at a normal weight and your BMI is <span id ='result'>&nbsp;"+bmi.toFixed(1)+"</span>"
  }else if(bmi >= 25 && bmi <= 29.9){
    paragraph.innerHTML="You are overweight and your BMI is<span id ='result'>&nbsp;"+bmi.toFixed(1)+"</span"
  }else if(bmi >=30 && bmi <=39.9 ){
    paragraph.innerHTML="You are obese ;please consult a doctor and your BMI is <span id ='result'>&nbsp;"+bmi.toFixed(1)+"</span>"
  }else if (bmi>=40){
    paragraph.innerHTML="You are morbidly obese;please consult a doctor immediatly,your BMI is <span id ='result'>&nbsp;"+bmi.toFixed(1)+"</span>"
  }
}