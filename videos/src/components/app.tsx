import React from 'react';
import SearchBar from './search-bar';
import youtube from '../apis/youtube';

class App extends React.Component {
	state = {};

	onSubmit = async (term: string) => {
		const results = await youtube.get('/search', { params: { q: term } });
	};

	render() {
		return (
			<div className='ui container'>
				<SearchBar onSubmit={this.onSubmit} />
			</div>
		);
	}
}

export default App;
