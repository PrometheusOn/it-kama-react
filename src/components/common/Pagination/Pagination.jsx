import React from "react";
import classes from "./Pagination.module.css";

const Pagination = props => {
	const pagesCount = () => {
		let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
		if (pagesCount > 10) pagesCount = 10;
		return pagesCount;
	};

	const pages = [];
	for (let i = 1; i <= pagesCount(); i++) pages.push(i);

	return (
		<div className={classes.pagination}>
			{pages.map(p => {
				return (
					<span
						className={
							props.currentPage === p ? classes.selectedPage : classes.unselectedPage
						}
						onClick={e => {
							props.onPageChanged(p);
						}}
					>
						{p}
					</span>
				);
			})}
		</div>
	);
};

export default Pagination;
