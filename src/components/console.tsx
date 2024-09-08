import {
  Dispatch,
  ReactElement,
  RefObject,
  SetStateAction,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";

const date = new Date();

const prettyPrintDate = () => {
  return `${date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  })} ${date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })}`;
};

const initialContent = "Welcome to my CV.";
const prompt = "visitor@konstakanniainen.dev ~ $";

export default function Console({
  inputRef,
  inputInFocus,
  setInputInFocus,
}: {
  inputRef: RefObject<HTMLInputElement>;
  inputInFocus: boolean;
  setInputInFocus: Dispatch<SetStateAction<boolean>>;
}) {
  const [consoleContent, setConsoleContent] = useState<ReactElement[]>([
    <div key={initialContent}>{initialContent}</div>,
  ]);
  const [input, setInput] = useState("");

  const pushToConsole = (content: ReactElement[]) => {
    setConsoleContent([...consoleContent, ...content]);
  };

  const commands: { name: string; effect: () => ReactElement[] }[] = [
    {
      name: "ls",
      effect: () =>
        commands.map((command) => (
          <div key={uuidv4()}>
            -rwxr-xr-x 1 root wheel 154352 {prettyPrintDate()} {command.name}
          </div>
        )),
    },
    {
      name: "this",
      effect: () => [
        <div key={uuidv4()}>
          <a
            href="https://github.com/konstaka/konstakanniainen.dev"
            target="_blank"
            className="hover:underline"
          >
            https://github.com/konstaka/konstakanniainen.dev
          </a>
        </div>,
      ],
    },
    // { TU Delft line art logo
    //   name: "education",
    //   effect: () =>
    //     commands.map(
    //       (command) =>
    //         `-rwxr-xr-x   1 root  wheel   154352 ${prettyPrintDate()} ${command.name}`,
    //     ),
    // },
    // { // Talenom line art logo
    //   name: "current",
    //   effect: () =>
    //     commands.map(
    //       (command) =>
    //         `-rwxr-xr-x   1 root  wheel   154352 ${prettyPrintDate()} ${command.name}`,
    //     ),
    // },
    // { // CGI line art logo
    //   name: "previous",
    //   effect: () =>
    //     commands.map(
    //       (command) =>
    //         `-rwxr-xr-x   1 root  wheel   154352 ${prettyPrintDate()} ${command.name}`,
    //     ),
    // },
  ];

  const commandHistory: string[] = [];

  const executeCommand = (command: string) => {
    const newLines = [
      <div key={uuidv4()}>
        {prompt} {command}
      </div>,
    ];
    setInput("");
    commandHistory.push(command);
    const { effect } = commands.find(({ name }) => name === command) || {};
    if (effect) {
      newLines.push(...effect());
    }
    pushToConsole(newLines);
  };

  return (
    <div
      className="flex-none max-w-3xl truncate whitespace-pre-line h-96 max-h-full border border-slate-100 bg-black text-white rounded-xl leading-tight text-xs font-[family-name:var(--font-geist-mono)]"
      onClick={(e) => {
        e.stopPropagation();
        setInputInFocus(true);
      }}
    >
      <div className="flex flex-row h-6 py-1 px-1 bg-neutral-700">
        <div className="px-1 border-r">x</div>
        <div className="px-1 border-r">-</div>
        <div className="px-1">+</div>
      </div>
      <div className="p-2">
        {consoleContent}
        <div className="flex flex-row">
          <div className="whitespace-pre">{prompt} </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              executeCommand(input);
            }}
          >
            <input
              type="text"
              className="bg-black outline-none caret-transparent [field-sizing:content]"
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.currentTarget.value)}
            />
          </form>
          {inputInFocus ? (
            <div className="w-2 h-3.5 bg-white" />
          ) : (
            <div className="w-2 h-3.5 border" />
          )}
        </div>
      </div>
    </div>
  );
}
