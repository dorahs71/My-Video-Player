import {
  AlertWindow,
  AlertImg,
  AlertWord,
  ButtonWrapper,
  Button,
} from './style';
import success from '../../images/success.png';
import ask from '../../images/ask.png';
import {
  confirmAddBookmark,
  confirmRemoveBookmark,
} from '../../utils/function';

export function SuccessWindow({
  trigger,
  setTrigger,
  videoRef,
  id,
  currentTime,
  setUpdateBookmark,
}) {
  return (
    trigger && (
      <AlertWindow>
        <AlertImg src={success} alt="dora video player" />
        <AlertWord>書籤已成功加入</AlertWord>
        <Button
          onClick={() =>
            confirmAddBookmark(
              videoRef,
              id,
              currentTime,
              setTrigger,
              setUpdateBookmark
            )
          }
        >
          確認
        </Button>
      </AlertWindow>
    )
  );
}

export function ConfirmWindow({
  trigger,
  setTrigger,
  setUpdateBookmark,
  removeData,
}) {
  const cancelRemoveBookmark = () => {
    setTrigger(false);
    setUpdateBookmark(false);
  };

  return (
    trigger && (
      <AlertWindow>
        <AlertImg src={ask} alt="dora video player" />
        <AlertWord>確認要刪除書籤嗎？</AlertWord>
        <ButtonWrapper>
          <Button onClick={cancelRemoveBookmark}>取消</Button>
          <Button
            onClick={() =>
              confirmRemoveBookmark(removeData, setUpdateBookmark, setTrigger)
            }
          >
            確認
          </Button>
        </ButtonWrapper>
      </AlertWindow>
    )
  );
}
