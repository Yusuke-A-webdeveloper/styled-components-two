import styled from 'styled-components';
import contactImg from '../images/contact.jpg';
import { ContactTitle } from './Title';
import { BasicInput } from './Button';
import SocialIcons from './SocialIcons';

const Contact = () => {
  return (
    <Wrapper>
      <div className="img-con">
        <img src={contactImg} alt="contact" />
      </div>
      <form>
        <div className="form-con">
          <ContactTitle>
            <h2>contact us</h2>
          </ContactTitle>
          <article>
            <BasicInput placeholder="your name" />
            <BasicInput type="email" placeholder="email address" />
            <textarea placeholder="what would you like to ask?"></textarea>
            <div className="submit-btn">
              <BasicInput type="submit" />
            </div>
            <div className="social-btn">
              <ContactTitle>
                <h3>follow us</h3>
              </ContactTitle>
              <SocialIcons />
            </div>
          </article>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .img-con {
    position: relative;
    width: 50%;
    height: 100vh;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  form {
    width: 50%;
    .form-con {
      position: relative;
      display: flex;
      flex-direction: column;
      max-width: 450px;
      margin: 0 auto;
      article {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        textarea {
          width: 100%;
          padding: 5px;
          margin: 10px;
          font-size: 18px;
          height: 250px;
          resize: none;
          background: transparent;
        }
        .submit-btn {
          text-align: center;
        }
        .social-btn {
          margin-top: 20px;
          text-align: center;
        }
      }
    }
  }
`;

export default Contact;
