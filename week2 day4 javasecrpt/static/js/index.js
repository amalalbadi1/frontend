var userValue;
var balanceValue=50000;
var amount;
console.log("erre");
userValue=Number(prompt("pless enter your option (1. withdow , 2. deposite 3. transform)"));
switch (userValue){
    case 1:
        amount=Number(prompt(" enter you amount "));

        if(amount > balanceValue){
           alert("erre");
        }
        else{

            balanceValue -= amount;
            alert(balanceValue);
        }
        break;
    case 2:
        amount=Number(prompt(" enter you amount "));

         balanceValue = balanceValue + amount;
         
        alert("you deposite" + balanceValue);
         break;
    case 3:
        

    amount=Number(prompt(" enter you amount "));

         balanceValue = balanceValue + amount;
  
        alert(`you transform" ${balanceValue}`);
         break;

         default:
}

