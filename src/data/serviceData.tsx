
import { ReactNode } from 'react';
import { BookOpenCheck, Calculator, ClipboardCheck, CreditCard, FileSpreadsheet, PenSquare } from 'lucide-react';

interface ProcessStep {
  title: string;
  description: string;
}

interface Benefit {
  title: string;
  description: string;
}

export interface ServiceType {
  id: string;
  title: string;
  description: string;
  details: string;
  icon: ReactNode;
  process: ProcessStep[];
  benefits: Benefit[];
}

export const serviceData: ServiceType[] = [
  {
    id: 'bookkeeping',
    title: 'Bookkeeping',
    description: 'Accurate and timely recording of financial transactions to keep your books in order.',
    details: 'Our comprehensive bookkeeping services include accounts payable/receivable management, bank reconciliations, payroll processing, financial statement preparation, and more. We use modern accounting software to ensure accuracy and provide real-time access to your financial data, helping you maintain organized and compliant financial records that form the foundation for sound business decisions.',
    icon: <BookOpenCheck className="w-full h-full" />,
    process: [
      {
        title: 'Initial Assessment',
        description: 'We evaluate your current bookkeeping processes and systems to identify opportunities for improvement.'
      },
      {
        title: 'Setup and Implementation',
        description: 'We establish efficient systems and procedures tailored to your business needs, including chart of accounts and accounting software configuration.'
      },
      {
        title: 'Regular Maintenance',
        description: 'We handle ongoing transaction recording, categorization, reconciliation, and financial statement preparation.'
      },
      {
        title: 'Reporting and Analysis',
        description: 'We provide regular financial reports with insights to help you understand your business\'s financial position and performance.'
      }
    ],
    benefits: [
      {
        title: 'Time Savings',
        description: 'Free up valuable time to focus on running and growing your business instead of managing paperwork.'
      },
      {
        title: 'Accuracy and Compliance',
        description: 'Reduce errors and ensure your financial records meet ATO requirements and Australian accounting standards.'
      },
      {
        title: 'Better Decision Making',
        description: 'Gain access to accurate, up-to-date financial information to support informed business decisions.'
      },
      {
        title: 'Cost Efficiency',
        description: 'Save on the costs of hiring and training in-house bookkeeping staff while gaining expert knowledge.'
      }
    ]
  },
  {
    id: 'accounting',
    title: 'Accounting',
    description: 'Comprehensive accounting services to track, analyze, and report your financial information.',
    details: 'Our accounting services go beyond basic bookkeeping to provide in-depth financial analysis, management reporting, and strategic insights. We help you understand your business\'s financial health through detailed profit and loss statements, balance sheets, cash flow analyses, and customized financial reports designed to highlight key performance indicators relevant to your specific industry and business goals.',
    icon: <Calculator className="w-full h-full" />,
    process: [
      {
        title: 'Financial Review',
        description: 'We conduct a comprehensive review of your financial records to ensure accuracy and completeness.'
      },
      {
        title: 'Financial Statement Preparation',
        description: 'We prepare detailed financial statements including profit and loss, balance sheet, and cash flow statements.'
      },
      {
        title: 'Analysis and Interpretation',
        description: 'We analyze financial data to identify trends, opportunities, and potential issues affecting your business.'
      },
      {
        title: 'Strategic Recommendations',
        description: 'Based on our analysis, we provide tailored recommendations to improve your financial position and performance.'
      }
    ],
    benefits: [
      {
        title: 'Strategic Insight',
        description: 'Gain a deeper understanding of your business\'s financial health and performance drivers.'
      },
      {
        title: 'Improved Financial Management',
        description: 'Implement effective financial controls and processes to optimize resource allocation.'
      },
      {
        title: 'Stakeholder Confidence',
        description: 'Present professional, accurate financial information to investors, lenders, and other stakeholders.'
      },
      {
        title: 'Growth Support',
        description: 'Access the financial guidance and infrastructure needed to support sustainable business growth.'
      }
    ]
  },
  {
    id: 'taxation',
    title: 'Taxation',
    description: 'Expert tax preparation and planning services to optimize your tax position.',
    details: 'Our taxation services provide comprehensive support for all your tax needs, including personal and business tax returns, GST/BAS obligations, and tax planning strategies. We stay current with the latest tax laws and regulations to identify legitimate deductions, credits, and incentives to minimize your tax liability while ensuring full compliance with ATO requirements. Our proactive approach helps you prepare for tax obligations throughout the year, not just at tax time.',
    icon: <ClipboardCheck className="w-full h-full" />,
    process: [
      {
        title: 'Tax Assessment',
        description: 'We review your current tax situation, including business structure, income sources, and potential deductions.'
      },
      {
        title: 'Strategic Tax Planning',
        description: 'We develop customized tax strategies to legally minimize your tax burden while ensuring compliance.'
      },
      {
        title: 'Tax Return Preparation',
        description: 'We prepare and lodge accurate, timely tax returns for individuals, businesses, trusts, and self-managed super funds.'
      },
      {
        title: 'Ongoing Tax Support',
        description: 'We provide year-round tax advice and representation in case of ATO inquiries or audits.'
      }
    ],
    benefits: [
      {
        title: 'Tax Optimization',
        description: 'Legally minimize your tax liability through strategic planning and identification of all eligible deductions.'
      },
      {
        title: 'Compliance Assurance',
        description: 'Stay compliant with all ATO requirements and reduce the risk of penalties or audits.'
      },
      {
        title: 'Time and Stress Reduction',
        description: 'Eliminate the complexity and anxiety often associated with tax preparation and lodgment.'
      },
      {
        title: 'Financial Planning Integration',
        description: 'Incorporate tax considerations into your broader financial planning for more effective wealth management.'
      }
    ]
  },
  {
    id: 'payroll-services',
    title: 'Payroll Services',
    description: 'Efficient payroll processing to ensure your employees are paid accurately and on time.',
    details: 'Our payroll services handle everything from regular processing and electronic payments to tax withholdings, superannuation contributions, and compliance with employment regulations. We manage leave accruals, generate detailed pay slips, produce year-end summaries, and prepare payment summaries. Our systems integrate with popular accounting platforms to streamline your overall financial management process while maintaining accuracy and confidentiality.',
    icon: <CreditCard className="w-full h-full" />,
    process: [
      {
        title: 'Payroll Setup',
        description: 'We establish your payroll system with employee records, tax tables, superannuation details, and leave entitlements.'
      },
      {
        title: 'Regular Processing',
        description: 'We calculate salaries, wages, allowances, deductions, and withholdings accurately for each pay period.'
      },
      {
        title: 'Compliance Management',
        description: 'We ensure adherence to Fair Work regulations, award rates, superannuation requirements, and tax obligations.'
      },
      {
        title: 'Reporting and Records',
        description: 'We maintain comprehensive payroll records and generate reports for management, employees, and regulatory authorities.'
      }
    ],
    benefits: [
      {
        title: 'Accuracy and Timeliness',
        description: 'Ensure your employees are paid the correct amounts on time, every time, boosting staff satisfaction.'
      },
      {
        title: 'Compliance Confidence',
        description: 'Stay current with Australia\'s complex and changing payroll regulations, awards, and superannuation requirements.'
      },
      {
        title: 'Cost Efficiency',
        description: 'Reduce the costs and risks associated with managing payroll internally while gaining expert support.'
      },
      {
        title: 'Data Security',
        description: 'Protect sensitive employee information through secure, professional payroll processing systems.'
      }
    ]
  },
  {
    id: 'financial-reporting',
    title: 'Financial Reporting',
    description: 'Detailed financial reports to help you understand your business performance.',
    details: 'Our financial reporting services transform complex financial data into clear, actionable insights through customized reports designed for your specific business needs. We provide detailed profit and loss statements, balance sheets, cash flow analyses, budget comparisons, and performance metrics. These reports are presented in easy-to-understand formats with visual elements to help you quickly grasp your financial position and make informed decisions about your business\'s future.',
    icon: <FileSpreadsheet className="w-full h-full" />,
    process: [
      {
        title: 'Requirements Analysis',
        description: 'We identify your reporting needs, including specific metrics, KPIs, and decision-making requirements.'
      },
      {
        title: 'Data Collection and Verification',
        description: 'We gather financial data from various sources and ensure its accuracy and completeness.'
      },
      {
        title: 'Report Generation',
        description: 'We create customized financial reports with appropriate level of detail and visual representations.'
      },
      {
        title: 'Analysis and Interpretation',
        description: 'We explain what the numbers mean for your business and provide context for informed decision-making.'
      }
    ],
    benefits: [
      {
        title: 'Enhanced Decision-Making',
        description: 'Make more informed business decisions based on clear, accurate financial information.'
      },
      {
        title: 'Performance Tracking',
        description: 'Monitor progress against goals, identify trends, and detect potential issues early.'
      },
      {
        title: 'Stakeholder Communication',
        description: 'Present professional financial information to investors, lenders, partners, and board members.'
      },
      {
        title: 'Strategic Planning Support',
        description: 'Use reliable financial data to develop effective business strategies and future plans.'
      }
    ]
  },
  {
    id: 'business-advisory',
    title: 'Business Advisory',
    description: 'Strategic advice to help your business grow and succeed in a competitive market.',
    details: 'Our business advisory services provide strategic guidance to help you navigate challenges and capitalize on opportunities. We offer support for business structuring, succession planning, growth strategies, risk management, and financial forecasting. Our advisors work closely with you to understand your unique business goals and develop tailored solutions to improve profitability, increase efficiency, and achieve sustainable growth in today\'s competitive market environment.',
    icon: <PenSquare className="w-full h-full" />,
    process: [
      {
        title: 'Business Assessment',
        description: 'We evaluate your current business position, operations, market situation, and future objectives.'
      },
      {
        title: 'Strategy Development',
        description: 'We create tailored strategies to address challenges, leverage strengths, and pursue growth opportunities.'
      },
      {
        title: 'Implementation Support',
        description: 'We provide practical guidance to help you execute strategic initiatives effectively.'
      },
      {
        title: 'Performance Monitoring',
        description: 'We track progress against goals, making adjustments as needed to ensure optimal outcomes.'
      }
    ],
    benefits: [
      {
        title: 'Expert Perspective',
        description: 'Gain valuable external insights and expertise to complement your internal knowledge and capabilities.'
      },
      {
        title: 'Strategic Direction',
        description: 'Develop clear, effective strategies aligned with your business goals and market conditions.'
      },
      {
        title: 'Problem Solving',
        description: 'Address specific business challenges with tailored solutions based on proven methodologies.'
      },
      {
        title: 'Growth Acceleration',
        description: 'Implement effective approaches to drive sustainable business growth and improved performance.'
      }
    ]
  }
];
