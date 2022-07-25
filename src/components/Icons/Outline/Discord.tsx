
import Discord from "../../../assets/outline/Discord.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DiscordIcon({ className, dataTestid = "DiscordIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Discord data-testid={dataTestid} className={classes} {...rest} />
  );
}
