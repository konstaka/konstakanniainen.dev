import { Dispatch, RefObject, SetStateAction } from "react";

export default function Console({
  inputRef,
  inputInFocus,
  setInputInFocus,
}: {
  inputRef: RefObject<HTMLInputElement>;
  inputInFocus: boolean;
  setInputInFocus: Dispatch<SetStateAction<boolean>>;
}) {
  const consoleContent: string[] = ["Welcome to my CV."];
  const prompt = "visitor@konstakanniainen.dev ~ $";

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
        {consoleContent.join("\n")}
        {"\n"}

        <div className="flex flex-row">
          <div className="mr-2">{prompt}</div>
          <input
            type="text"
            className="bg-black outline-none caret-transparent [field-sizing:content]"
            ref={inputRef}
          />
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
