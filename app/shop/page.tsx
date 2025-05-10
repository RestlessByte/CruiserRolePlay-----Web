import { Header } from '../../ui/header';
import { Shop } from '../../ui/shop';
import styles from './index.module.scss'
export default function Page() {
  return (
    <Header>
      <div className={styles.container}>
        <span className={styles.title}>Магазин</span>
        <div className={styles.content}>
          <Shop title='dsaxcsdsd' avatar='/money.webp' description={'fdsfsd'} price='fdsfsd' />
        </div>
      </div>
    </Header>
  );
};