console.log('DG')
const buttons =  document.querySelectorAll('.button');
const body = document.querySelector('body');
const canvas = document.querySelector('.canvas');
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('mouseover' , function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'blue'){
      body.style.background = e.target.id;
      canvas.style.color = "white"
    }
    if(e.target.id === 'grey'){
      body.style.background = e.target.id;
      canvas.style.color = "white"
    }
    if(e.target.id === 'white'){
      body.style.background = 'white';
      canvas.style.color = "black" ;
      
    }
    if(e.target.id === 'yellow'){
      body.style.background = e.target.id;
      canvas.style.color = "black"
    }
    if(e.target.id === 'pink'){
      body.style.background = e.target.id;
      canvas.style.color = "black"
    }
    if(e.target.id === 'orange'){
      body.style.background = e.target.id;
      canvas.style.color = "black"
    }
    if(e.target.id === 'purple'){
      body.style.background = e.target.id;
      canvas.style.color = "white"
    }
  });


});