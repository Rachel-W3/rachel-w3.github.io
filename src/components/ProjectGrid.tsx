import type { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import styles from './ProjectGrid.module.css';

interface ProjectGridProps {
  id: string;
  heading: string;
  projects: Project[];
}

export function ProjectGrid({ id, heading, projects }: ProjectGridProps) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} className={styles.section} aria-labelledby={headingId}>
      <h2 id={headingId} className={styles.heading}>
        {heading}
      </h2>
      <ul className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
}
