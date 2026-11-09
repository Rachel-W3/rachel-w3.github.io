import type { IconType } from 'react-icons';
import { FaGithub, FaLinkedinIn, FaPhone, FaRegEnvelope } from 'react-icons/fa';
import styles from './SocialLinks.module.css';

interface SocialLink {
  label: string;
  href: string;
  Icon: IconType;
}

const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rachelwong73/', Icon: FaLinkedinIn },
  { label: 'GitHub', href: 'https://github.com/Rachel-W3', Icon: FaGithub },
  { label: 'Email', href: 'mailto:rw7363@rit.edu', Icon: FaRegEnvelope },
  { label: 'Phone', href: 'tel:17188728861', Icon: FaPhone },
];

export function SocialLinks() {
  return (
    <ul className={styles.social} aria-label="Contact and social links">
      {socialLinks.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            className={styles.icon}
            href={href}
            aria-label={label}
            {...(href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
          >
            <Icon aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
