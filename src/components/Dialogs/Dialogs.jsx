import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./Dialog/DialogItem";
import MessagesBlockContainer from "./MessagesBlock/MessagesBlockContainer";

const Dialogs = props => {
	const dialogsElements = props.dialogs.map(el => (
		<DialogItem name={el.name} id={el.id} img={el.img} key={el.id} />
	));

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				{dialogsElements}
				<div className='createGroup'>
					<button onClick={() => "Открыть форму"}>Создать беседу</button>
					<div className={classes.formCreate}>
						<form>
							<input class='uk-input' type='text' placeholder='Введите название' />
							<input class='uk-input' type='text' placeholder='Введите описание беседы' />
							<select class='uk-select'>
								<option>Выберите сотрудников</option>
								<option>Амир</option>
								<option>Рамазан</option>
								<option>Артур</option>
								<option>Семен</option>
							</select>
							<button>Подтвердить</button>
						</form>
					</div>
				</div>
			</div>
			<div className={classes.messagesBlock}>
				<MessagesBlockContainer />
			</div>
		</div>
	);
};

export default Dialogs;
