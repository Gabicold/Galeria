import React from 'react' 
import styled, { createGlobalStyle } from 'styled-components'
export default function Header(){
  //Css
  const GlobalStyle = createGlobalStyle`
    *{
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Montserrat:wght@200;300;700&display=swap');
      margin:0;
    padding:0;
    box-sizing:border-box;
    
  }

  `
  const CaixaPrincipal = styled.div`
  width:100vw;
  height:10vh;
  display:flex;
  align-items:center;
  justify-content:space-between;
  background-color:RGBA(200,162,200,0.71);
  position:fixed;
  z-index:1;
  `
  const Titulo = styled.h2`
  font-size:2rem;
  font-family: 'Dancing Script';
  margin-left:5vw;
  color:purple;
  `
  const CaixaLista = styled.ul`
  list-style:none;
  margin-right:5vw;
  
  `
  const Lista = styled.li`
  display:inline-block;
  padding-right:10vw;
  font-size:1.5rem;
  font-family: 'Dancing Script';
  
    `
    const TagA = styled.a`
    text-decoration:none;
    color:black;
    cursor:pointer;
    color:purple;
    &:hover{
      text-decoration:underline;
    }
    `
//html
  return(
    <div>
      <GlobalStyle/>
      <CaixaPrincipal>
    <div>
      <Titulo>Galeria</Titulo>
    </div>
    <div>
      <nav>
      <CaixaLista>
        <Lista><TagA href="#">Fotenhas</TagA></Lista>
        <Lista><TagA href="#">Frases</TagA></Lista>
        <Lista><TagA href="#">Bônus</TagA></Lista>
      </CaixaLista>
    </nav>
    </div>
    </CaixaPrincipal>
    </div>
    
  )
}