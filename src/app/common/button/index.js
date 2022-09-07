import React from "react"
import Button from "@mui/material/Button"
import styles from "./button.module.scss"

const ButtonComponent = () => {
	return (
		<Button className={styles.button} variant="contained">
            Login
		</Button>
	)
}

export default ButtonComponent
