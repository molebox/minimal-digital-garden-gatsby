/** @jsx jsx */
import { jsx } from "theme-ui";

const Layout = ({ children }) => {
  return (
    <main
      sx={{
        bgColor: "bg",
        height: "100%",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <section
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "1000px",
          margin: "0 auto",
          bgColor: "bg",
          padding: 3,
        }}
      >
        {children}
      </section>
    </main>
  );
};

export default Layout;
