import SyntaxHighlighter from "react-syntax-highlighter";
import {
  clean_component,
  clean_component_used,
  clean_context,
  messy_component_code,
  messy_use_code,
} from "./compound-components";

export const MessyComponent = () => (
  <SyntaxHighlighter language="typescript">
    {messy_component_code}
  </SyntaxHighlighter>
);

export const MessyComponentInvoked = () => (
  <SyntaxHighlighter language="typescript">{messy_use_code}</SyntaxHighlighter>
);

export const CleanContext = () => (
  <SyntaxHighlighter language="typescript">{clean_context}</SyntaxHighlighter>
);

export const CleanComponent = () => (
  <SyntaxHighlighter language="typescript">{clean_component}</SyntaxHighlighter>
);

export const CleanComponentUsed = () => (
  <SyntaxHighlighter language="typescript">
    {clean_component_used}
  </SyntaxHighlighter>
);
