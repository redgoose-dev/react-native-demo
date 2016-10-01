import {
	ADD_TODO,
	COMPLETE_TODO,
	INCOMPLETE_TODO,
	REMOVE_TODO,
	CLEAR_TODO
} from '../actions/todoActions';


const DefaultTodos = [
	{ text: 'First todo ', completed: false },
	{ text: 'Second todo ', completed: true },
	{ text: 'Third todo ', completed: false }
];


export default function todos(state=DefaultTodos, action)
{
	switch (action.type)
	{
		case ADD_TODO:
			return [{
				text: action.text,
				completed: false
			}, ...state];

		case COMPLETE_TODO:
			return [
				...state.slice(0, action.index),
				Object.assign({}, state[action.index], {
					completed: !state[action.index].completed
				}),
				...state.slice(action.index + 1)
			];

		case REMOVE_TODO:
			return [
				...state.slice(0, action.index),
				...state.slice(action.index + 1)
			];

		case CLEAR_TODO:
			return [];

		default:
			return state;
	}
}