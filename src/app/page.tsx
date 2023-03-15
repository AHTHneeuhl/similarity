import Heading from "@/ui/Heading";
import Paragraph from "@/ui/Paragraph";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Similarity API",
  description: "Free & open-source text similarity API",
};

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container pt-32 max-w-7xl mx-auto w-full h-full">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <Heading
            size="lg"
            className="three-d text-black dark:text-light-gold"
          >
            Easity determine <br /> text similarity.
          </Heading>
          <Paragraph className="max-w-xl lg:text-left">
            With the text similarity API, you can easily determine the
            similarity between two pieces of texts with a free{" "}
            <Link
              href="/login"
              className="underline underline-offest-2 text-black dark:text-light-gold"
            >
              API key
            </Link>
            .
          </Paragraph>
          <div className="relative w-full max-w-lg lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute">
            <Image
              priority
              className="image-shadow"
              quality={100}
              style={{ objectFit: "contain" }}
              fill
              src="/typewriter.png"
              alt="typewriter"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
