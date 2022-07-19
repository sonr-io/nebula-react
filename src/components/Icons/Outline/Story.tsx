
import Story from "../../../assets/outline/Story.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function StoryIcon({ className, dataTestid = "StoryIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Story data-testid={dataTestid} className={classes} {...rest} />
  );
}
