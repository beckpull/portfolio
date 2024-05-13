import React from 'react';
import EachXP from '../components/Experience';
import '../styles/Resume.css';

const briefOverview = [
"Managed a team of 10-15 employees, fostering a supportive work environment conducive to high performance.",
"Demonstrated leadership, creative problem-solving, and effective team motivation skills in managing daily operations.",
"Managed invoicing, reporting, and account reconciliations, ensuring accurate financial records.",
"Oversaw fuel, oil, and supply inventories, ensuring efficient operations and timely customer service.",
"Conducted regular internal and external audits to maintain compliance and streamline processes.",
"Cultivated strong customer relationships, resulting in a loyal and expanding customer base.",
"Cross-trained in line technician and customer service roles, demonstrating versatility and adaptability.",
"Provided exceptional customer service, prioritizing customer satisfaction and loyalty.",
"Supervised and trained new staff, ensuring smooth onboarding and adherence to safety protocols.",
"Displayed strong multitasking abilities, efficiently handling various tasks to meet operational demands.",
"Executed aircraft servicing operations with precision and efficiency, including fueling, hangaring, and deicing.",
"Directed ramp-side traffic and maintained aircraft readiness for departure, optimizing operational efficiency.",
"Established and maintained customer relationships, delivering exceptional service and earning trust and loyalty.",
"Demonstrated a commitment to safety, customer-focused service, and creative problem-solving in daily tasks."
];

const jobXP = [
  {
    company: "Avflight Durango Corporation",
    role: "Supervisor / Acting Operations Manager",
    location: "Durango, CO",
    length: "Feb 2022 - Oct 2023",
    description: "As the Staff Supervisor at Avflight KDRO, I orchestrated the seamless operation of a high-demand aircraft fueling facility, serving as the linchpin in ensuring the safety, efficiency, and satisfaction of our clientele. With a multifaceted role that encompassed leadership, operations management, and customer service, I spearheaded every aspect of our operation with unwavering dedication and a commitment to excellence. At Avflight DRO, I was not just a manager; I was a leader, mentor, and advocate for both my team and our valued customers. My unwavering commitment to excellence, coupled with my passion for fostering meaningful connections and delivering exceptional service, positioned me as a driving force behind the success and reputation of our organization within the aviation industry.",
    duties: ["Leadership and Team Development: Led a team of 10-15 employees, cultivating a positive and vibrant work environment characterized by camaraderie, mutual respect, and a strong sense of teamwork, Provided ongoing training, mentorship, and support to team members, fostering their professional growth and personal development within the organization, Nurtured a close-knit staff community, fostering enduring friendships and a sense of belonging among employees, ensuring they felt supported and valued in their roles.", "Operations Management: Oversaw all facets of the fueling operation, from aircraft refueling to lavatory servicing, ensuring adherence to stringent safety protocols and regulatory requirements at all times, Managed fuel, oil, and supply inventories, implementing efficient inventory control measures to minimize waste and optimize resource utilization, Conducted regular audits of internal billing processes and fueling/facility operations, maintaining the highest standards of accuracy, integrity, and compliance.", "Customer Relationship Management: Cultivated and nurtured strong relationships with a diverse clientele, ranging from commercial airlines to private aircraft owners, through consistently exceptional service delivery, Proactively addressed customer inquiries, concerns, and feedback, striving to exceed expectations and deliver memorable experiences that fostered loyalty and repeat business, Implemented strategies to expand and diversify our customer base, consistently surpassing revenue targets and driving sustained business growth through a relentless focus on customer satisfaction.", "Exceptional Customer Service: Recognized as the apex of customer service excellence, consistently going above and beyond to ensure the needs of our customers were not only met but exceeded.", "Operational Excellence: Single-handedly managed the entire operation on numerous occasions, demonstrating unparalleled efficiency, resourcefulness, and resilience in the face of operational challenges.", "Employee Engagement: Created a supportive and inclusive work environment where employees felt valued, empowered, and motivated to perform at their best, resulting in high morale, low turnover, and a cohesive team dynamic."],
    skills: "Team Motivation · Staff Oversight · Health & Safety · Training & Development · Client Relations · Leadership · Creative Problem Solving · Customer Loyalty · Accounting",
  },
  {
    company: "Avflight Durango Corporation",
    role: "Line Technician and Customer Service Representative",
    location: "Durango, CO",
    length: "Oct 2021 - Feb 2022",
    description: "I was thoroughly cross trained as both a line technician/fueler and a Customer Service Representative, and have received extensive supervisory and managerial training on the job.I was thoroughly cross trained as both a line technician/fueler and a Customer Service Representative, and have received extensive supervisory and managerial training on the job.",
    duties: ["General invoicing/bookkeeping operations", "Daily reporting and reconciling of accounts & inventories", "Daily fueling operations on the KDRO field", "Training/supervising line technicians, guiding new staff through the onboarding/computer training processes", "Completion/invoicing of miscellaneous aircraft services", "Establishing and maintaining long lasting, symbiotic customer relationships", "Staying up to date on several certifications and completing a multitude of specific training courses annually", "Preparing purchase/shop orders for Accounts Receivable department", "Fueling, servicing piston and turbine aircraft ranging from light single engines to wide body airliners and military helicopters.", "Managing the KDRO GA ramp as well as ensuring all airline and tanker traffic get fueled on time", "Prioritizing services based on flight schedules, weather, and level of urgency (ensuring all medevac (air ambulance) flights are able to get out in time as well)", "Providing exceptional customer service to every aircraft that lands on the ramp. I am always raising our standards for the customer experience we are able to provide."],
    skills: "Team Motivation · Health & Safety · Skilled Multi-tasker · Customer-focused Service · Creative Problem Solving · Customer Loyalty · Accounting"
  },
  {
    company: "Avflight Durango Corporation",
    role: "Line Technician",
    location: "Durango, CO",
    length: "Nov 2020 - Oct 2021",
    description: "As a line technician I was responsible for the servicing of the private 'General Aviation' aircraft",
    duties: ["Fueling all aircraft needing fuel on the KDRO field (commercial, private, military)", "Hangaring all non-based 'GA' aircraft requesting hangar", "Deicing and anti-icing departing aircraft in the winter", "Providing lavatory services", "Oxygen replenishments", "Directing all ramp-side traffic - aircraft and motor vehicles", "Maintaining proper prioritization as to get every aircraft ready for departure by their scheduled departure times", "Establishing and maintaining customer relationships; I earned the trust of all of my beloved KDRO frequenters (and many, many visitors) when it came to the care of their aircraft"],
    skills: "Health & Safety · Customer-focused Service · Creative Problem Solving • Aircraft Servicing and Fueling"
  },
  {
    company: "Rivergate Pharmacy / Piñon Family Pharmacy",
    role: "Pharmacy Technician",
    location: "Durango, CO / Farmington, NM",
    length: "Aug 2018 - Oct 2020",
    description: "As a Pharmacy Technician at Rivergate Pharmacy and Piñon Family Pharmacy, I thrived in a fast-paced environment, leveraging my exceptional precision, speed, and accuracy to manage critical tasks such as data entry, prescription counting, and POS system operations. My role demanded meticulous attention to detail, ensuring that medication dispensing processes were error-free and efficient. Beyond technical proficiency, I dedicated myself to providing unparalleled customer service to every pharmacy patron. I prioritized building strong relationships with customers, actively listening to their needs, and offering personalized care to ensure a positive and supportive experience during their visits. Whether assisting with inquiries, providing medication guidance, or addressing concerns, I remained committed to delivering excellence in customer service. My tenure as a Pharmacy Technician was marked by a steadfast dedication to quality and a relentless pursuit of excellence in every aspect of pharmacy operations. I continuously sought opportunities to refine my skills, stay abreast of industry advancements, and uphold the highest standards of professionalism and service.",
    duties: ["Managed data entry, prescription counting, and POS system operations with speed, accuracy, and efficiency.", "Provided high-quality customer service, ensuring a positive experience for pharmacy patrons.", "Demonstrated strong attention to detail and customer-focused service in pharmacy operations."],
    skills: "Customer-focused Service · Pharmacy"
  },
];

function Resume() {
  return (
    <div className="container">
    <h2 className='subtitle is-2'>My Prior Work Experience:</h2>
    <br />
    <br />
    <br />
    <h3 className='subtitle is-3'>Brief Overview of my more recent responsiblities and achievements ...</h3>
    <br />
    <br />
    <ul>
      {briefOverview.map((responsiblity, index) => (
        <li key={index}> • {responsiblity}</li>
      ))}
    </ul>
    <br />
    <br />
    <br />
    <br />
    <h3 className='subtitle is-3'>... Broken down in more detail</h3>
    <br />
    <br />
      {jobXP.map((xp) => (
        <EachXP company={xp.company} role={xp.role} location={xp.location} length={xp.length} description={xp.description} duties={xp.duties} skills={xp.skills} />
      ))}
    </div>
  )
};

export default Resume;