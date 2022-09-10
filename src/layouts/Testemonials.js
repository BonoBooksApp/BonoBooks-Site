import styles from './About.module.css';
import Card from '../components/Card';
const Testemonials = () => {
   return(
    <div>
        <div className={styles.row}>
            <div className={styles.col}>
                <Card>Testemonial 1</Card>
            </div>
            <div className={styles.col}>
                <Card>Testemonial 2</Card>
            </div>
            <div className={styles.col}>
                <Card>Testemonial 3</Card>
            </div>
        </div>
        <Card>Content</Card>
    </div>

   ) 
}

export default Testemonials