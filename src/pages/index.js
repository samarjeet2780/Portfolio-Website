import AnimatedText from "@/components/AnimatedText";
// import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import profilePic from "../../public/images/profile/profile-pic-1-removebg.png";
import TransitionEffect from "@/components/TransitionEffect";

import CircularEmailButton from "@/components/CircularEmailButton";

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Samarjeet | Home</title>
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-between md:flex-col">
            <div className="w-1/2 lg:hidden md:inline-block md:w-full">
              <Image
                src={profilePic}
                alt="Sam"
                className="h-auto w-full"
                sizes="80vw"
                priority
              />
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Hello, I'm Samar"
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
              As a passionate tech enthusiast, I thrive on transforming innovative ideas into powerful real-world applications that make an impact.
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  href="/Samarjeet Singh.docx"
                  target={"_blank"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                  download
                >
                  Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>

                { <Link
                  href="mailto:singh-s51@webmail.uwinnipeg.ca"
                  className="ml-4 text-lg font-medium capitalize text-dark underline 
                  dark:text-light md:text-base"
                >
                  Contact Me
                </Link> }
              </div>
            </div>
          </div>
        </Layout>

        <CircularEmailButton />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            className="relative h-auto w-full"
            src={lightBulb}
            alt="light bulb"
          />
        </div>
      </article>
    </>
  );
}
