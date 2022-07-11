import styles from './HrLine.module.css'
type HrLineProps = {
   height?: string
   width?: string
}

const HrLine: React.FC<HrLineProps> = ({ height, width }) => (
   <div className={styles.hr} style={{ height: height ?? '1px', width: width ?? '80%' }} />
)
export default HrLine
