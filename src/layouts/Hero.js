import styles from "./Hero.module.css";
import Button from "../components/Button";
import Card from "../components/Card"
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';

const Hero = () => {
    return(
        <div className={`${styles.hero_container}`}>
            <div className={styles.left_child}>
                <div className={styles.hero_content}>
                    <h1>BonoBooks</h1>
                    <p className={styles.flavor}>The peer to peer textbook renting app made to make your life easier!</p>
                    <Button link="https://apps.apple.com/us/app/bonobooks/id1586423229"><AppleIcon/> Download for iOS</Button>
                    <Button link="https://play.google.com/store/apps/details?id=com.bonobooks.ugs"><AndroidIcon/> Download for Android</Button>
                </div>
            </div>
            <div className="hero-right">
            </div>
        </div>
    )
}

export default Hero