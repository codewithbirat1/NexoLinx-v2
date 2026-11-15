import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronRight,
  Clock3,
  Mail,
} from "lucide-react";
import { aiTrustArticleSlug, recentPosts } from "@/constants/blog";
import { blogArticleContent } from "@/constants/blog-articles";
import styles from "./page.module.css";
import { DiscoveryBanner } from "@/components/sections/DiscoveryBanner/DiscoveryBanner";
import { ContactSection } from "@/components/sections/Contact";
import BusinessContact from "@/components/sections/BusinessContact";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nexolinx.com"
).replace(/\/$/, "");

function findPost(slug: string) {
  return recentPosts.find((post) => post.slug === slug);
}

export function generateStaticParams() {
  return [{ slug: aiTrustArticleSlug }];
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);
  const content = blogArticleContent[slug];

  if (!post || !content) {
    return { title: "Article not found | Insights | Nexo Linx" };
  }

  return {
    title: `${post.title} | Nexo Linx`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `${siteUrl}/insight/${slug}`,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  };
}

export default async function BlogArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = findPost(slug);
  const content = blogArticleContent[slug];

  if (!post || !content) {
    notFound();
  }

  const articleUrl = `${siteUrl}/insight/${slug}`;
  const shareUrl = encodeURIComponent(articleUrl);
  const shareTitle = encodeURIComponent(post.title);
  const shareLinks = [
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
    },
    {
      label: "Email",
      href: `mailto:?subject=${shareTitle}&body=${shareUrl}`,
    },
  ];

  return (
    <>
    <main className={styles.page}>
      <div className={styles.shell}>
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight size={14} />
            </li>
            <li>
              <Link href="/insight">Insights</Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight size={14} />
            </li>
            <li aria-current="page">{post.title}</li>
          </ol>
        </nav>

        <article className={styles.article}>
          <header className={styles.articleHeader}>
            <ul className={styles.categories} aria-label="Article categories">
              {post.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.description}>{post.description}</p>
            <div className={styles.meta}>
              <span>
                By <span className={styles.author}>{post.author}</span>
              </span>
              <span className={styles.metaDivider} aria-hidden="true" />
              <time dateTime={post.dateTime}>{post.date}</time>
              <span className={styles.metaDivider} aria-hidden="true" />
              <span className={styles.readingTime}>
                <Clock3 size={15} aria-hidden="true" />
                {post.readingTime} min read
              </span>
            </div>
          </header>

          <figure className={styles.cover}>
            <Image
              src={post.image}
              alt={post.imageAlt}
              width={1200}
              height={675}
              sizes="(min-width: 1280px) 900px, calc(100vw - 32px)"
              priority
            />
            <figcaption>{post.imageAlt}</figcaption>
          </figure>

          <div className={styles.readingLayout}>
            <aside className={styles.contents} aria-label="Article navigation">
              <nav
                className={styles.desktopContents}
                aria-label="In this article"
              >
                <p>In this article</p>
                <ol>
                  {content.sections.map((section, index) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
              <details className={styles.mobileContents}>
                <summary>In this article</summary>
                <ol>
                  {content.sections.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`}>{section.title}</a>
                    </li>
                  ))}
                </ol>
              </details>
            </aside>

            <div className={styles.storyColumn}>
              <div className={styles.lead}>
                <p>{content.introduction}</p>
              </div>

              <div className={styles.prose}>
                {content.sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className={styles.storySection}
                  >
                    <h2>{section.title}</h2>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}

                    {section.points && (
                      <ul className={styles.points}>
                        {section.points.map((point) => (
                          <li key={point.title}>
                            <h3>{point.title}</h3>
                            <p>{point.description}</p>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.table && (
                      <div className={styles.tableWrap}>
                        <table>
                          <thead>
                            <tr>
                              {section.table.headers.map((header) => (
                                <th key={header} scope="col">
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.table.rows.map((row) => (
                              <tr key={row.first}>
                                <th scope="row">{row.first}</th>
                                <td>{row.second}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {section.callout && (
                      <aside className={styles.callout}>
                        <h3>{section.callout.title}</h3>
                        <p>{section.callout.text}</p>
                      </aside>
                    )}
                  </section>
                ))}
              </div>

              <div className={styles.mobileShare}>
                <ShareLinks links={shareLinks} />
              </div>

              <footer className={styles.articleFooter}>
                <Link href="/insight">
                  <ArrowLeft size={16} aria-hidden="true" />
                  Back to all insights
                </Link>
              </footer>
            </div>

            <aside className={styles.shareRail} aria-label="Share article">
              <ShareLinks links={shareLinks} />
            </aside>
          </div>
        </article> 
      </div>
    </main>
    <DiscoveryBanner />
    <ContactSection />
     <BusinessContact />
    </>
  );
}

function ShareLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <div className={styles.shareLinks}>
      <p>Share this article</p>
      {links.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          aria-label={
            label === "Email" ? "Share by email" : `Share on ${label}`
          }
          target={label === "Email" ? undefined : "_blank"}
          rel={label === "Email" ? undefined : "noopener noreferrer"}
        >
          {label === "Email" ? (
            <Mail size={16} aria-hidden="true" />
          ) : (
            <ArrowUpRight size={16} aria-hidden="true" />
          )}
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
}
