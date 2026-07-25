import styles from './NetworkOverlay.module.css';

export default function NetworkOverlay({ hoveredNode }: { hoveredNode: number | null }) {
  const getDur = (nodeId: number) => (hoveredNode === nodeId ? "1s" : "4s");

  return (
    <svg className={styles.svgOverlay} preserveAspectRatio="none">
      <defs>
        <mask id="circleMask">
          <rect width="100%" height="100%" fill="white" />
          <circle cx="20%" cy="25%" r="118" fill="black" />
          <circle cx="25%" cy="75%" r="118" fill="black" />
          <circle cx="80%" cy="30%" r="118" fill="black" />
          <circle cx="75%" cy="70%" r="118" fill="black" />
        </mask>

        {/* Node 1: Top-Left to About */}
        <linearGradient id="wave1" x1="0%" y1="0%" x2="20%" y2="25%" gradientUnits="userSpaceOnUse">
          <stop stopColor="transparent"><animate attributeName="offset" values="-1; 1" dur={getDur(1)} repeatCount="indefinite" /></stop>
          <stop stopColor="var(--neon-green)"><animate attributeName="offset" values="-0.5; 1.5" dur={getDur(1)} repeatCount="indefinite" /></stop>
          <stop stopColor="transparent"><animate attributeName="offset" values="0; 2" dur={getDur(1)} repeatCount="indefinite" /></stop>
        </linearGradient>

        {/* Node 2: Bottom-Left to Stack */}
        <linearGradient id="wave2" x1="0%" y1="100%" x2="25%" y2="75%" gradientUnits="userSpaceOnUse">
          <stop stopColor="transparent"><animate attributeName="offset" values="-1; 1" dur={getDur(2)} repeatCount="indefinite" /></stop>
          <stop stopColor="var(--neon-green)"><animate attributeName="offset" values="-0.5; 1.5" dur={getDur(2)} repeatCount="indefinite" /></stop>
          <stop stopColor="transparent"><animate attributeName="offset" values="0; 2" dur={getDur(2)} repeatCount="indefinite" /></stop>
        </linearGradient>

        {/* Node 3: Top-Right to Projects */}
        <linearGradient id="wave3" x1="100%" y1="0%" x2="80%" y2="30%" gradientUnits="userSpaceOnUse">
          <stop stopColor="transparent"><animate attributeName="offset" values="-1; 1" dur={getDur(3)} repeatCount="indefinite" /></stop>
          <stop stopColor="var(--neon-green)"><animate attributeName="offset" values="-0.5; 1.5" dur={getDur(3)} repeatCount="indefinite" /></stop>
          <stop stopColor="transparent"><animate attributeName="offset" values="0; 2" dur={getDur(3)} repeatCount="indefinite" /></stop>
        </linearGradient>

        {/* Node 4: Bottom-Right to Contact */}
        <linearGradient id="wave4" x1="100%" y1="100%" x2="75%" y2="70%" gradientUnits="userSpaceOnUse">
          <stop stopColor="transparent"><animate attributeName="offset" values="-1; 1" dur={getDur(4)} repeatCount="indefinite" /></stop>
          <stop stopColor="var(--neon-green)"><animate attributeName="offset" values="-0.5; 1.5" dur={getDur(4)} repeatCount="indefinite" /></stop>
          <stop stopColor="transparent"><animate attributeName="offset" values="0; 2" dur={getDur(4)} repeatCount="indefinite" /></stop>
        </linearGradient>
      </defs>

      <g mask="url(#circleMask)">
        {/* Node 1 Track */}
        <line x1="0%" y1="0%" x2="20%" y2="25%" className={styles.baseTrack} />
        <line x1="0%" y1="0%" x2="20%" y2="25%" stroke="url(#wave1)" className={`${styles.pulseLine} ${hoveredNode === 1 ? styles.activeLine : ''}`} />

        {/* Node 2 Track */}
        <line x1="0%" y1="100%" x2="25%" y2="75%" className={styles.baseTrack} />
        <line x1="0%" y1="100%" x2="25%" y2="75%" stroke="url(#wave2)" className={`${styles.pulseLine} ${hoveredNode === 2 ? styles.activeLine : ''}`} />

        {/* Node 3 Track */}
        <line x1="100%" y1="0%" x2="80%" y2="30%" className={styles.baseTrack} />
        <line x1="100%" y1="0%" x2="80%" y2="30%" stroke="url(#wave3)" className={`${styles.pulseLine} ${hoveredNode === 3 ? styles.activeLine : ''}`} />

        {/* Node 4 Track */}
        <line x1="100%" y1="100%" x2="75%" y2="70%" className={styles.baseTrack} />
        <line x1="100%" y1="100%" x2="75%" y2="70%" stroke="url(#wave4)" className={`${styles.pulseLine} ${hoveredNode === 4 ? styles.activeLine : ''}`} />
      </g>
    </svg>
  );
}