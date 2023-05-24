import SyntaxHighlighter from "react-syntax-highlighter";
import { messy_component_code, messy_use_code } from "./compound-components";

export const MessyComponent = () => (
  <SyntaxHighlighter language="typescript">
    {messy_component_code}
  </SyntaxHighlighter>
);

export const MessyComponentInvoked = () => (
  <SyntaxHighlighter language="typescript">{messy_use_code}</SyntaxHighlighter>
);
