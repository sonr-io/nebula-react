
import Woman from "../../../assets/duotone/Woman.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WomanIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Woman data-testid="WomanIcon" className={classes} />
  );
}
