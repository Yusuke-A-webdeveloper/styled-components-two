import styled from 'styled-components';
import { ServiceTitle } from './Title';
import { CardList } from '../data';

const Card = () => {
  return (
    <Wrapper>
      <ServiceTitle>
        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
      </ServiceTitle>
      <article>
        {CardList.map((list) => {
          const { id, icon, desc } = list;

          return (
            <div className="single-card" key={id}>
              <div className="icon-con">{icon}</div>
              <p>{desc}</p>
            </div>
          );
        })}
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 70px 100px;
  article {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 50px;
    .single-card {
      max-width: 550px;
      background: var(--light-grey);
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      padding: 60px 20px;
      .icon-con {
        svg {
          font-size: 30px;
        }
      }
      p {
        font-size: 20px;
      }
    }
  }
`;

export default Card;
