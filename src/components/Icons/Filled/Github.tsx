
import Github from "../../../assets/filled/Github.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GithubIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Github data-testid="GithubIcon" className={classes} />
  );
}
