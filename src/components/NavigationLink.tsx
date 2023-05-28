"use client";

import { Link } from "next-intl";
import { usePathname } from "next-intl/client";
import { ComponentProps } from "react";

type Props = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

export default function NavigationLink({ href, ...rest }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return <Link aria-current={isActive} href={href} {...rest} />;
}
