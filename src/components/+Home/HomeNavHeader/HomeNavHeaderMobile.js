import React from "react";
import { CustomTitle } from "../../Layouts";
import ActionButtons from "./ActionButtons";
import { useTranslation } from "react-i18next";

const HomeNavHeaderMoblie = () => {
	const { t } = useTranslation();
	return (
		<div className='home__navHeader wrapper'>
			<div className='home__navPanel'>
				<div className='home__mainBox'>
					<CustomTitle>
						{t("home.header.title-1")}
						<br />
						{t("home.header.title-2")}
					</CustomTitle>
					<ActionButtons />
				</div>
			</div>
		</div>
	);
};

export default HomeNavHeaderMoblie;