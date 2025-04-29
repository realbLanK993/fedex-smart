// src/data/peopleData.ts
import { Person } from "@/lib/types"; // Adjust path if needed

// Using an object for easy lookup by ID
export const peopleData: { [key: string]: Person } = {
  // --- FedEx Representatives ---
  "nitin-tatiwala": {
    id: "nitin-tatiwala",
    name: "Nitin Tatiwala",
    designation: "Vice President, AMEA Marketing",
    institution: "FedEx",
    department: undefined, // No department listed for FedEx in Excel
    imageUrl:
      "https://web1.iitm.ac.in/logistics/wp-content/uploads/2024/05/nitin-150x150.png",
    profileLink: undefined, // No link in Excel
  },
  "kami-vishwanathan": {
    id: "kami-vishwanathan",
    name: "Kami Vishwanathan",
    designation: "President, Middle East, Indian Subcontinent and Africa",
    institution: "FedEx",
    department: undefined, // Ignored Dept. of CSE listed for FedEx in Excel
    imageUrl:
      "https://www.fedex.com/content/dam/fedex/us-united-states/About/upload/Kami_Viswanathan_Circle_Headshot_2_100KB.jpg",
    profileLink:
      "https://newsroom.fedex.com/newsroom/leadership/kami-viswanathan/", // Link text from Excel interpreted as URL base
  },

  // --- IIT Madras Deans/Advisory ---
  "ashwin-mahalingam": {
    id: "ashwin-mahalingam",
    name: "Prof. Ashwin Mahalingam",
    designation: "Dean ACR",
    institution: "IIT Madras",
    department: "Dept. of Civil Engineering", // Standardized
    imageUrl:
      "https://civil.iitm.ac.in/faculty/mash/admin/download/athena-infonomics-advisors-potrait_ashwin-mahalingam-600x600.jpg",
    profileLink: "https://civil.iitm.ac.in/faculty/mash/", // Interpreted from link text
  },
  "manu-santhanam": {
    id: "manu-santhanam",
    name: "Prof. Manu Santhanam",
    designation: "Dean (IC & SR)",
    institution: "IIT Madras",
    department: "Dept. of Civil Engineering", // Standardized
    imageUrl: "https://civil.iitm.ac.in/faculty/manus/admin/download/50472.jpg",
    profileLink: "https://civil.iitm.ac.in/faculty/manus/", // Interpreted from link text
  },

  // --- External Advisory ---
  "ashutosh-mahajan": {
    id: "ashutosh-mahajan",
    name: "Prof. Ashutosh Mahajan",
    designation: "Professor",
    institution: "IIT Bombay", // Corrected based on profile link, overriding "IIT Madras" in Excel
    department: "IE & OR",
    imageUrl:
      "https://www.ieor.iitb.ac.in/files/faculty/amahajan/2019sept_200.png",
    profileLink: "https://www.ieor.iitb.ac.in/amahajan",
  },

  // --- IIT Madras Faculty ---
  "arshinder-kaur": {
    id: "arshinder-kaur",
    name: "Prof. Arshinder Kaur",
    designation: "Professor", // Matches Excel
    institution: "IIT Madras",
    department: "Dept. of Management Studies",
    imageUrl: "https://doms.iitm.ac.in/images/2023/11/20/arshinder.png",
    profileLink: "https://doms.iitm.ac.in/index.php/arshinder-kaur", // Interpreted from link text
  },
  "c-rajendran": {
    id: "c-rajendran",
    name: "Prof. C Rajendran",
    designation: "Professor", // Matches Excel
    institution: "IIT Madras",
    department: "Dept. of Management Studies", // Standardized
    imageUrl: "https://doms.iitm.ac.in/images/2023/11/20/rajendran.png",
    profileLink: "https://doms.iitm.ac.in/index.php/rajendran-c", // Interpreted from link text
  },
  "rp-sundararaj": {
    id: "rp-sundararaj",
    name: "Prof. R P Sundararaj",
    designation: "Professor", // Matches Excel
    institution: "IIT Madras",
    department: "Dept. of Management Studies",
    imageUrl: "https://doms.iitm.ac.in/images/2023/11/20/sudararaj_doms.png",
    profileLink: "https://doms.iitm.ac.in/index.php/prof-r-p-sundararaj", // Interpreted from link text
  },
  "nargis-pervin": {
    id: "nargis-pervin",
    name: "Prof. Nargis Pervin",
    designation: "Assistant Professor", // Updated from Excel
    institution: "IIT Madras",
    department: "Dept. of Management Studies",
    imageUrl: "https://doms.iitm.ac.in/images/2023/11/20/nargis.png",
    profileLink: "https://doms.iitm.ac.in/index.php/dr-nargis-pervin", // Interpreted from link text
  },
  "vaibhav-chawla": {
    id: "vaibhav-chawla",
    name: "Prof. Vaibhav Chawla",
    designation: "Associate Professor", // Updated from Excel
    institution: "IIT Madras",
    department: "Dept. of Management Studies", // Standardized
    imageUrl: "https://doms.iitm.ac.in/images/2023/11/20/vaibhav.png",
    profileLink: "https://doms.iitm.ac.in/index.php/dr-vaibhav-chawla", // Interpreted from link text
  },
  "usha-mohan": {
    id: "usha-mohan",
    name: "Prof. Usha Mohan",
    designation: "Professor", // Updated from Excel
    institution: "IIT Madras",
    department: "Dept. of Management Studies", // Updated Department from Excel
    imageUrl: "https://doms.iitm.ac.in/images/2023/11/20/usha.png",
    profileLink: "https://civil.iitm.ac.in/faculty/ushamohan/", // Link text from Excel doesn't match DoMS - using known Civil link
  },
  "chandrashekar-l": {
    id: "chandrashekar-l",
    name: "Prof. Chandrashekar L",
    designation: "Assistant Professor", // Matches Excel
    institution: "IIT Madras",
    department: "Dept. of CSE", // Standardized
    imageUrl: "https://cse.iitm.ac.in/images/CL.jpg",
    profileLink: "https://www.cse.iitm.ac.in/~chandrashekhar/", // Interpreted from link text
  },
  "ns-narayanaswamy": {
    id: "ns-narayanaswamy",
    name: "Prof. N S Narayanaswamy",
    designation: "Professor", // Matches Excel
    institution: "IIT Madras",
    department: "Dept. of CSE", // Standardized
    imageUrl: "https://cse.iitm.ac.in/images/swamy.jpg",
    profileLink: "https://www.cse.iitm.ac.in/~swamy/", // Interpreted from link text
  },
  "rupesh-nasre": {
    id: "rupesh-nasre",
    name: "Prof. Rupesh Nasre",
    designation: "Associate Professor", // Matches Excel
    institution: "IIT Madras",
    department: "Dept. of CSE",
    imageUrl: "https://www.cse.iitm.ac.in/~rupesh/media/rupesh.jpg",
    profileLink: "https://www.cse.iitm.ac.in/~rupesh/", // Interpreted from link text
  },
  "b-ravindran": {
    id: "b-ravindran",
    name: "Prof. B. Ravindran",
    designation: "Professor", // Matches Excel
    institution: "IIT Madras",
    department: "Dept. of CSE",
    imageUrl: "https://dsai.iitm.ac.in/~ravi/img/ravi-pic.jpg",
    profileLink: "https://www.cse.iitm.ac.in/~ravi/", // Interpreted from link text
  },
  "anil-prabhakar": {
    id: "anil-prabhakar",
    name: "Prof. Anil Prabhakar",
    designation: "Professor", // Matches Excel
    institution: "IIT Madras",
    department: "Dept. of Electrical Engineering", // Standardized
    imageUrl: undefined, // Ignoring googleusercontent link from Excel
    profileLink: "https://www.ee.iitm.ac.in/anilpr/", // Interpreted from link text
  },
  "rahul-marathe": {
    id: "rahul-marathe",
    name: "Prof. Rahul Marathe",
    designation: "Associate Professor", // Matches Excel
    institution: "IIT Madras",
    department: "Dept. of CSE", // Corrected based on profile link/previous data
    imageUrl: "https://doms.iitm.ac.in/images/2023/11/20/rahul.png", // Kept DoMS image for now
    profileLink: "https://www.cse.iitm.ac.in/~marathe/", // Interpreted from link text
  },
  "babji-srinivasan": {
    id: "babji-srinivasan",
    name: "Prof. Babji Srinivasan",
    designation: "Associate Professor", // Matches Excel
    institution: "IIT Madras",
    department: "Dept. of Chemical Engineering", // Standardized
    imageUrl:
      "https://home.iitm.ac.in/babji.srinivasan/assets/img/profiles/babjiSrinivasan.jpg",
    profileLink: "https://home.iitm.ac.in/babji.srinivasan/babji.html", // No link text, used previous link
  },
  "satya-r-chakravarthy": {
    id: "satya-r-chakravarthy",
    name: "Prof. Satya R Chakravarthy",
    designation: "Professor", // Matches Excel
    institution: "IIT Madras",
    department: "Dept. of Aerospace Engineering", // Standardized
    imageUrl: undefined, // Ignoring small placeholder from Excel link text
    profileLink: "https://aero.iitm.ac.in/personnel/dr-s-r-chakravarthy/", // Used previous link (Excel link text was wrong)
  },
  "rajagopalan-srinivasan": {
    id: "rajagopalan-srinivasan",
    name: "Prof. Rajagopalan Srinivasan",
    designation: "Professor", // Matches Excel
    institution: "IIT Madras",
    department: "Dept. of Chemical Engineering",
    imageUrl: undefined, // Ignoring small placeholder from Excel link text
    profileLink: "https://chemeng.iitm.ac.in/raj/", // No link in Excel, used previous link
  },
  "gitakrishnan-ramadurai": {
    id: "gitakrishnan-ramadurai",
    name: "Prof. Gitakrishnan Ramadurai",
    designation: "Professor", // Matches Excel
    institution: "IIT Madras",
    department: "Dept. of Civil Engineering", // Corrected based on Excel
    imageUrl:
      "https://civil.iitm.ac.in/faculty/gitakrishnan/admin/download/gr%20-%20Gitakrishnan%20Ramadurai.jpg",
    profileLink: "https://civil.iitm.ac.in/faculty/gitakrishnan/", // Interpreted from link text
  },

  // --- Placeholders for Center Team ---

  "center-admin": {
    id: "center-admin",
    name: "Ms. Geetha Udayakumar", // Clearly indicate placeholder
    designation: "Smart Center Coordinator",
    institution: "FedEx SMART Centre, IIT Madras",
    imageUrl: undefined, // No image for placeholder
    profileLink: undefined,
  },
  "center-pm": {
    id: "center-pm",
    name: "Dr. Kelitha Cherian", // Clearly indicate placeholder
    designation: "Center Project Manager",
    institution: "FedEx SMART Centre, IIT Madras",
    imageUrl: undefined,
    profileLink: undefined,
  },
  "center-content-writer": {
    id: "center-content-writer",
    name: "Sherral Joseph", // Clearly indicate placeholder
    designation: "Senior Content Creator",
    institution: "FedEx SMART Centre, IIT Madras",
    imageUrl: undefined,
    profileLink: undefined,
  },
  "center-support": {
    id: "center-pm",
    name: "Deepak Jeevanandham", // Clearly indicate placeholder
    designation: "Office and IT Support",
    institution: "FedEx SMART Centre, IIT Madras",
    imageUrl: undefined,
    profileLink: undefined,
  },

  // --- Placeholders for Research Team ---
  "placeholder-postdoc-1": {
    id: "placeholder-postdoc-1",
    name: "[Postdoctoral Fellow 1]",
    designation: "Postdoctoral Research Fellow",
    institution: "FedEx SMART Centre, IIT Madras",
    department: "[Relevant Vertical]",
    imageUrl: undefined,
    profileLink: undefined,
  },
  "placeholder-staff-1": {
    id: "placeholder-staff-1",
    name: "[Research Staff 1]",
    designation: "Project Engineer",
    institution: "FedEx SMART Centre, IIT Madras",
    department: "[Relevant Project/Lab]",
    imageUrl: undefined,
    profileLink: undefined,
  },
  "placeholder-scholar-1": {
    id: "placeholder-scholar-1",
    name: "[PhD Scholar 1]",
    designation: "PhD Scholar",
    institution: "FedEx SMART Centre, IIT Madras",
    department: "[Relevant Vertical/Advisor]",
    imageUrl: undefined,
    profileLink: undefined,
  },
};

export const getPersonDetails = (id: string | number): Person | null => {
  return peopleData[id] || null;
};
