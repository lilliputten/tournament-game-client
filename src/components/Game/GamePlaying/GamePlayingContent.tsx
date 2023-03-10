import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import classnames from 'classnames';

import config from '@/config';
import { TGameSessionState } from '@/features/GameSession';
import { TGameParamsState } from '@/features/GameParams';
import { TQuestions } from '@/core/types';

import styles from './GamePlayingContent.module.scss';

export interface TGamePlayingProps extends JSX.IntrinsicAttributes {
  className?: string;
}

export type TCb = () => void;

export function Empty({ reason }: { reason?: string }) {
  return (
    <Box data-reason={reason || null} className={classnames(styles.container, styles.Empty)}>
      {config.build.isDev && reason && <Typography>GamePlaying Empty: {reason}</Typography>}
    </Box>
  );
}

// DBEUG
export function GameInfo({
  partnerName,
  partnerToken,
  questions,
  gameMode,
}: Pick<TGameSessionState, 'partnerName' | 'partnerToken'> &
  Pick<TGameParamsState, 'gameMode'> & { questions?: TQuestions }) {
  return (
    <Box className={classnames(styles.container, styles.GameReady)}>
      <Typography variant="h5">Информция об игре (GamePlaying)</Typography>
      {gameMode && <Typography>Режим игры: {gameMode}</Typography>}
      {partnerName && (
        <Typography>
          Ваш партнёр: {partnerName} ({partnerToken})
        </Typography>
      )}
      {questions && (
        <Typography>Вопросы: {questions.map(({ question }) => question).join(' | ')}</Typography>
      )}
    </Box>
  );
}
