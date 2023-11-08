import Image from "next/image";

export function Nps() {
  return (
    <div className="flex max-w-max flex-col items-center justify-between gap-8 rounded-2xl bg-gray-400 px-16 py-[29px] shadow-3xl">
      <h1 className="text-2xl font-semibold"> Overall NPS </h1>
      <div className="flex flex-col items-center gap-4">
        <Image src="/smile.svg" width={54} height={54} alt="smile emoticon" />
        <h2 className="text-2xl font-semibold text-green-100"> Excellent!</h2>
      </div>

      <p className="text-sm"> NPS Score 75</p>
    </div>
  );
}
