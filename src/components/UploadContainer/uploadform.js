import React from 'react';
import Axios from '../../config';
import './styles.css';
import Swal from 'sweetalert2';

const UploadVideoForm = () => {
	const [videoFile, setVideoFile] = React.useState(null);
	const [title, setTitle] = React.useState('');
	const [description, setDescription] = React.useState('');

	const Toast = Swal.mixin({
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
		didOpen: (toast) => {
			toast.addEventListener('mouseenter', Swal.stopTimer);
			toast.addEventListener('mouseleave', Swal.resumeTimer);
		},
	});

	const clickSubmit = () => {
		const formData = new FormData();
		formData.append('video', videoFile);
		formData.append('text', title);
		formData.append('text', description);

		Axios({
			method: 'post',
			url: `movies/upload`,
			data: formData,
			headers: {
				'content-type': 'multipart/form-data',
			},
		})
			.then((res) => {
        console.log(res);
        	Toast.fire({
						icon: 'success',
						title: 'uploaded successfully',
					});
			})
			.catch((err) => {
				console.log(err);
			});

		console.log(videoFile);
	};

	return (
		<div className="UploadVideoContainer">
			<div className="titleContainer">
				<label>Title:</label>
				<input
					onChange={(e) => setTitle(e.target.value)}
					name="title"
					type="text"
					placeholder="Title..."
					value={title}
				/>
			</div>

			<div className="descriptionContainer">
				<label>Description:</label>
				<textarea
					onChange={(e) => setDescription(e.target.value)}
					name="description"
					value={description}
					placeholder="Description..."
				/>
			</div>
			<div className="bottomSection">
				<div className="thumbnailContainer">
					<input
						type="file"
						name="video"
						accept="video/mp4"
						onChange={(e) => setVideoFile(e.target.files[0])}
            style={{display:'none'}}
						id="uploadThumbnail"
					/>
					<div id="uploadThumbnail">
						<label htmlFor="uploadThumbnail"> - Select - </label>
					</div>
				</div>
				<div className="uploadButtonContainer">
					<button onClick={clickSubmit}> Upload Video</button>
				</div>
			</div>
		</div>
	);
};

export default UploadVideoForm;
