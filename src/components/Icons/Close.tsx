import cx from 'classnames';
import Close from "../../assets/Close.svg";

import { IconProps } from "../../types";

export function CloseIcon(props: IconProps) {
  const classes = cx('w-4 h-4 mr-2', props.className);
  return (
    <Close data-testid="close-svg" className={classes} />
  );
}
