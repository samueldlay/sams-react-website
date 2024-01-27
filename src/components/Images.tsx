type Image = {
  src: string;
  repoUrl: string;
};

type ImagesProps = {
  images: Image[];
};

export default function Images({ images }: ImagesProps) {
  return (
    <div className="flex flex-wrap align-center justify-center content-center gap-4">
      {images.map((image, index) => (
        <a href={image.repoUrl} key={index} target="_blank" rel="noopener noreferrer">
          <img
            src={image.src}
            className={`rounded-md object-cover transition duration-300 hover:opacity-55 w-screen h-64 sm:w-64`}
            alt={`Screenshot of ${image.repoUrl}`}
          />
        </a>
      ))}
    </div>
  )
}
