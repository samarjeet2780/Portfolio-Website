import { motion } from "framer-motion";
import React, { useRef } from "react";


const Skill = ({ name, x, y }) => {
  const ref = useRef(null);
  return (
    <motion.div
      ref={ref}
      whileHover={{scale:1.05}}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: {duration: 1.5} }}
      viewport={{ once: true }}
      className="cursor-pointer w-max origin-center absolute 
       font-semibold bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark
       lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3  xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold
       "
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  return (
<>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2> 
    <div
      ref={ref}
      className="w-full h-[100vh] relative bg-circularLight dark:bg-circularDark  flex items-center justify-center 
      mb-64 md:mb-32 rounded-full
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd 
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
      "
    >
   
        <motion.div whileHover={{scale:1.05}} className="cursor-pointer flex rounded-full font-semibold bg-dark text-light p-8 shadow-dark
        dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2
        ">
        Skills
      </motion.div>

        <Skill name="Python" x="-42vw" y="2vw" />
        <Skill name="Java" x="-42vw" y="-5vw" />
        <Skill name="C/C++" x="-38vw" y="-12vw" />
        <Skill name="JavaScript" x="-38vw" y="10vw" />
        <Skill name="React.js" x="-36vw" y="-1vw" />
        <Skill name="Node.js" x="-35vw" y="-7vw" />
        <Skill name="Express.js" x="-35vw" y="5vw" />
        <Skill name="Next.js" x="-30vw" y="-12vw" />
        <Skill name="HTML" x="-25vw" y="-5vw" />
        <Skill name="Tailwind CSS" x="-25vw" y="5vw" />

        <Skill name="Git & Github" x="-20vw" y="-1vw" />
        <Skill name="R" x="25vw" y="-6vw" />
        <Skill name="Power BI" x="27vw" y="-1vw" />
        <Skill name="Tableau" x="26vw" y="4vw" />
          <Skill name="MySQL " x="33vw" y="-10vw" />
          <Skill name="MongoDB " x="37vw" y="2vw" />
          <Skill name="PostgreSQL" x="36vw" y="-5vw" /> 
          <Skill name="SQL" x="35vw" y="8vw" />  

          <Skill name="AWS" x="0vw" y="12vw" />
          <Skill name="PyTorch" x="0vw" y="16vw" />
          <Skill name="NumPy" x="8vw" y="15vw" />
          <Skill name="Pandas" x="-8vw" y="15vw" />
          <Skill name="Jupyter" x="-5vw" y="22vw" />

          <Skill name="Figma" x="-5vw" y="-22vw" />
          <Skill name="Balsamiq" x="5vw" y="-22vw" />
    </div></>
  );
};

export default Skills;
