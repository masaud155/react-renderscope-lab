"use client";

import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CopyCodeButton({ code }) {
  return (
    <Button variant="ghost" size="icon" aria-label="Copy code" onClick={() => navigator.clipboard?.writeText(code)}>
      <Copy className="h-4 w-4" />
    </Button>
  );
}
