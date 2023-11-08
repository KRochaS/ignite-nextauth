import Image from "next/image";

const trianguloTop = {
  width: "0",
  height: "0",
  borderLeft: "8px solid transparent",
  borderRight: "8px solid transparent",
  borderBottom: "14px solid #81FBB8",
};

const trianguloBottom = {
  width: "0",
  height: "0",
  borderTop: "14px solid #EA5455",
  borderLeft: "8px solid transparent",
  borderRight: "8px solid transparent",
};

export function WeeklySales() {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-2xl font-semibold"> Weekly sales breakdown</h1>

        <div className="pt-8">
          <div className="flex items-center gap-1">
            <div style={trianguloTop}></div>
            <p>Day of highest sales.</p>
          </div>
          <p className="mb-8 mt-2 text-2xl font-semibold">Wednesday</p>
        </div>

        <div className="pt-8">
          <div className="flex items-center gap-1">
            <div style={trianguloBottom}></div>
            <p>Day of lowest sales</p>
          </div>
          <p className="mb-8 mt-2 text-2xl font-semibold">Sunday</p>
        </div>
      </div>

      <div className="flex">
        <Image src="/sales-bar.svg" width={531} height={186} alt="sales bar" />
      </div>
    </div>
  );
}
