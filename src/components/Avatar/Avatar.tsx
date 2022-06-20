import { AvatarProps, AvatarSize } from "../../types/avatarProps";

const cx = require("classnames");
const defaultClasses = "border rounded-full border-white";

const lineHeight: { [key in AvatarSize]: string } = {
  lg: 'leading-10 pt-1',
  md: 'leading-10',
  sm: 'leading-8',
}

export const avatarSizes: { [key in AvatarSize]: string } = {
  lg: 'h-12 w-12',
  md: 'h-10 w-10',
  sm: 'h-8 w-8',
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, size = "md", online }) => {
  const containerClasses = cx(defaultClasses, avatarSizes[size], { 'shadow-avatar': online });
  const altClasses = cx("h-full w-full rounded-full bg-gray-300 text-center align-middle", lineHeight[size]);

  return (
    <div className={containerClasses}>
      {src ? (
        <img className="object-cover rounded-full" src={src} alt={alt} />
      ) : (
        <div className={altClasses}>{alt}</div>
      )}
    </div>
  )
}
