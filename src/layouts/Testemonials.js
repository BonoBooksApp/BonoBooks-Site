import styles from './About.module.css';
import Card from '../components/Card';
const Testemonials = () => {
   return(
    <div>
        <div className={styles.row}>
            <div className={styles.col}>
                <Card>
                    <h2>Testemonial 1</h2>
                    <p>“It was so easy to find my book! Right after I signed up, I saw my class on the explore page and was able to message them and get it the next day”</p>
                </Card>
            </div>
            <div className={styles.col}>
                <Card>
                    <h2>Testemonial 2</h2>
                    <p>“I felt secure when using the app. I like how it is only available to UW students and I really like the recommended locations!”</p>
                </Card>
            </div>
            <div className={styles.col}>
                <Card styles={{textAlign:'center'}}>
                    <h2>Testemonial 3</h2>
                    <p>“I’ve used other renting platforms like AirBnb and Turo and was honestly shocked at how quickly I finished lending my book out on BonoBooks. I was in and out. The extra money was pretty nice”</p>
                </Card>
            </div>
        </div>
        <Card>
            <p>We’re a fast growing app that has helped many students
both save and make hundreds of dollars on their textbooks!</p>
        </Card>
    </div>

   ) 
}

export default Testemonials