import styled from 'styled-components';
import aboutImg from '../images/about.jpg';
import { AboutTitle } from './Title';

const About = () => {
  return (
    <Wrapper id="about">
      <div className="img-con">
        <img src={aboutImg} alt="about" />
      </div>
      <article>
        <AboutTitle>
          <h2>about us</h2>
        </AboutTitle>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            cum pariatur minus vero neque aliquid eveniet, ipsum repudiandae nam
            voluptatem minima alias obcaecati velit aspernatur et laudantium,
            adipisci iste delectus aperiam debitis dolorum sequi! Sit, natus
            voluptates, dolor delectus quibusdam dolores nostrum ratione iure
            blanditiis architecto culpa libero ducimus corporis.
          </p>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  .img-con {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  article {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 250px;
    width: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    }
    .text {
      height: 100%;
      width: 70%;
      background: var(--white);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 30px;
      p {
        color: var(--paragraph);
      }
    }
  }
`;

export default About;
