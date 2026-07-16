import { useContext } from 'react'
import {
	AppBar,
	Toolbar,
	IconButton,
	FormControl,
	MenuItem,
	Select,
} from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { Fade } from 'react-awesome-reveal'

import { LanguageContext } from './contexts/language.context'
import { ThemeContext } from './contexts/theme.context'

export const Navbar = () => {
	const { isDarkMode, toggleTheme } = useContext(ThemeContext)
	const { language, changeLanguage } = useContext(LanguageContext)

	return (
		<AppBar
			position="fixed"
			sx={{
				backgroundColor: 'var(--color-main)',
				color: 'var(--color-navbar-title-text)',
				'& .MuiToolbar-regular': { minHeight: 'var(--spacing-navbar-height)' },
			}}
		>
			<Toolbar>
				<Fade duration={2000} triggerOnce>
					<div className="px-5 text-lg font-bold tracking-wide">
						lbarrantes<span className="text-secondary">.</span>
					</div>
				</Fade>
				<div className="order-2 ml-auto flex">
					<FormControl variant="outlined">
						<Select
							value={language}
							onChange={changeLanguage}
							SelectDisplayProps={{ 'aria-label': 'Language' }}
							sx={{
								'&, & .MuiSelect-iconOutlined': {
									color: 'var(--color-navbar-icons)',
								},
								'& .MuiOutlinedInput-notchedOutline': {
									borderColor: 'transparent',
								},
							}}
							MenuProps={{
								slotProps: {
									paper: {
										sx: {
											backgroundColor: 'var(--color-bg)',
											color: 'var(--color-font)',
											'& .MuiMenuItem-root.Mui-selected, & .MuiMenuItem-root:hover':
												{
													backgroundColor: 'var(--color-main) !important',
													color: 'var(--color-navbar-title-text) !important',
												},
										},
									},
								},
							}}
						>
							<MenuItem value="en">EN</MenuItem>
							<MenuItem value="es">ES</MenuItem>
						</Select>
					</FormControl>
					<IconButton
						edge="end"
						color="inherit"
						aria-label="Toggle theme"
						onClick={toggleTheme}
					>
						{isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
					</IconButton>
				</div>
			</Toolbar>
		</AppBar>
	)
}
