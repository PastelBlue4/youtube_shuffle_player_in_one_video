import Link from "next/link";

export default function TimeLineButton({ onClick, timeLine }) {
  const minute = Math.floor(timeLine / 60);
  const second = timeLine % 60;
  return (
    <button
      className="px-6 py-3 mr-3 border rounded-lg bg-sky-300 text-yellow-50"
      onClick={onClick}
    >
      {minute} : {second}
    </button>
  );
}
