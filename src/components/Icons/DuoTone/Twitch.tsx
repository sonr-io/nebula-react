
import Twitch from "../../../assets/duotone/Twitch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TwitchIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Twitch data-testid="TwitchIcon" className={classes} />
  );
}
