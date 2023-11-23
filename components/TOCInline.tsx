// 'use client'; is not necessary, so it's removed.

import Image from 'next/image';
import { Toc } from 'types/Toc';

interface TOCInlineProps {
  toc: Toc;
  indentDepth?: number;
  fromHeading?: number;
  toHeading?: number;
  asDisclosure?: boolean;
  exclude?: string | string[];
  defaultimage?: string;
}

const TOCInline = ({
  toc,
  indentDepth = 3,
  fromHeading = 1,
  toHeading = 6,
  asDisclosure = false,
  exclude = '',
  defaultimage = '',
}: TOCInlineProps) => {
  const re = Array.isArray(exclude)
    ? new RegExp('^(' + exclude.join('|') + ')$', 'i')
    : new RegExp('^(' + exclude + ')$', 'i');

  const filteredToc = toc.filter(
    (heading) =>
      heading.depth >= fromHeading && heading.depth <= toHeading && !re.test(heading.value)
  );

  const tocList = (
    <ul>
      {filteredToc.map((heading) => (
        <li key={heading.value} className={heading.depth >= indentDepth ? 'ml-6' : ''}>
          <a
            href={heading.url}
            className="not-prose border-b border-primary-400 no-underline dark:border-primary-500"
          >
            {heading.value}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {asDisclosure && (
        <details open>
          <summary className="ml-6 pt-2 pb-2 text-xl font-bold">Table of Contents</summary>
          <div className="ml-6">{tocList}</div>
        </details>
      )}
      {!asDisclosure && tocList}

      <div>
        <Image
          src={
            defaultimage
              ? `${process.env.NEXT_PUBLIC_SITE_URL}static/blog/${defaultimage}.png`
              : `${process.env.NEXT_PUBLIC_SITE_URL}static/${process.env.NEXT_PUBLIC_OG_IMAGE}`
          }
          alt={defaultimage || 'ExpertLaravel.com Image'}
          width={1200}
          height={600}
        />
      </div>
    </>
  );
};

export default TOCInline;
