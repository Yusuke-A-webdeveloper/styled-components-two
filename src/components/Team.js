import styled from 'styled-components';
import { TeamList } from '../data';
import { TeamTitle } from './Title';

const Team = () => {
  return (
    <Wrapper>
      <TeamTitle>
        <h2>our team</h2>
      </TeamTitle>
      <article>
        {TeamList.map((list) => {
          const { id, icon, person, image, job } = list;

          return (
            <div className="single-person" key={id}>
              <div className="img-con">
                <img src={image} alt={person} />
              </div>
              <main>
                <h3>{person}</h3>
                <h4>{job}</h4>
                <footer>
                  {icon.map((item, index) => {
                    const { iconList, href } = item;
                    return (
                      <div key={index} className="icon">
                        <a href={href}>{iconList}</a>
                      </div>
                    );
                  })}
                </footer>
              </main>
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
  background: #222;
  padding: 100px 0;
  article {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    padding: 50px 20px 0;
    .single-person {
      width: 350px;
      border: 1px solid rgba(255, 255, 255, 0.05);
      box-shadow: 10px 10px 10px rgba(255, 255, 255, 0.1);
      padding: 10px;
      transition: 0.3s ease-out;
      &:hover {
        border: 1px solid rgba(255, 255, 255, 0.8);
        transform: scale(1.1);
      }
      .img-con {
        position: relative;
        width: 100%;
        height: 350px;
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      main {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 20px 0;
        h3 {
          text-transform: uppercase;
          font-size: 25px;
          letter-spacing: 1px;
        }
        h4 {
          margin-top: 10px;
          text-transform: capitalize;
          font-size: 22px;
          letter-spacing: 1px;
        }
        footer {
          display: flex;
          margin-top: 20px;
          a {
            font-size: 22px;
            margin: 10px;
            color: var(--white);
            transition: 0.3s ease-out;
            &:hover {
              opacity: 0.5;
            }
          }
        }
      }
    }
  }
`;

export default Team;
