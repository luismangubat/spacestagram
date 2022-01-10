import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Photo } from '../utils/interfaces';
import Image from 'next/image';
import ActionBar from './ActionBar';

const CardContainer = styled.div`
  max-width: 400px;
  background: grey;
  margin-bottom: 10px;
`;
const InnerContainer = styled.div`
  max-height: 400px;
`;

interface CardProps {
  photo: Photo;
  onClick: any;
}

const Card = ({ photo, onClick }: CardProps) => {

  const { url, title, date, explanation, media_type, thumbnail_url } = photo;
  const [liked, setLiked] = useState(false);

  const handleLikedChange = useCallback(
    () => setLiked(!liked),
    [liked]
  );


  return (
    <CardContainer>
      <Image
        src={media_type === "video" ? thumbnail_url : url}
        alt={title}
        className='photo-image'
        width="400"
        height="400"
      />
      <ActionBar post={photo} liked={liked} onLikedButton={onClick} />
      <InnerContainer>
        <h1>{title}</h1>
        <p className="date">{date}</p>
        <p className="explenation">{explanation}</p>
      </InnerContainer>
    </CardContainer>
  )
}

export default Card
