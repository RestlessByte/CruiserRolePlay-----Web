'use client'
import Image from 'next/image'
import styles from './index.module.scss'
import { redirect, useRouter } from 'next/navigation'
export const Header = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter().replace
  const redirect = (link: string) => router(link)
  return <div className={styles.container}>
    <header>
      <Image src='/logos/logo.webp' height={80} width={80} alt='no image' className={styles.logo} onClick={() => redirect('/')} />
      <h4 className={styles.title} onClick={() => redirect('/')}>CRUISER ONLINE</h4>
      <nav className={styles.nav}>
        <span className={styles.button} onClick={() => redirect('/shop')}>Магазин</span>
        <span className={styles.button} onClick={() => redirect('/forum')}>Форум</span>
        <span className={styles.button} onClick={() => redirect('/middelware')}>Мой аккаунт</span>
      </nav>
    </header>
    <div className={styles.body}>
      {children}
    </div>
  </div>
}