import Image from "next/image";

export type AchievedPercentProps = {
  image: string;
  percent: string;
};
export function AchievedPercent({ image, percent }: AchievedPercentProps) {
  return (
    <>
      <Image src={image} width={197} height={197} alt="circle" />

      <div className="absolute top-[269px] leading-8">
        <h2 className="text-34 font-semibold "> {percent} </h2>
        <span>achieved</span>
      </div>
    </>
  );
}
