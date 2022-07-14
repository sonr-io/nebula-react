
import RepeateOne from "../../../assets/duotone/RepeateOne.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RepeateOneIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={RepeateOne} data-testid="RepeateOneIcon" className={classes} />
  );
}
