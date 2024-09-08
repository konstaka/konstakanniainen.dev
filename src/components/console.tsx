import { Dispatch, RefObject, SetStateAction } from "react";

export default function Console({
  inputRef,
  setInputInFocus,
}: {
  inputRef: RefObject<HTMLInputElement>;
  setInputInFocus: Dispatch<SetStateAction<boolean>>;
}) {
  const consoleContent: string[] = ["Welcome to my CV."];
  const prompt = "visitor@konstakanniainen.dev ~ $";
  const cursor = "▋";

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
            className="bg-black outline-none [field-sizing:content]"
            placeholder="ls..."
            ref={inputRef}
          />
          <div>{cursor}</div>
        </div>
      </div>
    </div>
  );
}
