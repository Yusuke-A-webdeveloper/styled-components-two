import styled from 'styled-components';
import errorImg from '../images/error.svg';

const Error = () => {
  return (
    <Wrapper>
      <div className="img-con">
        <img src={errorImg} alt="error" />
      </div>
      <article>
        <h2>page not found</h2>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 77px);
  .img-con {
    position: relative;
    margin: 80px auto 0;
    width: 650px;
    height: 400px;
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
    margin-top: 50px;
    text-align: center;
    h2 {
      font-size: 30px;
    }
  }
  @media (max-width: 700px) {
    .img-con {
      width: 100%;
      height: 250px;
    }
  }
`;

export default Error;
