
let result=document.getElementById('ans');
const inc=document.getElementById('increment');
const dec=document.getElementById('decrement');
inc.addEventListener('click',add);
dec.addEventListener('click',decre);
function add(){
   
    output=parseInt(document.getElementById('ans').value);
    console.log(output+" "+typeof(output))
    if(output<10)
    {
    output=output+1;
    document.getElementById('ans').value=output;
    }
    else{
        inc.disabled=false
    }
}

function decre()
{
    output=parseInt(document.getElementById('ans').value);
    console.log(output+" "+typeof(output))
    if(output>0)
    { 
    output=output-1;
    document.getElementById('ans').value=output;
    }
    else{
        dec.disabled=false
    }

}

