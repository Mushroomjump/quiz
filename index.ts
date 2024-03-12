const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

const allQuestions = [
    {
        question: "What is the term for using smartphones or other electronic devices to make financial transactions?",
        choices: { A: "Digital banking", B: "Mobile payments", C: "Electronic funds transfer", D: "Contactless payments" },
        correctAnswer: "B"
    },
    {
        question: "Which of the following is a type of digital currency that operates independently of a central bank?",
        choices: { A: "Bitcoin", B: "PayPal", C: "Visa", D: "Mastercard" },
        correctAnswer: "A"
    },
    {
        question: "What is the purpose of a digital wallet in fintech?",
        choices: { A: "To store physical cash", B: "To securely store and manage digital currencies", C: "To provide investment advice", D: "To process credit card transactions" },
        correctAnswer: "B"
    },
    {
        question: "Which of the following is a common type of investment account that automatically allocates funds across a diversified portfolio?",
        choices: { A: "Cryptocurrency wallet", B: "Savings account", C: "Robo-advisor account", D: "Checking account" },
        correctAnswer: "C"
    },
    {
        question: "What do the initials \"ATM\" stand for in the context of banking and finance?",
        choices: { A: "Automated Transaction Machine", B: "Automated Teller Machine", C: "Advanced Transaction Module", D: "Advanced Teller Module" },
        correctAnswer: "B"
    },
    {
        question: "What is the purpose of two-factor authentication (2FA) in online banking?",
        choices: { A: "To provide additional security by requiring two forms of identification", B: "To process transactions faster", C: "To prevent users from accessing their accounts", D: "To send promotional offers to customers" },
        correctAnswer: "A"
    },
    {
        question: "What is the main advantage of using contactless payment methods?",
        choices: { A: "Slower transaction processing times", B: "Increased risk of fraud", C: "Convenience and speed of transactions", D: "Higher transaction fees" },
        correctAnswer: "C"
    },
    {
        question: "Which of the following is a type of fintech application that allows users to track their spending and budget their finances?",
        choices: { A: "Cryptocurrency exchange", B: "Stock trading platform", C: "Personal finance management app", D: "Peer-to-peer lending platform" },
        correctAnswer: "C"
    },
    {
        question: "What is the term for the process of electronically verifying the identity of individuals before granting access to financial services?",
        choices: { A: "Biometric authentication", B: "Two-factor authentication", C: "Account verification", D: "Identity theft" },
        correctAnswer: "C"
    },
    {
        question: "Which of the following is a common example of a fintech innovation that allows individuals to borrow money online?",
        choices: { A: "Cryptocurrency exchange", B: "Robo-advisor", C: "Peer-to-peer lending platform", D: "Digital wallet" },
        correctAnswer: "C"
    },
    {
        question: "What is the main benefit of using a personal finance management (PFM) app?",
        choices: { A: "Real-time stock market analysis", B: "Monitoring and categorizing expenses", C: "Sending and receiving international wire transfers", D: "Accessing a global network of ATMs" },
        correctAnswer: "B"
    },
    {
        question: "Which fintech solution enables individuals to invest in a diversified portfolio of stocks and bonds with small amounts of money?",
        choices: { A: "Cryptocurrency exchange", B: "High-frequency trading platform", C: "Micro-investing app", D: "Equity crowdfunding platform" },
        correctAnswer: "C"
    },
    {
        question: "What role does encryption play in securing online financial transactions?",
        choices: { A: "Encrypting sensitive data to prevent unauthorized access", B: "Decrypting data to speed up transaction processing", C: "Monitoring transaction history for fraudulent activity", D: "Generating digital signatures for authentication" },
        correctAnswer: "A"
    },
    {
        question: "Which of the following is a characteristic of a decentralized finance (DeFi) ecosystem?",
        choices: { A: "Centralized control by a government agency", B: "Permissionless access to financial services", C: "Limited access to global financial markets", D: "Dependence on traditional banking infrastructure" },
        correctAnswer: "B"
    },
    {
        question: "What does the term \"crowdfunding\" refer to in the context of fintech?",
        choices: { A: "Investing in high-risk stocks and bonds", B: "Fundraising through online platforms from a large number of people", C: "Sharing financial resources among family members", D: "Participating in online auctions for collectibles and antiques" },
        correctAnswer: "B"
    },
    {
        question: "Which of the following is a type of fintech application that enables individuals to send and receive money electronically?",
        choices: { A: "Cryptocurrency wallet", B: "Peer-to-peer lending platform", C: "Digital payment gateway", D: "Robo-advisor platform" },
        correctAnswer: "C"
    },
    {
        question: "What is the purpose of a credit score in the context of personal finance?",
        choices: { A: "To measure an individual's ability to save money", B: "To determine an individual's creditworthiness for borrowing money", C: "To calculate the interest rate on savings accounts", D: "To assess an individual's investment portfolio performance" },
        correctAnswer: "B"
    },
    {
        question: "Which of the following is a type of financial product that allows individuals to earn interest on their savings?",
        choices: { A: "Checking account", B: "Certificate of deposit (CD)", C: "Credit card", D: "Payday loan" },
        correctAnswer: "B"
    },
    {
        question: "What is the primary function of a central bank in a country's financial system?",
        choices: { A: "To regulate and supervise commercial banks", B: "To provide loans to individual consumers", C: "To issue digital currencies for online transactions", D: "To facilitate peer-to-peer lending among citizens" },
        correctAnswer: "A"
    },
    {
        question: "Which fintech solution enables individuals to invest in a diversified portfolio of assets with relatively low fees?",
        choices: { A: "Cryptocurrency exchange", B: "Traditional brokerage account", C: "Robo-advisor platform", D: "High-frequency trading platform" },
        correctAnswer: "C"
    },
    {
        question: "What is the term for a financial institution that provides services such as savings accounts, loans, and mortgages to individuals and businesses?",
        choices: { A: "Investment bank", B: "Hedge fund", C: "Commercial bank", D: "Venture capital firm" },
        correctAnswer: "C"
    },
    {
        question: "Which of the following is a characteristic of a cryptocurrency?",
        choices: { A: "Physical representation in the form of paper money", B: "Decentralized", C: "Limited supply determined by a central authority", D: "High fees for transactions compared to traditional banking systems" },
        correctAnswer: "B"
    },
    {
        question: "What is the purpose of regulatory compliance in the fintech industry?",
        choices: { A: "To encourage innovation and experimentation", B: "To ensure the safety and security of financial transactions", C: "To provide tax breaks for fintech companies", D: "To limit access to financial services for certain individuals" },
        correctAnswer: "B"
    },
    {
        question: "Which of the following is a potential risk associated with using mobile banking apps?",
        choices: { A: "Increased convenience and accessibility to financial services", B: "Exposure to cybersecurity threats such as phishing attacks", C: "Higher interest rates on loans and mortgages", D: "Enhanced customer support and personalized services" },
        correctAnswer: "B"
    },
    {
        question: "What is the primary function of a cryptocurrency wallet?",
        choices: { A: "To store physical cash", B: "To securely store and manage digital currencies", C: "To process credit card transactions", D: "To provide investment advice" },
        correctAnswer: "B"
    },
    {
        question: "Which of the following is a common feature of budgeting apps?",
        choices: { A: "High-frequency trading", B: "Real-time stock market analysis", C: "Expense tracking and categorization", D: "Automated mortgage approvals" },
        correctAnswer: "C"
    },
    {
        question: "What is the term for the process of converting traditional assets, such as stocks or bonds, into digital tokens on a blockchain?",
        choices: { A: "Tokenization", B: "Decentralization", C: "Arbitrage", D: "Hedging" },
        correctAnswer: "A"
    },
    {
        question: "Which fintech innovation allows individuals to invest in real estate properties without directly owning them?",
        choices: { A: "Cryptocurrency exchange", B: "Real estate crowdfunding platform", C: "Equity crowdfunding platform", D: "Peer-to-peer lending platform" },
        correctAnswer: "B"
    },
    {
        question: "What role does machine learning play in the development of robo-advisors?",
        choices: { A: "Identifying fraudulent transactions in real-time", B: "Automating routine investment decisions based on historical data", C: "Providing customer support through chatbots", D: "Analyzing market sentiment on social media platforms" },
        correctAnswer: "B"
    },
    {
        question: "Which of the following is a potential benefit of using blockchain technology for supply chain management?",
        choices: { A: "Increased transparency and traceability of products", B: "Reduced risk of cyber attacks and data breaches", C: "Higher efficiency in processing financial transactions", D: "Lower fees for international money transfers" },
        correctAnswer: "A"
    },
    {
        question: "What is the primary purpose of a stablecoin in the cryptocurrency market?",
        choices: { A: "To facilitate anonymous transactions", B: "To provide price stability by pegging value to a fiat currency", C: "To generate high returns through speculative trading", D: "To enable cross-border remittances at lower costs" },
        correctAnswer: "B"
    },
    {
        question: "Which fintech solution enables individuals to access short-term loans quickly without a traditional credit check?",
        choices: { A: "Peer-to-peer lending platform", B: "Payday loan app", C: "Credit card issuer", D: "Savings account provider" },
        correctAnswer: "B"
    },
    {
        question: "Which mobile money platform is widely used in Kenya for financial transactions?",
        choices: { A: "M-Pesa", B: "Airtel Money", C: "Equitel", D: "T-Kash" },
        correctAnswer: "A"
    },
    {
        question: "What is the purpose of the Kenya Credit Information Sharing (KCIS) system?",
        choices: { A: "To provide free credit reports to consumers", B: "To facilitate peer-to-peer lending among individuals", C: "To promote financial literacy through educational programs", D: "To share credit information among financial institutions for risk assessment" },
        correctAnswer: "D"
    },
    {
        question: "Which of the following is a common fintech solution used by small businesses in Kenya for digital payments and invoicing?",
        choices: { A: "PesaLink", B: "PayPal", C: "Lipa Na M-Pesa", D: "Pesapal" },
        correctAnswer: "C"
    },
    {
        question: "What role does blockchain technology play in Kenya's fintech ecosystem?",
        choices: { A: "Facilitating cross-border remittances at lower costs", B: "Improving transparency and traceability in supply chain management", C: "Enabling real-time stock trading on local exchanges", D: "Providing secure storage for digital assets" },
        correctAnswer: "B"
    },
    {
        question: "Which Kenyan fintech company offers micro-loans to individuals and small businesses through a mobile app?",
        choices: { A: "Branch", B: "Tala", C: "Stawi", D: "Saida" },
        correctAnswer: "B"
    },
    {
        question: "What is the main objective of the Kenya government's push towards digital financial inclusion?",
        choices: { A: "To eliminate the use of cash in the economy", B: "To promote competition among mobile money providers", C: "To increase access to formal financial services for all citizens", D: "To discourage foreign investment in the fintech sector" },
        correctAnswer: "C"
    },
    {
        question: "Which Kenyan fintech startup offers investment opportunities in agricultural projects through a digital platform?",
        choices: { A: "FarmDrive", B: "Apollo Agriculture", C: "Sokowatch", D: "Tulaa" },
        correctAnswer: "B"
    },
    {
        question: "What is the primary function of the Kenya Electronic Payments and Settlement System (KEPSS)?",
        choices: { A: "To regulate mobile money transactions in the country", B: "To provide real-time gross settlement of electronic payments", C: "To offer interest-free loans to low-income individuals", D: "To facilitate cross-border trade with neighboring countries" },
        correctAnswer: "B"
    },
    {
        question: "Which Kenyan regulatory body oversees the operations of mobile money platforms and fintech companies?",
        choices: { A: "Central Bank of Kenya (CBK)", B: "Communications Authority of Kenya (CAK)", C: "Capital Markets Authority (CMA)", D: "Competition Authority of Kenya (CAK)" },
        correctAnswer: "A"
    },
    {
        question: "What is the purpose of the Huduma Card initiative introduced by the Kenyan government?",
        choices: { A: "To provide universal healthcare coverage to all citizens", B: "To offer a secure identification card for access to government services", C: "To promote digital literacy through educational programs", D: "To facilitate peer-to-peer lending among low-income individuals" },
        correctAnswer: "B"
    },
    {
        question: "Which Kenyan fintech company offers digital savings and investment products to customers through a mobile app?",
        choices: { A: "M-Kopa", B: "Abacus", C: "M-Shwari", D: "Umati Capital" },
        correctAnswer: "C"
    },
    {
        question: "What role do remittance services play in Kenya's fintech landscape?",
        choices: { A: "Facilitating cross-border trade with neighboring countries", B: "Providing access to financial services for rural communities", C: "Enabling international money transfers from Kenyan diaspora", D: "Promoting cashless transactions in urban centers" },
        correctAnswer: "C"
    },
    {
        question: "Which Kenyan fintech startup offers insurance coverage to low-income individuals through a mobile-based platform?",
        choices: { A: "Bima", B: "Pula", C: "Jubilee Insurance", D: "APA Insurance" },
        correctAnswer: "A"
    },
    {
        question: "What is the primary goal of the Kenya Financial Sector Deepening (FSD) program?",
        choices: { A: "To increase access to credit for small businesses", B: "To promote financial literacy among youth and women", C: "To improve the efficiency and stability of the financial sector", D: "To regulate the activities of fintech companies operating in the country" },
        correctAnswer: "C"
    },
    {
        question: "Which Kenyan fintech initiative focuses on providing digital payment solutions for public transportation services?",
        choices: { A: "Matatu Pay", B: "JamboPay", C: "PesaPal", D: "Transportify" },
        correctAnswer: "B"
    },
    {
        question: "What is the significance of the M-Akiba platform introduced by the Kenyan government?",
        choices: { A: "To provide micro-loans to farmers for agricultural projects", B: "To offer mobile-based investment opportunities in government bonds", C: "To promote digital literacy through educational initiatives", D: "To facilitate cross-border trade with East African countries" },
        correctAnswer: "B"
    },
    {
        question: "Which Kenyan fintech platform enables users to access credit facilities based on their mobile phone usage and transactions?",
        choices: { A: "Kiva", B: "Inuka Pap", C: "Tala", D: "M-Shwari" },
        correctAnswer: "D"
    },
    {
        question: "What is the primary objective of the Kenya Bankers Association's (KBA) FinTech Innovation Hub?",
        choices: { A: "To regulate the operations of fintech companies in Kenya", B: "To promote collaboration between banks and fintech startups", C: "To provide free financial education to Kenyan citizens", D: "To establish a national cryptocurrency for digital transactions" },
        correctAnswer: "B"
    },
    {
        question: "Which Kenyan fintech company offers a platform for individuals and businesses to send and receive money across Africa with no transfer fees?",
        choices: { A: "M-Pesa", B: "BitPesa", C: "Lipa Na M-Pesa", D: "Pesapal" },
        correctAnswer: "B"
    },
    {
        question: "What role do digital credit scoring platforms play in the Kenyan fintech ecosystem?",
        choices: { A: "Providing credit ratings for traditional banks", B: "Assessing the creditworthiness of individuals for borrowing purposes", C: "Offering investment advice to retail investors", D: "Facilitating peer-to-peer lending among borrowers" },
        correctAnswer: "B"
    },
    {
        question: "Which Kenyan fintech initiative aims to promote financial literacy and entrepreneurship among youth through a mobile app?",
        choices: { A: "Shule Direct", B: "Pata Ajira", C: "Wezesha Dada", D: "MySavings" },
        correctAnswer: "C"
    },
    {
        question: "What is the significance of the Kenya Revenue Authority's (KRA) iTax platform?",
        choices: { A: "To facilitate tax evasion among individuals and businesses", B: "To provide a secure online platform for filing tax returns and making payments", C: "To offer tax refunds to low-income taxpayers", D: "To regulate the activities of fintech companies in Kenya" },
        correctAnswer: "B"
    },
    {
        question: "Which Kenyan fintech startup offers a platform for individuals to invest in stocks, mutual funds, and government securities?",
        choices: { A: "Amani Capital", B: "BitPesa", C: "M-Kopa", D: "PesaBazaar" },
        correctAnswer: "A"
    },
    {
        question: "What role do fintech accelerators and incubators play in Kenya's fintech ecosystem?",
        choices: { A: "Regulating the operations of fintech startups", B: "Providing funding and mentorship to early-stage fintech companies", C: "Offering free financial education to low-income individuals", D: "Facilitating government partnerships with fintech companies" },
        correctAnswer: "B"
    },
    {
        question: "Which Kenyan fintech platform offers a digital lending marketplace connecting borrowers with individual and institutional lenders?",
        choices: { A: "Sokowatch", B: "Branch", C: "Tala", D: "Umati Capital" },
        correctAnswer: "B"
    },
    {
        question: "What is the purpose of the Kenya Digital Economy Blueprint developed by the Ministry of ICT?",
        choices: { A: "To promote cash-based transactions in the economy", B: "To regulate the operations of mobile money platforms", C: "To accelerate the growth of the digital economy through policy interventions and initiatives", D: "To restrict access to financial services for rural communities" },
        correctAnswer: "C"
    },
    {
        question: "Which Kenyan fintech company offers a mobile-based platform for agricultural insurance and risk management?",
        choices: { A: "Apollo Agriculture", B: "M-Kopa", C: "Tala", D: "Abacus" },
        correctAnswer: "A"
    },
    {
        question: "What role do digital identity solutions play in Kenya's fintech ecosystem?",
        choices: { A: "Providing secure access to financial services for individuals without formal identification", B: "Monitoring online transactions for suspicious activity and fraud prevention", C: "Offering investment advice to retail investors based on their financial profile", D: "Regulating the activities of fintech companies operating in the country" },
        correctAnswer: "A"
    },
    {
        question: "Which Kenyan fintech initiative aims to promote savings culture among low-income individuals through group-based savings and lending?",
        choices: { A: "Stawi", B: "Inuka Pap", C: "M-Shwari", D: "Pula" },
        correctAnswer: "C"
    },
    {
        question: "What is the significance of the Nairobi Securities Exchange's (NSE) Ibuka program?",
        choices: { A: "To promote cryptocurrency trading among Kenyan investors", B: "To offer mentorship and funding to fintech startups in Kenya", C: "To facilitate cross-border trade with neighboring countries", D: "To regulate the activities of traditional banks in Kenya" },
        correctAnswer: "B"
    },
    {
        question: "Which Kenyan fintech startup offers a platform for remittance services targeting the Kenyan diaspora?",
        choices: { A: "BitPesa", B: "FarmDrive", C: "Tulaa", D: "Apollo Agriculture" },
        correctAnswer: "A"
    },
    {
        question: "What role do open banking initiatives play in Kenya's fintech landscape?",
        choices: { A: "Facilitating collaboration and data sharing between banks and fintech companies", B: "Promoting competition among mobile money providers", C: "Offering tax refunds to low-income taxpayers", D: "Regulating the activities of microfinance institutions in rural areas" },
        correctAnswer: "A"
    },
    {
        question: "Which Kenyan fintech platform offers a mobile-based solution for managing and tracking agricultural produce along the supply chain?",
        choices: { A: "M-Akiba", B: "Pesapal", C: "Twiga Foods", D: "Apollo Agriculture" },
        correctAnswer: "C"
    },
    {
        question: "What is the primary objective of the Kenyan government's Huduma Namba initiative?",
        choices: { A: "To promote digital literacy among youth and women", B: "To provide a unique identification number for accessing government services", C: "To regulate the operations of fintech companies in the country", D: "To facilitate cross-border trade with East African countries" },
        correctAnswer: "B"
    },
    {
        question: "Which Kenyan fintech company offers a platform for individuals to invest in government bonds through mobile money?",
        choices: { A: "M-Shwari", B: "Abacus", C: "M-Akiba", D: "Saida" },
        correctAnswer: "C"
    },
    {
        question: "What role do fintech sandboxes play in Kenya's regulatory framework?",
        choices: { A: "Providing a testing environment for new fintech products and services", B: "Monitoring online transactions for suspicious activity and fraud prevention", C: "Offering investment advice to retail investors based on their financial profile", D: "Regulating the activities of traditional banks in the country" },
        correctAnswer: "A"
    },
    {
        question: "Which Kenyan fintech initiative focuses on providing access to credit for smallholder farmers through a digital platform?",
        choices: { A: "Apollo Agriculture", B: "Tulaa", C: "Pula", D: "Stawi" },
        correctAnswer: "A"
    },
    {
        question: "What is the purpose of the Kenya Bankers Association's (KBA) PesaLink platform?",
        choices: { A: "To promote cash-based transactions in the economy", B: "To offer digital payment solutions for public transportation services", C: "To provide real-time interbank transfers for individuals and businesses", D: "To facilitate international money transfers from Kenyan diaspora" },
        correctAnswer: "C"
    },
    {
        question: "Which Kenyan fintech company offers a platform for peer-to-peer lending among individuals and small businesses?",
        choices: { A: "Branch", B: "BitPesa", C: "M-Pesa", D: "Inuka Pap" },
        correctAnswer: "A"
    },
    {
        question: "What role do digital wallets play in Kenya's fintech ecosystem?",
        choices: { A: "Facilitating cross-border trade with neighboring countries", B: "Providing secure storage and management of digital currencies", C: "Offering investment advice to retail investors based on their financial profile", D: "Regulating the activities of microfinance institutions in rural areas" },
        correctAnswer: "B"
    },
    {
        question: "Which Kenyan fintech platform offers a solution for managing and disbursing payroll digitally to employees?",
        choices: { A: "Kiva", B: "Pata Ajira", C: "Pesapal", D: "Lipa Na M-Pesa" },
        correctAnswer: "D"
    },
    {
        question: "What is the significance of the Kenyan government's Ajira Digital Program?",
        choices: { A: "To promote digital literacy and skills development among Kenyan youth", B: "To regulate the operations of mobile money platforms", C: "To provide funding for fintech startups in the country", D: "To facilitate cross-border trade with neighboring countries" },
        correctAnswer: "A"
    },
    {
        question: "Which Kenyan fintech company offers a platform for individuals to access short-term micro-loans through their mobile phones?",
        choices: { A: "Jumo", B: "Kopo Kopo", C: "M-Shwari", D: "Tala" },
        correctAnswer: "D"
    },
    {
        question: "What role do regulatory sandboxes play in Kenya's fintech ecosystem?",
        choices: { A: "Providing a testing environment for new fintech products and services under regulatory supervision", B: "Offering investment advice to retail investors based on their financial profile", C: "Regulating the activities of traditional banks in the country", D: "Facilitating cross-border trade with neighboring countries" },
        correctAnswer: "A"
    },
    {
        question: "Which Kenyan fintech initiative focuses on providing access to insurance products for low-income individuals through a mobile app?",
        choices: { A: "Bima", B: "Branch", C: "Umati Capital", D: "Tala" },
        correctAnswer: "A"
    },
    {
        question: "What is the primary objective of the Kenya Bankers Association's (KBA) Stawi platform?",
        choices: { A: "To provide micro-loans to farmers for agricultural projects", B: "To offer digital payment solutions for public transportation services", C: "To provide access to credit for small and medium-sized enterprises (SMEs)", D: "To facilitate international money transfers from Kenyan diaspora" },
        correctAnswer: "C"
    },
    {
        question: "Which Kenyan fintech company offers a platform for individuals to invest in cryptocurrency assets?",
        choices: { A: "BitPesa", B: "Coinbase", C: "Luno", D: "Paxful" },
        correctAnswer: "A"
    },
    {
        question: "What role do fintech hubs play in Kenya's fintech landscape?",
        choices: { A: "Providing support and resources for fintech startups and entrepreneurs", B: "Facilitating cross-border trade with neighboring countries", C: "Regulating the activities of traditional banks in the country", D: "Offering investment advice to retail investors based on their financial profile" },
        correctAnswer: "A"
    },
    {
        question: "Which Kenyan fintech platform offers a solution for managing and tracking livestock ownership and transactions?",
        choices: { A: "Twiga Foods", B: "Apollo Agriculture", C: "Tala", D: "Copia" },
        correctAnswer: "D"
    },
    {
        question: "What is the primary objective of the Kenyan government's Digital Literacy Program?",
        choices: { A: "To promote digital literacy and skills development among Kenyan youth", B: "To regulate the operations of mobile money platforms", C: "To provide funding for fintech startups in the country", D: "To facilitate cross-border trade with neighboring countries" },
        correctAnswer: "A"
    },
    {
        question: "Which Kenyan fintech company offers a platform for individuals to access investment opportunities in renewable energy projects?",
        choices: { A: "M-Kopa", B: "BitPesa", C: "SunCulture", D: "Apollo Agriculture" },
        correctAnswer: "C"
    },
    {
        question: "What role do regulatory sandboxes play in Kenya's fintech ecosystem?",
        choices: { A: "Providing a testing environment for new fintech products and services under regulatory supervision", B: "Offering investment advice to retail investors based on their financial profile", C: "Regulating the activities of traditional banks in the country", D: "Facilitating cross-border trade with neighboring countries" },
        correctAnswer: "A"
    },
    {
        question: "Which Kenyan fintech initiative focuses on providing access to financial education and literacy programs for women?",
        choices: { A: "Wazi", B: "Women4Tech", C: "Wezesha Dada", D: "Maisha" },
        correctAnswer: "C"
    },
    {
        question: "What is the primary objective of the Kenya Bankers Association's (KBA) PesaLink platform?",
        choices: { A: "To promote cashless transactions in the economy", B: "To offer digital payment solutions for public transportation services", C: "To provide real-time interbank transfers for individuals and businesses", D: "To facilitate international money transfers from Kenyan diaspora" },
        correctAnswer: "C"
    },
    {
        question: "Which Kenyan fintech company offers a platform for peer-to-peer lending among individuals and small businesses?",
        choices: { A: "Branch", B: "BitPesa", C: "M-Pesa", D: "Inuka Pap" },
        correctAnswer: "D"
    },
    {
        question: "What role do digital wallets play in Kenya's fintech ecosystem?",
        choices: { A: "Facilitating cross-border trade with neighboring countries", B: "Providing secure storage and management of digital currencies", C: "Offering investment advice to retail investors based on their financial profile", D: "Regulating the activities of microfinance institutions in rural areas" },
        correctAnswer: "B"
    },
    {
        question: "Which Kenyan fintech platform offers a solution for managing and disbursing social welfare payments to beneficiaries?",
        choices: { A: "Cashless Africa", B: "Compassion International", C: "eKitabu", D: "GiveDirectly" },
        correctAnswer: "D"
    },
    {
        question: "What is the primary objective of the Kenya Bankers Association's (KBA) Stawi platform?",
        choices: { A: "To provide micro-loans to farmers for agricultural projects", B: "To offer digital payment solutions for public transportation services", C: "To provide access to credit for small and medium-sized enterprises (SMEs)", D: "To facilitate international money transfers from Kenyan diaspora" },
        correctAnswer: "C"
    },
    {
        question: "Which Kenyan fintech company offers a platform for individuals to invest in cryptocurrency assets?",
        choices: { A: "BitPesa", B: "Coinbase", C: "Luno", D: "Paxful" },
        correctAnswer: "A"
    },
    {
        question: "What role do fintech hubs play in Kenya's fintech landscape?",
        choices: { A: "Providing support and resources for fintech startups and entrepreneurs", B: "Facilitating cross-border trade with neighboring countries", C: "Regulating the activities of traditional banks in the country", D: "Offering investment advice to retail investors based on their financial profile" },
        correctAnswer: "A"
    },
    {
        question: "Which Kenyan fintech initiative focuses on providing access to financial services for refugees and displaced populations?",
        choices: { A: "Refugees United", B: "AsylumConnect", C: "Safaricom Refugee Program", D: "Refugee Tech" },
        correctAnswer: "C"
    },
    {
        question: "What is the primary objective of the Kenya Bankers Association's (KBA) Inuka Pap platform?",
        choices: { A: "To provide micro-loans to farmers for agricultural projects", B: "To offer digital payment solutions for public transportation services", C: "To provide access to credit for small and medium-sized enterprises (SMEs)", D: "To facilitate international money transfers from Kenyan diaspora" },
        correctAnswer: "C"
    },
    {
        question: "Which Kenyan fintech company offers a platform for individuals to invest in peer-to-peer lending opportunities?",
        choices: { A: "Pezesha", B: "Kiva", C: "Kopo Kopo", D: "M-Kopa" },
        correctAnswer: "A"
    },
    {
        question: "What role do digital wallets play in Kenya's fintech ecosystem?",
        choices: { A: "Facilitating cross-border trade with neighboring countries", B: "Providing secure storage and management of digital currencies", C: "Offering investment advice to retail investors based on their financial profile", D: "Regulating the activities of microfinance institutions in rural areas" },
        correctAnswer: "B"
    },
    {
        question: "Which Kenyan fintech platform offers a solution for managing and disbursing social welfare payments to beneficiaries?",
        choices: { A: "Cashless Africa", B: "Compassion International", C: "eKitabu", D: "GiveDirectly" },
        correctAnswer: "D"
    },
    {
        question: "What is the primary objective of the Kenya Bankers Association's (KBA) Stawi platform?",
        choices: { A: "To provide micro-loans to farmers for agricultural projects", B: "To offer digital payment solutions for public transportation services", C: "To provide access to credit for small and medium-sized enterprises (SMEs)", D: "To facilitate international money transfers from Kenyan diaspora" },
        correctAnswer: "C"
    },
    {
        question: "Which Kenyan fintech company offers a platform for individuals to invest in cryptocurrency assets?",
        choices: { A: "BitPesa", B: "Coinbase", C: "Luno", D: "Paxful" },
        correctAnswer: "A"
    },
    {
        question: "What role do fintech hubs play in Kenya's fintech landscape?",
        choices: { A: "Providing support and resources for fintech startups and entrepreneurs", B: "Facilitating cross-border trade with neighboring countries", C: "Regulating the activities of traditional banks in the country", D: "Offering investment advice to retail investors based on their financial profile" },
        correctAnswer: "A"
    }
];

// Endpoint to get 10 random questions
app.get('/api/random-questions', (req, res) => {
    let selectedIndices = [];
    let selectedQuestions = [];

    while (selectedIndices.length < 10 && selectedIndices.length < allQuestions.length) {
        let r = Math.floor(Math.random() * allQuestions.length);
        if (selectedIndices.indexOf(r) === -1) {
            selectedIndices.push(r);
            selectedQuestions.push(allQuestions[r]);
        }
    }

    res.json(selectedQuestions);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});