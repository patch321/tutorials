import React from 'react';
import SearchBar from './search-bar';
import youtube from '../apis/youtube';
import VideoList from './video-list';
import VideoDetail from './video-detail';

class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	componentDidMount = () => {
		this.onSubmit('buildings');
	};

	onSubmit = async term => {
		const response = await youtube.get('/search', { params: { q: term } });
		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0]
		});
	};

	onVideoSelect = video => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className='ui container'>
				<SearchBar onSubmit={this.onSubmit} />
				<div className='ui grid'>
					<div className='ui row'>
						<div className='eleven wide column'>
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className='five wide column'>
							<VideoList
								videos={this.state.videos}
								onVideoSelect={this.onVideoSelect}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
