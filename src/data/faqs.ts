// Central, single source of truth for FAQ questions and answers.
// Used both for the visible FAQ section on the page and for the
// JSON-LD "FAQPage" SEO structured data so both always stay in sync.

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'What is a home mortgage calculator?',
    answer:
      'A home mortgage calculator is a free online tool that estimates your monthly mortgage payment from a few simple inputs such as home price, down payment, loan term, and interest rate. Most good calculators, including ours, also factor in property taxes, homeowners insurance, PMI, and HOA fees so you get a realistic picture of your true monthly cost before you ever talk to a lender.',
  },
  {
    question: 'How does a home mortgage calculator work?',
    answer:
      'It applies the standard mortgage payment formula to your principal and interest, then adds your estimated monthly property taxes, homeowners insurance, private mortgage insurance (PMI), and HOA fees. The result updates in real time as you adjust the sliders and inputs, giving you an immediate monthly payment estimate and full amortization schedule.',
  },
  {
    question: 'How do I use a home mortgage calculator?',
    answer:
      'Enter the home price, your down payment, the loan term (such as 15 or 30 years), and your interest rate. Add your annual property tax and insurance figures (plus HOA fees if applicable). The calculator instantly shows your total monthly payment, and you can use the extra-payment feature to see how paying more shortens your loan.',
  },
  {
    question: 'How does a VA home loan mortgage calculator work?',
    answer:
      'A VA home loan calculator uses the same monthly-payment math as any mortgage calculator but reflects VA loan features, most notably no required down payment and no monthly PMI. You may still need to account for a VA funding fee, so add your loan amount with any rolled-in fee to estimate your true VA monthly payment.',
  },
  {
    question: 'How much mortgage can I afford based on my income?',
    answer:
      'A common rule of thumb is the 28/36 guideline: lenders typically allow a housing payment of no more than 28% of your gross monthly income and a total debt-to-income ratio (DTI) of no more than 36%. On a $60,000 yearly income, for example, that works out to roughly $1,400 a month for housing, which supports a home price in the low to mid $200,000s depending on your rate, taxes, insurance, and down payment.',
  },
  {
    question: 'How much can I borrow for a mortgage?',
    answer:
      'The amount you can borrow is primarily set by your income, debt-to-income ratio, credit score, interest rate, and down payment. Lenders look for a housing ratio around 28% and a total DTI near 36% (up to 43% for many programs). Because rates, taxes, and costs vary, using this calculator with your actual inputs gives you the most realistic figure for your situation.',
  },
  {
    question: 'What factors determine how much mortgage I can afford?',
    answer:
      'Your affordable mortgage amount depends on your gross income, monthly debts, down payment, credit score, interest rate, loan term, and local property tax and insurance costs. A higher down payment and lower debts increase what you can borrow, while high taxes and insurance reduce the home price you can comfortably finance.',
  },
  {
    question: 'How does my salary affect mortgage affordability?',
    answer:
      'Your salary sets the ceiling on your monthly housing payment. Lenders typically cap your mortgage (with taxes, insurance, and HOA) at about 28% of your gross monthly income and your total debts at about 36%. A higher salary means a larger approved loan, but the actual amount still depends on your debts, down payment, and interest rate.',
  },
  {
    question: 'How does my debt affect how much I can borrow?',
    answer:
      'Existing debts such as car loans, student loans, and credit cards count toward your debt-to-income ratio and reduce how much mortgage a lender will approve. Monthly obligations that eat into your DTI lower your borrowing power, so paying down other debt first can meaningfully increase the mortgage you qualify for.',
  },
  {
    question: 'How much home can I afford with a mortgage?',
    answer:
      'The home price you can afford depends on your income, debts, down payment, and local taxes and insurance. A practical approach is to keep your total housing payment within 28% of gross monthly income and total debt within 36%. Plug your real numbers into this calculator to see an up-to-date affordable price range.',
  },
  {
    question: 'What factors determine how much home I can afford?',
    answer:
      'Key factors include your gross income, down payment, current monthly debts, credit score, current interest rate, loan term, and the property tax and insurance costs in your area. Together these set both the loan amount you qualify for and the total home price within your comfort zone.',
  },
{
    question: 'How much is a $400,000 mortgage payment for 30 years?',
    answer:
      'At a typical 6% interest rate on a 30-year fixed loan, the principal and interest payment on a $400,000 mortgage is about $2,398 a month. Once you add property taxes, homeowners insurance, and any PMI, the total monthly payment commonly lands between roughly $2,800 and $3,200 depending on your location.',
  },
  {
    question: 'How much is a $500,000 mortgage at 6% interest?',
    answer:
      'On a 30-year fixed loan at 6%, the principal and interest payment on a $500,000 mortgage is about $2,998 a month. Adding property taxes, homeowners insurance, and PMI can bring the total to roughly $3,400 to $3,900 per month depending on your area and down payment.',
  },
  {
    question: 'Can I afford a $300,000 house on a $50,000 salary?',
    answer:
      'It is likely a stretch. At a 6% rate, a $300,000 home with 10% down needs about $1,950 a month in principal and interest, plus taxes and insurance, which can push the total housing payment to $2,300 or more for a gross monthly income of around $4,167. That exceeds the typical 28% guideline, so a smaller price or larger down payment would fit more comfortably.',
  },
  {
    question: 'How much is a $350,000 mortgage at 6% for 30 years?',
    answer:
      'The principal and interest payment on a $350,000 mortgage at 6% for 30 years is about $2,098 per month. Once you include monthly property taxes, homeowners insurance, and PMI if your down payment is under 20%, expect a total payment of roughly $2,400 to $2,800.',
  },
  {
    question: 'Can I afford a 300k house on a $70k salary?',
    answer:
      'Yes, generally. On a $70,000 salary, gross monthly income is about $5,833, and 28% of that is around $1,633 for housing. With a 20% down payment on a $300,000 home at 6%, principal and interest is about $1,439 plus taxes and insurance — comfortably within range. A smaller down payment adds PMI but a $300,000 home is still realistic for most $70,000 earners.',
  },
  {
    question: 'How much income do you need to be approved for a $400,000 mortgage?',
    answer:
      'Roughly $105,000 to $120,000 per year, depending on your debts, rate, and down payment. At a 6% rate on a 30-year loan, a $400,000 mortgage has about $2,398 a month in principal and interest, plus taxes and insurance. Keeping your housing payment near 28% of gross income works out to an income in that approximate range, with room to vary based on your DTI and other debts.',
  },
  {
    question: 'How long will it take to pay off my mortgage?',
    answer:
      'With a standard amortizing loan, it takes exactly your loan term — typically 15, 20, or 30 years — to pay off the mortgage if you make only the regular scheduled payments. Making extra payments toward principal shortens the payoff time and can save tens of thousands in interest.',
  },
  {
    question: 'How much extra do I need to pay to pay off my mortgage in 5 years?',
    answer:
      'The amount depends on your loan balance and rate, but roughly it ends up being about double a normal 30-year payment. For precise numbers, use this calculator\u2019s extra-payment feature to model your exact payoff date and required monthly extra amount.',
  },
  {
    question: 'How can I pay off my mortgage faster?',
    answer:
      'Make an extra principal payment each month, switch to biweekly payments (which adds one extra payment a year), round your payment up, or apply annual lump sums such as bonuses and tax refunds. Every dollar paid toward principal reduces interest and shortens your term; even a modest $100 extra per month can save thousands.',
  },
  {
    question: 'What is the most brilliant way to pay off your mortgage?',
    answer:
      'There is no hidden trick; the smartest approach is making consistent extra principal payments while still keeping retirement savings and an emergency fund funded. Biweekly payments and annual lump sums work well for most people. The real brilliance is running the numbers with an extra-payment calculator so you can see exactly how much interest you save and choose a pace that fits your budget.',
  },
  {
    question: 'Is it better to pay off a mortgage or leave a small balance?',
    answer:
      'For most people, paying off the mortgage entirely is better because it eliminates the largest monthly debt, removes interest costs, and guarantees a return equal to your mortgage rate. Consider keeping a small balance only if the interest is tax-deductible in a meaningful way and your disciplined savings return reliably beats your after-tax mortgage rate — which is often not the case.',
  },
  {
    question: 'Why do they say not to pay off your mortgage?',
    answer:
      'Some advisors suggest keeping a mortgage because it provides tax-deductible interest, frees cash to invest at potentially higher returns, and maintains liquidity for emergencies. The counterargument is that a paid-off home gives guaranteed savings equal to your rate and reduces financial risk. The right choice depends on your returns, tax situation, and risk tolerance.',
  },
  {
    question: 'Should I refinance my mortgage?',
    answer:
      'Consider refinancing when you can lower your interest rate by about 1% or more, reduce your term without raising your payment, or cash out equity for a solid purpose. Weigh the savings against closing costs and how long you plan to stay. Use our calculator to model a new payment and decide if a refinance is worth exploring with a lender.',
  },
  {
    question: 'When should I refinance my home mortgage?',
    answer:
      'A good time to refinance is when rates have dropped enough that your monthly savings justify the closing costs within the time you plan to stay, typically a recoup period of two to three years. Refinancing also makes sense to eliminate PMI or switch from an adjustable to a fixed rate for long-term stability.',
  },
  {
    question: 'Is it better to be mortgage free or have savings?',
    answer:
      'Being mortgage-free guarantees you a fixed return equal to your mortgage rate and removes a large recurring expense, which is a strong, low-risk position — especially in retirement. Keeping savings invested can outperform your rate over time but carries market risk and requires discipline. Many households aim for a balance: an emergency fund plus a plan to eliminate the mortgage early.',
  },
  {
    question: 'Do millionaires pay off debt or invest?',
    answer:
      'Most wealthy households avoid high-interest consumer debt and view mortgage or investment decisions pragmatically. The common pattern is to borrow only at low, manageable rates and keep money invested when expected returns beat the cost of debt. The most reliable wealth-builders prioritize paying off expensive debt while staying invested for the long term.',
  },
  {
    question: 'What age do most people have their house paid off?',
    answer:
      'Many homeowners pay off their mortgage in their 50s to mid-60s, often by retirement, either because a 15- or 20-year loan matures around then or through targeted extra payments. The age varies widely, but aiming to enter retirement mortgage free is a common and comfortable goal.',
  },
  {
    question: 'How much can I afford for a second home?',
    answer:
      'Your second-home budget should follow the same affordability rules applied to your primary home, but many lenders add a rate premium and require a larger down payment, often 20% or more for investment properties. Budget a mortgage payment that keeps your combined debts within the 36% debt-to-income guideline while protecting your primary residence finances.',
  },
  {
    question: 'What should I consider when buying a second home?',
    answer:
      'Consider the higher down payment and interest rates lenders typically charge, ongoing costs such as property taxes, insurance, and upkeep, and whether the property will generate rental income. Also plan how you will cover the home when it is vacant, and confirm local rental and tax rules, since these factors determine whether a second home is a good financial fit.',
  },
  {
    question: 'What is the oldest age you can get a mortgage at?',
    answer:
      'There is no maximum age for a mortgage. Federal rules prohibit age discrimination, so a 70- or 80-year-old can qualify just like anyone else. Lenders simply verify that your income and assets meet their requirements, and they may consider retirement income, savings, and a shorter loan term when calculating what you can repay.',
  },
  {
    question: "Can I still get a mortgage after I've retired?",
    answer:
      'Yes. Retirees qualify for mortgages using verifiable retirement income such as pensions, Social Security, annuities, and withdrawals from IRAs or 401(k)s. Lenders focus on your debt-to-income ratio and need your income to be consistent and dependable, so you may need to document regular distributions or substantial liquid assets.',
  },
  {
    question: 'Can you be too old to qualify for a mortgage?',
    answer:
      'No, you cannot be legally denied a mortgage because of your age. Lenders evaluate your ability to repay based on income, assets, credit, and debts rather than age. Older borrowers can qualify by showing retirement income or sufficient assets, though some may prefer shorter terms to reduce interest and match their financial plan.',
  },
  {
    question: 'Is 55 too old to buy a house?',
    answer:
      'Not at all. Fifty-five is well within the normal range for buying a home, whether for a primary residence, downsizing, or a retirement property. A 30-year mortgage would carry to age 85, so many buyers in their 50s choose 15- or 20-year terms or plan extra payments to have the loan paid off before or shortly after retirement.',
  },
  {
    question: 'Is it a good idea to buy a house at 70 years old?',
    answer:
      'It can be, if you have stable retirement income, enough cash reserves, and a clear plan for the loan term. Buying at 70 avoids discrimination and many seniors finance with shorter terms or pay in cash. Ensure your monthly payment does not strain your retirement budget and that you can cover maintenance and ongoing costs comfortably.',
  },
  {
    question: 'Should seniors pay off their mortgage?',
    answer:
      'For many seniors, paying off the mortgage reduces monthly expenses and provides security in retirement, freeing cash flow for healthcare and living costs. That said, they should keep an adequate emergency fund and consider tax and liquidity factors. The right choice depends on whether the freed cash flow or keeping funds invested is more valuable for their unique situation.',
  },
  {
    question: 'At what age should you no longer have a mortgage?',
    answer:
      'There is no required age, but many homeowners aim to be mortgage free by the time they retire, roughly age 65, so that fixed housing costs no longer compete with a reduced retirement income. If you expect to keep working or have strong retirement income, carrying a mortgage into your 70s can be perfectly reasonable.',
  },
];