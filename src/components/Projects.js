import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProjectTitle } from './Title';
import { projectList } from '../data';
import { BsBook } from 'react-icons/bs';

const Projects = () => {
  return (
    <Wrapper>
      <div className="single-project first">
        <ProjectTitle>
          <h2>our projects</h2>
        </ProjectTitle>
      </div>
      {projectList.map((project) => {
        const { id, image, title } = project;
        return (
          <div className="single-project" key={id}>
            <Link to={`project/${id}`}>
              <img src={image} alt={title} />
            </Link>
          </div>
        );
      })}
      <div className="single-project last">
        <ProjectTitle>
          <BsBook />
          <h2>Lorem, ipsum.</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
            ducimus fuga veritatis facere labore expedita!
          </p>
        </ProjectTitle>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 50px 80px;
  .single-project {
    position: relative;
    width: 270px;
    height: 300px;
    padding: 20px;
    a img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.3s ease-out;
      &:hover {
        opacity: 0.5;
      }
    }
    svg {
      color: var(--white);
      font-size: 45px;
    }
    p {
      color: var(--white);
    }
  }
  .first {
    background: #222;
  }
  .last {
    background: var(--green);
    display: flex;
    align-items: center;
    text-align: center;
  }
`;

export default Projects;
