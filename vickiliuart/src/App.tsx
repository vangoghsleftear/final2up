import { useState } from "react";

import Card from "./components/Card";

import exampleImage1 from "./assets/example-image-1.jpg";
import exampleImage2 from "./assets/example-image-2.jpg";

import "./App.scss";

// Example usage
function App() {
  const [showCopy, setShowCopy] = useState(true);

  return (
    <main>
      <button onClick={() => setShowCopy(!showCopy)}>
        Toggle Copy (example)
      </button>

      <Card
        imageUrls={[exampleImage1, exampleImage2]}
        imageLinks={["https://google.com", "https://duckduckgo.com"]}
        copyTexts={["Example Image 1", "Example Image 2"]}
        copyDescriptions={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod.",
          "Donec euismod, nisl eget tempor dapibus, nisl velit ultricies nunc.",
        ]}
        ctaColor="#da3a16"
        containerColor="#fdf6f0"
        spacing="20px"
        padding="20px"
        showCopy={showCopy}
      />

      <Card
        imageUrls={[exampleImage2, exampleImage1]}
        imageLinks={["https://google.com", "https://duckduckgo.com"]}
        copyTexts={["Example Image 1", "Example Image 2"]}
        copyDescriptions={[
          null,
          "Donec euismod, nisl eget tempor dapibus, nisl velit ultricies nunc.",
        ]}
        ctaColor="#136aad"
        containerColor="#e4f6ff"
        spacing="16px"
        padding="50px"
        showCopy={showCopy}
      />

      <Card
        imageUrls={[exampleImage1, exampleImage2]}
        imageLinks={["https://google.com", "https://duckduckgo.com"]}
        copyTexts={["Example Image 1", "Example Image 2"]}
        spacing="32px"
        showCopy={showCopy}
      />
    </main>
  );
}

export default App;
