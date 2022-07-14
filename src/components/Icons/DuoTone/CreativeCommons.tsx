
import CreativeCommons from "../../../assets/duotone/CreativeCommons.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CreativeCommonsIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CreativeCommons data-testid="CreativeCommonsIcon" className={classes} />
  );
}
