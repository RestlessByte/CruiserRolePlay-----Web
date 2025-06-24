'use client'
import { useState } from 'react'
import styles from './index.module.scss'


export const Auth = () => {
  const [state, setState] = useState<{
    type?: boolean

  }>({

  })
  const handleType = () => setState(e => ({ ...e, type: state.type ? false : true }))
  return (
    <div className={styles.container}>
      <div className={styles.typeContainer}>
        <span className={styles.typeContainerSwith}></span>
      </div>
      <span className={styles.title}>Тут ты можешь зарегистрироваться или авторизоваться на нашем сервере</span>
      <form>
        <span className={styles.type} onClick={handleType}>{state.type ? 'Авторизоваться' : 'Зарегистрироваться'}</span>
        <input className={styles.input} placeholder='Введите свой никнейм' />
        <input className={styles.input} placeholder='Введите пароль' />
        <input className={styles.input} placeholder='Введите email' />
        <input className={styles.input} placeholder='Повторите пароль' />
        <span className={styles.button}>
          <span className={styles.buttonText}>{state.type ? 'Зарегистрироваться' : 'Авторизоваться'}</span>
        </span>
      </form>
    </div>)
}