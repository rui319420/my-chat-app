'use client';

import styles from './header.module.css'
import Radio from '../ui/Radio';

export default function Header() {
  return (
    <div className={styles.Header}>Header
      <Radio></Radio>
    </div>
  )
}
