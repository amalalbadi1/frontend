let text = document.getElementById("text")
let massage =' amal albadi full stack dev' 
let worde= massage.split(" ")


let index =0
let interval=setInterval(function(){
text.innerHTML +=worde[index]+" ";
index++
if (index == worde.length){

    clearInterval(interval);
}

},500)