import React from "react"
import BackgroundImg from "../../../assets/images/backgrounds/main.jpg"
import Avatar from "../../../assets/images/backgrounds/avatar.png"
import styles from "./main.module.scss"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { Typography } from "@mui/material"
import SearchBar from "../../common/search"
import useMediaQuery from "@mui/material/useMediaQuery"


const MainSection = () => {

	const isMobile = useMediaQuery("(max-width: 600px)")

	return (
		<div className={styles.main}>
			<img
				src={BackgroundImg}
				className={styles.main__image}
				alt="background"
			/>
			<Grid className={styles.main__contents}>
				<Box sx={{width : isMobile && {xs: "75%"}, top: {xs:"-40px"}}} className={styles.main__contents__primary}> 
					<Typography  className={styles.main__contents__primary__title}>
					Choose & Connect With Experts
					</Typography>
					<Typography  className={styles.main__contents__primary__description}>
					Ask Your Queations any time any where Get the best career gudience from the best people in the world.
					</Typography>
					<SearchBar/>
				</Box>
				{ !isMobile &&	<Box className={styles.main__contents__secondary}> 
					<img
						src={Avatar}
						alt="background"
						className={styles.main__avatar}
					/>
				</Box>}
			</Grid>
		</div>
	)
}

export default MainSection
