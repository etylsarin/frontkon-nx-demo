import styles from './frontkon.module.scss';

/* eslint-disable-next-line */
export interface FrontkonProps {}

export function Frontkon(props: FrontkonProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Frontkon!</h1>
    </div>
  );
}

export default Frontkon;
