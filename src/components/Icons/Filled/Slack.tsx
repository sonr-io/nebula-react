
import Slack from "../../../assets/filled/Slack.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SlackIcon({ className, dataTestid = "SlackIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Slack data-testid={dataTestid} className={classes} {...rest} />
  );
}
