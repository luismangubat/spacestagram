import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Photo } from '../utils/interfaces';
import Image from 'next/image';
import ActionBar from './ActionBar';
import ShowMore from './ShowMore';

const CardContainer = styled.div`
  max-width: 500px;
  background: #002F2E;
  margin-bottom: 20px;
  color: white;
  overflow: hidden;
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0 15px;
  height: max-content;
  font-weight: 300;
`;

interface CardProps {
  photo: Photo;
  onClick: any;
  show: boolean;
}

const Card = ({ photo, onClick, show }: CardProps) => {

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

  const Description = styled.p`
  height: ${showMore ? "max-content": "50px" };
  margin: 5px 0; 
`;

  return (
    <CardContainer>
      <Image
        src={media_type === "video" ? thumbnail_url : url}
        alt={title}
        className='photo-image'
        width="500"
        height="500"
        priority
      />
      <InnerContainer>
      <ActionBar post={photo} liked={photo.liked} onLikedButton={onClick} />        
        <h3 className="title-card">{title}</h3>
        <p className="date">{date}</p>
        <Description >{explanation}</Description>
        <ShowMore setChange={setShowMore}/>
      </InnerContainer>
    </CardContainer>
  )
}

export default Card
