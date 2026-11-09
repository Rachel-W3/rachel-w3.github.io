import styles from './App.module.css';
import { Hero } from './components/Hero';
import { ProjectGrid } from './components/ProjectGrid';
import { projects } from './data/projects';
import { releasedGames } from './data/releasedGames';

const RESUME_URL = '/downloadable/July2025_WongRachel_Resume.pdf';

export function App() {
  return (
    <div className={styles.layout}>
      <Hero
        title="Game Developer"
        photo="/images/personal-logo.png"
        resumeUrl={RESUME_URL}
        tagline="I channel magic from my brain to my fingertips when I create video games, art, and music."
      />
      <main className={styles.content}>
        <ProjectGrid id="released-games" heading="Released Games" projects={releasedGames} />
        <ProjectGrid id="projects" heading="Projects" projects={projects} />
      </main>
    </div>
  );
}
