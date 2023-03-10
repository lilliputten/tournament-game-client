/** @module RecordsTableBlock
 *  @since 2023.02.17, 05:07
 *  @changed 2023.03.06, 00:46
 */

import React from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import classnames from 'classnames';

import {
  useAppDispatch,
  useGameParamsToken,
  useGameParamsUserName,
  useGameSessionGameToken,
  useRecordsTable,
} from '@/core';

import styles from './RecordsTableBlock.module.scss';
import { loadRecordsTableThunk } from '@/features/RecordsTable/services';
import { Empty, RecordsTableContent } from './RecordsTableBlockContent';

export interface TRecordsTableBlockProps extends JSX.IntrinsicAttributes {
  className?: string;
}

export function RecordsTableBlock(props: TRecordsTableBlockProps): JSX.Element | null {
  const { className } = props;

  const dispatch = useAppDispatch();
  const router = useRouter();

  const token = useGameParamsToken();
  const userName = useGameParamsUserName();

  const gameToken = useGameSessionGameToken();

  const recordsTable = useRecordsTable();

  const isReady = !!(userName && token);

  const goToStartPage = React.useCallback(() => {
    router.push('/');
  }, [router]);

  React.useEffect(() => {
    // Go to the start page if environment isn't ready yet
    if (!isReady /* && !config.build.isDev */) {
      goToStartPage();
    }
  }, [goToStartPage, isReady]);

  React.useEffect(() => {
    if (isReady) {
      dispatch(loadRecordsTableThunk());
    }
  }, [isReady, dispatch]);

  const handleShowResults = React.useCallback(() => {
    router.push('/results');
  }, [router]);

  // const content = 'RecordsTableBlock';
  const content = React.useMemo(() => {
    if (!isReady) {
      // Don't render nothing and go to the start page if environment isn't ready yet...
      return <Empty reason="Not ready" />;
    }
    return (
      <RecordsTableContent
        onClick={handleShowResults}
        goToStartPage={goToStartPage}
        token={token}
        gameToken={gameToken}
        recordsTable={recordsTable}
      />
    );
  }, [isReady, handleShowResults, goToStartPage, token, gameToken, recordsTable]);

  return (
    <Box className={classnames(className, styles.container)} my={2}>
      {content}
    </Box>
  );
}
