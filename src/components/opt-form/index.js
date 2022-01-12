import { Container, Input, Button, Text } from "./styles/opt-form";

const OptForm = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

OptForm.Input = function OptFormInput({ ...restProps }) {
  // input不需要children
  return <Input {...restProps} />;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children}
      <img
        src={require("../../assets/images/icons/chevron-right.png").default}
        alt="Try Now"
      />
    </Button>
  );
};

OptForm.Text = function OptFormInput({ children, ...restProps }) {
  // input不需要children
  return <Text {...restProps}>{children}</Text>;
};

export default OptForm;
