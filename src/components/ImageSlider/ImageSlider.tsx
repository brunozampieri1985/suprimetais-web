import styles from './ImageSlider.module.css'

const ImageSlider: React.FC = () => {
    return (
        <div className={styles.slider}>
            <div className={styles.container}>
                <div className={styles.image}>1</div>
                <div className={styles.image}>2</div>
                <div className={styles.image}>3</div>
                <div className={styles.image}>4</div>
                <div className={styles.image}>5</div>
            </div>
        </div>
    )
}

export default ImageSlider