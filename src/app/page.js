import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10">

      {/* HEADER */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Lewis Sideras</h1>
        <p className="text-sm">
          lewis.sideras@gmail.com | Tampa, FL | LinkedIn: www.linkedin.com/in/lewis-sideras | Github: www.github.com/LewySid | (617) 850 - 5217 
        </p>
      </header>

      {/* SUMMARY */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Summary</h2>
        <p>
        Motivated undergraduate student pursuing a B.S in Information Assurance and Cybersecurity Management. I have experience with Business and Data Analytics using Tableau through academic projects, and am currently learning JavaScript, HTML/ CSS, and SQL throughout my current semester at school. I am also learning about network security, risk management, cybersecurity policies, threat analysis, and information assurance practices. My expected graduation date is Spring 2027.
        </p>
      </section>

      {/* EDUCATION */}
      <section className="border-t pt-6 mt-6">
        <h2 className="text-xl font-semibold mb-2">Education</h2>
        <p>
          <li>University of South Florida — BS in Information Assurance & Cybersecurity Management</li>
        </p>
        <p>
          <li>Lincoln Sudbury Regional High School — High School Diploma</li>
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="border-t pt-6 mt-6">
        <h2 className="text-xl font-semibold mb-2">Experience</h2>
        <p>Rider Operator — Busch Gardens Tampa</p>
        <ul className="list-disc ml-5">
          <li>Operational Procedures</li>
          <li>Systems Monitoring</li>
          <li>Incident Response</li>
        </ul>
        <p>Server — The Common in Lincln</p>
        <ul className="list-disc ml-5">
          <li>Restuarant Operations</li>
          <li>Customer Service</li>
        </ul>
        <p>Merchandise Associate — TJX companies</p>
        <ul className="list-disc ml-5">
          <li>Training</li>
          <li>Sales</li>
        </ul>

      </section>

      {/* SKILLS */}
      <section className="border-t pt-6 mt-6">
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc ml-5">
          <li>JavaScript, HTML, CSS</li>
          <li>SQL</li>
          <li>Wireshark, Nmap, Splunk</li>
        </ul>
      </section>

     {/* CERTIFICATIONS */}
      <section className="border-t pt-6 mt-6">
        <h2 className="text-xl font-semibold mb-2">Certifications</h2>
        <ul className="list-disc ml-5">
          <li>JavaScript Essentials - Cisco Networking Academy</li>
          <li>Intro to Cybersecurity - Cisco Networking Academy</li>
          <li>Cyber Resiliency - USF Muma College of Business</li>
          <li>Data Visualization: Storytelling - LinkedIn Learning</li>
        </ul>
      </section>

    </main>
  );
}
