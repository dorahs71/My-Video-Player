import {
  BookmarkContainer,
  ButtonDiv,
  BookmarkIcon,
  BookmarkBoard,
  BookmarkBlock,
  NoBookmarkBlock,
  PlayBookmark,
  PlayBookmarkIcon,
  BookmarkTime,
  RemoveDiv,
  RemoveIcon,
} from './style';
import { useState, useEffect } from 'react';
import { handlePlayBookmark, getBookmarkData } from '../../utils/function';

export default function Bookmark({
  id,
  setShowBar,
  videoRef,
  updateBookmark,
  setUpdateBookmark,
  setRemoveBookmarkAlert,
  removeData,
  setRemoveData,
}) {
  const [showBookmark, setShowBookmark] = useState([]);
  useEffect(() => {
    getBookmarkData(id, setShowBookmark);
  }, [id, updateBookmark]);

  const showRemoveBookmarkAlert = (data) => {
    setRemoveBookmarkAlert(true);
    setUpdateBookmark(true);
    setRemoveData(data);
  };

  return (
    <BookmarkContainer
      onMouseEnter={() => setShowBar('hidden')}
      onMouseLeave={() => setShowBar('visible')}
    >
      <ButtonDiv>
        <BookmarkIcon />
      </ButtonDiv>
      <BookmarkBoard>
        {showBookmark.length !== 0 ? (
          showBookmark.reverse().map((data) => {
            return (
              <BookmarkBlock key={data.time}>
                <PlayBookmark
                  onClick={() => handlePlayBookmark(videoRef, data.time)}
                >
                  <PlayBookmarkIcon />
                </PlayBookmark>
                <BookmarkTime>
                  0{Math.floor(data.time / 60)} :
                  {Math.floor(data.time - Math.floor(data.time / 60) * 60) < 10
                    ? '0' +
                      Math.floor(data.time - Math.floor(data.time / 60) * 60)
                    : Math.floor(data.time - Math.floor(data.time / 60) * 60)}
                </BookmarkTime>
                <RemoveDiv onClick={() => showRemoveBookmarkAlert(data)}>
                  <RemoveIcon />
                </RemoveDiv>
              </BookmarkBlock>
            );
          })
        ) : (
          <NoBookmarkBlock>
            <BookmarkTime>尚未有書籤</BookmarkTime>
          </NoBookmarkBlock>
        )}
      </BookmarkBoard>
    </BookmarkContainer>
  );
}
