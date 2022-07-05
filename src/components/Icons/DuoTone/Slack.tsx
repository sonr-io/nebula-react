
import Slack from "../../../assets/duotone/Slack.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SlackIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Slack data-testid="SlackIcon" className={classes} />
  );
}
