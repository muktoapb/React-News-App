import styled from "styled-components";

// Basic component 
export const Input = styled.input`
    padding:4px 5px;
    border: 1px solid #ddd;

`;
export const Button = styled.button`
    padding:4px 10px;
    border: 1px solid #000;
    color:#fff;
    background-color: #000;

`;

// slider 
export const SliderWrapper = styled.article`
  margin-top: 30px;
  .slick-dots {
    bottom: 25px;
  }
  .slick-dots li button:before {
    font-size: 15px;
  }
`;