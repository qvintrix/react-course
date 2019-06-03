import styled from 'styled-components';

const Wrapper = styled.div`
  background-image: url("/static/bg.png");
  background-repeat: no-repeat;
  background-size: 100%;
  padding-bottom: 25px;
`;

const Button = styled.button`
  margin: 0 20px;
  width: 100px;
  height: 25px;
  letter-spacing: 1px;
  font-size: 16px;
  background-color: gray;
  border: none;
  color: #fff;
  cursor: pointer;
`;

const Title = styled(Button)`
  background-color: ${props => props.searchByFilter === 'title' ? "#ff9c9c" : ""};
`;

const Genre = styled(Button)`
  background-color: ${props => props.searchByFilter === 'genre' ? "#ff9c9c" : ""};
`;

const ControlBtns = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SearchFormTitle = styled.div`
  color: #fff;
  font-weight: bold;
`;

const InputField = styled.input`
  width: 100%;
  height: 25px;
  background-color: #242323;
  border: none;
  color: #fff;
  margin: 15px 0;
`;

const SubmitBtn = styled.input`
  padding: 1px 50px;
  line-height: 28px;
  background-color: #e89b9b;
  color: #fff;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

export {Wrapper, SubmitBtn, Title, Genre, ControlBtns, SearchFormTitle, InputField};
