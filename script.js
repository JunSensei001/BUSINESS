let title = document.querySelector('#slogan');
let index=1;
let slogan = "YOUR SERVICE IS OUR PRIORITY"

const TypeWriter = () => {
let new_title = slogan.slice(0,index);
title.innerText = new_title;
setTimeout(()=>{TypeWriter()},200)

if(index>new_title.length){
    index=1;
}
else
    index++;
}

TypeWriter();
