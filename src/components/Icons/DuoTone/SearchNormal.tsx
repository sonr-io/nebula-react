
import SearchNormal from "../../../assets/duotone/SearchNormal.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SearchNormalIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={SearchNormal} data-testid="SearchNormalIcon" className={classes} />
  );
}
