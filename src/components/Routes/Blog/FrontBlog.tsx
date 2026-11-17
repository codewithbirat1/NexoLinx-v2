'use client';

import type { PointerEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Clock3 } from 'lucide-react';
import { featuredPost, recentPosts } from '@/constants/blog';
import { BlogHeader } from '@/components/Routes/Blog/BlogHeader';
import styles from './FrontBlog.module.css';
import { BusinessContact } from '@/components/sections/BusinessContact/BusinessContact';
import { DiscoveryBanner } from '@/components/sections/DiscoveryBanner/DiscoveryBanner';
type CursorFootprint = {
  element: HTMLSpanElement;
  timer: number;
};

const footprintsByArticle = new WeakMap<HTMLElement, CursorFootprint[]>();
const lastFootprintTimeByArticle = new WeakMap<HTMLElement, number>();

function addCursorFootprint(article: HTMLElement, x: number, y: number) {
  const now = performance.now();
  const lastFootprintTime = lastFootprintTimeByArticle.get(article) ?? 0;
  if (now - lastFootprintTime < 100) return;

  const footprints = footprintsByArticle.get(article) ?? [];
  if (footprints.length >= 16) {
    const oldestFootprint = footprints.shift();
    if (oldestFootprint) {
      window.clearTimeout(oldestFootprint.timer);
      oldestFootprint.element.remove();
    }
  }

  const footprint = document.createElement('span');
  footprint.className = styles.cursorFootprint;
  footprint.setAttribute('aria-hidden', 'true');
  footprint.style.left = `${x}px`;
  footprint.style.top = `${y}px`;
  article.appendChild(footprint);

  const timer = window.setTimeout(() => {
    footprint.remove();
    const index = footprints.findIndex(({ element }) => element === footprint);
    if (index !== -1) footprints.splice(index, 1);
  }, 2000);

  footprints.push({ element: footprint, timer });
  footprintsByArticle.set(article, footprints);
  lastFootprintTimeByArticle.set(article, now);
}

function updateCursorPosition(event: PointerEvent<HTMLElement>) {
  if (
    event.pointerType === 'touch' ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    return;
  }

  const bounds = event.currentTarget.getBoundingClientRect();
  const x = event.clientX - bounds.left;
  const y = event.clientY - bounds.top;
  const image = event.currentTarget.querySelector<HTMLImageElement>('[data-blog-image]');

  addCursorFootprint(event.currentTarget, x, y);
  event.currentTarget.style.setProperty('--cursor-x', `${x}px`);
  event.currentTarget.style.setProperty('--cursor-y', `${y}px`);
  image?.style.setProperty('--parallax-x', `${(x / bounds.width - 0.5) * 5}px`);
  image?.style.setProperty('--parallax-y', `${(y / bounds.height - 0.5) * 5}px`);
}

function resetCursorPosition(event: PointerEvent<HTMLElement>) {
  event.currentTarget.style.removeProperty('--cursor-x');
  event.currentTarget.style.removeProperty('--cursor-y');

  const image = event.currentTarget.querySelector<HTMLImageElement>('[data-blog-image]');
  image?.style.removeProperty('--parallax-x');
  image?.style.removeProperty('--parallax-y');
}

export default function InsightPage() {
  return (
    <>
    <main className="relative min-h-screen bg-[#070708] pt-8 pb-8 md:pt-16 md:pb-16 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <BlogHeader />
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-16 gap-y-12 lg:mx-0 lg:mt-20 lg:max-w-none lg:grid-cols-2">
          <article
            className={`${styles.article} ${styles.featuredArticle}`}
            onPointerMove={updateCursorPosition}
            onPointerLeave={resetCursorPosition}
          >
            <div className={`${styles.imageFrame} relative w-full overflow-hidden rounded-2xl`}>
              <Image
                src={featuredPost.image}
                alt={featuredPost.imageAlt}
                width={1200}
                height={800}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className={`${styles.articleImage} aspect-video w-full object-cover sm:aspect-[2/1] lg:aspect-[3/2]`}
                data-blog-image
                priority
              />
              <div
                aria-hidden="true"
                className={`${styles.imageBorder} pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10`}
              />
              <span className={styles.featuredLabel}>Featured story</span>
              <span className={styles.imageArrow} aria-hidden="true">
                <ArrowUpRight size={17} strokeWidth={1.8} />
              </span>
            </div>
            <PostMeta
              author={featuredPost.author}
              date={featuredPost.date}
              dateTime={featuredPost.dateTime}
              readingTime={featuredPost.readingTime}
            />
            <div className={styles.featuredCopy}>
              <h2 className={styles.featuredTitle}>
                {featuredPost.title}
              </h2>
              <p className={styles.featuredDescription}>
                {featuredPost.description}
              </p>
            </div>
            <PostTags tags={featuredPost.tags} />
          </article>

          <div className="divide-y divide-white/10 border-t border-white/10 lg:-my-8 lg:border-t-0">
            {recentPosts.map((post) => (
              <article
                key={post.title}
                className={`${styles.article} ${styles.recentArticle} py-4 md:flex md:items-start md:gap-x-6 lg:gap-x-8 lg:py-6`}
                onPointerMove={updateCursorPosition}
                onPointerLeave={resetCursorPosition}
              >
                <div className={`${styles.imageFrame} relative w-full flex-none overflow-hidden rounded-2xl md:w-1/3 ml-2 md:ml-0`}>
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    width={800}
                    height={600}
                    sizes="(min-width: 768px) 18vw, 100vw"
                    className={`${styles.articleImage} aspect-video w-full object-cover sm:aspect-[2/1] md:aspect-[5/4]`}
                    data-blog-image
                  />
                  <div
                    aria-hidden="true"
                    className={`${styles.imageBorder} pointer-events-none absolute inset-0  rounded-2xl ring-1 ring-inset ring-white/10`}
                  />
                  <span className={styles.imageArrow} aria-hidden="true">
                    <ArrowUpRight size={16} strokeWidth={1.8} />
                  </span>
                </div>
                <div className="mt-8 md:mt-0">
                  <PostMeta
                    author={post.author}
                    date={post.date}
                    dateTime={post.dateTime}
                    readingTime={post.readingTime}
                  />
                  <h2 className={styles.recentTitle}>
                    {post.slug ? (
                      <Link
                        href={`/insight/${post.slug}`}
                        className={styles.recentTitleLink}
                      >
                        {post.title}
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </Link>
                    ) : (
                      post.title
                    )}
                  </h2>
                  <p className={styles.recentDescription}>{post.description}</p>
                  <PostTags tags={post.tags} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
    <BusinessContact />
    <DiscoveryBanner />
    </>
  );
}

function PostMeta({
  author,
  date,
  dateTime,
  readingTime,
}: {
  author: string;
  date: string;
  dateTime: string;
  readingTime: number;
}) {
  return (
    <div className={styles.postMeta}>
      <p className={styles.authorName}>{author}</p>
      <span className={styles.metaSeparator} aria-hidden="true" />
      <time dateTime={dateTime}>{date}</time>
      <span className={styles.readingTime}>
        <Clock3 size={14} strokeWidth={1.8} aria-hidden="true" />
        <span>{readingTime} min read</span>
      </span>
    </div>
  );
}

function PostTags({ tags }: { tags: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-3">
      {tags.map((tag) => (
        <li
          key={tag}
          className={styles.tag}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
