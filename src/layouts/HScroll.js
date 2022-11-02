import styles from './HScroll.module.css'
import Card from '../components/Card'
const HScroll = () => {
    return(
        <div className={`${styles.media_scroller} ${styles.snaps_inline}`}>
            <div className={styles.media_element}>
                <Card>
                    <h2>What is BonoBooks?</h2>
                    <p>BonoBooks is a peer-to-peer rental app that let’s student
rent books from each other! Our aim is not just to allow students to 
get books for cheaper prices by cutting the middle-man, but to 
also help students make easy passive income. We look forward to
improving your college experience!</p>
                </Card>
            </div>
            <div className={styles.media_element}>
                <Card>
                    <p>Easily upload your textbook onto the app using our seamless rental creation process </p>
                </Card>
            </div>
            <div className={styles.media_element}>
                <Card>
                    <p>BonoBooks makes finding books easy! Add your
classes and find all the books you’ll need
for the quarter</p>
                </Card>
            </div>
            <div className={styles.media_element}>
                <Card>
                    <p>Meet up with other college students and get your
books/$$$!</p>
                </Card>
            </div>
            <div className={styles.media_element}>
                <Card>
                    <p>Celebratory graphic of users + bonobo happy?</p>
                </Card>
            </div>
        </div>
    )
}

export default HScroll