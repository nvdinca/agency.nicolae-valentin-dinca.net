export function DisclaimerBanner() {
  return (
    <div
      className="w-full bg-slate-100 border-b border-slate-200 py-2 px-4 text-center text-sm text-slate-700"
      role="banner"
    >
      This is a fictional agency & portfolio project. No real transactions or
      personal data are involved. —{" "}
      <a
        href="https://nicolae-valentin-dinca.net"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-slate-900 font-medium"
      >
        Portfolio of Nicolae-Valentin Dinca
      </a>
    </div>
  );
}
