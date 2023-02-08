import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { projectList } from '../data';

const SingleProject = () => {
  const { projectId } = useParams();
  const newId = parseInt(projectId);
  const newProject = projectList.find((project) => project.id === newId);

  const { image, title, desc } = newProject;

  return (
    <Wrapper>
      <div className="img-con">
        <img src={image} alt={title} />
      </div>
      <article>
        <h2>{title}</h2>
        <p>{desc}</p>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 77px);
  display: flex;
  justify-content: center;
  align-items: center;
  .img-con {
    position: relative;
    width: 100%;
    height: 450px;
    margin-left: 50px;
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
    width: 100%;
    padding: 50px;
    h2 {
      text-align: center;
      font-size: 35px;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 20px;
    }
    p {
      font-size: 20px;
    }
  }
  @media (max-width: 900px) {
    margin-top: 50px;
    flex-direction: column;
    .img-con {
      margin-left: 0px;
    }
  }
  @media (max-width: 415px) {
    .img-con {
      height: 250px;
    }
    article {
      padding: 50px 20px;
    }
  }
`;

export default SingleProject;
