import React from "react";
import { RouterProvider } from "react-router-dom";

import GlobalStyle from "./globalStyles";
import router from "./routes";
import * as Organisms from "./components/organisms/index.anchor";
import * as Atoms from "./components/atoms/index.anchor";

function App() {
  const withHeader = ["/"];
  const [currentPath, setCurrentPath] = React.useState<string>(
    window.location.pathname
  );
  React.useEffect(() => {
    setCurrentPath(String(window.location.pathname));
  }, [setCurrentPath]);

  return (
    <>
      <GlobalStyle />
      {withHeader.includes(currentPath) && <Organisms.Header />}
      <Atoms.Layout data-testid="container">
        <RouterProvider router={router} />
      </Atoms.Layout>
    </>
  );
}

export default App;
