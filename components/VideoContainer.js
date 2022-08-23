export default function VideoContainer({ finalLink }) {
  return (
    <iframe
      width="660"
      height="370"
      src={finalLink}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
