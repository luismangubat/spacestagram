import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import { LikedList, Photo } from '../utils/interfaces';
import { currentDate, getDate } from '../utils/helpers';
import Loader from '../components/Loader';

const ContentContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 2rem 1rem;
  flex-direction: column;
  max-width: 1080px;

  @media (min-width: 769px) {
    width: 70%;
    margin: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;

const Home: NextPage = () => {

  const [photoData, setPhotoData] = useState([]);
  //const [date, setDate] = useState(getDate(currentDate(), 5))
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
    fetchPhotoData();
    async function fetchPhotoData() {
      const start = "2022-01-01";
      const end = "2022-01-05";
      const res = await fetch(`https://api.nasa.gov/planetary/apod?start_date=${start}&end_date=${end}&api_key=g9M8wUGMcefg71f0dj1NmB4LblvvgSwFPv6BVZPa&thumbs=true`);
      const data = await res.json();
      setPhotoData(data);
      setLoading(false);
    }
  };

  // Save to local storage
  useEffect(() => {
    localStorage.setItem("liked-list", JSON.stringify(likedList))
  })

  const handleLikeBtnChange = (likes: boolean) => {
    //listRef.current!.scrollTo({ top: 0, behavior: "smooth" });
    console.log('like button click')
    setlikeButtonClicked(likes);
  };

  const handleLiked = (likedPhoto: Photo) => {
    likedPhoto.liked = !likedPhoto.liked;
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
        {(likeButtonClicked ? Object.values(likedList) : photoData).map((photo, index) => (
          <Card photo={photo}
            key={index}
            show={loading}
            onClick={() => handleLiked(photo)}
          />
        ))}
      </ContentContainer>
    </div>
  )
}

export default Home
