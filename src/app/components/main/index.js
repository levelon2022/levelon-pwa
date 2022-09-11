import React from "react"
import BackgroundImg from "../../../assets/images/backgrounds/main.jpg"
import styles from "./main.module.scss"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { Typography } from "@mui/material"
import SearchBar from "../../common/search"

const MainSection = () => {
	return (
		<div className={styles.main}>
			<img
				src={BackgroundImg}
				className={styles.main__image}
				alt="background"
			/>
			<Grid className={styles.main__contents}>
				<Box className={styles.main__contents__primary}> 
					<Typography  className={styles.main__contents__primary__title}>
					Choose & Connect With Experts
					</Typography>
					<Typography  className={styles.main__contents__primary__description}>
					Ask Your Queations any time any where Get the best career gudience from the best people in the world.
					</Typography>
					<SearchBar/>
				</Box>
				<Box className={styles.main__contents__secondary}> 
				
				</Box>

			</Grid>
		</div>
	)
}

export default MainSection
