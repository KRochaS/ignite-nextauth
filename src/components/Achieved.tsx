import { AchievedPercent, AchievedPercentProps } from "./AchievedPercent";
import {
  AchievedProcessInfo,
  AchivedProcessInfoProps,
} from "./AchievedProcessInfo";

type AchievedProps = {
  title: string;
  achievedPercent: AchievedPercentProps;
  achievedProcessInfo: AchivedProcessInfoProps;
};

export default function Achieved({
  title,
  achievedPercent,
  achievedProcessInfo,
}: AchievedProps) {
  const { image, percent } = achievedPercent;
  const { expected, achieved } = achievedProcessInfo;

  return (
    <div
      className="flex max-w-max flex-col items-center justify-between gap-8
                 rounded-2xl bg-gray-400 px-12 py-[29px] shadow-3xl"
    >
      <h1 className="text-2xl font-semibold"> {title} </h1>
      <div className="flex flex-col items-center gap-8">
        <AchievedPercent image={image} percent={percent} />
        <AchievedProcessInfo expected={expected} achieved={achieved} />
      </div>
    </div>
  );
}
