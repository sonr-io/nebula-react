
import Twitch from "../../../assets/filled/Twitch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TwitchIcon({ className, dataTestid = "TwitchIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Twitch data-testid={dataTestid} className={classes} {...rest} />
  );
}
