import React from 'react';
import '../components/video-item.css';

const VideoItem = ({ video, onVideoSelect }) => {
	return (
		<div className='item video-item' onClick={() => onVideoSelect(video)}>
			<img
				alt={video.snippet.description}
				className='ui image'
				src={video.snippet.thumbnails.medium.url}
			/>
			<div className='content'>
				<div className='header'>{video.snippet.title}</div>
			</div>
		</div>
	);
};

export default VideoItem;
