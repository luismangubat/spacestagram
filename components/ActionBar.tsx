
import Image from 'next/image';
import styled from 'styled-components';
import { Photo } from '../utils/interfaces';

const ActionBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding-top: 10px;
`
const Button = styled.button`
  display: flex;
  align-items: center;
`
export interface ActionBarProps {
  post: Photo
  liked: boolean
  onLikedButton: any
  date: string
}

const ActionBar = ({ post, liked, onLikedButton, date }: ActionBarProps) => {
  return (
    <ActionBarContainer>
      <Image src={liked ? '/favorite_black_24dp.svg' : '/favorite_border_black_24dp.svg'}
        alt="favorite"
        width="24"
        height="24"
        onClick={() => onLikedButton(post)} />
      <p className="date">{date}</p>
    </ActionBarContainer>
  )
}

export default ActionBar;
