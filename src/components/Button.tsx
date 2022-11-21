import clsx from "clsx";
import { ReactNode } from "react";
import { Pressable, PressableProps, Text } from "react-native";

type Props = {
  children: ReactNode;
  type?: "primary" | "secondary";
} & PressableProps;

export const Button = ({
  children,
  type = "primary",
  ...pressableProps
}: Props) => (
  <Pressable
    className={clsx(
      "py-2 px-8 border-2 rounded-full",
      type === "primary" && "border-fuchsia-500",
      type === "secondary" && "border-sky-400"
    )}
    {...pressableProps}
  >
    <Text
      className={clsx(
        "font-bold",
        type === "primary" && "text-fuchsia-500",
        type === "secondary" && "text-sky-400"
      )}
    >
      {children}
    </Text>
  </Pressable>
);

export const LinkButton = ({
  children,
  type = "primary",
  ...pressableProps
}: Props) => (
  <Pressable className="py-2 px-8 rounded-full" {...pressableProps}>
    <Text
      className={clsx(
        "font-bold",
        type === "primary" && "text-fuchsia-500",
        type === "secondary" && "text-sky-400"
      )}
    >
      {children}
    </Text>
  </Pressable>
);
