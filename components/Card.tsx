import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Photo } from '../utils/interfaces';
import Image from 'next/image';
import ActionBar from './ActionBar';

const CardContainer = styled.div`
  max-width: 500px;
  background: #002F2E;
  margin-bottom: 20px;
  color: white;
  // Cuts of the text
  overflow: hidden;
`;
const InnerContainer = styled.div`
  max-height: 400px;
  padding: 30px;
  padding-top: 0px;
  display: inline-table; 
`;

const ShowMoreButton = styled.button`
  height: 30px;
  width: 100%;
  background: #002423;
  color: white;
`;
interface CardProps {
  photo: Photo;
  onClick: any;
}

const Card = ({ photo, onClick }: CardProps) => {

  const { url, title, date, explanation, media_type, thumbnail_url } = photo;
  const [liked, setLiked] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleLikedChange = useCallback(
    () => setLiked(!liked),
    [liked]
  );

  const handleShowMore = useCallback(
    () => setShowMore(!showMore),
    [showMore]
  );


  return (
    <CardContainer>
      <Image
        src={media_type === "video" ? thumbnail_url : url}
        alt={title}
        className='photo-image'
        width="500"
        height="500"
      />
      <InnerContainer>
      <ActionBar post={photo} liked={photo.liked} onLikedButton={onClick} />        
        <h3 className="title-card">{title}</h3>
        <p className="date">{date}</p>
        <p className="explenation">{explanation}</p>
      </InnerContainer>
      <ShowMoreButton>Show More</ShowMoreButton>
    </CardContainer>
  )
}

export default Card
