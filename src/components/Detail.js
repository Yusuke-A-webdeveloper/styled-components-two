import styled from 'styled-components';
import { DetailTitle } from './Title';
import detailImg from '../images/detail1.jpg';
import detailImg2 from '../images/detail2.jpg';

const Detail = () => {
  return (
    <Wrapper>
      <header>
        <div className="title-left">
          <DetailTitle>project title</DetailTitle>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
            cupiditate!
          </p>
        </div>
        <div className="title-right">
          <DetailTitle right>
            sample projects {new Date().getFullYear()}
          </DetailTitle>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam a
            enim minus quis quod totam dolorum ab expedita, recusandae delectus.
          </p>
        </div>
      </header>
      <aside>
        <div className="img-con left">
          <img src={detailImg2} alt="project one" />
        </div>
        <div className="img-con right">
          <img src={detailImg} alt="project two" />
        </div>
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  background: #222;
  padding-top: 100px;
  header {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .title-left {
      padding: 0 60px;
      width: 50%;
      text-align: center;
    }
    .title-right {
      padding: 0 60px;
      width: 50%;
    }
    p {
      color: var(--white);
      font-size: 18px;
    }
  }
  aside {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding: 100px 0;
    .img-con.left {
      position: relative;
      width: 550px;
      height: 300px;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .img-con.right {
      position: relative;
      width: 350px;
      height: 300px;
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
`;

export default Detail;
