const mainForm = () =>{
    const email = document.querySelector('.email').value;
    const text = document.querySelector('.text').value;

    if(email.trim() === '' || text.trim() === ''){
        alert('Los campos son obligatorios');
    }else{
        alert('Gracias por contactarnos')
    }
}

document.getElementById('form-send').addEventListener('submit', (e)=>{
    e.preventDefault();
    mainForm();
});