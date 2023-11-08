export type AchivedProcessInfoProps = {
  expected: string;
  achieved: string;
};

export function AchievedProcessInfo({
  expected,
  achieved,
}: AchivedProcessInfoProps) {
  return (
    <div className="flex flex-row items-center gap-5 text-sm">
      <div className="flex flex-row items-center gap-2.5">
        <div className="h-[15px] w-[15px] rounded-lg bg-gray-760" />
        <p>Expected</p>
        <p>{expected}</p>
      </div>
      <div className="flex flex-row items-center gap-2.5">
        <div
          className="h-[15px] w-[15px] rounded-lg bg-gradient-to-r from-purple-100
                                    to-blue-200"
        />
        <p>Achieved</p>
        <p>{achieved}</p>
      </div>
    </div>
  );
}
