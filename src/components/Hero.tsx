import styles from './Hero.module.css';
import { SocialLinks } from './SocialLinks';

interface HeroProps {
  title: string;
  tagline: string;
  photo: string;
  resumeUrl: string;
}

export function Hero({ title, tagline, photo, resumeUrl }: HeroProps) {
  return (
    <aside id="top" className={styles.hero}>
      <img className={styles.photo} src={photo} alt="Rachel Wong's personal logo" />
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.tagline}>{tagline}</p>
      <div className={styles.actions}>
        <a className={styles.resumeButton} href={resumeUrl} target="_blank" rel="noopener noreferrer">
          View Resume
        </a>
        <SocialLinks />
      </div>
    </aside>
  );
}
