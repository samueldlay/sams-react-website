type DescriptionImageProps = { src: string; alt: string }

export default function DescriptionImage({ src, alt }: DescriptionImageProps) {
  return (
    <div className="w-screen border-2 border-teal-800 rounded-md relative overflow-hidden h-72 sm:w-1/3 sm:h-24">
      <img
        src={src}
        className={`object-cover w-full h-full`}
        alt={alt}
      />
    </div>
  );
}
