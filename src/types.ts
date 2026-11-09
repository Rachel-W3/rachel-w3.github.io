export interface Project {
  /** Stable unique key for React lists. */
  id: string;
  title: string;
  /** Absolute URL, or a path relative to /public (e.g. "/images/foo.png"). */
  thumbnail: string;
  /** Where the card links to. Omit when there's nothing public to show. */
  url?: string;
  /** Call-to-action shown on hover. Defaults to "View". */
  linkLabel?: string;
  /** Short qualifier shown under the title, e.g. "PC only". */
  note?: string;
}
