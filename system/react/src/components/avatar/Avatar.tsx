import * as AvatarRadix from "@radix-ui/react-avatar";
import { useMemo } from "react";

export const Avatar: React.FC<{ size: "small" | "normal" | "large" }> = ({
  size,
}) => {
  const avatarCss = useMemo(() => {
    switch (size) {
      case "small":
        return "w-12 h-12";
      case "large":
        return "w-16 h-16";
      case "normal":
        return "w-14 h-14";
    }
  }, [size]);
  return (
    <AvatarRadix.Root
      className={`${avatarCss} rounded-full overflow-hidden border border-gray-300`}
    >
      <AvatarRadix.Image
        className="w-full h-full object-cover"
        src="https://github.com/shadcn.png"
        alt="User"
      />
      <AvatarRadix.Fallback className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-600">
        U
      </AvatarRadix.Fallback>
    </AvatarRadix.Root>
  );
};
