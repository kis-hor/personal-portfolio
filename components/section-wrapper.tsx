type SectionWrapperProps = {
  id?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function SectionWrapper({ id, title, description, children }: SectionWrapperProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
      <div className="mb-8 space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
        {description ? <p className="max-w-2xl text-[var(--muted)]">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
