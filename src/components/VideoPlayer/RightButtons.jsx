import { RightButtonArea } from './style';
import React from 'react';
import FullScreen from './FullScreen';
import Speed from './Speed';
import Episodes from './Episodes';
import Bookmark from './Bookmark';
import NextEpisode from './NextEpisode';

export default React.memo(function RightButtons({
  id,
  videoRef,
  videoContainerRef,
  setShowBar,
  updateBookmark,
  setUpdateBookmark,
  setRemoveBookmarkAlert,
  removeData,
  setRemoveData,
}) {
  return (
    <RightButtonArea>
      <NextEpisode id={id} setShowBar={setShowBar} />
      <Bookmark
        id={id}
        setShowBar={setShowBar}
        videoRef={videoRef}
        updateBookmark={updateBookmark}
        setUpdateBookmark={setUpdateBookmark}
        setRemoveBookmarkAlert={setRemoveBookmarkAlert}
        removeData={removeData}
        setRemoveData={setRemoveData}
      />
      <Speed videoRef={videoRef} setShowBar={setShowBar} />
      <Episodes setShowBar={setShowBar} />
      <FullScreen videoContainerRef={videoContainerRef} />
    </RightButtonArea>
  );
});
