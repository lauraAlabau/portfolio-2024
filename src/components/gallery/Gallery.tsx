type GalleryProps = {
  src: string;
};

export const Gallery = ({ src }: GalleryProps) => {
  return (
    <div className="mb-8 break-inside-avoid" key={src}>
      <img className="h-auto max-w-full rounded-lg" src={src} alt="Gallery" />
    </div>
  );
};
