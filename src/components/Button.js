import PropTypes from "prop-types";
 
const styles = {
  background: "#fff",
  border: "0.2rem solid #0099ff",
  color: "#0099ff",
  fontWeight: "bold",
  letterSpacing: "0.1em",
  padding: "1em",
  textTransform: "uppercase"
};
 
export const Button = ({
  children,
  disabled,
  onClick,
}) => (
  <button disabled={(disabled ? "true" : "")} onClick={onClick} style={styles}>
    {children}
  </button>
);
 
Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};
 
Button.defaultProps = {
  disabled: false
};
