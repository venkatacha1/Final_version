const FAQs = [
  {
    category: "New Business",
    question: "What types of business registrations do you provide?",
    answer:
      "We provide Proprietorship, Partnership, LLP, Private Limited, and OPC registrations.",
  },
  {
    category: "New Business",
    question: "Which business structure is best for startups?",
    answer:
      "Private Limited and LLP are best for startups due to growth and funding benefits.",
  },
  {
    category: "New Business",
    question: "How long does business registration take?",
    answer: "Business registration usually takes 7-15 working days.",
  },
  {
    category: "New Business",
    question: "What documents are required for registration?",
    answer:
      "PAN, Aadhaar, address proof, bank statement, and registered office details are required.",
  },
  {
    category: "New Business",
    question: "Can a single person start a company?",
    answer: "Yes, a One Person Company (OPC) can be registered.",
  },
  {
    category: "New Business",
    question: "Do you provide post-registration support?",
    answer: "Yes, we assist with GST, compliance, and accounting services.",
  },
  {
    category: "New Business",
    question: "Is GST mandatory for a new business?",
    answer:
      "GST is mandatory if turnover exceeds the prescribed limit or for certain businesses.",
  },
  {
    category: "New Business",
    question: "Will I receive a Certificate of Incorporation?",
    answer: "Yes, the certificate is issued after successful registration.",
  },

  {
    category: "Intellectual Property",
    question: "What is intellectual property?",
    answer:
      "Intellectual property protects brand names, logos, designs, and inventions.",
  },
  {
    category: "Intellectual Property",
    question: "What IP services do you offer?",
    answer:
      "We offer trademark, copyright, patent, and IP compliance services.",
  },
  {
    category: "Intellectual Property",
    question: "How long does trademark registration take?",
    answer: "Trademark registration usually takes 6-12 months.",
  },
  {
    category: "Intellectual Property",
    question: "Can trademark registration be done online?",
    answer: "Yes, the complete trademark process is handled online.",
  },
  {
    category: "Intellectual Property",
    question: "What is the validity of a trademark?",
    answer: "A trademark is valid for 10 years.",
  },
  {
    category: "Intellectual Property",
    question: "What if my trademark gets objected?",
    answer: "We assist in filing replies and resolving trademark objections.",
  },
  {
    category: "Intellectual Property",
    question: "Can I register a logo and brand name together?",
    answer:
      "Yes, logo and brand name can be registered together or separately.",
  },
  {
    category: "Intellectual Property",
    question: "Do you provide trademark renewal services?",
    answer: "Yes, we manage trademark renewals and reminders.",
  },

  {
    category: "Tax & Accounting",
    question: "What tax services do you provide?",
    answer:
      "We provide income tax filing, business tax filing, and compliance services.",
  },
  {
    category: "Tax & Accounting",
    question: "Who needs to file income tax returns?",
    answer: "Anyone earning above the exemption limit must file income tax returns.",
  },
  {
    category: "Tax & Accounting",
    question: "Do you handle tax filing for businesses?",
    answer: "Yes, we handle tax filing for individuals and all business types.",
  },
  {
    category: "Tax & Accounting",
    question: "What documents are needed for tax filing?",
    answer: "PAN, bank statements, Form 16, and income details are required.",
  },
  {
    category: "Tax & Accounting",
    question: "Do you provide tax planning support?",
    answer: "Yes, we provide professional tax planning services.",
  },
  {
    category: "Tax & Accounting",
    question: "What is bookkeeping?",
    answer: "Bookkeeping records financial transactions for compliance and reporting.",
  },
  {
    category: "Tax & Accounting",
    question: "Do you provide virtual accounting services?",
    answer: "Yes, we provide remote accounting and bookkeeping services.",
  },
  {
    category: "Tax & Accounting",
    question: "Is my financial data secure?",
    answer: "Yes, all financial data is handled securely and confidentially.",
  },

  {
    category: "GST Services",
    question: "Who should register for GST?",
    answer:
      "Businesses crossing GST limits or operating interstate must register.",
  },
  {
    category: "GST Services",
    question: "How long does GST registration take?",
    answer: "GST registration usually takes 5-10 working days.",
  },
  {
    category: "GST Services",
    question: "What documents are required for GST registration?",
    answer: "PAN, Aadhaar, address proof, and bank details are required.",
  },
  {
    category: "GST Services",
    question: "Do you provide GST return filing?",
    answer: "Yes, we handle monthly, quarterly, and annual GST filings.",
  },
  {
    category: "GST Services",
    question: "What happens if GST filing is delayed?",
    answer: "Late GST filing attracts penalties and interest.",
  },
  {
    category: "GST Services",
    question: "Can GST registration be cancelled?",
    answer: "Yes, we assist with GST cancellation.",
  },
  {
    category: "GST Services",
    question: "Do you provide GST compliance support?",
    answer: "Yes, we ensure complete GST compliance support.",
  },
  {
    category: "GST Services",
    question: "Will I receive a GST certificate?",
    answer: "Yes, a GST certificate is issued after registration.",
  },

  {
    category: "Registration & Licenses",
    question: "What licenses do you provide?",
    answer:
      "We provide Trade License, FSSAI, MSME, and Shop & Establishment registrations.",
  },
  {
    category: "Registration & Licenses",
    question: "Is a trade license mandatory?",
    answer: "Yes, many businesses require a trade license.",
  },
  {
    category: "Registration & Licenses",
    question: "How long does license registration take?",
    answer: "License registration usually takes 7-30 working days.",
  },
  {
    category: "Registration & Licenses",
    question: "What documents are required for licenses?",
    answer: "Identity proof, address proof, and business details are required.",
  },
  {
    category: "Registration & Licenses",
    question: "Do you provide FSSAI registration?",
    answer: "Yes, we provide Basic, State, and Central FSSAI registration.",
  },
  {
    category: "Registration & Licenses",
    question: "Can licenses be renewed?",
    answer: "Yes, we handle license renewals.",
  },
  {
    category: "Registration & Licenses",
    question: "Do you handle government follow-ups?",
    answer: "Yes, we manage end-to-end government coordination.",
  },
  {
    category: "Registration & Licenses",
    question: "Are licenses valid across India?",
    answer: "Validity depends on the type of license.",
  },

  {
    category: "ROC Compliance",
    question: "What is ROC compliance?",
    answer:
      "ROC compliance includes mandatory filings with the Registrar of Companies.",
  },
  {
    category: "ROC Compliance",
    question: "Who must file ROC returns?",
    answer:
      "Private Limited companies, LLPs, and OPCs must file ROC returns.",
  },
  {
    category: "ROC Compliance",
    question: "What are annual ROC filings?",
    answer: "AOC-4, MGT-7, and other statutory forms.",
  },
  {
    category: "ROC Compliance",
    question: "What happens if ROC compliance is missed?",
    answer: "Penalties and late fees will be imposed.",
  },
  {
    category: "ROC Compliance",
    question: "Do you provide compliance reminders?",
    answer: "Yes, we send timely ROC compliance reminders.",
  },
  {
    category: "ROC Compliance",
    question: "Do you handle Director KYC?",
    answer: "Yes, we assist with DIR-3 KYC filing.",
  },
  {
    category: "ROC Compliance",
    question: "Can company details be updated?",
    answer:
      "Yes, changes in directors, address, and shareholding can be filed.",
  },
  {
    category: "ROC Compliance",
    question: "Is ROC compliance mandatory every year?",
    answer: "Yes, ROC compliance is mandatory annually.",
  },

  {
    category: "Other Services",
    question: "What other services do you offer?",
    answer:
      "We offer business closure, consultancy, and documentation services.",
  },
  {
    category: "Other Services",
    question: "Do you assist with business closure?",
    answer: "Yes, we handle legal business closure and compliance.",
  },
  {
    category: "Other Services",
    question: "Can a business structure be converted?",
    answer: "Yes, we assist with business structure conversion.",
  },
  {
    category: "Other Services",
    question: "Do you provide legal documentation?",
    answer: "Yes, we provide agreements and legal documents.",
  },
  {
    category: "Other Services",
    question: "Are consultancy services available?",
    answer: "Yes, expert consultancy services are available.",
  },
  {
    category: "Other Services",
    question: "Can I track my service request?",
    answer: "Yes, updates are shared via email or WhatsApp.",
  },
  {
    category: "Other Services",
    question: "How can I contact support?",
    answer: "You can contact support via chat, email, or phone.",
  },
  {
    category: "Other Services",
    question: "Is support available after service completion?",
    answer: "Yes, post-service support is available.",
  },
];

module.exports = FAQs;
