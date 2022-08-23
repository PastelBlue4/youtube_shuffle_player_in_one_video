import Link from "next/link";

export default function TimeLineButton({ onClick, startPoint, songName }) {
  const minute = Math.floor(startPoint / 60);
  const second = startPoint % 60;
  return (
    <button
      className="px-6 py-3 border rounded-lg bg-sky-300 text-yellow-50"
      onClick={onClick}
    >
      <div className="flex flex-col">
        <span>{songName}</span>
        <span>
          {minute} : {second}
        </span>
      </div>
    </button>
  );
}
