import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions/todoActions';

import Navigation from '../../../comps/Navigation/Navigation';
import Tab from './Tab';
import AddForm from './AddForm';
import Index from './Index';
import State from './State';


class CheckApp extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.actions = this.props.actions;
	}

	render() {
		const { todos, count, visibilityFilter, actions } = this.props;

		return (
			<View style={css.viewport}>
				<Navigation title="Checklist"/>
				<Tab
					active={visibilityFilter}
					style={css.tab}
					onUpdate={(type) => { actions.setVisibilityFilter(type) }}/>

				<View style={css.indexBox}>
					<AddForm onAddTodo={(text) => { actions.addTodo(text) }}/>
					<Index
						data={todos}
						onCompleteTodo={(index) => { actions.completeTodo(parseInt(index)) }}
						onRemoveTodo={(index) => { actions.removeTodo(parseInt(index)) }}
					/>
					<State
						onClear={() => { actions.clearTodo() }}
						count={count}
					/>
				</View>
			</View>
		);
	}
}

const css = StyleSheet.create({
	viewport: {
		flex: 1,
		backgroundColor: '#fff',
	},
	tab: {
		marginHorizontal: 10,
		marginTop: 15,
	},
	indexBox: {
		flex: 1,
		marginHorizontal: 10,
		marginVertical: 15,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: '#aaa',
		borderRadius: 5,
		overflow: 'hidden',
	},
});

function selectTodos(todos, filter) {

	switch (filter) {
		case actions.VisibilityFilters.SHOW_ALL:
			return todos;
		case actions.VisibilityFilters.SHOW_ACTIVE:
			return todos.filter(todo => !todo.completed);
		case actions.VisibilityFilters.SHOW_COMPLETED:
			return todos.filter(todo => todo.completed);
	}
	return todos;
}

export default connect(
	state => ({
		todos: selectTodos(state.todos, state.visibilityFilter),
		count: selectTodos(state.todos, actions.VisibilityFilters.SHOW_ACTIVE).length,
		visibilityFilter: state.visibilityFilter
	}),
	(dispatch) => ({
		actions: bindActionCreators(actions, dispatch)
	})
)(CheckApp);