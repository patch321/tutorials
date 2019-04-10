import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID b46c03bfd17b169a8e46d7016b842789c23a5ce3ca71ffdb7046a313ad547d13'
	}
});
