import Image from "next/image";

export function Unauthorized() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src="/unauthorized.svg" width={197} height={197} alt="sales bar" />
      <p className="mt-4">No access. Check permissions.</p>
    </div>
  );
}
