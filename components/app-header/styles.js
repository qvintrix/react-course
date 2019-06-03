import styled from 'styled-components';
// import Link from 'next/link';

const Wrapper = styled.div`
  background-image: url("/static/bg.png");
	background-repeat: no-repeat;
	background-size: 100%;
	padding: 10px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

// const Link = styled.Link`
//   color: #ff9c9c;
//   font-size: 20px;
// `;

const SearchBtn = styled.span`
  width: 80px;
  height: 30px;
  color: #ff9c9c;
  border-radius: 5px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  cursor: pointer;
  background-color: white;
  padding: 5px;
`;

export {Wrapper, Container, SearchBtn}
