import Image from 'next/image';
import Link from 'next/link';

export interface DiscoveryBannerProps {
  heading?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

const noiseTexture =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.32'/%3E%3C/svg%3E\")";

export function DiscoveryBanner({
  heading = 'Your next great product decision starts with one conversation.',
  description =
    "If your product isn't where you want it to be, 30 minutes with us might tell you why. And more often than not, we'll reveal the fix.",
  buttonLabel = 'Book a Free Discovery Call',
  buttonHref = 'https://calendly.com/biratpandey9/new-meeting',
}: DiscoveryBannerProps) {
  return (
    <section
      aria-label="Book a free discovery call"
      className="hidden lg:flex relative isolate w-full overflow-hidden py-6 text-[var(--color-text-dark)] sm:py-12 lg:py-16 "
      style={{
        backgroundImage:
          'radial-gradient(circle at 12% 0%, var(--color-brand-light) 0%, var(--color-brand-primary) 58%)',
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-10 mix-blend-soft-light"
        style={{ backgroundImage: noiseTexture, backgroundSize: '180px 180px' }}
      />

      <div className="site-container relative z-10 grid items-center gap-6 sm:gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
        <div className="flex flex-col items-start">
          {/* Heading — uses global h2 from typography.css */}
          <h2 className="max-w-2xl tracking-tight text-2xl">{heading}</h2>

          {/* Description — matches design-system body style */}
          <p className="mt-3 max-w-[480px] text-lg font-normal leading-relaxed tracking-tight text-black/70 sm:mt-4 sm:text-base">
            {description}
          </p>

          {/* CTA Button — consistent with ProjectCtaCard button pattern */}
          <Link
            href={buttonHref}
            className="mt-6 inline-flex min-h-12 items-center justify-center gap-3 whitespace-nowrap rounded-full bg-white px-6 py-3 text-md font-semibold text-[var(--color-text-dark)] transition-colors hover:bg-[var(--color-brand-light)] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-brand-primary)]"
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

        {/* Image — reduced to ~50% of original max size */}
        <div className="relative mx-auto w-[min(50vw,252px)] lg:mr-0 lg:w-full lg:max-w-[280px]">
  <div className="animate-hero-float motion-reduce:animate-none">
    <Image
      src="/gif-icon.webp"
      alt=""
      aria-hidden="true"
      width={280}
      height={280}
      sizes="(min-width: 1024px) 280px, 50vw"
      className="h-auto w-full object-contain"
    />
  </div>

  <Image
    src="/gif-icon.webp"
    alt=""
    aria-hidden="true"
    width={67}
    height={67}
    sizes="67px"
    className="absolute -right-1 top-0 h-[28%] w-[28%] object-contain sm:-right-2 sm:-top-1"
  />
</div>
      </div>
    </section>
  );
}
