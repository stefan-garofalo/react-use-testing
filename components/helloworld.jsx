"use client";

import { use } from "react";
import { getData } from "@/lib/api";

export default function HelloWorld() {
  const data = use(getData([1]));
  return <div className="font-bold">{JSON.stringify(data)}</div>;
}
