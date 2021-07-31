
const imageSpace = document.querySelector('.drop-image');

function dragover(e){
   e.preventDefault();
   imageSpace.classList.add('hover');
}


function dragleave(){
    imageSpace.classList.remove('hover');
}

function dropImage(e){
    e.preventDefault();
    imageSpace.classList.remove('hover');
    const imageFile = e.dataTransfer.files[0];
    const tipoArquivo = imageFile.type.split('/')[0];

    if(tipoArquivo === "image"){
     
        const urlImage = URL.createObjectURL(imageFile);
        const imagem = document.createElement('img');
        imagem.src = urlImage;
        imageSpace.appendChild(imagem);
    }else{
        alert('Por favor adicione um arquivo de imagem');
    }





  


}


imageSpace.addEventListener('dragover' , dragover);
imageSpace.addEventListener('dragleave', dragleave);
imageSpace.addEventListener('drop', dropImage)



