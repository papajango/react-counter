import React, { Component } from 'react';
import Counter from './Counter';

class CounterList extends Component {
	render() {
		const { counters, onReset, onDelete, onIncrement } = this.props;
		return (
			<div>
				<button
					className="btn btn-primary btn-sm m-2"
					onClick={onReset}
				>
					Reset
				</button>
				{counters.map(counter => (
					<Counter
						key={counter.id}
						counter={counter}
						onDelete={onDelete}
						onIncrement={onIncrement}
					/>
				))}
			</div>
		);
	}
}

export default CounterList;
