/** @module GameLayout
 *  @since 2023.02.15, 19:54
 *  @changed 2023.02.15, 19:54
 */

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import classnames from 'classnames';

// import config from '@/config';

import styles from './GameLayout.module.scss';

export interface TGameLayoutProps extends JSX.IntrinsicAttributes {
  className?: string;
}

export function GameLayout(props: TGameLayoutProps): JSX.Element | null {
  const { className } = props;
  /* // @see:
   * - [Школа/ сервисы – Figma](https://www.figma.com/file/C1ylOhuxpqwMitM11JHE8Y/%D0%A8%D0%BA%D0%BE%D0%BB%D0%B0%2F-%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D1%8B?node-id=2323%3A1061&t=vjG6YjAtpOyUFoIc-0)
   * - [React Typography component - Material UI](https://mui.com/material-ui/react-typography/)
   */

  return (
    <Box className={classnames(className, styles.container)}>
      <Box className={classnames(styles.partnersBox)}>
        <Typography className={classnames(styles.partnersTitle)} variant="h6">
          Участники
        </Typography>
        <Box className={classnames(styles.partner)}>
          Partner
        </Box>
        <Box className={classnames(styles.partner)}>
          Partner
        </Box>
      </Box>
      <Box className={classnames(styles.gameBox)}>
        <Typography variant="body1">
          GameLayout: Game
        </Typography>
      </Box>
    </Box>
  );
}
