/** @jsx jsx */
import { jsx, Text } from "theme-ui";

const VisuallyHidden = ({ variant, children, ...rest }) => (
  <Text {...rest} variant={variant}>
    {children}
  </Text>
);

export default VisuallyHidden;