import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 10px;
`;

const Image = styled.img`
  max-width: 340px;
`;

const Description = styled.div`
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
`;

const ReleaseYear = styled.span`
  border: 1px solid #afaaaa;
  padding: 1px 5px;
`;

const Genre = styled.div`
  text-align: left;
  color: gray;
  margin-top: 5px;
`;

const GenreItem = styled.span`
  margin: 0 5px;
`;

export {Wrapper, Image, Description, ReleaseYear, Genre, GenreItem};
