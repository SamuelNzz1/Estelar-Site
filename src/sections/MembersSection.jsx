import "./MembersSection.css";
import { MemberCard } from "../components/CardMember";
import { MemberCard2 } from "../components/CardMember2";
import { MemberCard3 } from "../components/CardMember3";
export const MembersSection = () => {
  return <section id="members-section" className="members-section">
    <h1 id="text-titulo-members">Conheça nossa <span className="span-equipe">equipe</span>!</h1>
    <div className="members-infos">
        <MemberCard />
        <MemberCard2/>
        <MemberCard3/>
    </div>
  </section> 
}