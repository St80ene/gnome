import React from 'react';
import { categories } from '../../store/data';
import { FaTrash, FaEdit } from 'react-icons/fa';
import {
	Carousel,
	ActiveCard,
	Cards,
	MainWrapper,
	MainContainer,
	VideosCard,
	BodyWrapper,
	Thumbnail,
	VideoTitle,
	ActionBtn,
} from './styles';
import useFetchvideos from '../../Functions/apiFunctions';
import SkeletonCard from '../Skeleton/home';
import Axios from 'axios';
import Swal from 'sweetalert2';
import UpdateVideo from './modal';
import { API } from '../../config';

const ManagePage = () => {
  const [show, setShow] = React.useState(false);
	const { videos, loading, error } = useFetchvideos();
	const [movies, setMovies] = React.useState([]);
  const [data, setData] = React.useState({});

  const handleShow = (data) =>{
    setShow(true);
    setData(data);
    console.log(data);
  }

	React.useEffect(() => {
		setMovies(videos);
	}, [videos]);

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

	const handleDelete = (id) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then((result) => {
			if (result.isConfirmed) {
				Axios.delete(`${API}movies/${id}`)
					.then((res) => {
						console.log('deleted mooive =>', res);
						Toast.fire({
							icon: 'success',
							title: 'deleted successfully',
						});
						const publicId =
							res.data && res.data.data && res.data.data.publicId;

						const filteredMovies = movies.filter(
							(movie) => movie.publicId !== publicId
						);
						setMovies(filteredMovies);
					})
					.catch((err) => {
						Toast.fire({
							icon: 'error',
							title: 'Delete was unsuccessful',
						});
					});
			}
		});
	};

	return (
    <>
		<BodyWrapper>
			<Carousel>
				<ActiveCard>All</ActiveCard>
				{categories.map((item) => {
					return <Cards key={item.key}>{item.text}</Cards>;
				})}
			</Carousel>
			<MainContainer>
				<MainWrapper>
					{loading && <SkeletonCard />}
					{error && <SkeletonCard />}
					{movies < 1 ? (
						<SkeletonCard />
					) : (
						movies.map((item, index) => {
							return (
								<VideosCard key={index}>
									<Thumbnail preload="metadata" type="video/mp4" controls>
										<source src={item.videoUrl + '#t=0.1'} />
									</Thumbnail>
									<VideoTitle>
										<p>{item.title}</p>
									</VideoTitle>
									<ActionBtn>
										<button onClick={()=>handleShow(item)} style={{ color: 'green' }}>
											Update{' '}
											<span>
												<FaEdit />
											</span>
										</button>
										<button
											onClick={() => handleDelete(item.publicId)}
											style={{ color: 'red' }}
										>
											Delete
											<span>
												<FaTrash />
											</span>
										</button>
									</ActionBtn>
								</VideosCard>
							);
						})
					)}
				</MainWrapper>
			</MainContainer>
		</BodyWrapper>
    <UpdateVideo show={show} handleClose={()=>setShow(false)} data={data}/>
    </>
	);
};

export default ManagePage;
