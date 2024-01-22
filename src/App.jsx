import { useEffect, useState, useRef } from "react";
import "./App.css";
import WebViewer from "@pdftron/webviewer";

function App() {
  const [count, setCount] = useState(0);
  const viewer = useRef(null);

  useEffect(() => {
    WebViewer(
      {
        path: "/webviewer",
        licenseKey: process.env.VIEWER_LICENSE,
        initialDoc:
          "https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf",
      },
      viewer.current
    ).then((instance) => {
      const { documentViewer } = instance.Core;
      // you can now call WebViewer APIs here...
    });
  }, []);

  return (
    <div className="App">
      <div
        className="webviewer"
        ref={viewer}
        style={{ height: "100vh", width: "100vh" }}
      ></div>
    </div>
  );
}

export default App;
