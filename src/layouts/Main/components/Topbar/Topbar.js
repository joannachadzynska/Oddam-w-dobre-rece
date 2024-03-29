import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { AppBar, Toolbar, Badge, Hidden, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import Userbar from "./Userbar";
import logo from "../../../../assets/logo-2.svg";

const useStyles = makeStyles((theme) => ({
	root: {
		boxShadow: "none"
	},
	flexGrow: {
		flexGrow: 1
	},
	signOutButton: {
		marginLeft: theme.spacing(1)
	},

	logo: {
		width: "10%",
		backgroundColor: "white",
		borderRadius: "50%"
	}
}));

const Topbar = (props) => {
	const { className, onSidebarOpen, ...rest } = props;
	const classes = useStyles();

	const [notifications] = useState([]);

	return (
		<AppBar {...rest} className={clsx(classes.root, className)}>
			<Toolbar>
				<RouterLink to='/'>
					<img alt='Logo' src={logo} className={classes.logo} />
				</RouterLink>
				<div className={classes.flexGrow} />
				<Hidden mdDown>
					<IconButton color='inherit'>
						<Badge
							badgeContent={notifications.length}
							color='primary'
							variant='dot'>
							<NotificationsIcon />
						</Badge>
					</IconButton>
					<IconButton
						className={classes.signOutButton}
						color='inherit'></IconButton>
				</Hidden>
				<Userbar currentuser={props.currentuser} />
				<Hidden lgUp>
					<IconButton color='inherit' onClick={onSidebarOpen}>
						<MenuIcon />
					</IconButton>
				</Hidden>
			</Toolbar>
		</AppBar>
	);
};

Topbar.propTypes = {
	className: PropTypes.string,
	onSidebarOpen: PropTypes.func
};

export default Topbar;
