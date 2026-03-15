interface VideoEmbedProps {
  type: "youtube" | "vimeo";
  id: string;
}

export default function VideoEmbed({ type, id }: VideoEmbedProps) {
  const src =
    type === "youtube"
      ? `https://www.youtube.com/embed/${id}?rel=0&showinfo=0`
      : `https://player.vimeo.com/video/${id}`;

  return (
    <div className="video-container">
      <iframe
        src={src}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={`${type} video`}
      />
    </div>
  );
}
