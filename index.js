//必须用colorArray
//用if, else
//handleResize上添加code就OK

const colorArray = [
  'red',
  'lightcyan',
  'lightseagreen',
  'tomato',
  'cornflowerblue',
  'gray',
];

const target = document.querySelector('body');

function handleResize() {
  let w = window.innerWidth
  console.log(w)
  if(w<200){
    target.style.backgroundColor = `red`
  }else if(w>=200&&w<300){
    target.style.backgroundColor = `lightcyan`
  }else if(w>=300&&w<500){
    target.style.backgroundColor = `lightseagreen`
  }else if(w>=500&&w<700){
    target.style.backgroundColor = `tomato`
  }else if(w>=700&&w<900){
    target.style.backgroundColor = `cornflowerblue`
  }else{
    target.style.backgroundColor = `gray`
  }
}

window.addEventListener('resize', handleResize);
