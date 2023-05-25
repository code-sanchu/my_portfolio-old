export const messy_component_code = `const MyForm = ({
  computeIsInputError,
  elements,
  mutationStatusOverlay,
  onCancelButtonClick,
  onSubmit,
  submitIsDisabled,
  text: { placeholder, title },
}: {
  computeIsInputError?: (inputValue: string) => boolean;
  elements?: {
    input?: ReactElement;
    inputMessage?: ReactElement;
  };
  mutationStatusOverlay: ReactElement;
  onCancelButtonClick: () => void;
  onSubmit: (value: string, resetForm: () => void) => void;
  submitIsDisabled: (inputValue: string) => boolean;
  text: {
    title: string;
    placeholder: string;
  };
}) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const resetForm = () => {
    setValue("");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value.length) {
      return;
    }

    onSubmit(value, resetForm);
  };

  const isInputError = computeIsInputError && computeIsInputError(value);

  return (
    <form className="relative w-full" onSubmit={handleSubmit}>
      <div className="min-w-[250px] max-w-[400px] rounded-md">
        <p className="mb-xs text-sm text-gray-300">{title}</p>
        <div
          className={\`relative rounded-sm border bg-gray-50 py-1 pr-sm \${
            isInputError ? "border-my-alert-content" : ""
          }\`}
        >
          {elements?.input}
          <div
            className={\`transition-transform duration-75 ease-in-out \${
              isFocused || !value.length ? "translate-x-xs" : "translate-x-0"
            }\`}
          >
            <input
              className="w-full bg-transparent text-base"
              placeholder={placeholder}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onFocus={() => {
                setIsFocused(true);
              }}
              onBlur={() => {
                setIsFocused(false);
              }}
              type="text"
              autoComplete="off"
            />
          </div>
        </div>
        {elements?.inputMessage ? isInputError && elements.inputMessage : null}
        <div className="mt-4 flex items-center justify-between pb-4">
          <button
            className="my-btn my-btn-neutral"
            type="button"
            onClick={onCancelButtonClick}
          >
            Cancel
          </button>
          <button
            className={\`my-btn my-btn-action \${
              !submitIsDisabled ? "cursor-not-allowed" : ""
            }\`}
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
      {mutationStatusOverlay}
    </form>
  );
}
`;

export const messy_use_code = `
  <MyForm
    mutationStatusOverlay={<></>}
    onCancelButtonClick={() => null}
    onSubmit={(inputValue, resetForm) => null}
    submitIsDisabled={(inputValue) => false}
    text={{ placeholder: "hello", title: "very messy" }}
    computeIsInputError={(inputValue) => true}
    elements={{ input: <></>, inputMessage: <></> }}
  />
`;

export const clean_context = `
import { createContext, useContext, useState, type ReactElement } from "react";

export type ComponentState = {
  inputValue: string;
  setInputValue: (inputValue: string) => void;
  resetForm: () => void;
};

const ComponentContext = createContext<ComponentState | null>(null);

export const ComponentProvider = ({
  children,
}: {
  children: ReactElement | ((args: ComponentState) => ReactElement);
}) => {
  const [inputValue, setInputValue] = useState("");

  const resetForm = () => {
    setInputValue("");
  };

  const value: ComponentState = {
    inputValue,
    setInputValue,
    resetForm,
  };

  return (
    <ComponentContext.Provider value={value}>
      {typeof children === "function" ? children(value) : children}
    </ComponentContext.Provider>
  );
};

export const useComponentContext = () => {
  const context = useContext(ComponentContext);

  if (!context) {
    throw new Error("useComponentContext must be used within its provider!");
  }

  return context;
};
`;

export const clean_component = `
import { type ReactElement } from "react";

import { useFocus } from "~/hooks/useFocused";
import {
  ComponentProvider,
  useComponentContext,
  type ComponentState,
} from "./Context";

export function MyForm({
  onSubmit,
  children,
}: {
  children:
    | ReactElement
    | ((args: Pick<ComponentState, "inputValue">) => ReactElement);
  onSubmit: (value: string, resetForm: () => void) => void;
}) {
  return (
    <ComponentProvider>
      {({ inputValue, resetForm }) => (
        <form
          className="relative w-full"
          onSubmit={(e) => {
            e.preventDefault();

            if (!inputValue.length) {
              return;
            }

            onSubmit(inputValue, resetForm);
          }}
        >
          <div className="min-w-[250px] max-w-[400px] rounded-md">
            {typeof children === "function"
              ? children({ inputValue })
              : children}
          </div>
        </form>
      )}
    </ComponentProvider>
  );
}

const Title = ({ text }: { text: string }) => (
  <p className="mb-xs text-sm text-gray-300">{text}</p>
);

MyForm.Title = Title;

function Input() {
  throw new Error(
    "MyForm.Input should not be used as a component - it exists for naming purposes only.",
  );
}

MyForm.Input = Input;

function InputWrapper({
  containerStyles,
  children,
}: {
  containerStyles?: string;
  children: ReactElement | null | (ReactElement | null)[];
}) {
  return (
    <div
      className={\`relative rounded-sm border bg-gray-50 py-1 pr-sm \${
        containerStyles || ""
      }\`}
    >
      {children}
    </div>
  );
}

Input.Wrapper = InputWrapper;

const InputInner = ({ placeholder }: { placeholder: string }) => {
  const { focusHandlers, isFocused } = useFocus();

  const { inputValue, setInputValue } = useComponentContext();

  return (
    <div
      className={\`transition-transform duration-75 ease-in-out \${
        isFocused || !inputValue.length ? "translate-x-xs" : "translate-x-0"
      }\`}
    >
      <input
        className="w-full bg-transparent text-base"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        {...focusHandlers}
        type="text"
        autoComplete="off"
      />
    </div>
  );
};

Input.Input = InputInner;

const FormControls = ({
  onCancel,
  submitIsDisabled,
}: {
  onCancel: () => void;
  submitIsDisabled: boolean;
}) => (
  <div className="mt-4 flex items-center justify-between pb-4">
    <button className="my-btn my-btn-neutral" type="button" onClick={onCancel}>
      Cancel
    </button>
    <button
      className={\`my-btn my-btn-action \${
        submitIsDisabled ? "cursor-not-allowed" : ""
      }\`}
      type="submit"
    >
      Submit
    </button>
  </div>
);

MyForm.Controls = FormControls;
`;

export const clean_component_used = `
<MyForm
  onSubmit={(inputValue, resetForm) =>
    ifAdmin(() => handleSubmit({ closeForm, inputValue, resetForm }))
  }
>
  {({ inputValue }) => {
    const isValidInput = checkIsYoutubeUrl(inputValue);
    const isError = inputValue.length && !isValidInput;

    return (
      <>
        <MyForm.Title text="Add new Video" />
        <MyForm.Input.Wrapper
          containerStyles={isError ? "border-my-alert-content" : ""}
        >
          <MyForm.Input.Input placeholder="Youtube url" />
          <YoutubeURLHelp />
        </MyForm.Input.Wrapper>
        {isError ? <InvalidInputMessage /> : null}
        <MyForm.Controls
          onCancel={closeForm}
          submitIsDisabled={
            !isAdmin || !inputValue.length || !isValidInput
          }
        />
        <MutationStatusOverlay
          status={addVideoMutation.status}
          text={{
            creating: "Adding video",
            error: "Error creating video",
            success: "Video created",
          }}
        />
      </>
    );
  }}
</MyForm>
`;
