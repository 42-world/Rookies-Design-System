import { css } from '@emotion/css';
import { Theme } from '../../common/type';
import { Text } from '../../typography/Text';
import { Avatar } from '../Avatar';

type User = {
  username: string;
  createdAt: string;
  profileImg: any;
};

interface Props {
  theme: Theme;
  text: string;
  isThumbed: boolean;
  thumbCount: number;
  user: User;
}

export function Comment({ theme, text, isThumbed, thumbCount, user }: Props) {
  return (
    <div className={containerStyle}>
      <Avatar createdAt={user.createdAt} profileImg={user.profileImg} theme={theme} username={user.username} />
      <div className={textWrapperStyle}>
        <Text size="body3" align="left" color="grey_50" text={text} theme={theme} />
        <Text
          size="caption"
          align="left"
          color={isThumbed ? 'main_green_10' : 'grey_50'}
          text={`좋아요 ${thumbCount}`}
          theme={theme}
        />
      </div>
    </div>
  );
}

const containerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const textWrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 52px;
`;
