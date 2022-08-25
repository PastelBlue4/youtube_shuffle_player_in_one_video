export default function VideoContainer({ finalLink }) {
  return (
    <div className="[&_p]:absolute flex bg-slate-600 w-[620]px h-[375px] mt-3">
      <iframe
        width="100%"
        height="100%"
        src={finalLink}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
