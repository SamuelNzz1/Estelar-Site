import "./MembersSection.css";
import { MemberCard } from "../components/CardMember";
import { MemberCard2 } from "../components/CardMember2";
import { MemberCard3 } from "../components/CardMember3";
import { motion } from "framer-motion";

export const MembersSection = () => {
  const containerVariants = {
    hidden: { opacity: 0.25 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0.25, scale: 0.5},
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="members-section" className="members-section">
      <h1 id="text-titulo-members">Conheça nossa <span className="span-equipe">equipe</span>!</h1>
      <motion.div 
        className="members-infos" 
        variants={containerVariants} 
        initial="hidden" 
        whileInView="show"
      >
        <MemberCard variants={cardVariants} />
        <MemberCard2 variants={cardVariants} />
        <MemberCard3 variants={cardVariants} />
      </motion.div>
    </section>
  );
};
