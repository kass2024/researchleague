"use client";
import PageBanner from "@/components/PageBanner";
import { conferences } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ConferenceInfo from "./ConferenceInfo";
import ConferenceLanding from "./ConferenceLanding";

const Page = () => {
  const query = useSearchParams().get("country");
  const conference = conferences.find((conf) => conf.location === query);

  return (
    <>
      {query ? (
        <ConferenceInfo conference={conference} />
      ) : (
        <ConferenceLanding />
      )}
    </>
  );
};

export default Page;
