import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import { LikedList, Photo } from '../utils/interfaces';
import { currentDate, getDate } from '../utils/helpers';
import Loader from '../components/Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

const ContentContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 6rem 1rem;
  flex-direction: column;
  max-width: 1080px;
  background: #001818;

  @media (min-width: 769px) {
    width: 70%;
    margin: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Home: NextPage = () => {

  const [photoData, setPhotoData] = useState<Photo[]>([]);
  const [startDate, setStartdDate] = useState(getDate(currentDate(), 3))
  const [endDate, setEndDate] = useState(startDate)
  const [likedList, setLikedList] = useState<LikedList>({});
  const [likeButtonClicked, setlikeButtonClicked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storageLikedList = localStorage.getItem("liked-list");
    let likedObj = {};
    if (storageLikedList) {
      likedObj = JSON.parse(storageLikedList);
      setLikedList(likedObj);
    };
    fetchPhotos();
  }, []);

  const fetchPhotos = () => {
    setLoading(true);
    fetchPhotoData()
    async function fetchPhotoData() {
      const res = await fetch(`https://api.nasa.gov/planetary/apod?start_date=${startDate}&end_date=${currentDate()}&api_key=g9M8wUGMcefg71f0dj1NmB4LblvvgSwFPv6BVZPa&thumbs=true`);
      const data = await res.json();
      const modified = data.reverse()
      setPhotoData(modified.slice(0,-1));
      setLoading(false);
    }
    setLoading(false);
  };

  async function fetchMore() {
    setLoading(true);
    setEndDate(getDate(startDate, 1))
    setStartdDate(getDate(endDate, 2))
    const res = await fetch(`https://api.nasa.gov/planetary/apod?start_date=${startDate}&end_date=${endDate}&api_key=g9M8wUGMcefg71f0dj1NmB4LblvvgSwFPv6BVZPa&thumbs=true`);
    const data = await res.json();
    const reverse = data.reverse();

    setPhotoData((photoData) => [...photoData, ...reverse])
    console.log("End date:", endDate, "StartDate", startDate)
    console.log(data)
    setLoading(false);

  }

  useEffect(() => {
    localStorage.setItem("liked-list", JSON.stringify(likedList))
  })

  const handleLikeBtnChange = (like: boolean) => {
    setlikeButtonClicked(like);
  };

  const handleLiked = (likedPhoto: Photo) => {
    likedPhoto.liked = !likedPhoto.liked;
    setLoading(false)
    if (likedList.hasOwnProperty(likedPhoto.url)) {
      const tempLikedList = { ...likedList };
      delete tempLikedList[likedPhoto.url];
      setLikedList(tempLikedList);
    } else setLikedList({ ...likedList, [likedPhoto.url]: likedPhoto });
  };

  if (!photoData) return <div />;

  return (
    <div className="container">
      <section>
        <Navbar 
          likesBtnClick={() => handleLikeBtnChange(true)}
          feedBtnClick={() => handleLikeBtnChange(false)}
          />
      </section>
      <ContentContainer>
        <InfiniteScroll dataLength={likeButtonClicked ? Object.values(likedList).length : photoData.length}
                        next={fetchMore}
                        hasMore={true}
                        loader={ likeButtonClicked ? false : <Loader show={loading}/>}>
          {(likeButtonClicked ? Object.values(likedList) : photoData).map((photo, index) => (
            <Card photo={photo}
              key={index}
              show={loading}
              onClick={() => handleLiked(photo)}
            />
          ))}
        </InfiniteScroll>
      </ContentContainer>
    </div>
  )
};

export default Home;
