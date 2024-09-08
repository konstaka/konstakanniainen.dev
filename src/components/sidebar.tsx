export default function Sidebar() {
  return (
    <div className="flex-none w-72 space-y-1 relative py-16 text-center text-sm">
      <div className="text-lg">Konsta Kanniainen</div>
      <div>Software Developer</div>
      <div className="text-xs">
        Currently employed at{" "}
        <a className="underline" href="https://talenom.com/" target="_blank">
          Talenom
        </a>
        .
      </div>
    </div>
  );
}
