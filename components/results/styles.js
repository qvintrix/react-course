import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 10px;
  background-color: #eae8e8;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
`;

const Filter = styled.div`
  display: flex;
  min-width: 250px;
  justify-content: space-between;
  cursor: pointer;
`;

const ReleaseDate = styled.div`
  color: ${props => props.sortBy === 'release date' ? "#ff9c9c" : ""};
`;

const Rating = styled.div`
  color: ${props => props.sortBy === 'rating' ? "#ff9c9c" : ""};
`;

export {Wrapper, Container, Filter, ReleaseDate, Rating};
