
import Image from 'next/image';
import styled from 'styled-components';
import { ActionBarProps, Photo } from '../utils/interfaces';

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
  handleLiked: any
  onLikedButton: any
}


const ActionBar = ({ post, liked, onLikedButton }: ActionBarProps) => {
  return (
    <ActionBarContainer>
      <Image src='/favorite_border_black_24dp.svg' alt="favorite" width="24" height="24" onClick={onLikedButton}/>
      <Image src='/send_black_24dp.svg' alt="share" width="24" height="24" />
    </ActionBarContainer>
  )
}

export default ActionBar
