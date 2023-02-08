import styled from 'styled-components';
import heroImg from '../images/hero.jpg';
import heroImg2 from '../images/hero2.jpg';
import { DefaultTitle } from './Title';

const Hero = () => {
  return (
    <Wrapper>
      <header>
        <div className="title">
          <h2>
            this is not responsive design. <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            quidem culpa ut, corporis quos dicta quisquam tempora repellat rerum
            repudiandae?
          </h2>
        </div>
        <div className="img-con">
          <img src={heroImg} alt="hero1" />
        </div>
      </header>
      <main>
        <div className="img-con">
          <img src={heroImg2} alt="hero1" />
        </div>
        <article>
          <div className="title">
            <DefaultTitle>
              <h3>about us</h3>
            </DefaultTitle>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, optio. Omnis totam nisi vero reiciendis sed dolorem
              veritatis a aperiam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, cum.
            </p>
            <a href="#about">learn more</a>
          </div>
        </article>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  background: var(--bg);
  header {
    position: relative;
    height: 450px;
    display: flex;
    padding: 50px;
    .title {
      max-width: 700px;
      padding: 30px;
      h2 {
        font-size: 32px;
        text-transform: capitalize;
        color: var(--white);
      }
    }
    .img-con {
      position: relative;
      width: 500px;
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
  }
  main {
    position: relative;
    width: 100%;
    min-height: 550px;
    .img-con {
      position: absolute;
      top: -125px;
      left: 100px;
      width: 800px;
      height: 500px;
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
      bottom: 100px;
      right: 80px;
      background: var(--white);
      max-width: 550px;
      padding: 30px;
      p {
        margin-bottom: 20px;
        font-size: 18px;
        color: var(--paragraph);
      }
      a {
        display: inline-block;
        font-size: 18px;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 8px 15px;
        border: none;
        color: var(--white);
        background: var(--blue);
        cursor: pointer;
        transition: 0.3s ease-out;
        &:hover {
          opacity: 0.5;
        }
      }
    }
  }
`;

export default Hero;
