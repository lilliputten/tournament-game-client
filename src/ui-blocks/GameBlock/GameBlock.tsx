/** @module GameBlock
 *  @desc This component can manage different game screens (main game screen is GamePlaying).
 *  @since 2023.02.14, 14:52
 *  @changed 2023.02.15, 16:56
 */

import React from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import classnames from 'classnames';

import { loadQuestionsThunk } from '@/features/Questions/services';
import {
  useAppDispatch,
  useGameParamsGameMode,
  useGameParamsToken,
  useGameParamsUserName,
  useGameSessionPartnerToken,
  useGameSessionGameToken,
  useGameWaitingIsGameStarted,
  useGameSessionIsPlaying,
  useGameSessionIsFinished,
  useGameQuestions,
} from '@/core';
import { gameSessionStartThunk } from '@/features/GameSession/services';
import { Empty } from './GameBlockContent';

import styles from './GameBlock.module.scss';
import { GamePlaying } from '@/components/Game/GamePlaying';

export interface TGameBlockProps extends JSX.IntrinsicAttributes {
  className?: string;
}

export function GameBlock(props: TGameBlockProps): JSX.Element | null {
  const { className } = props;

  // const appRootStore = useStore<TRootState>();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const token = useGameParamsToken();
  const userName = useGameParamsUserName();
  const gameMode = useGameParamsGameMode();

  // Has game started in GameWaiting?
  const hasGameStarted = useGameWaitingIsGameStarted();

  const isPlaying = useGameSessionIsPlaying();
  const isFinished = useGameSessionIsFinished();

  // const partnerName = useGameSessionPartnerName();
  const partnerToken = useGameSessionPartnerToken();
  const gameToken = useGameSessionGameToken();

  const questions = useGameQuestions();
  const hasQuestions = !!questions;

  const isParamsReady = !!(token && userName && hasGameStarted);
  const isGameReady = !!(
    isParamsReady &&
    gameToken &&
    hasQuestions &&
    (gameMode !== 'multi' || partnerToken)
  );

  // Effect: Questions...
  React.useEffect(() => {
    if (isParamsReady) {
      dispatch(loadQuestionsThunk());
    }
  }, [isParamsReady, dispatch]);

  // Effect: Start game...
  React.useEffect(() => {
    if (isParamsReady && !isGameReady && !isFinished && !isPlaying) {
      // TODO: Do not request start game on finish game!
      dispatch(gameSessionStartThunk());
      // TODO: To use handler on game end?
    }
  }, [isParamsReady, isGameReady, isFinished, isPlaying, dispatch]);

  // Effect: Params not ready?
  React.useEffect(() => {
    // Go to the start page if environment isn't ready yet
    if (!isParamsReady) {
      router.push('/waiting');
    }
  }, [router, isParamsReady]);

  const content = React.useMemo(() => {
    if (!isGameReady) {
      // Don't render nothing and go to the start page if environment isn't ready yet...
      return <Empty reason="Not ready" />;
    } else if (isPlaying) {
      return <GamePlaying />;
      // return <GameInfo partnerName={partnerName} gameMode={gameMode} />;
    } else {
      return <Empty reason="Unknown" />;
    }
  }, [
    // partnerName,
    // gameMode,
    isGameReady,
    isPlaying,
  ]);

  return (
    <Box className={classnames(className, styles.container)} my={2} flexDirection="row">
      {content}
    </Box>
  );
}
