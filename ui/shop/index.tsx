import Image from 'next/image'
import styles from './index.module.scss'

export const Shop = (props: {
  title: string
  price: string
  avatar?: string
  description?: number
}) => {
  return (
    <div className={styles.container}>
      {props.avatar && (<Image src={props.avatar} width={120} height={120} alt='no image' className={styles.logo} />)}
      <span className={styles.title}>{props.title}</span>
      <span className={styles.pay}>Купить</span></ div>
  )
}