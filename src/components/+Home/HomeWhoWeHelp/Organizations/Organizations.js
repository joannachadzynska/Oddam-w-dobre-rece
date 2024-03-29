import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Organization from "./Organization";
import { CustomDescription, pagination } from "../../../Layouts";

const Organizations = ({ ngo }) => {
	const { t } = useTranslation();

	const [currentPage, setCurrentPage] = useState(1);

	const indexOfLast = currentPage * 3;

	const indexOfFirst = indexOfLast - 3;

	const setPageNumber = (i) => {
		setCurrentPage(i);
	};

	return (
		<div className='home__organizations'>
			<CustomDescription>{t("home.whoWeHelp.org.desc")}</CustomDescription>
			<div className='home__orgList'>
				<ul>
					{ngo.slice(indexOfFirst, indexOfLast).map((organization) => (
						<Organization key={organization.id} organization={organization} />
					))}
				</ul>
				<ul className='home__orgList-pagination'>
					{pagination(ngo, currentPage, setPageNumber)}
				</ul>
			</div>
		</div>
	);
};

export default Organizations;
