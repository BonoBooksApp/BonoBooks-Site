import { Fragment } from 'react';
import Card from '../components/Card';
import styles from './About.module.css';
const About = () => {
    return(
        <Fragment>
            <Card>Bruh1</Card>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Card>Bruh1</Card>
                </div>
                <div className={styles.col}>
                    <Card>Bruh2</Card>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Card>Bruh1</Card>
                </div>
                <div className={styles.col}>
                    <Card>Bruh2</Card>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Card>Bruh1</Card>
                </div>
                <div className={styles.col}>
                    <Card>Bruh2</Card>
                </div>
            </div>
            <Card>Bruh1</Card>
        </Fragment>
    )
}

export default About