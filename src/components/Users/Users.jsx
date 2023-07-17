import React from "react";
import classes from "./Users.module.css";

const Users = props => {
	if (props.users === 0) {
		props.setUsers([
			{
				id: 1,
				followed: false,
				photoUrl:
					"https://sun9-38.userapi.com/impf/c628431/v628431282/47195/U0go3lIVmkM.jpg?size=604x440&quality=96&sign=cfe3ad01c40005dea23dd528afe9b84f&c_uniq_tag=nGAT9iRRTja1ROTYYIx5BCCn-nJS4HpSK5P6OTkhDEk&type=album",
				fullname: "Рамазан",
				status: "Начинать всегда стоит с того, что сеет сомнения.",
				location: { city: "Chkalovsk", country: "Tajikistan" },
			},
			{
				id: 2,
				followed: true,
				photoUrl:
					"https://cs13.pikabu.ru/post_img/big/2021/01/10/5/1610259041165390829.jpg",
				fullname: "Амир",
				status: "80% успеха - это появиться в нужном месте в нужное время.",
				location: { city: "Ufa", country: "Russia" },
			},
			{
				id: 3,
				followed: true,
				photoUrl:
					"https://milliard.tatar/images/uploads/5ff7e61b2b51280dcb6994efa061a075.jpg",
				fullname: "Артур",
				status: "Стоит только поверить, что вы можете – и вы уже на полпути к цели",
				location: { city: "Ufa", country: "Russia" },
			},
			{
				id: 4,
				followed: true,
				photoUrl:
					"https://cdnn21.img.ria.ru/images/07e6/0c/01/1835584300_520:0:2567:2047_1440x0_80_0_0_7c4d99ac8f241c5be355031307e70058.jpg",
				fullname: "Семён",
				status: "Неосмысленная жизнь не стоит того, чтобы жить.",
				location: { city: "Dagestan", country: "Russia" },
			},
		]);
	}

	return (
		<div className={classes.userList}>
			{props.users.map(user => (
				<div key={user.id} className={classes.user}>
					<div className={classes.imageProfile}>
						<img className={classes.userPhoto} src={`${user.photoUrl}`} />
					</div>
					<div className={classes.userInfo}>
						<div className={classes.userName}>
							<div>{user.fullname}</div>
							<div>{user.status}</div>
						</div>
						<div className={classes.location}>
							<div>{user.location.country}</div>
							<div>{user.location.city}</div>
						</div>
						<div className={classes.followBtnBlock}>
							{user.followed ? (
								<button
									className={classes.followBtn}
									onClick={() => {
										props.unfollow(user.id);
									}}
								>
									Unfollow
								</button>
							) : (
								<button
									className={classes.followBtn}
									onClick={() => {
										props.follow(user.id);
									}}
								>
									Follow
								</button>
							)}
						</div>
						{/* <div>
                            { user.followed 
                                ? <button onClick={ ()=>{ props.unfollow(user.id) } }>Unfollow</button> 
                                : <button onClick={ ()=>{ props.follow(user.id) } }>Follow</button> }
						</div> */}
					</div>
				</div>
			))}
		</div>
	);
};

export default Users;
