import { BallTriangle } from 'react-loader-spinner'
import Styles from './loader.module.scss'

const Loader = () => {
    return <div className={Styles.container}>
        <BallTriangle
            heigth="100"
            width="100"
            color="white"
            ariaLabel="loading-indicator"
        />
    </div>
}

export default Loader