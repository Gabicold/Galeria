import React from 'react' 
import styled, { createGlobalStyle } from 'styled-components'
import imagem1 from './midia/1.jpeg'
import imagem2 from './midia/2.jpeg'
import imagem3 from './midia/3.jpeg'
import imagem4 from './midia/4.jpeg'
import imagem5 from './midia/6.jpeg'
import imagem6 from './midia/7.jpeg'
import imagemFundo from "./midia/Sakura.jpg"
export default function Main(){

    const GlobalStyle = createGlobalStyle`
    *{
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Montserrat:wght@200;300;700&display=swap');
    margin:0;
    padding:0;
    box-sizing:border-box;
    
  }
    `
    const Fundo = styled.div`
    height:150vh;
    background-image:url(${imagemFundo});
    
    `
    const CaixaTexto = styled.div`
    width:60vw;
    height:10vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-bottom:4vh;
    background-color:RGBA(200,162,200,0.71);
    Border-radius:20px;
    
    `
    const Titulo = styled.h1`
    font-family: 'Dancing Script';
    color:purple;
    ` 
    const Paragrafo = styled.p`
    font-family: 'Dancing Script';
    font-size:2rem;
    color:purple;
    ` 

    const CaixaPrincipal = styled.div`
    position:relative;
    top:15vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    
   
    `
    const GridMae = styled.div`
    width:50vw;
    height:95vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
    background-color:RGBA(200,162,200,0.71);
    border-radius:20px;
    
    `
    const Image = styled.img`
    width:15vmax;
    height:20vmax;
    margin:10px;
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.5);
    `
    
    return(
        <Fundo>
            <CaixaPrincipal>
        <CaixaTexto>
        <Titulo>Bem vindo(a) a nossa galeria!!</Titulo>
        <Paragrafo>Fique agora com algumas fotos muito especias!!</Paragrafo>
        </CaixaTexto>
        <GridMae>
            <div><Image src={imagem1} alt='Imagem1'/></div>
            <div><Image src={imagem2} alt=''/></div>
            <div><Image src={imagem3} alt=''/></div>
            <div><Image src={imagem4} alt=''/></div>
            <div><Image src={imagem5} alt=''/></div>
            <div><Image src={imagem6} alt=''/></div>
        </GridMae>
        </CaixaPrincipal>
        </Fundo>
        
    )
}