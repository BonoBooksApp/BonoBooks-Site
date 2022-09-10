import { Fragment } from 'react';
import Card from '../components/Card';
import styles from './About.module.css';
const About = () => {
    return(
        <Fragment>
            <Card>Block Long</Card>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Card>Block 1</Card>
                </div>
                <div className={styles.col}>
                    <Card>Block 2</Card>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Card>Block 1</Card>
                </div>
                <div className={styles.col}>
                    <Card>Block 2</Card>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Card>Block 1</Card>
                </div>
                <div className={styles.col}>
                    <Card>Block 2</Card>
                </div>
            </div>
            <Card>Block Long</Card>
        </Fragment>
    )
}

export default About