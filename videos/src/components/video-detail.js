import React from 'react';

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<div className='ui segment'>
				<div className='ui embed'>
					<iframe
						title='videoPlayer'
						src={`https://youtube.com/embed/${video.id.videoId}`}
					/>
				</div>
				<h4 className='ui header'>{video.snippet.title}</h4>
				<p>{video.snippet.description}</p>
			</div>
		</div>
	);
};

export default VideoDetail;
