import styled from "@emotion/styled";

export const OuterContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
  font-weight: bold;
  font-family: Roboto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  width: 100%;
  margin: 0.5rem 0;
  font-size: 2rem;
`;

export const CalcResult = styled.input`
  background: #181f33;
  width: 90%;
  height: 100px;
  border-radius: 5px;
  margin: 0.5rem 0;
  padding: 0 5%;
  color: #fff;
  font-size: 3rem;
  text-align: right;
`;

export const KeysContainer = styled.div`
  background: #242d44;
  display: flex;
  flex-wrap: wrap;
`;

export const Key = styled.button`
  flex: 1 0 20%;
  background: #eae3dc;
  margin: 0.3rem;
  text-transform: uppercase;
  font-family: roboto;
  line-height: 2.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #434a59;
  border-radius: 15px 50px 30px;

  &:hover {
    background: #fff;
    outline: 5px dotted red;
  }
`;
