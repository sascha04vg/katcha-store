import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: var(--peach);
  background: ${(props) => (props.cart ? "var(--light)" : "var(--peach)")};
  border: 0.05rem solid var(--peach);
  color: var(--light);
  color: ${(props) => (props.cart ? "var(--peach)" : "var(--light)")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.2s eas-in-out;
  &:hover {
    background: var(--light);
    background: ${(props) => (props.cart ? "var(--peach)" : "var(--light)")};
    color: var(--peach);
    color: ${(props) => (props.cart ? "var(--light)" : "var(--peach)")};
  }
  &:focus {
    outline: none;
  }
`;
