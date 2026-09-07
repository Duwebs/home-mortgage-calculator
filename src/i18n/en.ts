import type { Translation } from './ui';

// English source of truth
const en: Translation = {
  meta: {
    home: {
      title: 'Home Mortgage Calculator — Estimate Your Monthly Payment',
      description:
        'Free online mortgage calculator with real-time estimates. Calculate monthly payments with property tax, insurance, PMI, HOA fees, and amortization schedules. See how extra payments save you money.',
    },
    about: { title: 'About Us — Home Mortgage Calculator', description: 'About Home Mortgage Calculator. Our mission is to make mortgage math simple and transparent with a free, private, and accurate home mortgage payment estimator that runs entirely in your browser.' },
    contact: { title: 'Contact Us — Home Mortgage Calculator', description: 'Contact the Home Mortgage Calculator team. Send us a message, ask a question, or share feedback about our free mortgage payment calculator. We typically respond within 2 business days.' },
    privacy: { title: 'Privacy Policy — Home Mortgage Calculator', description: 'Privacy Policy for Home Mortgage Calculator. Learn how we handle your data, why our calculator runs entirely in your browser, and how we protect your privacy. No accounts, no tracking.' },
    terms: { title: 'Terms & Conditions — Home Mortgage Calculator', description: 'Terms and Conditions governing your use of the Home Mortgage Calculator website. Understand acceptable use, disclaimers, and limitations of liability for our free calculator tool.' },
  },
  nav: {
    calculator: 'Calculator', amortization: 'Amortization', extra: 'Extra Payments',
    learn: 'Learn', about: 'About', contact: 'Contact', getStarted: 'Get Started',
    language: 'Language', mainNav: 'Main navigation', toggleDark: 'Toggle dark mode',
    toggleMenu: 'Open menu',
  },
  footer: {
    tagline: 'A modern, private, and instant mortgage payment estimator. Break down loan terms, taxes, PMI, and amortization effortlessly.',
    noTracking: 'No Data Tracking • Browser-Only',
    calculators: 'Calculators',
    toolLinks: [
      { label: 'Monthly Payment Calculator', href: '#calculator' },
      { label: 'Full Amortization Table', href: '#amortization' },
      { label: 'Extra Payment Savings', href: '#extra-payments' },
      { label: 'PMI & HOA Estimator', href: '#calculator' },
    ],
    guides: 'Mortgage Guides',
    guideLinks: [
      { label: 'How Mortgages Work', href: '#learn' },
      { label: 'PMI Rules Explained', href: '#learn' },
      { label: 'Fixed vs. Adjustable Rates', href: '#learn' },
      { label: 'Interest-Saving Tips', href: '#learn' },
    ],
    company: 'Company',
    companyLinks: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Contact', href: '/contact-us' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms-and-conditions' },
    ],
    rights: 'HomeMortgageCalculator. All rights reserved.',
    disclaimerLabel: 'Disclaimer:',
    disclaimer: 'This calculator provides estimates for educational and planning purposes only. Actual rates, taxes, and terms vary by lender.',
  },
  hero: {
    badge: 'Smart Mortgage Calculator',
    h1a: 'Free Home Mortgage Calculator',
    h1b: 'for Your Dream Home',
    subtitle: 'Calculate your total monthly payment including principal, interest, property taxes, homeowners insurance, PMI, and HOA fees in real time.',
    start: 'Start Calculating', how: 'How It Works',
    b1: 'No Sign-Up', b2: '100% Free & Private', b3: 'Instant Calculation',
  },
  calc: {
    eyebrow: 'Mortgage Calculator',
    heading: 'Calculate Your Monthly Mortgage Payment',
    homePrice: 'Home Price', downPayment: 'Down Payment', loanTerm: 'Loan Term',
    interestRate: 'Interest Rate', propertyTax: 'Annual Property Tax',
    homeInsurance: 'Annual Home Insurance', pmi: 'PMI', hoa: 'Monthly HOA Fee',
    years: 'years',
    results: 'Your Results', resultsSub: 'Adjust the sliders to see how your payment changes.',
    monthly: 'Total Monthly Payment', principal: 'Principal & Interest',
    tax: 'Property Tax', insurance: 'Home Insurance', hoa2: 'HOA', loanAmount: 'Loan Amount',
    totalInterest: 'Total Interest', totalCost: 'Total Cost', payoffDate: 'Payoff Date',
    chartMonthly: 'Monthly', chartBalance: 'Over Time',
    savings: 'Savings with Extra Payments', timeSaved: 'Time Saved',
    interestSaved: 'Interest Saved', newPayoff: 'New Payoff Date',
    enterExtra: 'Enter Extra Payment',
  education: {
    eyebrow: 'Learn', heading: 'Mortgage Education',
    sub: 'Everything you need to know about mortgages, from basics to advanced strategies.',
    items: [
      { t: 'How Does a Mortgage Work?', html: '<p>A mortgage is a loan used to purchase a home. You borrow a lump sum and repay it over a set term (usually 15–30 years) with interest. Each payment covers principal (the loan balance) and interest (the cost of borrowing). Early payments are mostly interest; later payments are mostly principal.</p>' },
      { t: 'What Is PMI and When Do You Pay It?', html: '<p>Private Mortgage Insurance (PMI) is required when your down payment is less than 20%. It protects the lender if you default. PMI typically costs 0.5%–1% of the loan amount per year and can be removed once you reach 20% equity.</p>' },
      { t: 'Fixed-Rate vs. Adjustable-Rate Mortgages', html: '<p>A fixed-rate mortgage keeps the same interest rate for the entire loan term, giving predictable payments. An adjustable-rate mortgage (ARM) starts with a lower rate that can change after an initial period, which can save money early but carries future uncertainty.</p>' },
      { t: 'How to Pay Off Your Mortgage Faster', html: '<p>Making extra payments — even small ones — can save thousands in interest and shorten your loan term. Other strategies include biweekly payments, refinancing to a shorter term, or applying windfalls like tax refunds directly to principal.</p>' },
      { t: 'What Costs Are Included in a Mortgage Payment?', html: '<p>Your total monthly payment often includes principal, interest, property taxes, homeowners insurance, and sometimes PMI and HOA fees. Together these are known as PITI + PMI + HOA. Understanding each component helps you budget accurately.</p>' },
    ],
  },
  cta: {
    h2: 'Start Planning Your Mortgage Today',
    p: 'Get a clear, private estimate in seconds — no sign-up, no data collection, no spam.',
    btn: 'Calculate Now',
  },
  seo: {
    h2: 'Frequently Asked Questions About Mortgages',
    faqHeading: 'Common Questions',
    cta: 'Try the Calculator',
    sections: [
      { h: 'Understanding Mortgages', ps: ['<p>A mortgage is one of the most significant financial commitments most people will ever make. Understanding how monthly payments are calculated, what factors influence your interest rate, and how extra payments can save you money is crucial before committing to a home loan.</p>'] },
      { h: '', ps: ['<p>This calculator is designed to give you a realistic estimate by factoring in all the costs that make up a true monthly payment — not just principal and interest, but also taxes, insurance, PMI, and HOA fees.</p>'] },
    ],
  },
  faq: {
    items: [
      { q: 'What is a home mortgage calculator?', a: 'A free online tool that estimates your monthly mortgage payment from inputs like home price, down payment, loan term, and interest rate. Our calculator also factors in property taxes, homeowners insurance, PMI, and HOA fees.' },
      { q: 'How does a home mortgage calculator work?', a: 'It applies the standard mortgage payment formula to your principal and interest, then adds estimated monthly property taxes, homeowners insurance, PMI, and HOA fees. Results update in real time as you adjust inputs.' },
      { q: 'How do I use a home mortgage calculator?', a: 'Enter the home price, down payment, loan term, and interest rate. Add annual property tax and insurance figures plus HOA fees. The calculator instantly shows your total monthly payment.' },
      { q: 'How does a VA home loan mortgage calculator work?', a: 'A VA loan calculator uses the same math but reflects VA features: no required down payment and no monthly PMI. Add your loan amount with any VA funding fee to estimate your true monthly payment.' },
      { q: 'How much mortgage can I afford based on my income?', a: 'The 28/36 guideline is common: housing payment no more than 28% of gross monthly income, total DTI no more than 36%. On a $60,000 yearly income, that is roughly $1,400/month for housing.' },
      { q: 'How much can I borrow for a mortgage?', a: 'Set by your income, debt-to-income ratio, credit score, interest rate, and down payment. Lenders look for a housing ratio around 28% and total DTI near 36%.' },
      { q: 'What factors determine how much mortgage I can afford?', a: 'Gross income, monthly debts, down payment, credit score, interest rate, loan term, and local property tax and insurance costs.' },
      { q: 'How does my salary affect mortgage affordability?', a: 'Your salary sets the ceiling on your monthly housing payment. Lenders typically cap your mortgage at about 28% of gross monthly income.' },
      { q: 'What is a down payment on a house?', a: 'The upfront cash you pay toward the purchase of a home, expressed as a percentage of the home price. A larger down payment reduces borrowing and may avoid PMI.' },
      { q: 'How much should I put down on a house?', a: 'Aim for 20% to avoid PMI, but FHA loans allow as little as 3.5% down; VA and USDA loans may allow zero down.' },
      { q: 'What is PMI?', a: 'Private mortgage insurance is charged when your down payment is less than 20%. It costs 0.5% to 1.5% of the original loan amount per year and can be removed at 20% equity.' },
    ],
  },
  about: {
    h1: 'About Us',
    intro: 'Home Mortgage Calculator is a free, private, and instant mortgage payment estimator that runs entirely in your browser.',
    mission: {
      h: 'Our Mission',
      p: 'Our mission is to make mortgage math simple and transparent. We believe everyone deserves access to accurate mortgage calculations without sacrificing privacy.',
    },
    values: {
      h: 'Our Values',
      items: [
        { h: 'Privacy First', p: 'Your financial data never leaves your browser. We don\'t collect, store, or transmit any personal information.' },
        { h: 'Free Forever', p: 'Our calculator is completely free to use. No hidden fees, no premium features, no sign-ups required.' },
        { h: 'Accurate & Transparent', p: 'We use standard mortgage formulas and clearly show how your payment is calculated.' },
      ],
    },
    contact: {
      h: 'Get in Touch',
      p: 'Have questions or feedback? We\'d love to hear from you. Reach out through our contact page.',
    },
  },
  contact: {
    h1: 'Contact Us',
    intro: 'Have a question about our calculator, want to suggest a feature, or share feedback? Fill out the form below and we\'ll get back to you within 2 business days.',
    form: {
      name: 'Name', namePh: 'Your name',
      email: 'Email', emailPh: 'you@example.com',
      subject: 'Subject', subjectPh: 'How can we help?',
      message: 'Message', messagePh: 'Write your message here...',
      send: 'Send Message',
      note: 'Submitting this form will open your email client with a pre-filled message. We never store the content on our servers.',
    },
    emailUs: { h: 'Email Us', p: 'Prefer to email directly? Reach us at' },
    faqCard: { h: 'FAQ', p: 'Many questions are answered on our homepage. Check the', link: 'frequently asked questions', pEnd: 'before reaching out.' },
  },
  privacy: {
    h1: 'Privacy Policy',
    updated: 'Last updated: September 2026',
    lead: 'Home Mortgage Calculator ("we") offers this free mortgage payment estimator as an educational tool. This Privacy Policy explains how we collect, use, and protect information when you use our website.',
    sections: [
      { h: 'Our Privacy Approach', html: '<p>Our promise is simple: <strong>we don\'t track you</strong>. The calculator runs entirely in your browser; we never store, access, or transmit the numbers you enter.</p>' },
      { h: 'Information We Collect', html: '<p>As a client-side-only tool, we collect no personal information: no accounts, no names, no emails, and no financial figures stored.</p>' },
      { h: 'Automatically Collected Data', html: '<p>Like most sites, we may see standard technical data (IP address, browser type, pages visited), used only in aggregate form. It is never used to identify you.</p>' },
      { h: 'Cookies', html: '<p>We use local storage only to remember your light or dark theme preference. No advertising or third-party tracking cookies are used.</p>' },
      { h: 'Links to Other Sites', html: '<p>Our site may contain links to external sites. We are not responsible for their privacy practices or content.</p>' },
      { h: 'Data Security', html: '<p>Because we do not collect or store your financial data, there is no personal data to secure on our servers.</p>' },
      { h: 'Children\'s Privacy', html: '<p>Our site is directed to general audiences and does not knowingly collect information from children under 13.</p>' },
      { h: 'Changes to This Policy', html: '<p>We may update this Policy from time to time, revising the "last updated" date at the top.</p>' },
      { h: 'Contact', html: '<p>If you have questions about this Policy, contact us through the contact page.</p>' },
    ],
  },
  terms: {
    h1: 'Terms & Conditions',
    updated: 'Last updated: September 2026',
    lead: 'By accessing or using the Home Mortgage Calculator website ("the Site"), you agree to these Terms and Conditions. If you do not agree, please do not use the Site.',
    sections: [
      { h: 'About the Service', html: '<p>The Site provides a free tool for estimating mortgage payments and viewing amortization schedules. All calculations are performed in your browser for informational and educational purposes.</p>' },
      { h: 'No Financial Advice', html: '<p>Nothing on the Site constitutes financial, legal, tax, or mortgage advice. Always consult a qualified professional before making decisions.</p>' },
      { h: 'Acceptable Use', html: '<ul class="list-disc pl-5 space-y-2"><li>Do not attempt to gain unauthorized access to the Site.</li><li>Do not interfere with the Site\'s operation.</li><li>Do not extract content at scale using automated means.</li><li>Do not misrepresent the Site\'s output or ownership.</li></ul>' },
      { h: 'Intellectual Property', html: '<p>All content on the Site is the property of Home Mortgage Calculator and protected by copyright laws. Personal, non-commercial use only.</p>' },
      { h: 'Disclaimer of Warranties', html: '<p>The Site is provided "as is" without warranties of any kind. While we strive for accuracy, information or calculations may contain errors or omissions.</p>' },
      { h: 'Limitation of Liability', html: '<p>To the fullest extent permitted by law, we will not be liable for damages arising from your use of or inability to use the Site. Our total liability will never exceed what you paid to use the Site: zero.</p>' },
      { h: 'Third-Party Links', html: '<p>The Site may include links to third-party sites for convenience. We do not control and are not responsible for their content or practices.</p>' },
      { h: 'Changes to These Terms', html: '<p>We may modify these Terms at any time; changes take effect when posted on this page.</p>' },
      { h: 'Governing Law', html: '<p>These Terms are governed by the laws of the United States.</p>' },
      { h: 'Contact', html: '<p>For questions about these Terms, please contact us.</p>' },
    ],
  },
  amort: {
    eyebrow: 'Amortization Schedule', heading: 'Your Loan Payoff Schedule',
    yearly: 'Yearly', monthly: 'Monthly',
    colNum: '#', colDate: 'Date', colPayment: 'Payment',
    colPrincipal: 'Principal', colInterest: 'Interest', colBalance: 'Balance',
  },
  extra: {
    eyebrow: 'Extra Payment Impact', heading: 'See How Extra Payments Save You Money',
    sub: 'Add a monthly extra payment to see how much interest you save and how much sooner you pay off your loan.',
    label: 'Extra Monthly Payment', hint: 'This amount is added to your regular monthly payment.',
  },
  errors: {
    '404': {
      meta: {
        title: 'Page Not Found (404) — Home Mortgage Calculator',
        description:
          'The page you are looking for could not be found. Head back to the free Home Mortgage Calculator to estimate your monthly payment with taxes, insurance, PMI, and HOA fees.',
      },
      eyebrow: 'Error 404',
      h1: 'Page not found',
      p: 'The page you are looking for does not exist or may have been moved. The good news: our mortgage calculator is right where you left it.',
      homeBtn: 'Back to Calculator',
      contactBtn: 'Contact Us',
    },
    '500': {
      meta: {
        title: 'Something Went Wrong (500) — Home Mortgage Calculator',
        description:
          'Something went wrong on our end. Please try again, or head back to the free Home Mortgage Calculator to estimate your monthly payment.',
      },
      eyebrow: 'Error 500',
      h1: 'Something went wrong',
      p: 'An unexpected error occurred on our end. Please try refreshing the page — if the problem persists, let us know and we will get it fixed.',
      homeBtn: 'Back to Calculator',
      contactBtn: 'Contact Us',
    },
  },
};

export default en;