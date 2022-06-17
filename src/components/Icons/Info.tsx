import Info from "../../assets/Info.svg";

import { IconProps } from "../../types";

const cx = require('classnames');

export function InfoIcon(props: IconProps) {
  const classes = cx('w-4 h-4 mr-2', props.className);
  return (
    <Info data-testid="info-svg" className={classes} />
  );
}
