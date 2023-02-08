import styled from 'styled-components';
import { ServiceList } from '../data';
import { DefaultTitle, ServiceTitle } from './Title';

const Service = () => {
  return (
    <Wrapper>
      <ServiceTitle>
        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing.</h3>
      </ServiceTitle>
      <ServiceTitle>
        <h3>Lorem ipsum dolor sit amet.</h3>
      </ServiceTitle>
      <article>
        {ServiceList.map((list) => {
          const { id, title, desc } = list;
          return (
            <div className="single-article" key={id}>
              <DefaultTitle>
                <h4>{title}</h4>
                <p>{desc}</p>
              </DefaultTitle>
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
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 80px;
    .single-article {
      padding: 20px;
    }
  }
`;

export default Service;
