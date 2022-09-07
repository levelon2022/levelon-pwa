import useMediaQuery from "@mui/material/useMediaQuery"

export function GetCurrentResolution() { 
	const isMobile = useMediaQuery("(max-width: 600px)")
	const isTablet = useMediaQuery("(max-width:900px)")
	const isLaptop = useMediaQuery("(max-width:1200px)")
	const isDesktop = useMediaQuery("(max-width:1536px)")

	if (isMobile) {
		return "mobile"
	} else if (isTablet) {
		return "tablet"
	} else if (isLaptop) {
		return "laptop"
	} else if (isDesktop) {
		return "desktop"
	}
}
