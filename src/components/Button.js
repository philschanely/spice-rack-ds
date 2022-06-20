import PropTypes from "prop-types";
import styled from "styled-components";

const Tokens = {
  color: {
    primary: '#0099ff',
    white: '#fff',
    neutral: 'grey',
  }
};

export const Button = ({
  children,
  disabled,
  onClick,
}) => {
  const buttonType = ({ disabled }) => `
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: bold;
    color: ${disabled ? Tokens.color.neutral : Tokens.color.primary};
  `;

  const Root = styled.button`
    background: ${Tokens.color.white};
    border: 0.2rem solid ${disabled ? Tokens.color.neutral : Tokens.color.primary};
    padding: 1em;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    ${buttonType({ disabled })}
  `;

  return (
    <Root disabled={disabled} onClick={onClick}>
      {children}
    </Root>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};
 
Button.defaultProps = {
  disabled: false
};
