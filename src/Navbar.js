import { AppBar, Toolbar, IconButton, FormControl, MenuItem, Select } from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import styled from 'styled-components';

const ResumeAppBar = styled(AppBar)`
    &.MuiAppBar-colorPrimary {
        background-color: #853565;
    }

    .MuiToolbar-regular {
        min-height: 80px;
    }
`;

const AppBarTitle = styled.div`
	padding: 0 20px;
	font-size: 18px;
	font-weight: bold;
	letter-spacing: 1px;
	span {
		color: #eb1796;
	}
`;

const AppBarButtonsContainer = styled.div`
	order: 2;
	margin-left: auto;
`;

const LanguageSelect = styled(Select)`
    .MuiSelect-root, .MuiSelect-iconOutlined {
		color: #fff;
	}
	.MuiOutlinedInput-notchedOutline {
		border-color: transparent;
	}
`;

function Navbar() {
	return (
		<ResumeAppBar position="fixed">
			<Toolbar>
				<AppBarTitle>
					lbarrantes<span>.</span>
				</AppBarTitle>
				<AppBarButtonsContainer>
					<FormControl variant="outlined">
						<LanguageSelect value="EN">
							<MenuItem value="EN">EN</MenuItem>
							<MenuItem value="ES">ES</MenuItem>
						</LanguageSelect>
					</FormControl>
					<IconButton edge="end" color="inherit" aria-label="menu">
						<Brightness4Icon />
					</IconButton>
				</AppBarButtonsContainer>
			</Toolbar>
		</ResumeAppBar>
	);
}

export default Navbar;
