'use strict';

async function pegarImagens(quantidade = 5) {
  const endPoint = `https://dog.ceo/api/breeds/image/random/3${quantidade}`;
  const response = await fetch(endPoint);
  const data = await response.json();
  return data.message; // Retorna um array de URLs de imagens
}

function criarTagImg(imagem){
    const galeria = document.getElementById('galeria');
    const tagImg = document.createElement('img');
    tagImg.src = imagem;
    galeria.appendChild(tagImg);
}

async function carregarFotos(){
    const imagens = await pegarImagens(100);
    imagens.forEach(criarTagImg);
}

carregarFotos();
