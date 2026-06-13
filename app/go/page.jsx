import { Suspense } from "react";
import GoClient from "./GoClient";

export const metadata = {
  title: "外部サイトへ移動しています | コドモならいごと",
  robots: { index: false, follow: false },
};

export default function GoPage() {
  return (
    <Suspense fallback={null}>
      <GoClient />
    </Suspense>
  );
}
