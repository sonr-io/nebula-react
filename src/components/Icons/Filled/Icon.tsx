
import Icon from "../../../assets/filled/Icon.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function IconIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Icon data-testid="IconIcon" className={classes} />
  );
}
