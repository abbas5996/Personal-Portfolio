console.log('hello world');
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener('click',()=>{
    document.querySelector('.slidebar').classList.toggle('slidebar-go');
    if(document.querySelector('.slidebar').classList.contains('slidebar-go')){
        document.querySelector('.menu').style.display = 'inline';   
        document.querySelector('.cross').style.display = 'none';
    }
    else{
        document.querySelector('.menu').style.display = 'none';   
        setTimeout(() =>{
            document.querySelector('.cross').style.display = 'inline';
        },750);
        
    }
})