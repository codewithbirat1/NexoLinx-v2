import Link from 'next/link';

export interface ProjectCtaCardProps {
  heading?: string;
  descriptionBeforeLink?: string;
  linkText?: string;
  descriptionAfterLink?: string;
  linkHref?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export function ProjectCtaCard({
  heading = 'Your project here',
  descriptionBeforeLink = 'The proof is in our work. Check out ',
  linkText = 'Nexo Linx case studies',
  descriptionAfterLink =
    ', to learn how our technology solutions can transform your business.',
  linkHref = '#showcase',
  buttonLabel = 'Book a discovery call',
  buttonHref = 'https://calendly.com/biratpandey9/new-meeting',
}: ProjectCtaCardProps) {
  return (
    <section
      aria-label="Project call to action"
      className="site-section bg-[var(--color-bg-primary)] text-white"
    >
      <div className="site-container">
        <div className="mx-auto max-w-6xl rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface-dark)] border-dashed  px-6 py-2 text-center sm:px-6 sm:py-4 lg:px-20 lg:py-8">
          <h2 className="text-2xl font-bold sm:text-3xl">{heading}</h2>
          <p className="mx-auto mt-4 max-w-[480px] text-sm leading-relaxed text-white/70 sm:text-base">
            {descriptionBeforeLink}
            <Link
              href={linkHref}
              className="font-semibold text-[var(--color-brand-primary)] underline decoration-[var(--color-brand-primary)]/50 underline-offset-4 transition-colors hover:text-[var(--color-brand-hover)] hover:decoration-[var(--color-brand-hover)]"
            >
              {linkText}
            </Link>
            {descriptionAfterLink}
          </p>
          <Link
            href={buttonHref}
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 whitespace-nowrap rounded-full bg-[var(--color-brand-primary)] px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-[var(--color-brand-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-surface-dark)]"
          >
            <span>{buttonLabel}</span>
            <span
              aria-hidden="true"
              className="flex size-7 items-center justify-center rounded-md bg-black/10 text-base leading-none"
            >
              ↗
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
