
import Story from "../../../assets/duotone/Story.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function StoryIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Story} data-testid="StoryIcon" className={classes} />
  );
}
