import styles from './index.module.scss'
export const Home = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Добро пожаловать на CRUISER ONLINE!</span>
      <div className={styles.containerHowStartGame}>
        <span className={styles.containerHowStartGameTitle}>Как начать играть у нас?</span>
        <div className={styles.containerHowStartGameDocs}>
          <span className={styles.containerHowStartGameDocsIndex}>1</span>
          <span className={styles.containerHowStartGameDocsText}>Для начала вам нужно скачать наш игровой лаунчер, котоый находится в разработке.</span>
          <span className={styles.containerHowStartGameDocsIndex}>2</span>
          <span className={styles.containerHowStartGameDocsText}>Ввести свой игровой никнейм в поле "Ввести ник"</span>
          <span className={styles.containerHowStartGameDocsIndex}>3</span>
          <span className={styles.containerHowStartGameDocsText}>Далее нажать "Начать играть" - установится игра, если у вас она ещё не скачена</span>
          <span className={styles.containerHowStartGameDocsIndex}>4</span>
          <span className={styles.containerHowStartGameDocsText}>После установки игры нажимаете "Играть" и всё - игра загружается!</span>
        </div>
      </div>
    </div>
  )
}