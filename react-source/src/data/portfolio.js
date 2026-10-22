// EDIT YOUR INFORMATION HERE. All social links and assets are centralized in this file.
// Only include GitHub repositories, demos, awards, or certifications after verification.
export const profile = {
  name: 'Ghanshyam Vekariya',
  shortName: 'GV',
  headline: 'Building software. Learning to secure it.',
  role: 'Cybersecurity – Automobility Student · Full-Stack Developer',
  description: 'Computer Engineering graduate and Cybersecurity – Automobility student at St. Clair College. I enjoy building applications, exploring network security, and learning how to protect connected systems.',
  email: 'ghanshyamvekariya609@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ghanshyam-vekariya-600a31319/',
  instagram: 'https://www.instagram.com/mr.royal__07__/',
  github: 'https://github.com/Ghanshyam4778', // Public GitHub account
  resume: '', // After adding public/resume.pdf use `${import.meta.env.BASE_URL}resume.pdf`
  photo: `${import.meta.env.BASE_URL}profile.webp`, // GitHub Pages-safe professional photo path
  location: 'Windsor, Ontario · St. Clair College',
  club: 'Cybersecurity Club · St. Clair College',
}

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Security Lab', href: '#lab' },
  { label: 'Community', href: '#community' },
  { label: 'Contact', href: '#contact' },
]

export const projects = [
  {
    id: 'employee-management', category: 'development', kind: 'Academic development project', number: '01',
    title: 'Employee Management System',
    intro: 'A web application designed to bring employee records, attendance, payroll and work management into one workflow.',
    tags: ['Web Application', 'Payroll', 'Task Management'],
    points: ['Employee record and attendance management.', 'Payroll-related features plus task and project allocation.', 'Add verified screenshots, your contribution, and exact implementation stack before publishing.'],
    github: '', demo: '', image: '',
  },
  {
    id: 'qr-attendance', category: 'development', kind: 'Academic development project', number: '02',
    title: 'QR Code-Based Attendance',
    intro: 'A classroom attendance concept where instructors generate lecture QR codes and students scan to register attendance.',
    tags: ['QR Codes', 'Attendance', 'Web App'],
    points: ['Lecture-specific QR generation for instructors.', 'Student scanning workflow for marking attendance.', 'Digital record-keeping designed to replace repetitive manual entry.'],
    github: '', demo: '', image: '',
  },
  {
    id: 'linux-security', category: 'security', kind: 'Academic lab', number: '03',
    title: 'Linux Identity & Access Control',
    intro: 'Hands-on Linux exercises covering users, file permissions, and password-policy configuration.',
    tags: ['Linux', 'Permissions', 'PAM'],
    points: ['Practiced creating and managing user accounts.', 'Explored permissions, password-aging settings, and access control.', 'Documenting configuration attempts and troubleshooting, not claiming every test passed.'],
    github: '', demo: '', image: '',
  },
  {
    id: 'packet-tracer', category: 'security', kind: 'Academic lab', number: '04',
    title: 'Small Network Implementation',
    intro: 'Cisco Packet Tracer network design and connectivity practice with IPv4 addressing and troubleshooting.',
    tags: ['Packet Tracer', 'IPv4', 'Connectivity'],
    points: ['Implemented and tested small network topologies.', 'Practiced subnetting, connectivity checks, and packet-loss diagnosis.', 'Separated observed results from remaining issues during labs.'],
    github: '', demo: '', image: '',
  },
  {
    id: 'apache', category: 'security', kind: 'Academic lab', number: '05',
    title: 'Apache Web Server Configuration',
    intro: 'Linux-based web server installation, setup and browser verification as part of cybersecurity coursework.',
    tags: ['Apache2', 'Linux', 'Troubleshooting'],
    points: ['Configured the Apache2 service and checked local service behavior.', 'Verified the Apache default page during lab testing.', 'Explored the relationship between server configuration and network connectivity.'],
    github: '', demo: '', image: '',
  },
  {
    id: 'credential-stuffing', category: 'research', kind: 'Academic research', number: '06',
    title: 'Credential Stuffing & Meta Platforms',
    intro: 'Research into account takeover risks and defenses, focusing on Facebook and Instagram.',
    tags: ['Authentication', 'Risk Analysis', 'Research'],
    points: ['Studied credential-reuse and automated login-attempt risks.', 'Explored preventative approaches to account compromise.', 'Coursework should only be published publicly if permitted under class rules.'],
    github: '', demo: '', image: '',
  },
]

export const skillGroups = [
  { name: 'Cybersecurity foundations', icon: 'shield', label: 'SECURITY', skills: ['Network Security Fundamentals', 'Linux Administration', 'Access Control', 'Risk Management', 'Security Governance', 'Cybersecurity Ethics'] },
  { name: 'Application development', icon: 'code', label: 'ENGINEERING', skills: ['HTML & CSS', 'JavaScript', 'React.js', 'Full-Stack Development', 'Web Applications', 'UI Implementation'] },
  { name: 'Tools & networking', icon: 'terminal', label: 'HANDS-ON', skills: ['Cisco Packet Tracer', 'IPv4 & Subnetting', 'VS Code', 'Git / GitHub', 'Apache2', 'Linux Terminal'] },
]

export const timeline = [
  { title: 'Cybersecurity – Automobility', org: 'St. Clair College · Windsor, Ontario', date: 'Current', type: 'Education', summary: 'Studying networks, information security, system administration, and security principles for connected technologies.' },
  { title: 'Cybersecurity Club Member', org: 'St. Clair College', date: 'Current', type: 'Community', summary: 'Member of the college cybersecurity community, extending learning and connections beyond coursework.' },
  { title: 'Operation: Defend the North', org: 'siberX · Volunteer', date: '2026', type: 'Community', summary: 'Volunteered at a cybersecurity event and met people involved in the wider security community.' },
  { title: 'Full-Stack Web Development Internship', org: 'In-person internship', date: 'Experience', type: 'Internship', summary: 'Practical experience with web application development and full-stack workflows. Employer details can be added after confirmation.' },
  { title: 'React.js Development Internship', org: 'Online internship', date: 'Experience', type: 'Internship', summary: 'Experience working on frontend development using React.js.' },
  { title: 'B.Tech · Computer Engineering', org: 'Silver Oak University · Ahmedabad, India', date: 'Completed', type: 'Education', summary: 'Graduated with 8.94/10 CGPA. Completed projects in employee management and QR-based attendance.' },
]

export const labEntries = [
  { task: 'Linux users and permissions', tools: 'Linux · chmod · chown', detail: 'User creation, access permissions and file ownership.', takeaway: 'I learned to inspect file access issues and understand how Linux separates users, groups and permissions.' },
  { task: 'Password security controls', tools: 'PAM · pwquality · chage', detail: 'Password age, complexity configurations and testing.', takeaway: 'Configuration changes need actual validation: a weak password being accepted is a finding, not a successful policy test.' },
  { task: 'Apache web server', tools: 'Apache2 · Linux · HTTP', detail: 'Service configuration and default-page verification.', takeaway: 'I practiced distinguishing configuration errors from network and browser access issues.' },
  { task: 'Packet Tracer networking', tools: 'Cisco Packet Tracer · IPv4', detail: 'Small networks, connectivity and packet loss.', takeaway: 'I strengthened my understanding of addressing, gateways and systematic connectivity testing.' },
  { task: 'Firewall exercises', tools: 'Networking · Security rules', detail: 'Academic firewall configuration and traffic-rule concepts.', takeaway: 'I am learning to connect firewall policies with the traffic they allow or block.' },
]

export const certificates = [
  { name: 'Internet of Things Workshop', description: 'Workshop participation · Silver Oak University', label: 'WORKSHOP' },
  { name: 'Bootstrap Workshop', description: 'Frontend and responsive web design workshop', label: 'WORKSHOP' },
  { name: 'Operation: Defend the North', description: 'Cybersecurity community volunteering · siberX', label: 'VOLUNTEERING' },
  { name: 'Cybersecurity Club', description: 'Member · St. Clair College', label: 'COLLEGE COMMUNITY' },
]

export const automotiveTopics = [
  { key: 'ECU', title: 'Electronic Control Units', description: 'Small embedded computers that manage different functions inside a vehicle. Understanding their interactions is a starting point for automotive security.' },
  { key: 'CAN', title: 'Controller Area Network', description: 'A common in-vehicle communication bus. Studying its design helps explain why vehicle networks require careful security engineering.' },
  { key: 'Connected', title: 'Connected Services', description: 'Connectivity introduces new communication surfaces and privacy considerations for modern vehicles.' },
  { key: 'Security', title: 'Security Engineering', description: 'A future learning direction: thinking about secure communication, system boundaries, monitoring, and risk.' },
]
