import styled from 'styled-components';
// slick 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// global style
import { SliderWrapper,Title } from '../style';



export default function TopNews({ news }) {
  const topFive = news.slice(0, 3);

  const sliderSetting = {
    infinite: true,
    autoplay: true,
    dots: true,
    autoplaySpeed: 5000,
  }
  return (
    <SliderWrapper>
      <Title>Tranding Now</Title>
      <Slider {...sliderSetting}>
        {
          topFive?.map((n, index) => (

            <div key={index}>
              <TopCard>
                <div className="card_text">
                  <h3>{n?.title.slice(0, 80)} {(n.title.length > 80) ? '...' : ''}</h3>
                  <p>{n?.description.slice(0, 100)} {(n.description.length > 100) ? '...' : ''}</p>
                  <a href={n?.url} target="_blank" rel="noreferrer">Read More</a>
                </div>
                <div className="card_image">
                  <img src={n.urlToImage} alt={n.title} />
                </div>
              </TopCard>
            </div>
          ))
        }
      </Slider>
    </SliderWrapper>
  );

}


//Styled element

const TopCard = styled.article`
  display: grid;
  grid-template-columns: 50% auto;
  border: 1px solid #ddd;
  margin-bottom: 15px;
  .card_text{
    padding: 15px;
    h3{
      font-size: 24px;
      font-weight: 500;
      line-height: 1.2;
      margin-bottom: 15px;
    }
    p{
      font-size: 16px;
      margin-bottom: 10px;
    }
    a{
      display: inline-block;
      text-decoration: none;
      background-color: #000;
      color: #fff;
      padding: 5px 15px;
      font-size: 13px;
    }
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;