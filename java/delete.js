document.getElementById("input-delete")
.addEventListener('keyup',function(event){
    const text = event.target.value;
    console.log("user typing" , text)
    const btnDelete = document.getElementById('btn-delete');
    if(text === 'delete'){
        console.log('delete type')
        btnDelete.removeAttribute('disabled');
        const secretTag = document.getElementById('secret-info');
        secretTag.style.display = "none";

    }
    else{
        console.log('something else')
        btnDelete.setAttribute('disabled',true);
    }
})