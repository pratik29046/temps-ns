let screen= document.getElementById("output");

let btn=document.querySelectorAll("button");

let values='';

for( let items of btn){
    items.addEventListener('click',(e) =>{
        text = e.target.innerText;
        console.log(text);

        if(text=='x'){
            console.log(screen.value.slice(0, -1));
            screen.value=screen.value.slice(0, -1);
            values=screen.value;

        }else if (text == 'X') {
            text = '*';
             values += text;
            screen.value = values;
        }
        else if (text == 'c') {
            values = "";
            screen.value = values;
        }
        else if (text == '=') {
            screen.value = eval(values);
        }else {
            values += text;
            screen.value = values;
        }


    });
}