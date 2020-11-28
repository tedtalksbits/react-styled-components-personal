import styled from 'styled-components';
import React from 'react';
import './Section.css';

const Heading = styled.h1`
   color: ${({ lightTxt }) => (lightTxt ? 'lightgrey' : 'black')};
   font-size: 3.5rem;
   margin-bottom: 1rem;

   @media screen and (max-width: 1200px){
      font-size: 3rem;
   }
   @media screen and (max-width: 768px){
      font-size: 2.5rem;
   }
`
const Subtitle = styled.p`
   color: ${({ lightTxt }) => (lightTxt ? 'lightgrey' : 'black')};
   font-size: 24px;
`
const Description = styled.p`
   color: ${({ lightTxt }) => (lightTxt ? 'lightgrey' : 'black')};
   font-size: 18px;
   margin-bottom: 2rem;
`
const Img = styled.img`
   width: 100%;

`
const Bg = styled.div`
   background: ${({ lightBg }) => (lightBg ? 'lightgrey' : 'black')};
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;

   @media screen and (max-width: 1440px){
      padding: 0 2rem;
   }

`
const Grid = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-template-areas: ${({ imgFirst }) => (imgFirst ? `'child2 child1'` : `'child1 child2'`)};
   align-items: center;
   gap: 2rem;
   max-width: 1440px;
   width: 100%;
   margin: 0 auto;

   @media screen and (max-width: 768px){
      display: block;
   }
`

const Child1 = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
   justify-content: center;
   grid-area: child1;
`
const Child2 = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
   justify-content: center;
   grid-area: child2;
`
const BtnWrapper = styled.div`
   padding: 0;
   display: flex;

   @media screen and (max-width: 768px){
      padding: 0;
      margin-bottom: 3.5rem;
   }
`
const Btn = styled.a`
   font-size: 2rem;
   text-decoration: none;
   color: ${({ primaryBtn }) => (primaryBtn ? 'var(--dark-black)' : 'white')};
   padding: 1rem 3rem;
   border-radius: 999px;
   background: ${({ primaryBtn }) => (primaryBtn ? 'var(--secondary-blue)' : '#151515')};
   white-space: nowrap;
   text-align: center;
   transition: all .3s ease-in-out;
   cursor: pointer;

   &:hover{
      background: var(--primary-blue);
      color: white;
   }
   @media screen and (max-width: 768px){
      

   }
`
function Section({ id, heading, subheading, img, description, lightBg, lightTxt, buttonLabel, primaryBtn, imgFirst }) {
   return (
      <Bg id={id} lightBg={lightBg}>
         <Grid imgFirst={imgFirst}>
            <Child1>
               <Subtitle lightTxt={lightTxt}>{subheading}</Subtitle>
               <Heading lightTxt={lightTxt}>{heading}</Heading>
               <Description lightTxt={lightTxt}>{description}</Description>
               <BtnWrapper>
                  <Btn primaryBtn={primaryBtn}>{buttonLabel}</Btn>
               </BtnWrapper>
            </Child1>
            <Child2>
               <Img src={img} alt='alt here'></Img>
            </Child2>
         </Grid>
      </Bg>
   )
}

export default Section

