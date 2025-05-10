import styles from './index.module.scss'


export const Auth = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Тут ты можешь зарегистрироваться или авторизоваться на нашем сервере</span>
      <form>
        <input className={styles.input} placeholder='Введите свой никнейм' />
        <input className={styles.input} placeholder='Введите пароль' />
        <input className={styles.input} placeholder='Повторите пароль' />
        <input className={styles.input} placeholder='Введите свой никнейм' />
      </form>
    </div>)
}