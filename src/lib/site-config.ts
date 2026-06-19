export const siteConfig = {
  name: "Espot Pokhara Education and Visa Services",
  shortName: "Espot Pokhara",
  description:
    "Espot Pokhara Education and Visa Services in Pokhara, Nepal provides expert study abroad services including university selection, visa guidance, IELTS/PTE/JLPT preparation, and scholarship assistance for USA, Japan, Australia, and Canada.",
  url: "https://espotpokhara.com.np",
  ogImage: "/images/hero-bg.webp",
  themeColor: "#001F5B",

  contact: {
    address: "Samsung Galli, Newroad, Pokhara-09, Nepal",
    phone: "061-591175",
    email: "info@espotpokhara.com",
    workingHours: "Sun - Fri: 10:00 AM - 6:00 PM",
    saturday: "Saturday: Closed",
  },

  topBar: {
    left: "10AM - 6PM",
    center: "espotpokhara@gmail.com",
    right: "061-591175",
  },

  social: {
    facebook: "https://facebook.com/espotpokhara",
    instagram: "https://instagram.com/espotpokhara",
  },

  nav: {
    mainMenu: [
      { label: "Home", href: "/" },
      {
        label: "Study Abroad",
        href: "#",
        children: [
          { label: "Study In Australia", href: "/study-in-australia" },
          { label: "Study In Canada", href: "/study-in-canada" },
          { label: "Study In Cyprus", href: "/study-in-cyprus" },
          { label: "Study In Dubai", href: "/study-in-dubai" },
          { label: "Study In France", href: "/study-in-france" },
          { label: "Study In Germany", href: "/study-in-germany" },
          { label: "Study In Malta", href: "/study-in-malta" },
          { label: "Study In New Zealand", href: "/study-in-new-zealand" },
          { label: "Study In UK", href: "/study-in-uk" },
          { label: "Study In USA", href: "/study-in-usa" },
        ],
      },
      {
        label: "Test Preparation",
        href: "/test-preparation",
        children: [
          { label: "IELTS Preparation", href: "/test-preparation#ielts" },
          { label: "PTE Preparation", href: "/test-preparation#pte" },
          { label: "Duolingo Preparation", href: "/test-preparation#duolingo" },
        ],
      },
      {
        label: "About Us",
        href: "/about",
        children: [
          { label: "About Us", href: "/about" },
          { label: "Message From Director", href: "/about#Message-From-Director" },
        ],
      },
      { label: "Blogs", href: "/blogs" },
    ],
  },

  stats: [
    { label: "Successful Cases", value: 100, suffix: "+", icon: "check" },
    { label: "Specialised Consultants", value: 10, suffix: "+", icon: "users" },
    { label: "Global Universities", value: 10, suffix: "+", icon: "building" },
    { label: "Core Countries", value: 4, suffix: "+", icon: "globe" },
  ],

  services: [
    {
      title: "Accommodation Assistance",
      description:
        "Finding suitable living arrangements can be challenging. We help secure affordable housing and guide you through rental agreements and rules.",
      icon: "home",
    },
    {
      title: "Pre-Departure Orientation",
      description:
        "Equip yourself with essential cultural information, living arrangements, and health insurance details before you fly.",
      icon: "compass",
    },
    {
      title: "Scholarships & Funding",
      description:
        "Navigate complex grants and aid options. We identify funding opportunities to ease your financial burden while studying.",
      icon: "award",
    },
    {
      title: "University Matching",
      description:
        "Our advisors match your academic profile and career goals with the best-fit global institutions and programs.",
      icon: "target",
    },
    {
      title: "Visa Guidance",
      description:
        "Step-by-step guidance through the visa application process, ensuring all criteria of your chosen destination are met.",
      icon: "file-text",
    },
    {
      title: "Language Classes",
      description:
        "Test preparation for IELTS, PTE, and JLPT from beginners to advanced levels with a focus on cultural integration.",
      icon: "book",
    },
  ],

  destinations: [
    {
      country: "USA",
      image: "/images/destinations/usa.webp",
      description:
        "USA offers top-notch education and career opportunities in every field imaginable.",
      tags: ["Student Visa", "Easy Approval"],
      href: "/study-in-usa",
    },
    {
      country: "Japan",
      image: "/images/destinations/japan.jpeg",
      description:
        "Japanese universities cover a wide range of academic disciplines with high technological standards.",
      tags: ["Student Visa", "Working Visa"],
      href: "/study-in-japan",
    },
    {
      country: "Australia",
      image: "/images/destinations/australia.jpg",
      description:
        "Australia is an attractive destination for students seeking quality lifestyle and education.",
      tags: ["Global Rank", "PR Pathway"],
      href: "/study-in-australia",
    },
    {
      country: "Canada",
      image: "/images/destinations/canada.webp",
      description:
        "Canada offers world-class education with excellent post-study work and immigration opportunities.",
      tags: ["Research", "PR Pathway"],
      href: "/study-in-canada",
    },
    {
      country: "UK",
      image: "/images/destinations/uk.jpeg",
      description:
        "The UK is home to some of the world's oldest and most prestigious universities with rich academic traditions.",
      tags: ["Top Universities", "Shorter Courses"],
      href: "/study-in-uk",
    },
    {
      country: "New Zealand",
      image: "/images/destinations/new-zeland.webp",
      description:
        "New Zealand offers a safe, welcoming environment with high-quality education and stunning natural beauty.",
      tags: ["Safe Environment", "Work Rights"],
      href: "/study-in-new-zealand",
    },
    {
      country: "Malta",
      image: "/images/destinations/malta.jpeg",
      description:
        "Malta combines quality European education with a unique Mediterranean lifestyle and English-speaking environment.",
      tags: ["English Taught", "EU Campus"],
      href: "/study-in-malta",
    },
    {
      country: "Cyprus",
      image: "/images/destinations/cyprus.jpeg",
      description:
        "Cyprus provides affordable European education with a warm climate and growing international student community.",
      tags: ["Affordable", "EU Member"],
      href: "/study-in-cyprus",
    },
    {
      country: "Dubai",
      image: "/images/destinations/dubai.jpeg",
      description:
        "Dubai is a global hub offering world-class university campuses and unparalleled career opportunities.",
      tags: ["Global Hub", "Tax Free"],
      href: "/study-in-dubai",
    },
    {
      country: "Germany",
      image: "/images/destinations/germany.jpeg",
      description:
        "Germany offers tuition-free or low-cost education at globally respected universities with strong industry links.",
      tags: ["Tuition Free", "Engineering Hub"],
      href: "/study-in-germany",
    },
    {
      country: "France",
      image: "/images/destinations/france.jpeg",
      description:
        "France combines prestigious Grandes Écoles with rich cultural heritage and affordable public university education.",
      tags: ["Art & Culture", "Research"],
      href: "/study-in-france",
    },
  ],

  testimonials: [
    {
      name: "Harshit Thapa",
      role: "Successful Applicant",
      quote:
        "Their professional expertise and tailored advice turned my dream of reaching the desired destination into a reality. I wholeheartedly endorse their excellent services!",
      image: "/images/testimonials/review-img.webp",
    },
    {
      name: "Simran Pokhrel",
      role: "Successful Applicant",
      quote:
        "Outstanding assistance provided. The commitment and assistance from their team transformed my visa application into a triumph. Reliable and strongly recommended!",
      image: "/images/testimonials/review-img.webp",
    },
    {
      name: "Sujal Baniya",
      role: "Successful Applicant",
      quote:
        "The unwavering dedication and assistance from their team played a crucial role in the success of my visa application. Highly trustworthy and definitely recommended!",
      image: "/images/testimonials/review-img.webp",
    },
  ],

  whyChooseUs: [
    "Expert guidance for Japan, Australia, Canada & USA",
    "Personalized counselling based on your academic profile",
    "Extensive network and partnerships with global universities",
  ],

  values: [
    {
      title: "Integrity",
      description:
        "We maintain the highest standards of honesty and transparency in all our dealings.",
      icon: "shield",
    },
    {
      title: "Excellence",
      description:
        "We strive for excellence in every service we provide to our students.",
      icon: "star",
    },
    {
      title: "Student-Centric",
      description:
        "Every decision we make is focused on the best interest of our students.",
      icon: "heart",
    },
  ],

  countries: [
    {
      slug: "study-in-usa",
      name: "USA",
      title: "Study in USA",
      hero: "/images/countries/usa-hero.webp",
      intro:
        "The United States is known for academic excellence, providing a blend of cutting-edge education, diverse cultural experiences, and abundant opportunities for personal and professional growth. Embark on an educational journey where academic brilliance intersects with cultural diversity, offering limitless possibilities for personal and professional advancement.",
      heading:
        "Why Choose Espot Pokhara Education and Visa Services for Studying in the USA?",
      features: [
        {
          title: "Networking and Alumni Connections",
          desc: "Studying with Espot Pokhara Education and Visa Services in the USA provides unparalleled networking opportunities, leveraging the vast and influential alumni networks of prestigious universities.",
        },
        {
          title: "Academic Excellence",
          desc: "Access world-renowned universities and colleges that consistently rank among the best globally, offering cutting-edge research facilities and distinguished faculty.",
        },
        {
          title: "Cultural Diversity",
          desc: "Experience a rich multicultural environment that broadens your perspectives and prepares you for a globalized world.",
        },
        {
          title: "Post-Study Opportunities",
          desc: "Benefit from OPT (Optional Practical Training) and numerous career opportunities that allow you to gain valuable work experience after graduation.",
        },
      ],
      topUniversities: [
        {
          rank: "1",
          name: "Massachusetts Institute of Technology (MIT)",
          qsRank: "1",
        },
        { rank: "2", name: "Harvard University", qsRank: "4" },
        { rank: "3", name: "Stanford University", qsRank: "5" },
        { rank: "4", name: "University of California Berkeley", qsRank: "10" },
        { rank: "5", name: "University of Chicago", qsRank: "11" },
        { rank: "6", name: "University of Pennsylvania", qsRank: "12" },
        { rank: "7", name: "California Institute of Technology", qsRank: "15" },
        { rank: "8", name: "Yale University", qsRank: "16" },
        { rank: "9", name: "Princeton University", qsRank: "17" },
        {
          rank: "10",
          name: "University of California Los Angeles",
          qsRank: "29",
        },
      ],
      documents: [
        "Financial Documentation - Provide bank statements covering the past three years, demonstrating sufficient funds for the first year, along with salary slips.",
        "Visa Fees Payment Confirmation Receipt - Keep a record of payment confirmation for visa application fees.",
        "SEVIS Fee Receipt - Payment process for the Student and Exchange Visitor Information System (SEVIS) fee.",
        "I-20 Form - Issued by the college confirming your acceptance into the program.",
        "Educational Documents - Submit original academic documents, including standardized exam scores.",
        "Valid Passport - Ensure your passport is valid for at least six months beyond your planned stay.",
        "Online Application Form (DS-160) - Complete this key step in the visa application process.",
      ],
      gpaTable: {
        heading: "Qualifications and GPA Details",
        rows: [
          { range: "3.5 - 4.0", grade: "A", description: "Excellent" },
          { range: "3.0 - 3.4", grade: "B", description: "Good" },
          { range: "2.5 - 2.9", grade: "C", description: "Satisfactory" },
          { range: "2.0 - 2.4", grade: "D", description: "Pass" },
          { range: "0.0 - 1.9", grade: "F", description: "Fail" },
        ],
        levels: [
          {
            level: "Diploma Level (Undergraduate)",
            desc: "Aiming for a GPA above 3.0 is generally considered competitive for undergraduate diploma programs.",
          },
          {
            level: "Bachelor's Degree Level",
            desc: "A GPA of 2.5 to 3.0 or higher is typically required for Bachelor's degree programs, depending on the institution.",
          },
          {
            level: "Master's Degree Level",
            desc: "Graduate programs typically require a higher GPA, often in the range of 3.0 to 3.5 or above for competitive consideration.",
          },
        ],
      },
      admissionProcess: [
        {
          step: "1",
          title: "Research Universities and Programs",
          desc: "Explore institutions aligned with your goals, considering rankings and faculty expertise.",
        },
        {
          step: "2",
          title: "Check Admission Requirements",
          desc: "Review specific entry criteria, including transcripts, standardized test scores, recommendation letters, and a statement of purpose.",
        },
        {
          step: "3",
          title: "Prepare for Standardized Tests",
          desc: "Get ready for required exams such as TOEFL or IELTS for English proficiency and program-specific exams like SAT/ACT, GRE, or GMAT.",
        },
        {
          step: "4",
          title: "Gather Required Documents",
          desc: "Collect accurate academic documents, ensuring translations if needed, and highlight your achievements.",
        },
        {
          step: "5",
          title: "Create an Online Application Profile",
          desc: "Utilize platforms like the Common Application to provide detailed and accurate academic and personal information.",
        },
        {
          step: "6",
          title: "Pay Application Fees",
          desc: "Budget for application fees, with potential waivers based on need or merit.",
        },
        {
          step: "7",
          title: "Submit Applications",
          desc: "Submit applications early to avoid issues and increase consideration chances.",
        },
        {
          step: "8",
          title: "Prepare for Interviews",
          desc: "Research common questions and emphasize your passion for your chosen field.",
        },
        {
          step: "9",
          title: "Apply for Financial Aid and Scholarships",
          desc: "Explore both merit-based and need-based opportunities.",
        },
        {
          step: "10",
          title: "Review Admission Offers",
          desc: "Choose a university, initiate the student visa application process, and plan your travel, accommodation, and attend orientation sessions.",
        },
      ],
      supportSystems: [
        {
          title: "Language Assistance Programs",
          desc: "Language assistance programs help enhance your English language proficiency.",
        },
        {
          title: "Cultural Adjustment Resources",
          desc: "Access resources like orientation programs, workshops, and mentorship opportunities for a smooth cultural adjustment.",
        },
        {
          title: "Academic Counseling",
          desc: "Academic counseling services for course selection, study strategies, and goal setting.",
        },
      ],
      employmentOpportunities:
        "International students studying in the USA enjoy diverse employment opportunities that enhance their overall learning experience. On-campus work permits students to engage in part-time jobs conveniently located within the university. Curricular Practical Training (CPT) provides students with hands-on experience directly connected to their academic field. Post-graduation, the Optional Practical Training (OPT) program allows graduates to work in their chosen field for up to 12 months (or 36 months for STEM graduates).",
      costOfLiving: {
        heading: "Cost of Living for International Students in the USA",
        intro:
          "Understanding the estimated cost of living is essential for international students planning to study in the USA. The following table provides a breakdown of common expenses, allowing students to plan their budgets effectively.",
        rows: [
          { category: "Accommodation", cost: "$9,600 - $30,000" },
          { category: "Meals", cost: "$3,600 - $8,400" },
          { category: "Transportation", cost: "$600 - $2,400" },
          { category: "Books and Supplies", cost: "$600 - $1,200" },
          { category: "Personal Items", cost: "$1,200 - $2,400" },
        ],
        note: "Costs can vary based on location and lifestyle choices. Universities often offer cost-of-living estimates for financial planning.",
      },
      faqs: [
        {
          q: "How much does it cost to study in the USA?",
          a: "The cost of studying in the USA varies depending on the institution and program. On average, undergraduate programs can range from $20,000 to $40,000 per year, while graduate programs can range from $30,000 to $50,000 per year. Additional expenses like housing and living costs should also be considered.",
        },
        {
          q: "Is the study gap acceptable in the USA?",
          a: "The USA generally accepted a one-year study gap, as universities understand that students may take breaks between studies for various reasons, but students who take breaks longer than a year must provide evidence and justification.",
        },
        {
          q: "Are scholarships available for international students?",
          a: "Yes, many universities offer scholarships specifically for international students. Additionally, there are external scholarship programs and government-funded scholarships that you can explore. Please contact us or visit for more information.",
        },
        {
          q: "Are there opportunities for international students to engage in extracurricular activities?",
          a: "Absolutely! U.S. universities offer a wide range of extracurricular activities, clubs, sports, and cultural organizations that allow international students to get involved and make the most of their college experience.",
        },
        {
          q: "Can international students work while studying in the USA?",
          a: "Yes, International students can typically work on campus up to 20 hours per week. Some may also be eligible for off-campus work through Optional Practical Training (OPT) or Curricular Practical Training (CPT) programs. But students cannot work off-campus during their first academic year.",
        },
        {
          q: "What are the minimum IELTS and PTE scores required for studying in the USA?",
          a: "Depending on the subject and university, the minimum required IELTS scores for studying in the USA can vary from 6 to 9. The Pearson Test of English (PTE) is widely accepted by approximately 785 universities and colleges in the US. Typically, a minimum PTE score of 50 is accepted.",
        },
        {
          q: "Can I apply for the USA with 5.5 bands?",
          a: "With an IELTS score of 5.5, it is possible to find universities in the US that accept this score. However, it's important to note that a score of 5.5 bands in IELTS is generally considered below the minimum requirement for most universities in the USA. Typically, universities require a higher level of English proficiency, often ranging from 6 to 7 bands or higher.",
        },
        {
          q: "How much can a Nepali student earn in the USA?",
          a: "Nepali students, like other international students, have the opportunity to partially cover their expenses by working on-campus jobs. These campus jobs typically pay between $5.15 and $15 per hour. Students are allowed to work up to 20 hours per week during the academic year and up to 40 hours per week during college breaks.",
        },
        {
          q: "Is health insurance mandatory for international students?",
          a: "Yes, most universities require international students to have health insurance coverage while studying in the USA. Universities often offer their own health insurance plans or provide guidance on acquiring suitable coverage.",
        },
        {
          q: "What is the process for obtaining a student visa?",
          a: "Once accepted by a U.S. institution, you will need to apply for a student visa (F-1, J-1, M-1). This typically involves submitting the necessary forms, paying fees, attending an interview at a U.S. embassy or consulate, and demonstrating your intent to study.",
        },
      ],
    },
    {
      slug: "study-in-australia",
      name: "Australia",
      title: "Study in Australia",
      hero: "/images/countries/australia-hero.webp",
      intro:
        "Embarking on an educational journey in Australia through Espot Pokhara Education and Visa Services promises a world-class academic experience in a diverse and welcoming cultural setting. With its exceptional offerings, Australia stands out as the premier choice for students globally. At Espot Pokhara Education and Visa Services, we guide you through this vibrant academic landscape, ensuring a seamless and enriching experience in your pursuit of knowledge.",
      heading: "Why Australia?",
      features: [
        {
          title: "Academic Excellence",
          desc: "Australia boasts a reputation for academic excellence with a robust education system that consistently ranks among the best globally. Renowned universities and institutions offer a diverse range of programs.",
        },
        {
          title: "Work Opportunities",
          desc: "International students in Australia can work up to 40 hours per fortnight during study and full-time during breaks, gaining valuable work experience.",
        },
        {
          title: "Multicultural Environment",
          desc: "Australia is home to people from over 200 countries, creating a vibrant, inclusive society where international students feel welcome and supported.",
        },
        {
          title: "High Standard of Living",
          desc: "Enjoy a high quality of life with excellent healthcare, transportation, and safety standards across all major Australian cities.",
        },
      ],
      educationalOpportunities: [
        {
          title: "Renowned Education System",
          desc: "Globally recognized for excellence and adaptability.",
        },
        {
          title: "Diverse Academic Offerings",
          desc: "Explore varied programs across fields of study.",
        },
        {
          title: "Experiential Learning",
          desc: "Hands-on, practical experiences for holistic learning.",
        },
        {
          title: "Cutting-Edge Research Opportunities",
          desc: "Engage in groundbreaking research initiatives.",
        },
        {
          title: "Internationally Recognized Degrees",
          desc: "Degrees with global recognition for diverse career prospects.",
        },
        {
          title: "Cultural Enrichment",
          desc: "Immerse in a diverse environment for a well-rounded education.",
        },
        {
          title: "Flexible Study Options",
          desc: "Choose from full-time, part-time, and online study modes.",
        },
        {
          title: "Supportive Academic Environment",
          desc: "Nurturing atmosphere fostering personal and intellectual growth.",
        },
        {
          title: "Collaboration with Industry",
          desc: "Industry partnerships bridging academia and real-world applications.",
        },
        {
          title: "Networking Opportunities",
          desc: "Establish connections through events and university partnerships.",
        },
        {
          title: "Scholarship and Financial Aid Programs",
          desc: "Various options to ease financial burdens for quality education.",
        },
      ],
      ourServices: [
        {
          title: "Academic Guidance",
          desc: "Tailored assistance in selecting the right courses and universities to match your aspirations.",
        },
        {
          title: "Visa Application Support",
          desc: "Expert guidance and support throughout the visa application process.",
        },
        {
          title: "Financial Planning",
          desc: "Comprehensive assistance in financial planning, including information on scholarships and aid.",
        },
        {
          title: "Pre-Departure Assistance",
          desc: "Ensuring a smooth transition with pre-departure briefings and support.",
        },
        {
          title: "Cultural Integration Programs",
          desc: "Specialized initiatives to help you seamlessly adapt to the Australian way of life.",
        },
      ],
      livingInAustralia: [
        {
          title: "Accommodation Assistance",
          desc: "Navigate housing options with our guidance, ensuring a comfortable and suitable living environment.",
        },
        {
          title: "Healthcare Guidance",
          desc: "Access information on healthcare services, insurance, and well-being for a healthy and worry-free stay.",
        },
        {
          title: "Networking Opportunities",
          desc: "Connect with fellow students and professionals through our networking events, fostering a supportive community.",
        },
      ],
      employabilityServices:
        "At Espot Pokhara Education and Visa Services, we are dedicated to supporting your success in various aspects of your educational journey. Our practical approach includes valuable employability and career services. Our experienced career counselors are here to help you identify and align your career goals with your academic choices. Beyond guidance, we actively assist with job placements, connecting you to internships and part-time positions during your studies for valuable hands-on experience. Take advantage of our resume-building workshops to refine your professional image and prepare for the job market. We also offer networking opportunities with industry professionals to help you build connections for future career opportunities.",
      languageSupport:
        "Effective communication is crucial to your academic success. At Espot Pokhara Education and Visa Services, we provide comprehensive language support services. We guide you through English proficiency requirements for academic programs and exams, ensuring you meet the necessary language standards. For non-native English speakers, we offer tailored resources and services to ease your transition into an English-speaking academic environment. Additionally, our language improvement programs aim to enhance your English language skills, boosting clear communication and confidence throughout your academic journey.",
      costOfLiving: {
        heading: "Cost of Living and Budgeting",
        intro:
          "Understanding the financial considerations of studying abroad is essential. At Espot Pokhara Education and Visa Services, we offer clear information on the cost of living in Australia.",
        rows: [
          { category: "Housing (rent)", cost: "$230.77 - $461.54" },
          { category: "Utilities", cost: "$23.08 - $69.23" },
          { category: "Internet", cost: "$11.54 - $23.08" },
          { category: "Groceries", cost: "$46.15 - $92.31" },
          { category: "Yearly Health Insurance", cost: "$600 - $2,400" },
          {
            category: "Transportation (local public transport)",
            cost: "$11.54 - $34.62",
          },
          { category: "Miscellaneous", cost: "$23.08 - $69.23" },
        ],
        note: "Costs are weekly unless noted otherwise. Estimates may vary based on location, lifestyle, and individual preferences.",
      },
      supportForStudents:
        "Espot Pokhara Education and Visa Services ensures the well-being and success of international students in Australia. The support includes personalized assistance like airport pickups, orientation programs, and guidance on accommodation for a smooth arrival experience. Personalised services include academic, cultural, and personal needs, with additional well-being initiatives focusing on mental health, safety, and overall student welfare. Specialized cultural integration programs enhances sense of belonging, while accessible academic guidance and tutoring services support students throughout their learning journey. Health services and insurance options are in place to provide necessary healthcare resources and coverage.",
      faqs: [
        {
          q: "Can I work while studying in Australia as a Nepalese student?",
          a: "Yes, as an international student, including Nepalese students, you are generally allowed to work part-time while studying in Australia. Student visas typically allow working up to 40 hours per fortnight during the academic term and full-time during college breaks.",
        },
        {
          q: "Are there scholarships available for Nepalese students to study in Australia?",
          a: "Yes, there are scholarships and financial aid options available for international students, including Nepalese students, to study in Australia. These scholarships can be offered by Australian universities, government programs, or external funding bodies. Please contact us or visit us for more information.",
        },
        {
          q: "How much does it cost to study in Australia for Nepalese students?",
          a: "The cost of studying in Australia varies depending on factors such as the chosen university or college, program of study, location, and lifestyle choices. Tuition fees can range from AUD 20,000 to AUD 45,000 per year, and living expenses depend on the city and personal preferences.",
        },
        {
          q: "Is health insurance required for international students studying in Australia?",
          a: "Yes, international students in Australia are required to have Overseas Student Health Cover (OSHC). This health insurance provides coverage for medical expenses during their stay in Australia.",
        },
        {
          q: "Is Australia cheap to study?",
          a: "The cost of studying in Australia can vary depending on factors such as the chosen institution, program of study, and location. While Australia is known for offering high-quality education, it may not be considered cheap compared to some other study destinations.",
        },
        {
          q: "Which course is good to study in Australia?",
          a: "In Australia, students can choose courses based on their interests, career goals, and aptitudes. Australia offers a wide range of courses across various fields. The most popular courses for international students in Australia are: Nursing, Engineering, Business, Bachelor's in Accounting, Computer Science, Healthcare, Arts, Cybersecurity, Automotive, Architecture, Psychology, Social Work, Teaching, Agricultural Science, Tourism and Hospitality Management.",
        },
        {
          q: "Is it cheaper to study in Australia or Canada?",
          a: "The cost of studying in Australia and Canada can vary depending on factors such as the institution, program, and location. Generally, tuition fees in Canada may be lower compared to Australia, but living expenses and other factors can also contribute to the overall cost.",
        },
        {
          q: "Is Gap accepted in Australia?",
          a: "Yes, Australia accepts gaps of international students. If a student can provide justification supported by reliable documentation, Australian universities allow students to include a gap year of one or two years on their resume.",
        },
        {
          q: "Is it easy to get PR in Australia?",
          a: "Obtaining an Australian Permanent Residency (PR) visa is not overly challenging if you fulfill the eligibility criteria, including work experience, language proficiency, and other factors, and obtain a high score based on the Australian PR points system.",
        },
        {
          q: "What is the required band score of IELTS and PTE to study in Australia?",
          a: "The required band score of IELTS or PTE to study in Australia can vary depending on the institution and program. Generally, most universities and colleges require an overall band score of 6.0 and above in IELTS or a comparable score in PTE.",
        },
        {
          q: "What is the process for applying to study in Australia?",
          a: "The process for applying to study in Australia typically involves: researching and selecting an institution and program, meeting entry requirements, submitting an application, obtaining a Confirmation of Enrolment (CoE), applying for a student visa, and arranging health insurance.",
        },
      ],
    },
    {
      slug: "study-in-canada",
      name: "Canada",
      title: "Study in Canada",
      hero: "/images/countries/canada-hero.webp",
      intro:
        "Start your academic journey in Canada, where you will discover more than just good education but an experience that goes beyond classrooms. Canada, known for its friendly environment, diverse cultures, and natural beauty, offers a blend of academic excellence and personal growth. Canadian institutions aim to prepare students for a global landscape.",
      heading: "Explore the Advantages of Studying in Canada",
      features: [
        {
          title: "Quality Education",
          desc: "Canada is home to globally renowned universities, offering a high-quality education system. With a focus on practical and research-based learning, these institutions attract international students.",
        },
        {
          title: "Post-Graduation Work",
          desc: "Canada offers generous post-graduation work permits (PGWP) allowing students to gain valuable Canadian work experience for up to 3 years after graduation.",
        },
        {
          title: "Immigration Pathways",
          desc: "Canada has one of the most welcoming immigration policies, with clear pathways from study to permanent residence for international graduates.",
        },
        {
          title: "Safe and Inclusive",
          desc: "Consistently ranked as one of the safest countries in the world, Canada offers a peaceful and inclusive environment for international students.",
        },
      ],
      languageRequirements: {
        heading: "Language Proficiency Requirements",
        intro:
          "Before you begin your studies in Canada, it is important to understand that universities require international students to demonstrate English proficiency through tests like IELTS or PTE.",
        rows: [
          {
            program: "Diploma",
            ielts: "Overall 6.0",
            pte: "45 (Each module should have a minimum score of 36)",
          },
          {
            program: "Bachelors",
            ielts: "6.0 each band, Overall 6.5",
            pte: "50 (minimum 45 in each section)",
          },
          {
            program: "Masters",
            ielts: "Each band 6.0, Overall 6.5",
            pte: "65 (minimum marks for each module cannot be less than 50)",
          },
        ],
      },
      documentChecklist: [
        {
          title: "Passport and Citizenship",
          desc: "Ensure validity for your entire stay in Canada.",
        },
        {
          title: "English Language Proficiency",
          desc: "Submit scores from IELTS or PTE.",
        },
        {
          title: "Academic Documents",
          desc: "Provide transcripts from previous institutions.",
        },
        {
          title: "Statement of Purpose (SOP)",
          desc: "Clearly outline academic and career goals.",
        },
        {
          title: "Financial Sponsor Statement",
          desc: "Confirmed commitment from your sponsor.",
        },
        {
          title: "Experience Certificate",
          desc: "Include any work experience gaps.",
        },
        {
          title: "No Objection Certificate (NOC)",
          desc: "Obtain from the concerned department.",
        },
        {
          title: "Letters of Recommendation",
          desc: "Provide character and qualification references.",
        },
        { title: "CV and Resume", desc: "Maintain an up-to-date document." },
        {
          title: "Proof of Income",
          desc: "Include tax returns or salary statements.",
        },
        {
          title: "Bank Balance Certificate",
          desc: "Confirm financial stability.",
        },
        {
          title: "Education Loans",
          desc: "Submit documentation and ensure translation.",
        },
        {
          title: "Additional Financial and Property Documents",
          desc: "Include Property Valuation Report, Business Registrations Certificate, Audit Report, Salary Certificate, Income Certificates, and Documents from Local Authorities.",
        },
      ],
      topUniversities: [
        {
          name: "University of Toronto",
          desc: "Known for great academics and a lively campus life, it attracts students from all over the world.",
        },
        {
          name: "University of British Columbia (UBC)",
          desc: "Situated in Vancouver, it's a global center for research and provides a fantastic learning atmosphere.",
        },
        {
          name: "McGill University",
          desc: "Located in Montreal, McGill is big on research and offers a multicultural experience in a lively city.",
        },
        {
          name: "University of Alberta",
          desc: "Emphasizing research and innovation, it provides a supportive community for international students.",
        },
        {
          name: "University of Montreal",
          desc: "A top French-language institution, it combines academic excellence with cultural diversity.",
        },
      ],
      studentLife:
        "International students in Canada experience a diverse and welcoming community that enriches their academic journey. They explore cultural experiences, engage in extracurricular activities, and participate in a vibrant social scene. Support services, including accommodation and healthcare resources, facilitate a smooth transition for students adapting to a new country. Canada's healthcare system provides international students with access to quality medical services, highlighting safety measures to prioritize student well-being.",
      costOfLiving: {
        heading: "Weekly Cost of Living for Students in Canada",
        rows: [
          { category: "Accommodation", cost: "$200 - $625" },
          { category: "Food", cost: "$75 - $150" },
          {
            category: "Transportation",
            cost: "$20 - $40 (Public Transport) / $40 - $75 (Car Ownership)",
          },
          { category: "Utilities", cost: "$20 - $40" },
          { category: "Phone/Internet", cost: "$12.50 - $25" },
          { category: "Health Insurance", cost: "$12.50 - $25" },
          { category: "Miscellaneous/Personal", cost: "$50 - $100" },
        ],
        note: "These are general estimates. Actual costs may vary based on location, lifestyle, and individual preferences.",
      },
      budgetingTips: [
        {
          step: "1",
          tip: "Plan Ahead - Create a weekly budget outlining your expected income and expenses.",
        },
        {
          step: "2",
          tip: "Explore Affordable Housing - Consider shared accommodations or on-campus options to reduce weekly housing costs.",
        },
        {
          step: "3",
          tip: "Cook at Home - Save money by preparing meals at home and exploring local grocery deals.",
        },
        {
          step: "4",
          tip: "Use Public Transport - Go for public transportation to cut down on weekly commuting costs.",
        },
        {
          step: "5",
          tip: "Student Discounts - Take advantage of student discounts on transportation, food, and entertainment.",
        },
        {
          step: "6",
          tip: "Part-Time Employment - Explore part-time job opportunities on or off-campus to supplement your weekly income.",
        },
        {
          step: "7",
          tip: "Emergency Fund - Build an emergency fund for unexpected weekly expenses.",
        },
      ],
      workOpportunities: {
        duringStudies: [
          {
            title: "On-Campus Opportunities",
            desc: "Gain Canadian work experience while studying, fostering a balance between academics and practical skills.",
          },
          {
            title: "Off-Campus Opportunities",
            desc: "Explore off-campus work permits, allowing up to 20 hours per week during academic sessions and full-time during breaks.",
          },
        ],
        postGraduation: [
          {
            title: "Post-Graduation Work Permit (PGWP)",
            desc: "Secure up to three years of work experience in Canada after graduation, enhancing global employability.",
          },
          {
            title: "Permanent Residency Pathways",
            desc: "Utilize Canadian work experience for eligibility in various immigration pathways, contributing to the Canadian workforce.",
          },
        ],
      },
      faqs: [
        {
          q: "How much GPA is required to study in Canada from Nepal?",
          a: "It is recommended that you aim for a GPA of 2.8 or higher if you wish to study in Canada.",
        },
        {
          q: "Are there scholarships available for Nepalese students to study in Canada?",
          a: "Yes, there are scholarships and financial aid options available for international students, including Nepalese students, to study in Canada. These scholarships can be offered by Canadian institutions, the Canadian government, or external funding organizations.",
        },
        {
          q: "Can I work while studying in Canada as an international student?",
          a: "Yes, as an international student, including Nepalese students, you are eligible to work part-time during your studies. Canadian study permits allow students to work up to 20 hours per week during the academic session and full-time during scheduled breaks.",
        },
        {
          q: "What is the cost of studying in Canada?",
          a: "The cost of studying in Canada will vary depending on the institution you choose and the program in which you enroll. On average, international students can expect to pay between CAD $15,000 and CAD $36,000 per year for tuition as undergraduate students, and CAD $21,100 per year as graduate students.",
        },
        {
          q: "Can I stay in Canada once I complete my graduate program?",
          a: "Yes, after completing your studies at a designated learning institution in Canada, you have the opportunity to apply for a post-graduation work permit. This permit enables you to work in Canada for a duration proportional to the length of your study program.",
        },
        {
          q: "What is the required band score of IELTS and PTE to study in Canada from Nepal?",
          a: "For undergraduate and graduate programs, the minimum IELTS score requirement is 6.5, with 6.0 in each band. And for PTE, the required scores range from 58-65 for undergraduates and 61-69 for graduates.",
        },
        {
          q: "Can I work full-time during scheduled breaks while studying in Canada?",
          a: "Yes, international students in Canada are generally allowed to work full-time during college breaks, such as summer vacations or semester breaks. You can work up to 40 hours per week during these breaks.",
        },
        {
          q: "What are the health insurance requirements for international students in Canada?",
          a: "International students studying in Canada are typically required to have health insurance coverage. Some provinces offer provincial health coverage to international students, while others require students to have private health insurance.",
        },
        {
          q: "Are there any specific requirements for international students to open a bank account in Canada?",
          a: "Each bank in Canada may have its own requirements for opening a bank account as an international student. Generally, you will need your passport, study permit, and proof of enrollment at a Canadian institution.",
        },
        {
          q: "Is student life easy in Canada?",
          a: "Student life in Canada is generally welcoming and supportive, with institutions prioritizing student well-being and providing a range of support services. However, there may be challenges in adjusting to a new culture and educational system.",
        },
        {
          q: "What is the weather like in Canada?",
          a: "Canada experiences four distinct seasons. Summers are generally mild to hot, while winters can be cold with snowfall and ice. Coastal regions have milder temperatures, while interior regions can have more extreme variations.",
        },
      ],
    },
    {
      slug: "study-in-japan",
      name: "Japan",
      title: "Study in Japan",
      hero: "/images/countries/japan-hero.webp",
      intro:
        "Studying in Japan is a good choice for international students. It provides a mix of culture, safety, reasonable tuition, and job opportunities. Japanese universities offer quality education in various fields, and the efficient public transportation system makes it easy to get around. Japanese universities cover a wide range of subjects like electronics, international business, engineering, and food science.",
      heading: "Japanese Language Class",
      languageClassIntro:
        "The Japanese language, often known as 'Nihongo,' is closely related to Japanese history and culture, using characters like Kanji, Hiragana, and Katakana. In Pokhara, Nepal, there is a growing interest in learning Japanese among students, as a desire to work and study in Japan. Espot Pokhara Education and Visa Services offers Japanese language classes including grammar, speaking, reading, writing, and knowledge of Japanese culture.",
      jlptLevels: [
        {
          level: "N5",
          description:
            "Basic level - able to understand basic Japanese and read/speak short, simple phrases used in daily life.",
        },
        {
          level: "N4",
          description:
            "Elementary level - able to understand basic Japanese sufficiently to read and comprehend simple passages on familiar topics.",
        },
        {
          level: "N3",
          description:
            "Intermediate level - able to understand Japanese used in everyday situations to a certain degree and comprehend moderately complex sentences.",
        },
        {
          level: "N2",
          description:
            "Pre-advanced level - able to understand Japanese used in a variety of scenarios both in everyday life and professional settings.",
        },
        {
          level: "N1",
          description:
            "Advanced level - able to understand Japanese used in a broad range of scenarios, including abstract and complex topics.",
        },
      ],
      features: [
        {
          title: "Cultural Immersion",
          desc: "Experience Japan's rich cultural heritage while studying - from traditional arts to modern pop culture, providing a unique educational experience.",
        },
        {
          title: "Technological Innovation",
          desc: "Japan is a global leader in technology and innovation, offering students access to cutting-edge research facilities and industry partnerships.",
        },
        {
          title: "Scholarship Opportunities",
          desc: "Generous scholarship programs including MEXT and JASSO scholarships make studying in Japan affordable for international students.",
        },
        {
          title: "Career Prospects",
          desc: "Japan's strong economy and aging population create excellent job opportunities for international graduates in various fields.",
        },
      ],
      academicRequirements: {
        heading:
          "Academic qualification requirements for Nepalese students in Japan",
        intro:
          "Below is a brief overview of the academic qualification requirements for Nepalese students aiming to study in Japan as international students with an education degree in high school, bachelor and master:",
        rows: [
          {
            requirement: "Language test proficiency",
            detail:
              "Proof of Japanese and English language test (JLPT, JFT, IELTS, TOEFL) as per the study program",
          },
          {
            requirement: "University entrance and interview exam",
            detail:
              "Under our guidance know the school/university requirements for specific entrance exams and interviews.",
          },
          {
            requirement: "Academic records",
            detail:
              "While applying share your previous academic transcripts and grades.",
          },
          {
            requirement: "Financial support documents",
            detail:
              "Students must show enough financial needed to support tuition fees and living expenses.",
          },
          {
            requirement: "Receiving student visa",
            detail:
              "Follow all the necessary procedures of the university, and law for international students to successfully get a student visa.",
          },
        ],
      },
      studyCost: {
        heading: "Study and Living Cost in Japan",
        intro:
          "The following table gives detailed information on the average estimated living cost and study expenses in Japan for international students which may vary as per personal expenses and city along with their distinguished category.",
        rows: [
          { expense: "Tuition fee", cost: "¥500,000 - ¥1,000,000 (annually)" },
          { expense: "Food", cost: "¥3,000 - ¥50,000" },
          { expense: "Accommodation", cost: "¥12,000 - ¥60,000" },
          { expense: "Transportation", cost: "¥10,000 - ¥15,000" },
          { expense: "Health Insurance", cost: "¥2,000 - ¥4,000" },
        ],
      },
      topUniversities: [
        { name: "The University of Tokyo", ranking: "81" },
        { name: "Kyoto University", ranking: "140" },
        { name: "Osaka University", ranking: "286" },
        { name: "Tohoku University", ranking: "286" },
        { name: "Nagoya University", ranking: "333" },
        { name: "Tokyo University of Technology", ranking: "360" },
        { name: "Hokkaido University", ranking: "432" },
        { name: "University of Tsukuba", ranking: "432" },
        { name: "Keio University", ranking: "517" },
        { name: "Waseda University", ranking: "579" },
      ],
      extendedJlptLevels: [
        {
          level: "N1",
          title: "Advanced Proficiency",
          description:
            "The N1 level of the Japanese Language Proficiency Test (JLPT) is the highest and most advanced level academically and professionally, showcasing Japanese language skills. At the N1 level, students equip themselves with advanced reading and listening skills, including the ability to understand complex literature and academic materials. The students are skilled in using difficult grammar, know many words, and are experts at reading and writing Japanese characters (kanji). Passing the N1 test shows you are excellent at Japanese and can do well in school and important jobs where you need to speak Japanese.",
        },
        {
          level: "N2",
          title: "Upper Intermediate Proficiency",
          description:
            "The N2 level of the Japanese Language Proficiency Test (JLPT) is a significant milestone in Japanese proficiency, indicating upper-intermediate skills. To pass this test, a solid foundation of everyday grammar and vocabulary is necessary. Individuals at this level should be able to understand regular content read and heard in Japanese. Achieving the N2 level is valuable for those interested in studying or working in Japan, as it signifies a commendable proficiency in the language.",
        },
        {
          level: "N3",
          title: "Lower Intermediate Proficiency",
          description:
            "The N3 level of the Japanese Language Proficiency Test (JLPT) signifies lower-intermediate language proficiency. To pass it, students should grasp basic grammar and everyday words, demonstrating an understanding of simple, everyday situations in Japanese. The N3 level assesses basic grammar, vocabulary, reading comprehension, and listening skills essential for daily tasks and regular communication.",
        },
        {
          level: "N4",
          title: "Basic Skills in Japanese",
          description:
            "The N4 level of the Japanese Language Proficiency Test (JLPT) indicates basic skills in Japanese. To pass this test, students should know simple grammar and vocabulary, possess proper listening skills, and understand the words they use in daily life. Achieving proficiency at the N4 level demonstrates a foundational understanding of Japanese, enabling individuals to navigate basic communication and comprehend everyday expressions.",
        },
        {
          level: "N5",
          title: "Elementary Proficiency",
          description:
            "N5 represents the most basic level of Japanese proficiency. To pass it, you should know elementary grammar and basic words and be able to understand simple things you read and hear. The N5 level serves as a starting point for learning Japanese, facilitating very basic communication and understanding simple expressions in Japanese.",
        },
      ],
      whyChooseUs: [
        {
          title: "Guidance Based on Your Needs",
          desc: "We personally guide you based on your interests and grades, ensuring you find the right university and secure available scholarships for your chosen program.",
        },
        {
          title: "Dedicated Support Team",
          desc: "Our supportive team cares about your concerns, providing assistance to ensure you settle comfortably in a foreign country.",
        },
        {
          title: "Focused Services",
          desc: "We offer a service that assists with university selection, visa processes, and finding suitable accommodation abroad, ensuring a seamless process.",
        },
        {
          title: "Expertise in Studying in Japan",
          desc: "With expertise in studying in Japan, we provide valuable insights on all specific aspects, including documents, visa processes, and financial requirements.",
        },
        {
          title: "Building Strong Relationships",
          desc: "Our focus on building strong relationships with students contributes to your academic success and helps you feel at home in your new environment.",
        },
        {
          title: "Proven Success Track Record",
          desc: "With a proven track record of success, we have consistently helped students study in Japan, ensuring a positive and fruitful experience for all.",
        },
      ],
      documentationProcess: [
        {
          step: "Step 1",
          desc: "Initiate the process by acquiring and downloading the student visa application form, the foundational step in preparing for your study in Japan.",
        },
        {
          step: "Step 2",
          desc: "Ensure the validity of your passport and create photocopies for necessary documentation purposes, setting the foundation for a smooth visa application process.",
        },
        {
          step: "Step 3",
          desc: "Follow specific criteria for capturing passport-sized photos, meeting the required standards for official documentation.",
        },
        {
          step: "Step 4",
          desc: "Get the appropriate certificate of eligibility and gather all necessary documents, including educational transcripts and score sheets.",
        },
        {
          step: "Step 5",
          desc: "Secure a letter of admission from your selected Japanese school or university, a significant document confirming your academic pursuit in Japan.",
        },
        {
          step: "Step 6",
          desc: "Showcase your financial balance through preparation of bank statements, evidence of scholarships, or sponsorships.",
        },
      ],
      jobOpportunities:
        "At Espot Pokhara Education and Visa Services, we assist international students in exploring the numerous internship and job opportunities available in Japan as part of our 'Study in Japan' program. Japan's job market places high value on diverse skills and educational backgrounds, fostering an environment conducive to career growth. Through our consultancy, students can engage in practical experiences, including internships during their studies or post-graduation, providing valuable practical exposure in their chosen fields. We guide students in researching and participating in internship opportunities that match their academic focus. Our team facilitates connections with potential employers through university-organized events, encouraging an approach that not only enhances the academic journey but also positions students for future employment in Japan or globally.",
      faqs: [
        {
          q: "How much does it cost to study Japanese language in Nepal?",
          a: "The cost of studying the Japanese language in Nepal can vary depending on the institute and the duration of the course. You can contact us or visit our office for further information regarding the fees and any additional costs associated with the course.",
        },
        {
          q: "What is the duration of the Japanese language course in Nepal?",
          a: "The duration of Japanese language courses in Nepal can range from a few weeks to several months or even a year, depending on the level of excellence you want to attain. Different institutions offer different course durations, so it's advisable to inquire directly with our experts.",
        },
        {
          q: "Is Japan cheap for study?",
          a: "The cost of studying in Japan depends on various factors, including the university or institution you choose, the location in Japan, the duration of the study program, and your personal lifestyle choices. While studying in Japan can be affordable compared to some other countries, it's essential to consider tuition fees, accommodation, living expenses, and other associated costs.",
        },
        {
          q: "Is 3 months enough to learn Japanese?",
          a: "Learning a language is an ongoing process, and the duration required to achieve proficiency can vary depending on several factors, such as your prior language learning experience, dedication, study methods, and the complexity of the language. While three months can provide you with a basic foundation and some communication skills, it may not be enough to attain fluency or reach higher levels of proficiency.",
        },
        {
          q: "Which institute is best for the Japanese language?",
          a: "As a leading and the best Japanese language consultancy in Pokhara, we provide high-quality courses tailored to meet the needs of our students. Our experienced instructors, comprehensive curriculum, and personalized approach make us the best choice for learning the Japanese Language.",
        },
        {
          q: "What is the average salary of a Nepali student in Japan?",
          a: "The Japanese government allows students to work a maximum of 28 hours per week. The salary of Nepalese students in Japan can vary depending on the type of job, industry, qualification, or area you live in. Salary typically ranges from 1000 to 1500 yen per hour for part-time and full-time positions.",
        },
        {
          q: "Is it easy to live in Japan?",
          a: "Living in Japan can be both challenging and rewarding. Japan offers a high standard of living with excellent infrastructure, safety, and a rich cultural experience. However, the language barrier, cultural differences, and high cost of living in certain areas can pose challenges.",
        },
        {
          q: "How much does it cost to study in Japan?",
          a: "The cost of studying in Japan varies depending on factors such as the university, course, location, and personal lifestyle. Tuition fees for international students in Japan can range from around 500,000 to 1,000,000 yen per year for undergraduate programs, and higher for graduate programs.",
        },
        {
          q: "Can I work while studying in Japan?",
          a: "Yes, it is possible to work while studying in Japan under certain conditions. International students are permitted to work part-time for up to 28 hours per week during the academic year and full-time during designated school breaks.",
        },
        {
          q: "What are the levels of the Japanese language?",
          a: "The Japanese language proficiency levels are commonly categorized into five levels, known as the JLPT (Japanese Language Proficiency Test) levels. These levels are: N5 (Beginner), N4 (Elementary), N3 (Intermediate), N2 (Advanced), N1 (Fluent). These levels provide a framework for assessing Japanese language proficiency and are widely recognized in language learning and assessment.",
        },
      ],
    },
  ],

  testPreparation: {
    title: "Test Preparation Classes",
    hero: "/images/test-preparation-hero.webp",
    intro:
      "Most institutions and universities across English-speaking countries like Australia, Canada, the USA, and others require standardized English proficiency tests. One has to be fluent in English and obtain a notable score in order to meet the criteria set by the universities. At Espot Pokhara Education and Visa Services, We offer various tests required for international students and non-native speakers.",
    tests: [
      {
        id: "ielts",
        title: "IELTS",
        icon: "",
        description:
          "IELTS (International English Language Testing System) is a standardized test designed to assess the English language proficiency of individuals who wish to study, work or migrate to English-speaking countries. It is widely recognized and accepted by universities, employers, and immigration authorities in English-speaking countries.",
        details: [
          "The IELTS test is divided into four different parts; Listening, Reading, Speaking, and Writing.",
          "Each section of the IELTS consists of bands from 0-9 where 0 represents the lowest while 9 represents the highest.",
          "Total test duration: 2 hours and 45 minutes.",
          "Results are typically available within 13 days of taking the test.",
        ],
        formats: [
          {
            type: "IELTS Academic",
            desc: "For students applying to universities and professional institutions.",
          },
          {
            type: "IELTS General Training",
            desc: "For those migrating to English-speaking countries or applying for work experience.",
          },
        ],
        image: "/images/uploads/2023/12/ielts.webp",
      },
      {
        id: "pte",
        title: "PTE",
        icon: "",
        description:
          "PTE (Pearson Test of English) is a computer-based English language test accepted by thousands of universities, colleges, and governments worldwide. It assesses your English ability in speaking, writing, reading, and listening.",
        details: [
          "PTE Academic is the most popular version for study abroad applicants.",
          "Fully computer-based and AI-scored for unbiased results.",
          "Results are typically available within 5 business days.",
          "Accepted by over 3,000 institutions globally including Harvard, Yale, and INSEAD.",
        ],
        formats: [
          {
            type: "PTE Academic",
            desc: "For study abroad and university admissions.",
          },
          {
            type: "PTE General",
            desc: "For general English proficiency assessment.",
          },
        ],
        image: "/images/uploads/2023/12/pte.webp",
      },
      {
        id: "jlpt",
        title: "JLPT",
        icon: "",
        description:
          "JLPT (Japanese-Language Proficiency Test) is the standardized test for non-native speakers to certify their Japanese language proficiency. It is widely recognized by educational institutions and employers in Japan.",
        details: [
          "The JLPT is held twice a year, in July and December.",
          "It consists of five levels: N1 (most advanced) to N5 (basic).",
          "Tests cover language knowledge (vocabulary/grammar), reading, and listening.",
          "JLPT certification is often required for university admission and work visas in Japan.",
        ],
        formats: [
          {
            type: "JLPT N1-N2",
            desc: "Advanced levels - for professional and academic settings.",
          },
          {
            type: "JLPT N3-N5",
            desc: "Beginner to intermediate levels for daily conversation.",
          },
        ],
        image: "/images/uploads/2023/12/jlpt.webp",
      },
    ],
    ieltsBandScoreTable: {
      heading: "IELTS Band Score Chart",
      rows: [
        {
          band: "9",
          user: "Expert User",
          descriptor: "Shows flawless proficiency of the English language",
        },
        {
          band: "8",
          user: "Very-Good User",
          descriptor:
            "Shows complete understanding of English with occasional inaccuracies",
        },
        {
          band: "7",
          user: "Good User",
          descriptor:
            "Has a functional command of English with occasional mistakes, inappropriate usage, and misunderstandings",
        },
        {
          band: "6",
          user: "Competent User",
          descriptor:
            "With occasional mistakes, incorrect language, and misunderstandings, has operational command of English",
        },
        {
          band: "5",
          user: "Modest User",
          descriptor:
            "Has a limited command of the English language, with occasional mistakes, incorrect usage, and misunderstandings",
        },
        {
          band: "4",
          user: "Limited User",
          descriptor:
            "Basic competency is limited to a familiar situation. Difficulties in comprehending and expressing themselves",
        },
        {
          band: "3",
          user: "Extremely Limited User",
          descriptor:
            "Only capable of conveying overall meaning in relatively common scenarios",
        },
        {
          band: "2",
          user: "Intermittent User",
          descriptor:
            "The only use of single words and extremely simple short formulas",
        },
        {
          band: "1",
          user: "Non-User",
          descriptor:
            "Has no ability to use except possibly few isolated words",
        },
        { band: "0", user: "", descriptor: "Did not attempt the test" },
      ],
    },
    pteScoreTable: {
      heading: "PTE Score Chart",
      intro:
        "The chart below demonstrates the information regarding the evaluation of the score of the PTE test:",
      rows: [
        { score: "86 - 90", user: "Expert User" },
        { score: "79 - 86", user: "Very-Good User" },
        { score: "65 - 79", user: "Good User" },
        { score: "58 - 65", user: "Competent User" },
        { score: "50 - 58", user: "Competent User" },
        { score: "43 - 50", user: "Modest User" },
        { score: "36 - 43", user: "Modest User" },
        { score: "30 - 36", user: "Limited User" },
        { score: "0", user: "Absent" },
      ],
    },
    testFAQs: {
      heading: "Frequently Asked Questions",
      ielts: [
        {
          q: "What is the price of reserving an IELTS test date?",
          a: "The cost of booking an IELTS test date varies depending on the test type. Here are the current fees for different test types in Nepal: IELTS on Paper (Academic and General Training): NPR. 27,100; IELTS on Computer (Academic and General Training): NPR. 25,300; IELTS for UK Visas and Immigration (Academic and General Training): NPR. 30,000",
        },
        {
          q: "How can I book my IELTS date in Nepal?",
          a: "You have the option to book your IELTS test date through the consultancy you are applying with. Alternatively, you can also choose to book the test directly through IDP or British Council Nepal.",
        },
        {
          q: "What is the validity period of the IELTS test score?",
          a: "There is a two-year validity period for IELTS test scores.",
        },
        {
          q: "How long does it take to get the results of the IELTS test?",
          a: "Following your LRW test, you'll receive your IELTS test score online within 13 days and a hard copy after 17 days.",
        },
        {
          q: "How long does it typically take to prepare for the IELTS exam?",
          a: "The time required to prepare for the IELTS exam depends on your current English proficiency and the score you aim to achieve. It is recommended to allocate several weeks or months for thorough preparation, focusing on each section of the exam.",
        },
        {
          q: "Can I prepare for the IELTS exam on my own without joining a class?",
          a: "Yes, it is possible to prepare for the IELTS exam on your own using self-study materials, online resources, and practice tests. However, joining an IELTS preparation class can significantly enhance your preparation by providing expert guidance, a structured curriculum, and opportunities for interactive learning.",
        },
        {
          q: "How long does an IELTS preparation class usually last?",
          a: "The duration of an IELTS preparation course may vary depending on the program and your individual needs. Typically, courses range from a few weeks to a few months. Some institutions offer intensive courses that last for a shorter duration but cover all the necessary content.",
        },
        {
          q: "Are there any specific requirements to join an IELTS preparation class in Nepal?",
          a: "Most IELTS preparation classes in Nepal do not have strict prerequisites. However, it is recommended that you have a basic understanding of English. Some classes may assess your English proficiency before admission to determine your starting level.",
        },
      ],
      pte: [
        {
          q: "How long does it take to prepare for the PTE exam?",
          a: "The duration of PTE preparation varies based on individual factors such as existing English proficiency, learning ability, and the desired target score. However, most candidates dedicate a few weeks to a few months for thorough preparation.",
        },
        {
          q: "How much do PTE preparation classes in Nepal cost?",
          a: "The cost of PTE preparation classes in Nepal varies depending on the institution, course duration, and the services provided.",
        },
        {
          q: "What do PTE preparation classes in Nepal offer?",
          a: "PTE preparation classes in Nepal typically offer comprehensive courses covering all sections of the exam, including speaking, writing, reading, and listening. And we provide study materials, mock tests, personalized feedback, and guidance from experienced instructors.",
        },
        {
          q: "Are there any prerequisites to join a PTE preparation class?",
          a: "Generally, there are no specific prerequisites to join a PTE preparation class in Nepal. However, it is beneficial to have a basic understanding of the English language.",
        },
        {
          q: "Do PTE preparation classes provide study materials?",
          a: "Yes, PTE preparation classes usually provide study materials to their students. These materials may include textbooks, workbooks, sample questions, practice tests, and online resources.",
        },
      ],
      jlpt: [
        {
          q: "What is JLPT?",
          a: "JLPT stands for Japanese Language Proficiency Test. It is a standardized exam that assesses the Japanese language proficiency of non-native speakers. The test measures skills in reading, listening, writing, and speaking.",
        },
        {
          q: "What are JLPT preparation classes?",
          a: "JLPT preparation classes are designed to help candidates improve their Japanese language skills specifically for the JLPT exam. These classes focus on the exam format, vocabulary, grammar, reading comprehension, listening comprehension, and speaking practice.",
        },
        {
          q: "What do JLPT preparation classes in Nepal offer?",
          a: "JLPT preparation classes in Nepal typically offer comprehensive courses covering all levels of the JLPT exam (N5 to N1). They provide study materials, practice tests, vocabulary and grammar exercises, listening comprehension practice, and speaking practice with guidance from experienced instructors.",
        },
        {
          q: "How long does it take to prepare for the JLPT exam?",
          a: "The duration of JLPT preparation varies depending on your existing Japanese language proficiency, learning ability, and the desired JLPT level. It is recommended to dedicate several months to a year for thorough preparation, especially for higher levels.",
        },
        {
          q: "How much do JLPT preparation classes in Nepal cost?",
          a: "The cost of JLPT preparation classes in Nepal can vary depending on the institution, course duration, and the services provided.",
        },
        {
          q: "What are the different levels of the JLPT?",
          a: "The JLPT is divided into five levels: N5 (beginner), N4 (elementary), N3 (intermediate), N2 (upper-intermediate), and N1 (advanced). Each level assesses different aspects of the Japanese language, with N5 being the easiest and N1 being the most difficult.",
        },
        {
          q: "Do JLPT preparation classes provide speaking practice?",
          a: "Yes, JLPT preparation classes typically include speaking practice as it is an important component of the JLPT exam. These classes often incorporate conversation exercises, role-plays, and speaking drills to help you improve your spoken Japanese skills.",
        },
      ],
    },
  },

  enquiryForm: {
    title: "Enquiry Form",
    description:
      "Fill out the form below and our expert counselors will get back to you within 24 hours.",
    fields: {
      basicInfo: ["Full Name", "Date of Birth", "Passport No."],
      academic: [
        {
          type: "select",
          label: "Highest Qualification",
          options: ["+2", "PCL", "Bachelor", "Master", "Other"],
        },
        { type: "text", label: "College Name" },
        { type: "text", label: "Percentage/CGPA/Grade" },
        { type: "text", label: "Passed Year" },
      ],
      additional: [
        { type: "select", label: "Marital Status", options: ["Yes", "No"] },
        { type: "text", label: "Address" },
        { type: "tel", label: "Phone Number" },
        { type: "email", label: "Email Address" },
        { type: "tel", label: "Guardian's Phone No." },
      ],
      referralOptions: [
        "Newspaper",
        "Facebook",
        "TV",
        "Street Board",
        "Hoarding Board",
        "FM Radio",
        "SMS",
        "Educational Fair",
        "Phone Calls",
        "Website",
        "Youtube",
      ],
    },
  },

  aboutPage: {
    whoWeAre:
      "Espot Pokhara Education and Visa Services is one of the emerging educational consultancies in Pokhara and is committed to providing information and counseling to students who aspire to pursue further education abroad. With a focus on countries like Japan, Australia, Canada, and the US. We take on the challenge to offer qualitative and quantitative information and help you select the best option for your further educational journey. Join us now to discover the benefits of studying abroad and get our guidance throughout your exciting journey.",
    whyChooseUs:
      "We are one of the best consultancy in Pokhara for Japan, Australia, Canada, and the USA. Our extensive knowledge and personal experience of the international student journey enable us to truly understand your aspiration and concerns when considering studying abroad. With the available vast network and partnership, we offer a diverse range of options and opportunities that align with your educational goals.",
    messageFromDirector:
      "Welcome to Espot Pokhara Education and Visa Services! We are established with the motto of fulfilling our student's requirements and needs for a better future and an excellent journey. Our goal is to understand and fulfill your unique requirements. We strive to provide our students with ongoing service to make sure they are comfortable in a completely different country and new environment. Our motto is to establish strong relationships with every student, ensuring their academic excellence and bright future. We believe that by fostering these relationships, we can create a solid foundation for success and provide comprehensive assistance throughout your time abroad. We make sure to provide you with essential support like choosing a university in accordance with your academic grades, career goals, and interests and other facilities like visa assistance and accommodation facilities in abroad countries. Our dedicated team is committed to providing personalized care, addressing your concerns, and ensuring a smooth transition into your new academic environment. At Espot Pokhara Education and Visa Services, we are eager to support you in your dreams and aspirations, and we are excited to be a part of your educational path. Join us and let's shape your future together! Thank You. Dinbandhu Pokharel Director Espot Pokhara Education and Visa Services",
  },
  languageSchedule: {
    heading: "Language Classes",
    morning: "7AM - 8AM",
    day: "10AM - 11AM",
    evening: "5PM - 6PM",
  },
  footerAbout:
    "Our mission is to offer top-notch visa guidance and counseling for those aspiring to study abroad. Let us be your guide to success!",
  footerPages: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Test Preparation", href: "/test-preparation" },
    { label: "Enquiry Form", href: "/enquiry-form" },
  ],
  footerCountries: [
    { label: "Australia", href: "/study-in-australia" },
    { label: "Canada", href: "/study-in-canada" },
    { label: "Cyprus", href: "/study-in-cyprus" },
    { label: "Dubai", href: "/study-in-dubai" },
    { label: "France", href: "/study-in-france" },
    { label: "Germany", href: "/study-in-germany" },
    { label: "Malta", href: "/study-in-malta" },
    { label: "New Zealand", href: "/study-in-new-zealand" },
    { label: "UK", href: "/study-in-uk" },
    { label: "United States", href: "/study-in-usa" },
  ],
  footerSupport: [
    { label: "Privacy Policy", href: "/" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Terms of Service", href: "/" },
    { label: "Contact Support", href: "/contact" },
  ],
} as const;

export type Service = (typeof siteConfig.services)[number];
export type Destination = (typeof siteConfig.destinations)[number];

export interface Country {
  slug: string;
  name: string;
  title: string;
  hero: string;
  intro: string;
  heading: string;
  features: readonly { readonly title: string; readonly desc: string }[];
  languageClassIntro?: string;
  jlptLevels?: readonly {
    readonly level: string;
    readonly description: string;
  }[];
  topUniversities?: readonly {
    readonly rank?: string;
    readonly name: string;
    readonly qsRank?: string;
    readonly ranking?: string;
    readonly desc?: string;
  }[];
  documents?: readonly string[];
  gpaTable?: {
    readonly heading: string;
    readonly rows: readonly {
      readonly range: string;
      readonly grade: string;
      readonly description: string;
    }[];
    readonly levels: readonly {
      readonly level: string;
      readonly desc: string;
    }[];
  };
  admissionProcess?: readonly {
    readonly step: string;
    readonly title: string;
    readonly desc: string;
  }[];
  supportSystems?: readonly { readonly title: string; readonly desc: string }[];
  employmentOpportunities?: string;
  costOfLiving?: {
    readonly heading: string;
    readonly intro?: string;
    readonly rows: readonly {
      readonly category: string;
      readonly cost: string;
    }[];
    readonly note: string;
  };
  faqs?: readonly { readonly q: string; readonly a: string }[];
  educationalOpportunities?: readonly {
    readonly title: string;
    readonly desc: string;
  }[];
  ourServices?: readonly { readonly title: string; readonly desc: string }[];
  livingInAustralia?: readonly {
    readonly title: string;
    readonly desc: string;
  }[];
  employabilityServices?: string;
  languageSupport?: string;
  supportForStudents?: string;
  languageRequirements?: {
    readonly heading: string;
    readonly intro: string;
    readonly rows: readonly {
      readonly program: string;
      readonly ielts: string;
      readonly pte: string;
    }[];
  };
  documentChecklist?: readonly {
    readonly title: string;
    readonly desc: string;
  }[];
  studentLife?: string;
  budgetingTips?: readonly { readonly step: string; readonly tip: string }[];
  workOpportunities?: {
    readonly duringStudies: readonly {
      readonly title: string;
      readonly desc: string;
    }[];
    readonly postGraduation: readonly {
      readonly title: string;
      readonly desc: string;
    }[];
  };
  academicRequirements?: {
    readonly heading: string;
    readonly intro: string;
    readonly rows: readonly {
      readonly requirement: string;
      readonly detail: string;
    }[];
  };
  studyCost?: {
    readonly heading: string;
    readonly intro: string;
    readonly rows: readonly {
      readonly expense: string;
      readonly cost: string;
    }[];
  };
  extendedJlptLevels?: readonly {
    readonly level: string;
    readonly title: string;
    readonly description: string;
  }[];
  whyChooseUs?: readonly { readonly title: string; readonly desc: string }[];
  documentationProcess?: readonly {
    readonly step: string;
    readonly desc: string;
  }[];
  jobOpportunities?: string;
}

export type TestPrep = (typeof siteConfig.testPreparation.tests)[number];
