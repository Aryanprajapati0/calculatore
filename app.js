let str="";
let buttons = document.querySelectorAll('button');
let input = document.querySelector("input");

let arr= Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(evt)=>{       
    if(evt.target.innerHTML == '='){
        str=eval(str);
        document.querySelector('input').value=str;
    }else if(evt.target.innerHTML == 'AC'){          // AC is clear the number 
        str="";
        document.querySelector('input').value=str;
    } else if(evt.target.innerHTML == 'DEL'){       // DEl is the Delete one number form string 
        str=str.substring (0,str.length-1);
        document.querySelector('input').value=str;
    }else{
      console.log(evt.target)
      str += evt.target.innerHTML;                    
      document.querySelector('input').value=str;
    }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    input.focus();
});


