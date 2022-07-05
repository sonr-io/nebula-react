
import RepeateOne from "../../../assets/filled/RepeateOne.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function RepeateOneIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <RepeateOne data-testid="RepeateOneIcon" className={classes} />
  );
}
