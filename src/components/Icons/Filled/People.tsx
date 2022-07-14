
import People from "../../../assets/filled/People.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PeopleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={People} data-testid="PeopleIcon" className={classes} />
  );
}
