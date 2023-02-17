import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import classnames from 'classnames';
import { getDurationString } from '@/utils';

import config from '@/config';

import styles from './ResultsBlockContent.module.scss';
import { TPartnersInfo, TQuestionAnswers, TQuestions, TToken } from '@/core';

export interface TResultsBlockProps extends JSX.IntrinsicAttributes {
  className?: string;
}

export type TCb = () => void;

export function Empty({ reason }: { reason?: string }) {
  return (
    <Box data-reason={reason || null} className={classnames(styles.container, styles.Empty)}>
      {config.build.isDev && reason && <Typography>WatingBlock Empty: {reason}</Typography>}
    </Box>
  );
}

interface TGameInfo {
  onClick?: TCb;
  goToStartPage?: TCb;
  finishedTimestamp?: number;
  startedTimestamp?: number;
  partnersInfo?: TPartnersInfo;
  token?: TToken;
  questions?: TQuestions;
}

export function ShowInfo(props: TGameInfo) {
  const { finishedTimestamp, startedTimestamp, partnersInfo, token, questions } = props;

  // Get duration string...
  const duration = getDurationString(startedTimestamp, finishedTimestamp);

  // Get correct answers count...
  const selfInfo = partnersInfo && token && partnersInfo[token];
  const questionAnswers: TQuestionAnswers | undefined =
    (selfInfo && selfInfo.questionAnswers) || undefined;
  const correctAnswersCount =
    questionAnswers &&
    Object.values(questionAnswers).filter((result) => result === 'correct').length;

  // Questions...
  const hasQuestions = !!questions;
  const questionsCount = hasQuestions ? questions.length : 0;

  if (typeof correctAnswersCount == undefined || !questionsCount) {
    return null;
  }

  return (
    <Typography gutterBottom>
      Ваш результат {correctAnswersCount} из {questionsCount}
      {duration && ' за ' + duration}
    </Typography>
  );
}

export function GameInfo(props: TGameInfo) {
  const { onClick, goToStartPage } = props;
  return (
    <Box className={classnames(styles.container, styles.WaitingFailed)}>
      <Typography variant="h5" gutterBottom>
        Игра завершена!
      </Typography>
      <ShowInfo {...props} />
      {/*
      <Typography variant="h5">Ура! Вы победили в этой игре</Typography>
      <Typography>Ваш результат 4 правильных ответа из 10 за 1:45 секунд</Typography>
      */}
      <Stack
        className={styles.actions}
        spacing={2}
        direction="row"
        justifyContent="center"
        my={2}
        mt={4}
      >
        {!!goToStartPage && (
          <Button className="FixMuiButton" onClick={goToStartPage} variant="contained">
            <span className="Text">Сыграть ещё раз</span>
          </Button>
        )}
        <Button className="FixMuiButton" onClick={onClick} disabled>
          <span className="Text">Посмотреть турнирную таблицу</span>
        </Button>
      </Stack>
    </Box>
  );
}
