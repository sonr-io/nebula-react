
import Discord from "../../../assets/outline/Discord.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DiscordIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Discord data-testid="DiscordIcon" className={classes} />
  );
}
