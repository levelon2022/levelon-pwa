import React from "react"
import BackgroundImg from "../../../assets/images/backgrounds/main.jpg"
import styles from "./main.module.scss"

const MainSection = () => {
	return (
		<div className={styles.main}>
			<img
				src={BackgroundImg}
				className={styles.main__image}
				alt="background"
			/>
		</div>
	)
}

export default MainSection
