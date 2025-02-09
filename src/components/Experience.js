import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="Director of IT"
              company="BASA"
              companyLink="https://www.uwbasa.org"
              time="May 2024-Present"
              address="Winnipeg, MB"
              work="Developed and enhanced the organization's website by implementing features such as an events calendar and upcoming events section. 
              Improved UI/UX for a more seamless user experience and introduced new functionalities, including an online shopping system for BASA products and event ticket purchases."
            />

            <Details
              position="Student Assistant - Technology Service Desk"
              company="UoW"
              companyLink="https://www.uwinnipeg.ca/tech-sector/get-help.html"
              time="August 2023 - Present"
              address="Winnipeg, MB"
              work="Demonstrated a strong problem-solving ability by providing effective solutions to technical issues, fostering a reliable reputation for addressing
                     challenges promptly."
            />


            <Details
              position="IT Analyst Intern"
              company="GMB"
              companyLink=""
              time="Summer 2024"
              address="Winnipeg, MB"
              work={`Analyzed and cleaned large datasets, ensuring data accuracy and consistency before integrating them into company databases.
  
                Leveraged Power BI and Tableau to transform raw data into actionable insights, leading to a 30% improvement in project planning efficiency and data-driven decision-making.
                
                Streamlined workflows by automating data processing, reducing manual effort by 25%, and enhancing operational efficiency.
                
                Supported database management by writing SQL queries and conducting data migrations, ensuring data integrity and optimizing reporting capabilities.
                
                These efforts contributed to improved forecasting, resource allocation, and overall business performance.`}
              />

          
            <Details
              position="Teaching Assistant"
              company="UoW"
              companyLink="https://www.uwinnipeg.ca"
              time="Sept 2023 - Dec 2024"
              address="Winnipeg, MB"
              work="Graded assignments and labs for 150+ students across three courses(OOPs Programming, Information systems, Software Requirement Analysis and Design)
               with 100% accuracy. Led lab sessions for students, resolving 90% of queries immediately and increasing course satisfaction by 10%."
            />

            <Details
              position="Marker"
              company="UoW"
              companyLink="https://www.uwinnipeg.ca"
              time="Sept 2023 - Dec 2023"
              address="Winnipeg, MB"
              work="Marked and tracked assignments for 50+ freshmen computer science students. "
            />
          </ul>
        </div>
        </div>
    );
};

export default Experience;
