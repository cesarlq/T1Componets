import React from 'react';
import { Tooltip } from '@mui/material';
import styles from '../../styles/common/Profile.module.scss';

export interface ProfileProps {
  name: string;
  email: string;
  className?: string;
  // Opcional: permitir personalizar la fuente
  fontClassName?: string;
}

export function Profile({
  name,
  email,
  className = '',
  fontClassName = ''
}: ProfileProps) {
  return (
    <main className={`${styles.container} ${fontClassName} ${className}`}>
      <article className={styles.letter}>
        {name[0].toUpperCase()}
      </article>
      <article className={styles['name-and-email']}>
        <Tooltip title={name} arrow>
          <span className={styles.name}>{name}</span>
        </Tooltip>
        <Tooltip title={email} arrow>
          <span className={styles.email}>{email}</span>
        </Tooltip>
      </article>
    </main>
  );
}

// Versión que permite inyectar fuente personalizada
export function ProfileWithFont({
  name,
  email,
  className = '',
  fontFamily = 'Manrope, sans-serif'
}: ProfileProps & { fontFamily?: string }) {
  return (
    <main 
      className={`${styles.container} ${className}`}
      style={{ fontFamily }}
    >
      <article className={styles.letter}>
        {name[0].toUpperCase()}
      </article>
      <article className={styles['name-and-email']}>
        <Tooltip title={name} arrow>
          <span className={styles.name}>{name}</span>
        </Tooltip>
        <Tooltip title={email} arrow>
          <span className={styles.email}>{email}</span>
        </Tooltip>
      </article>
    </main>
  );
}