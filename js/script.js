var result= prompt("Please enter your number")


if(result <= 100   &&   result >= 80){
   console.log("Grade A+")
}else if(result<80 && result>=70){
   console.log("Grade A")
}else if(result<70 && result>=60){
   console.log("Grade A-")
}else if(result<60 && result>=50){
   console.log("Grade B")
}else if(result<50 && result>=40){
   console.log("Grade C")
}else if(result<40 && result>=33){
   console.log("Grade D")
}else if(result<33 && result>=0){
   console.log("Fail")
}else{
   console.log("Invalid Number")
}