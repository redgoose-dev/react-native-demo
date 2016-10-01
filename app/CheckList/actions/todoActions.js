

// action type
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const CLEAR_TODO = 'CLEAR_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';


// other constants
export const VisibilityFilters = {
	SHOW_ALL : 'SHOW_ALL',
	SHOW_COMPLETED : 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
};


// action creators
export function addTodo(text)
{
	return { type: ADD_TODO, text };
}

export function completeTodo(index)
{
	return { type: COMPLETE_TODO, index };
}

export function removeTodo(index)
{
	return { type: REMOVE_TODO, index };
}

export function clearTodo()
{
	return { type: CLEAR_TODO };
}

export function setVisibilityFilter(filter)
{
	return { type: SET_VISIBILITY_FILTER, filter };
}