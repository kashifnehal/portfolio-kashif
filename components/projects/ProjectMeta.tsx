interface ProjectMetaProps {
  category: string;
  year?: string;
}

export default function ProjectMeta({ category, year }: ProjectMetaProps) {
  return (
    <div className="flex items-center gap-3 pt-2 font-mono text-xs uppercase tracking-[0.2em] text-[#f5eee6]/70">
      <span>{category}</span>
      {year && (
        <>
          <span className="text-[#f5eee6]/40">•</span>
          <span>{year}</span>
        </>
      )}
    </div>
  );
}
