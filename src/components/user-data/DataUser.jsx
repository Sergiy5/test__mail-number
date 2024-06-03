import styles from './DataUser.module.css';
import { addHyphensToNumber } from 'utils/addHyphensToNumber';

export const DataUser = ({ data }) => {
  const { email, number } = data;

  return (
    <div className={styles.containerDataUser}>
      <span>Email: {email}</span>
      <span>Phone number: {addHyphensToNumber(number)}</span>
    </div>
  );
};
