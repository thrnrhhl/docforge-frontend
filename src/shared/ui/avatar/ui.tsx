import { cn } from "@/shared/lib";

type Props = {
  src?: string | null;
  size?: number;
  fallback?: string;
  className?: string;
} & React.ComponentPropsWithoutRef<"span">;

const getSize = (size: number) => {
  return size * 0.25;
};

export const Avatar: React.FC<Props> = ({ src = null, size = 10, className }) => {
  const calculateSize = getSize(size);

  const style = { width: `${calculateSize}rem`, height: `${calculateSize}rem` };


  if(!src) {
    const calculateSizeUnSrc = getSize(size/2.5);
    
    return <div className="relative shrink-0 bg-neutral-100 rounded-full flex items-center justify-center" style={style}>
    <div className="text-neutral-400" style={{ width: `${calculateSizeUnSrc}rem`, height: `${calculateSizeUnSrc}rem` }}/>
  </div>
  }

  return (
    <div className="relative shrink-0" style={style}>
      <img
        className={cn("rounded-full object-cover shrink-0", className)}
        src={src ?? "/file_without_image.svg"}
        alt="avatar"
        style={style}
      />
    </div>
  );
};