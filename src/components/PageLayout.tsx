import { ReactNode } from "react";
import React from "react";

type Props = {
  children?: ReactNode;
  title?: ReactNode;
};

export default function PageLayout({ children }: Props) {
  return (
    <div className="relative flex grow flex-col bg-slate-850">
      <div className="relative flex grow flex-col">
        <div>{children}</div>
      </div>
    </div>
  );
}
