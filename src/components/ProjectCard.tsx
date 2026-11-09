import { useState } from 'react';
import type { Project } from '../types';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, thumbnail, url, linkLabel = 'View', note } = project;
  // Many thumbnails are hotlinked from third-party sites; fall back gracefully if one disappears.
  const [imageFailed, setImageFailed] = useState(false);

  const content = (
    <>
      {imageFailed ? (
        <div className={styles.fallback} aria-hidden="true">
          {title}
        </div>
      ) : (
        <img
          className={styles.thumbnail}
          src={thumbnail}
          alt=""
          loading="lazy"
          decoding="async"
          onError={() => setImageFailed(true)}
        />
      )}
      <div className={styles.overlay}>
        <h3 className={styles.title}>{title}</h3>
        {note && <p className={styles.note}>{note}</p>}
        <span className={url ? styles.cta : `${styles.cta} ${styles.ctaDisabled}`}>
          {url ? linkLabel : 'Preview unavailable'}
        </span>
      </div>
    </>
  );

  return (
    <li className={styles.item}>
      {url ? (
        <a
          className={styles.card}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title}${note ? ` (${note})` : ''}: ${linkLabel} (opens in a new tab)`}
        >
          {content}
        </a>
      ) : (
        <div className={styles.card} tabIndex={0} aria-label={`${title}: preview unavailable`}>
          {content}
        </div>
      )}
    </li>
  );
}
