import Image from "next/image";

interface ProjectMediaProps {
  src: string;
  alt: string;
  priority?: boolean;
}

export default function ProjectMedia({ src, alt, priority = false }: ProjectMediaProps) {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-surface/80">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 55vw"
        className="reference-img-filter object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        priority={priority}
      />
      <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}
