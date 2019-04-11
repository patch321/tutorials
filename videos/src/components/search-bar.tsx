import React, { Props } from 'react';

class SearchBar extends React.Component<{ onSubmit: any }> {
	state = { term: '' };

	onInputChange = (e: any) => {
		console.log(e.target.value);
		this.setState({ term: e.target.value });
	};

	onInputSubmit = (event: any) => {
		event.preventDefault();
		this.props.onSubmit(this.state.term);
	};

	render() {
		return (
			<div className='ui segment search-bar'>
				<form onSubmit={this.onInputSubmit} className='ui form'>
					<div className='field'>
						<label>Video Search</label>
						<input
							type='text'
							value={this.state.term}
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
