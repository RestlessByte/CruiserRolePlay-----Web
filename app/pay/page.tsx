'use client'
import { ReactElement, useState } from 'react'
import { Header } from '../../ui/header'
import styles from './index.module.scss'
export default function Page() {
  const [state, setState] = useState<{
    rub?: any
    uuid?: any
    name?: string
    current_donate?: number
  }>({
  })
  return (
    <Header>
      <div className={styles.container}>
        <form>
          <span className={styles.nameServer}>CRUISER ONLINE: ROLE PLAY</span>
          <input type='number' placeholder='Введите ваш UUID аккаунта' />
          <input type='number' placeholder='Сколько хотите доната?' value={state.rub} onChange={(e) => setState({ ...e, rub: e.target.value })} />
          <div className={styles.price}  >
            <span className={styles.priceText}>К оплате: {5 / 1 * state.rub || 0} <span className={styles.priceTextSymbol}>₽</span></span></div>
          <span className={styles.buy}>Оплатить {5 / 1 * state.rub || 0} ₽</span>
          <span className={styles.indentification}>Пожалуйста, посмотрите - верно ли введены данные?</span>
          <div className={styles.indentificationContent}>
            <span className={styles.indentificationContentName}>Ваш никнейм: <span className={styles.indentificationContentNameTag}>{state.name || 'Напишите ваш UUID игрового аккаунта'}</span></span>
            <span className={styles.indentificationContentDonate}>Сейчас у вас: <span className={styles.indentificationContentDonateValue}>{state.current_donate + state.rub || 'Напишите ваш UUID игрового аккаунта'}</span></span>

          </div>
        </form>
      </div>
    </Header>
  )
}