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
export const Title = styled.h3`
    margin-bottom: 20px;
`;

// slider 
export const SliderWrapper = styled.article`
  margin-top: 30px;
  .slick-dots {
    bottom: 25px;
    width: auto;
    right: 20px;
  }
  .slick-dots li button:before {
    font-size: 15px;
  }
`;

// News 
export const SingleNews = styled.article`
    flex: 1 1 50%;
    padding: 0 15px 30px;
    position: relative;
    .image_area {
      border-radius: 10px;
        height: 250px;
        overflow: hidden;
        margin-bottom: 20px;
        box-shadow: 5px 5px 5px 1px #93dafa;
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            transition: all .5s;
        }
    
    }
    &:hover{
      .image_area {
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            transform: scale(1.2);
          }
      }
    }
    a{
      display: inline-block;
      text-decoration: none;
      background-color: #000;
      color: #fff;
      padding: 5px 15px;
      font-size: 13px;
      margin-top: 10px;
    }
    .source {
      position: absolute;
      background: #07b2ff;
      color: #fff;
      padding: 3px 15px;
      z-index: 2;
    }
    .newsdetails{
       h3{
        margin-bottom: 15px;
        font-size: 18px;
       }
    }
`;