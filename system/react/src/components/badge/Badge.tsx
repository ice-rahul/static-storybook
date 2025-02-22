import React, { useMemo } from "react";

export const Badge: React.FC<{
  children: React.ReactNode;
  variant: "success" | "warning" | "error";
}> = ({ children, variant }) => {
  const variantCss = useMemo(() => {
    switch (variant) {
      case "error":
        return "bg-red-500 border-red-600 text-white";
      case "success":
        return "bg-green-500 text-white border-green-600";
      case "warning":
        return "bg-yellow-500 border-yellow-600";
    }
  }, [variant]);
  return (
    <div
      className={`border px-4 py-1 border-gray-400 rounded-full ${variantCss}`}
    >
      {children}
    </div>
  );
};
