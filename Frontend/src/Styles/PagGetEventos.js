import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.form`
display:flex;
flex-direction: column;
background-color:#000 ;
padding:30px 90px !important ;
`

export const Caixa2 = styled.div`   
background-color:#000 ;
margin: 0 ;

`

export const CaixaH1 = styled.div`  
background-color:#000 ;
margin: 0;
`

export const H1 = styled.h1`
font-family: Arial, Helvetica, sans-serif;
color: #fff;
margin-right:190px;
margin-bottom:45px;
font-size: 32px;
`
export const ButtonGet = styled(Link)`
heigth: auto;
border: 'none';
color: '#fff';
font-size: '20px'; 
background-color: 'rgba(255, 255, 255, 0.29)';
`
