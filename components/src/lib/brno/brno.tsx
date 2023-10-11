import styles from './brno.module.scss';

/* eslint-disable-next-line */
export interface BrnoProps {}

export function Brno(props: BrnoProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Brno!</h1>
    </div>
  );
}

export default Brno;
