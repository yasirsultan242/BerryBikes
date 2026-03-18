import React, { Component } from 'react';
import Header from '../Header';
import { FaMapMarkerAlt, FaBriefcase, FaPlane, FaJava, FaMoneyBillWave, FaExternalLinkAlt } from 'react-icons/fa';

const jobListings = [
  {
    id: 1,
    title: 'Java Software Engineer',
    company: 'Synechron',
    location: 'Riyadh, Saudi Arabia',
    salary: '$60k – $86k (Zero Income Tax)',
    experience: '7+ years',
    type: 'Full-time, On-site',
    relocation: 'Visa sponsorship provided – can apply from abroad',
    skills: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'Kafka', 'Docker', 'Kubernetes', 'AWS', 'CI/CD'],
    url: 'https://zerotaxjobs.com/companies/synechron/jobs/java-software-engineer-6wsp6q78',
  },
  {
    id: 2,
    title: 'Senior Java Developer',
    company: 'Total-TECH Co.',
    location: 'Riyadh, Saudi Arabia',
    salary: 'Competitive',
    experience: '5+ years',
    type: 'Full-time, On-site',
    relocation: 'Relocation assistance available',
    skills: ['Java', 'Spring Boot', 'Docker', 'Linux', 'TDD', 'SQL/NoSQL', 'Microservices', 'Event-driven Architecture'],
    url: 'https://totaltech.me/job/total-tech-co-riyadhsaudi-arabia-full-time-sr-java-developer/',
  },
  {
    id: 3,
    title: 'Full Stack Developer (Java & Angular)',
    company: 'Insutech',
    location: 'Riyadh, Saudi Arabia',
    salary: 'Competitive',
    experience: '4–5 years',
    type: 'Full-time, On-site',
    relocation: 'Relocation package provided',
    skills: ['Java', 'Spring Boot', 'Angular', 'Microservices', 'RESTful APIs', 'DevOps'],
    url: 'https://www.linkedin.com/posts/offer-insutech_full-stack-developer-java-and-angular-job-activity-7381692552623718401--Fnx',
  },
  {
    id: 4,
    title: 'Java Developer (Banking Sector)',
    company: 'TAWANTECH',
    location: 'Riyadh, Saudi Arabia',
    salary: 'Competitive',
    experience: '3–6 years',
    type: 'Full-time, On-site',
    relocation: 'Visa sponsorship available',
    skills: ['Java SE/EE', 'Spring Framework', 'Microservices', 'SQL Databases', 'Banking Systems'],
    url: 'https://jointaro.com/jobs/tawantech/java-developer',
  },
  {
    id: 5,
    title: 'Senior Java Developer',
    company: 'ConnectAlents',
    location: 'Jeddah, Saudi Arabia',
    salary: 'Competitive',
    experience: '5+ years',
    type: 'Full-time, On-site',
    relocation: 'Relocation support provided',
    skills: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'Cloud Services'],
    url: 'https://connectalents.zohorecruit.com/jobs/Careers/704955000004254134/Senior-Java-Developer-Jeddah-KSA',
  },
  {
    id: 6,
    title: 'WSO2 / Java Integration Specialist',
    company: 'Government of Saudi Arabia (Contract)',
    location: 'Riyadh, Saudi Arabia',
    salary: 'Competitive Contract Rate',
    experience: '7+ years',
    type: 'Contract (6–12 months)',
    relocation: 'Relocation assistance for contract period',
    skills: ['Java', 'Spring Boot', 'WSO2 Micro Integrator', 'WSO2 API Gateway', 'Apache Kafka', 'CI/CD'],
    url: 'https://www.linkedin.com/posts/junaid-khan-72721314_wso2-java-apigatway-activity-7279949884311408641-cYUs',
  },
  {
    id: 7,
    title: 'Full Stack Developer – Expat Relocation Package',
    company: 'Aramco',
    location: 'Saudi Arabia',
    salary: 'Premium Expat Package',
    experience: '5+ years',
    type: 'Full-time, Permanent',
    relocation: 'Permanent expat family relocation package',
    skills: ['Full Stack Development', 'C#', '.NET', 'Flutter', 'Java'],
    url: 'https://talents.studysmarter.co.uk/companies/aramco/full-stack-developer-relocate-to-saudi-arabia-permanent-expat-family-relocation-package-9909530/',
  },
];

export class Jobs extends Component {
  render() {
    return (
      <div id='site-wrapper'>
        <Header />
        <div className='jobs-page'>
          <div className='jobs-hero'>
            <h1><FaJava style={{ marginRight: 12 }} />Java Developer Jobs in Saudi Arabia</h1>
            <p className='jobs-subtitle'>
              <FaPlane style={{ marginRight: 8 }} />
              Positions with relocation &amp; visa sponsorship
            </p>
          </div>

          <div className='jobs-benefits'>
            <div className='benefit-card'>
              <FaMoneyBillWave className='benefit-icon' />
              <h4>Zero Income Tax</h4>
              <p>Saudi Arabia has no personal income tax, maximizing your take-home pay</p>
            </div>
            <div className='benefit-card'>
              <FaPlane className='benefit-icon' />
              <h4>Relocation Support</h4>
              <p>Most employers offer full relocation packages including flights and housing</p>
            </div>
            <div className='benefit-card'>
              <FaBriefcase className='benefit-icon' />
              <h4>Growing Tech Hub</h4>
              <p>Saudi Vision 2030 is driving massive tech investment and opportunities</p>
            </div>
          </div>

          <div className='jobs-list'>
            {jobListings.map((job) => (
              <div key={job.id} className='job-card'>
                <div className='job-header'>
                  <h2>{job.title}</h2>
                  <span className='job-company'>{job.company}</span>
                </div>
                <div className='job-details'>
                  <div className='job-meta'>
                    <span><FaMapMarkerAlt /> {job.location}</span>
                    <span><FaBriefcase /> {job.type}</span>
                    <span><FaMoneyBillWave /> {job.salary}</span>
                  </div>
                  <div className='job-experience'>
                    <strong>Experience:</strong> {job.experience}
                  </div>
                  <div className='job-relocation'>
                    <FaPlane style={{ marginRight: 6 }} />
                    <strong>Relocation:</strong> {job.relocation}
                  </div>
                  <div className='job-skills'>
                    {job.skills.map((skill, idx) => (
                      <span key={idx} className='skill-tag'>{skill}</span>
                    ))}
                  </div>
                </div>
                <div className='job-actions'>
                  <a href={job.url} target='_blank' rel='noopener noreferrer' className='apply-btn'>
                    Apply Now <FaExternalLinkAlt style={{ marginLeft: 6, fontSize: 12 }} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className='jobs-tips'>
            <h2>Tips for Landing a Java Role in Saudi Arabia</h2>
            <ul>
              <li>Specialize in a niche (e.g., backend microservices, banking systems) rather than applying broadly</li>
              <li>Highlight experience with Spring Boot, Docker, Kubernetes, and cloud platforms on your resume</li>
              <li>Seek internal referrals from professionals already working at target companies</li>
              <li>Research companies through their career pages and LinkedIn profiles</li>
              <li>Prepare for on-site interviews — many roles require physical presence in Riyadh or Jeddah</li>
              <li>Consider contract roles as a stepping stone to permanent positions</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Jobs;
