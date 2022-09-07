/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react"
// import { styled, alpha } from "@mui/material/styles"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import styles from "./header.module.scss"
// import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import { ICONS } from "../../utils/icons"
import ButtonComponent from "../../common/button"
import useMediaQuery from "@mui/material/useMediaQuery"
// import ToggleOnSharpIcon from "@mui/icons-material/ToggleOnSharp"
// import InputBase from "@mui/material/InputBase"
// // import MenuIcon from "@mui/icons-material/Menu"
// import SearchIcon from "@mui/icons-material/Search"

const Header = () => {
	const Tablets = useMediaQuery("(min-width:600px)")
	// xxs: 0, // small phone
	// xs: 300, // phone
	// sm: 600, // tablets
	// md: 900, // small laptop
	// lg: 1200, // desktop
	// xl: 1536 // large screens

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar className={styles.header}  position="static">
				<Toolbar >
					<Box
						className={styles.header__items}>
						<Box
							component="div"
							style={{ fontSize:"24px"}}
							className={styles.header__items__logo}
						>
                        Level<span style={{color:"red", fontSize:"28px"}}>ON</span>
						</Box>
						<Box
							component="div"
							sx={{width : Tablets && "40%"}}
							className={styles.header__items__menus}

						>
							<Typography  className={styles.header__title}>
                            Home
							</Typography>
							<Typography className={styles.header__title}>
                            My Appointments
							</Typography>
							<Typography className={styles.header__title}>
                            Seeker
							</Typography>
							<img className={styles.header__switch} src={ICONS["TOGGLE_ON"]} alt="icon"/>
							{/* <ToggleOnSharpIcon sx={{fontSize:"24px", color:"#CE222B !important"}} className={styles.header__switch}/> */}
							<Typography className={styles.header__title}>
                            Expert
							</Typography>
							
						</Box>
						<Box
							component="div"
							sx={{ flexGrow: 0, display: { xs: "none", sm: "block" } }}
							className={styles.header__items__sidebar}
						>
							<ButtonComponent/>
						</Box>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default Header