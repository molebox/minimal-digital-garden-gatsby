/** @jsx jsx */
import { Link, jsx } from "theme-ui";
import VisuallyHidden from './elements/visually-hidden';

const ExternalLink = ({ icon, name, href, ...rest }) => (
  <Link
    sx={{
      fontSize: "20px",
      fontWeight: 500,
      fontFamily: "heading",
      color: "text",
      my: 5,
      ...rest,
    }}
    href={href}
  >
    <VisuallyHidden>{name}</VisuallyHidden>
    {icon}
  </Link>
);

export default ExternalLink;
