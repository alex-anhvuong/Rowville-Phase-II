let videoLink = "https://www.youtube.com/embed/hc1Xq0hgFCs"; //"https://www.youtube.com/watch?v=hc1Xq0hgFCs";
let homePageContent = "Have you got a business idea that you want to turn into a reality? ThinkBiz has been " +
"created to help you take your business idea from just “thinking about it” to actually " +
"making it happen. We have simplified the process into 12 easy steps to follow, to start a business " +
"in Victoria. We have also provided lots of quick links to watch some helpful videos, find out further " +
"information and where to go for help and support along the way. To get started just press here.";

/* This array contains all the data for content Page that is being displayed depending upon the flags. Nested objects are used for different types of content */
let stepsContent = [
  //First object that stores the content for Step 1
  {
    title: "Getting Started",
    id: 0,
    stepName: "Step 1",
    //contentList key stores values in the form of array and array elements are stored again in object form.
    contentList: [
      {
        isVideoLink: true,
        contentData: ["https://www.youtube.com/embed/6bimW-U6EsU"],
        style: "None",
        tagType: "iframe",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: "videoLink"
      },
      {
        isVideoLink: false,
        contentData: ["Once you have an idea and the motivation to start your own business, the first thing you need to do is research everything you can about your business idea. Find out all you can about the product or service you want to sell or provide. Research similar industries, trends in the market and if there’s going to be competition you need to think about. Speak to as many people as you can that have knowledge or experience in the industry, with the product or service or who have experience and knowledge about small business in general. You also want to find a way to test out your idea if you can to make sure your idea is going to make a profit."],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: "para"
      },
      {
        isVideoLink: false,
        contentData: ["It is also a good idea to have a think about asking yourself some of the following questions.", "What are your skills and interests?", "What are your weaknesses?", "Can you overcome them with help, such as training and mentoring?", "Have you researched the market you are about to enter to find target customers and prospective competitors?",
          "Have you given a thought to hours of commitment, pricing of product or service?", "Is your business may be eligible for any government grants?"],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: "low_spaces_para"
      },
      {
        isVideoLink: false,
        contentData: [" "],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["Click here"],
        style: "None",
        tagType: "a",
        href: "https://www.business.gov.au/assistance/search",
        isBold: false,
        isUnderLine: true,
        isLink: false,
        isList: false,
        className: "click_below"
      },
      {
        isVideoLink: false,
        contentData: [" to search the business.gov grants & assistance program tool."],
        style: "None",
        tagType: "span",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: ""
      },
      {
        isVideoLink: false,
        contentData: [" "],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: "low_spaces_para"
      },
      {
        isVideoLink: false,
        contentData: ["https://www.business.gov.au/assistance/search"],
        style: "None",
        tagType: "a",
        isBold: false,
        isUnderLine: false,
        isLink: true,
        isList: false,
        className: "low_spaces_para"
      },
      {
        isVideoLink: false,
        contentData: ["A really useful tool to help with your research is to carry out a swot analysis. Swot stands for Strengths, Weaknesses, Opportunities, and Threats. While your strengths and weaknesses are internal to your business, threats and opportunities are external in the environment. The main strategies behind SWOT analysis are:"],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["To use your strenghts to take advantage of your opportunities.", "Use your strenghts to minimise threats.", "Look at ways to reduce your weaknesses by taking advantage of opportunities.", "Work on eliminating or getting rid of the weaknesses to avoid threats."],
        style: "None",
        tagType: "ol",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: true
      },
      {
        isVideoLink: false,
        contentData: ["For more information on SWOT analysis watch a quick video on it and to download a free template to complete a swot analysis for yourself "],
        style: "None",
        tagType: "span",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["click here"],
        style: "None",
        tagType: "a",
        href: "https://www.mindtools.com/pages/article/newTMC_05.htm",
        isBold: false,
        isUnderLine: true,
        isLink: false,
        isList: false,
        className: "click_below"
      },
      {
        isVideoLink: false,
        contentData: [" "],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: ""
      },
      {
        isVideoLink: false,
        contentData: ["https://www.mindtools.com/pages/article/newTMC_05.htm"],
        style: "None",
        tagType: "a",
        isBold: false,
        isUnderLine: false,
        isLink: true,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["",""],
        style: "None",
        tagType: "br",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      }
    ]
  },
  {
    //Content stored for displaying for Step 2
    title: "Set up your business structure",
    id: 1,
    stepName: "Step 2",
    contentList: [
      {
        isVideoLink: false,
        contentData: ["Deciding on a business structure"],
        style: "None",
        tagType: "p",
        isBold: true,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: "low_spaces_para"
      },
      {
        isVideoLink: false,
        contentData: ["Choosing the right structure for your business is very important, as it affects various aspects of business like ownership, taxation, legal obligations, potential personal liabilities and licencing. Therefore, it is important to make an informed decision when choosing a structure for your business as all structures come with their own advantages and disadvantages."],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: "low_spaces_para"
      },
      {
        isVideoLink: false,
        contentData: ["ThinkBiz recommends getting advice from your accountant, solicitor and/or business adviser before finalising your decision."],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["The four most common business structures in Australia are:"],
        style: "None",
        tagType: "p",
        isBold: true,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: "low_spaces_para"
      },
      {
        isVideoLink: false,
        contentData: ["Sole Proprietorship", "Partnership", "Company", "Trust"],
        style: "None",
        tagType: "ul",
        isBold: true,
        isUnderLine: false,
        isLink: false,
        isList: true,
      },
      {
        isVideoLink: false,
        contentData: ["To hear this explained further, watch this short video created by the Australian Taxation Office:"],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: "low_spaces_para"
      },
      {
        isVideoLink: true,
        contentData: ["https://www.youtube.com/embed/zsorYp67atg"],
        style: "None",
        tagType: "iframe",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: "videoLink"
      },
      {
        isVideoLink: false,
        contentData: ["To help you choose a business structure, Business Victoria has provided a small quiz. Refer here to take the quiz and help to decide on the structure that suits you best: "],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: "low_spaces_para"
      },
      {
        isVideoLink: false,
        contentData: ["https://fs2.formsite.com/diirdwebteam3/form263/index.html"],
        style: "None",
        tagType: "a",
        isBold: false,
        isUnderLine: false,
        isLink: true,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["",""],
        style: "None",
        tagType: "br",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
    ]
  },
  //content stored for step 3
  {
    title: "Apply for an ABN & Register your business name",
    id: 2,
    stepName: "Step 3",
    contentList: [
      {
        isVideoLink: false,
        contentData: ["ABN stands for Australian Business Number. An ABN is a special number allocated to your business that specifically identifies your business to the government and community. An ABN is not only used to identify your business to the government, customers and other businesses, but also for a range of other tax and business purposes, such as to claim tax deductions for business expenses against your taxable income."],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["To understand an ABN further and how to apply for an ABN, watch the video by "],
        style: "None",
        tagType: "span",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["clicking here."],
        style: "None",
        tagType: "a",
        href: "https://www.youtube.com/embed/O7NSNWl_vF8",
        isBold: false,
        isUnderLine: true,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: true,
        contentData: ["https://www.youtube.com/embed/O7NSNWl_vF8"],
        style: "None",
        tagType: "iframe",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: "videoLink"
      },
      {
        isVideoLink: false,
        contentData: ["To apply for an ABN "],
        style: "None",
        tagType: "span",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["click here."],
        style: "None",
        tagType: "a",
        href: "https://abr.gov.au/For-Business,-Super-funds---Charities/Applying-for-an-ABN/",
        isBold: false,
        isUnderLine: true,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [" "],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: "low_spaces_para"
      },
      {
        isVideoLink: false,
        contentData: ["https://abr.gov.au/For-Business,-Super-funds---Charities/Applying-for-an-ABN/"],
        style: "None",
        tagType: "a",
        isBold: false,
        isUnderLine: false,
        isLink: true,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["Register your business name"],
        style: "None",
        tagType: "p",
        isBold: true,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["When you apply for an ABN, it’s also a good time to register your business name if you’re going to use one. If your business name is just going to be you or your partner’s first name and surname, then there is no need to register for a business name. However, if you’re going to trade under a different name from your own name, then you will need to register your business name."],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["To watch a short video on registering a business name "],
        style: "None",
        tagType: "span",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["click here."],
        style: "None",
        tagType: "a",
        href: "https://www.youtube.com/embed/hgbqtT6jP7I",
        isBold: false,
        isUnderLine: true,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: true,
        contentData: ["https://www.youtube.com/embed/hgbqtT6jP7I"],
        style: "None",
        tagType: "iframe",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: "videoLink"
      },
      {
        isVideoLink: false,
        contentData: ["To register a business name "],
        style: "None",
        tagType: "span",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["click here."],
        style: "None",
        tagType: "a",
        href: "https://www.asic.gov.au/for-business/registering-a-business-name/",
        isBold: false,
        isUnderLine: true,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [" "],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: "low_spaces_para"
      },
      {
        isVideoLink: false,
        contentData: ["https://www.asic.gov.au/for-business/registering-a-business-name/"],
        style: "None",
        tagType: "a",
        isBold: false,
        isUnderLine: false,
        isLink: true,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["",""],
        style: "None",
        tagType: "br",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
    ]
  },
  //content stored for Step 4
  {
    title: "Money and Finances",
    id: 4,
    stepName: "Step 4",
    contentList: [
      {
        isVideoLink: false,
        contentData: ["Understanding and working out the money side of a new business is extremely important. It can be the biggest defining factor in the success of your business in the first few years. At the very beginning of starting a business, you have to be able to estimate your start up costs. You also need to know how much money you need to earn from your business to meet your needs and when you can expect to get paid. All of these amounts need to be calculated so you will know how much money it will cost you to start your business and keep it running until you can start to earn an income from it."],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: "low_spaces_para"
      },
      {
        isVideoLink: false,
        contentData: [" "],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: ""
      },
      {
        isVideoLink: false,
        contentData: ["It is great if you can start a business without having to borrow money from a bank or finding an investor, but you have to find out how much money you will need and if you have enough to start up on your own, or if you do need to apply for a loan or find an investor."],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: "low_spaces_para"
      },
      {
        isVideoLink: false,
        contentData: [" "],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: ""
      },
      {
        isVideoLink: false,
        contentData: ["The costs of starting a business can vary greatly depending on what type of business you want to create. Your business plan should help you to estimate some of these costs. However, there’s a whole list of things to consider when working out what your costs will be, so you may need some help. Business Victoria has created a great pre-ready excel template listing lots of common business costs to help get you started."],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: "low_spaces_para"
      },
      {
        isVideoLink: false,
        contentData: ["Click here to open the template."],
        style: "None",
        tagType: "a",
        href: "https://www.business.gov.au/-/media/Business/Business-plans/Startup-Costing-Template-xls.xls?la=en&hash=3708E68F1DA68E9A8EAC9F2F57377CA26DAAA493",
        isBold: false,
        isUnderLine: true,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [" "],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: "low_spaces_para"
      },
      {
        isVideoLink: false,
        contentData: ["https://www.business.gov.au/-/media/Business/Business-plans/Startup-Costing-Template-xls.xls?la=en&hash=3708E68F1DA68E9A8EAC9F2F57377CA26DAAA493"],
        style: "None",
        tagType: "a",
        isBold: false,
        isUnderLine: false,
        isLink: true,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [" "],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: ""
      },
      {
        isVideoLink: false,
        contentData: ["For more information on estimating your start up costs "],
        style: "None",
        tagType: "span",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["click here."],
        style: "None",
        tagType: "a",
        href: "https://www.business.gov.au/planning/business-plans/writing-a-business-plan/start-up-costing-of-your-business",
        isBold: false,
        isUnderLine: true,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [" "],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: ""
      },
      {
        isVideoLink: false,
        contentData: ["https://www.business.gov.au/planning/business-plans/writing-a-business-plan/start-up-costing-of-your-business"],
        style: "None",
        tagType: "a",
        isBold: false,
        isUnderLine: false,
        isLink: true,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [" "],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: ""
      },
      {
        isVideoLink: false,
        contentData: ["To read a useful case study of how someone calculated their start up businesses costs "],
        style: "None",
        tagType: "span",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["click here."],
        style: "None",
        tagType: "a",
        href: "http://www.business.vic.gov.au/case-studies/estimate-your-business-start-up-costs",
        isBold: false,
        isUnderLine: true,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [" "],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: ""
      },
      {
        isVideoLink: false,
        contentData: ["http://www.business.vic.gov.au/case-studies/estimate-your-business-start-up-costs"],
        style: "None",
        tagType: "a",
        isBold: false,
        isUnderLine: false,
        isLink: true,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["As well as working out the costs of your business, cash flow, turnover and profit you will also have to find out what taxes are involved and whether or not you will have to register for Good and Services Tax (GST).", "ThinkBiz strongly recommends you get advice from your account for all your financial matters relating to your business and especially to help you to know what taxes your business will have to register for and be obligated to pay. You will need this information to include in your business plan.", "When it comes to money and business, keeping good records of all business costs, expenses, transactions and wages is something every business should do. It is vital to know  how your business is going to plan for its future, as well as help to prepare and pay your taxes and wages"],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["The ATO provides a great clip explaining what records you need to keep. "],
        style: "None",
        tagType: "span",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["Click here."],
        style: "None",
        tagType: "a",
        href: "https://www.youtube.com/embed/Ukzifl6akfo?list=PL5-ESUNqws-OZetr2ch34hL-n7VwYmnaK",
        isBold: false,
        isUnderLine: true,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: true,
        contentData: ["https://www.youtube.com/embed/Ukzifl6akfo?list=PL5-ESUNqws-OZetr2ch34hL-n7VwYmnaK"],
        style: "None",
        tagType: "iframe",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: "videoLink"
      },
      {
        isVideoLink: false,
        contentData: ["The ATO provides you with a tool to evaluate your record keeping. "],
        style: "None",
        tagType: "span",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["Click here."],
        style: "None",
        tagType: "a",
        href: "https://www.ato.gov.au/Calculators-and-tools/Host/?anchor=&anchor=RKET/#RKET/",
        isBold: false,
        isUnderLine: true,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [" "],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: "low_spaces_para"
      },
      {
        isVideoLink: false,
        contentData: ["https://www.ato.gov.au/Calculators-and-tools/Host/?anchor=&anchor=RKET/#RKET/"],
        style: "None",
        tagType: "a",
        isBold: false,
        isUnderLine: false,
        isLink: true,
        isList: false,
        className: ""
      },
      {
        isVideoLink: false,
        contentData: ["There are some great clips to watch from the Australian Taxation Office that really help with explaining what you need to know. ThinkBiz recommends watching the whole services of clips provided by the ATO for taxes, registrations, paying taxes and superannuation for employees."],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["For an introduction to these clips, "],
        style: "None",
        tagType: "span",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["click here."],
        style: "None",
        tagType: "a",
        href: "https://www.youtube.com/embed/Mxjaf4hWzt4?list=PL5-ESUNqws-OZetr2ch34hL-n7VwYmnaK",
        isBold: false,
        isUnderLine: true,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: true,
        contentData: ["https://www.youtube.com/embed/Mxjaf4hWzt4?list=PL5-ESUNqws-OZetr2ch34hL-n7VwYmnaK"],
        style: "None",
        tagType: "iframe",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: "videoLink"
      },
      {
        isVideoLink: false,
        contentData: ["For those from overseas starting a business for the first time in Australia, "],
        style: "None",
        tagType: "span",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["click here."],
        style: "None",
        tagType: "a",
        href: "https://www.youtube.com/embed/OopSbISOYCs",
        isBold: false,
        isUnderLine: true,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: true,
        contentData: ["https://www.youtube.com/embed/OopSbISOYCs"],
        style: "None",
        tagType: "iframe",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: "videoLink"
      }
    ]
  },
  //content stored for step 5
  {
  title: "Develop a business plan",
  id: 4,
  stepName: "Step 5",
  contentList: [
    {
      isVideoLink: false,
      contentData: ["Why do you need a business plan?"],
      style: "None",
      tagType: "p",
      isBold: true,
      isUnderLine: false,
      isLink: false,
      isList: false,
      className: "low_spaces_para"
    },
    {
      isVideoLink: false,
      contentData: ["A business plan helps: "],
      style: "None",
      tagType: "p",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false,
      className: "low_spaces_para"
    },
    {
      isVideoLink: false,
      contentData: ["Determine the goals of your business.", "Provide information on the products or service you will provide.","Understand that how you will set up your business.","What the finances will be.","How you are going to market your business and how you’re going to achieve your goals.","Track your progress and control your business."],
      style: "None",
      tagType: "ul",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: true,
      className: "low_spaces_para"
    },
    {
      isVideoLink: false,
      contentData: [" "],
      style: "None",
      tagType: "p",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false,
      className: ""
    },
    {
      isVideoLink: false,
      contentData: ["Your business plan not only helps to keep you on track, but is extremely important when it comes to needing money for your business. If you want to get a business loan or attract an investor, they will want to see your business plan to show that you have thought out all the aspects of your business and why it’s worth loaning you the money or investing in your business.", "Creating a business plan is important and making sure it’s updated regularly is also important to ensure your business keeps moving forward in the right direction.", "You can have a formal detailed business plan or you can have a less formal one page overview of your business plan. It depends on the type and size of the business you want to create and whether or not you will be applying for a loan or needing to find investors."],
      style: "None",
      tagType: "p",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false,
      className: ""
    },
    {
      isVideoLink: false,
      contentData: ["The Australian government business website has provided a step-by-step guide to constructing a business plan. To get help creating your own business plan and free templates "],
      style: "None",
      tagType: "span",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false
    },
    {
      isVideoLink: false,
      contentData: ["refer"],
      style: "None",
      tagType: "a",
      href: "https://www.business.gov.au/Planning/Templates-and-tools/Business-Plan-Template-and-Guide",
      isBold: false,
      isUnderLine: true,
      isLink: false,
      isList: false
    },
    {
      isVideoLink: false,
      contentData: [" "],
      style: "None",
      tagType: "p",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false,
      className: "low_spaces_para"
    },
    {
      isVideoLink: false,
      contentData: ["https://www.business.gov.au/Planning/Templates-and-tools/Business-Plan-Template-and-Guide"],
      style: "None",
      tagType: "a",
      isBold: false,
      isUnderLine: false,
      isLink: true,
      isList: false
    },
    {
      isVideoLink: false,
      contentData: ["Watch a few useful short videos on developing a business plan by 3 major banks.", "Developing a business plan by Commonwealth Bank"],
      style: "None",
      tagType: "p",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false
    },
    {
      isVideoLink: true,
      contentData: ["https://www.youtube.com/embed/NYV__J7zK-k"],
      style: "None",
      tagType: "iframe",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false,
      className: "videoLink"
    },
    {
      isVideoLink: false,
      contentData: ["What should go into your plan? By Westpac Bank"],
      style: "None",
      tagType: "p",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false
    },
    {
      isVideoLink: true,
      contentData: ["https://www.youtube.com/embed/NYV__J7zK-k"],
      style: "None",
      tagType: "iframe",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false,
      className: "videoLink"
    },
    {
      isVideoLink: false,
      contentData: ["Business planning by the National Australia Bank"],
      style: "None",
      tagType: "p",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false
    },
    {
      isVideoLink: true,
      contentData: ["https://www.youtube.com/embed/yZOF8bwLjPM"],
      style: "None",
      tagType: "iframe",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false,
      className: "videoLink"
    }
  ]
  },
  //content stored for step 6
  {
    title: "Organise your insurances & protections",
    id: 5,
    stepName: "Step 6",
    contentList: [
      {
      isVideoLink: false,
      contentData: ["Insuring your business gives you the protection and peace of mind that you will be covered if something goes wrong with your premises, such as fire, burglary or damage. Insurance is also a way of making sure you can cover costs that may come about from injury, damage or financial loss caused by your product or service or during the operation of your business.  You’ll also need special insurances like work cover when employing staff."],
      style: "None",
      tagType: "p",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false
      },
      {
      isVideoLink: false,
      contentData: ["There are loads of different insurances available for a whole range of aspects of business."],
      style: "None",
      tagType: "p",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false
      },
      {
      isVideoLink: false,
      contentData: ["Some of the most common insurance types that most businesses require are:"],
      style: "None",
      tagType: "p",
      isBold: true,
      isUnderLine: false,
      isLink: false,
      isList: false,
      className: "low_spaces_para"
      },
      {
      isVideoLink: false,
      contentData: ["Public Liability", "Product Liability", "Professional Indemnity", "Motor vehicle", "Personal injury and income protection"],
      style: "None",
      tagType: "ul",
      isBold: true,
      isUnderLine: false,
      isLink: false,
      isList: true,
        className: "low_spaces_para"
      },

      
      {
        isVideoLink: false,
        contentData: ["A good place to start to work out what insurances you need for your business is usually to talk to a business insurance broker. An insurance broker is a professional at assessing what insurances suit your business and getting quotes on your behalf.  They can sometimes combine a few insurances together for you in a package to reduce the costs. This can sometimes be cheaper than trying to get a lot of individual insurance policies on your own.  However, as insurance can be expensive, it pays to shop around."],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["The National Insurance Brokers Association (NIBA) has a good website that can help you find a local insurance broker just "],
        style: "None",
        tagType: "span",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["click here."],
        style: "None",
        tagType: "a",
        href: "http://www.needabroker.com.au/html/",
        isBold: false,
        isUnderLine: true,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [" "],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: "low_spaces_para"
      },
      {
      isVideoLink: false,
      contentData: ["http://www.needabroker.com.au/html/"],
      style: "None",
      tagType: "a",
      isBold: false,
      isUnderLine: false,
      isLink: true,
      isList: false
      },
      {
        isVideoLink: false,
        contentData: [" "],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: ""
      },
      {
        isVideoLink: false,
        contentData: ["Protections"],
        style: "None",
        tagType: "p",
        isBold: true,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: "low_spaces_para"
      },
      {
        isVideoLink: false,
        contentData: ["When starting a new business, it can also be important to protect other areas of your business such as your ideas, branding, designs and logos from being used by others."],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: "low_spaces_para"
      },
      {
        isVideoLink: false,
        contentData: [""],
        style: "None",
        tagType: "br",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["Common protections some businesses use to secure these aspects of their business include:"],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: "low_spaces_para"
      },
      {
        isVideoLink: false,
        contentData: ["Intellectual property", "Copywrite Protection", "Design Protection", "Patent Protection", "Trademark Protection", "Domain name Protection"],
        style: "None",
        tagType: "ul",
        isBold: true,
        isUnderLine: false,
        isLink: false,
        isList: true,
        className: "low_spaces_para"
      },
    
  
      {
        isVideoLink: false,
<<<<<<< HEAD
        contentData: ["For more information if any of the above protections maybe relevant for your business, "],
=======
        contentData: [""],
        style: "None",
        tagType: "br",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["For more information if any of the above protections maybe relevant for your business "],
>>>>>>> content-edit
        style: "None",
        tagType: "span",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["click here."],
        style: "None",
        tagType: "a",
        href: "https://www.austrade.gov.au/International/Invest/Guide-to-investing/Running-a-business/Understanding-Australian-business-regulation/Australian-Intellectual-Property-laws",
        isBold: false,
        isUnderLine: true,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [" "],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: "low_spaces_para"
      },
      {
        isVideoLink: false,
        contentData: ["https://www.austrade.gov.au/International/Invest/Guide-to-investing/Running-a-business/Understanding-Australian-business-regulation/Australian-Intellectual-Property-laws"],
        style: "None",
        tagType: "a",
        isBold: false,
        isUnderLine: false,
        isLink: true,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["",""],
        style: "None",
        tagType: "br",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
    ]
  },
  {
    //content stored for step 7
    title: "Register a Domain name for a website",
    id: 6,
    stepName: "Step 7",
    contentList: [
      {
      isVideoLink: false,
      contentData: ["Having a website for your business is not compulsory,  however, having a website is a very popular way of marketing your business. It helps people to find out what your business does and what is has to offer, it can also help to make your business seem more professional."],
      style: "None",
      tagType: "p",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false
      },
      {
      isVideoLink: false,
      contentData: ["A domain name is a website address or website name that can be used on the internet to access your website. Once you have your ABN, you can register for a domain name."],
      style: "None",
      tagType: "p",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false
      },
      {
      isVideoLink: false,
      contentData: ["Here are some benefits of a website taken directly from the "],
      style: "None",
      tagType: "span",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false
      },
      {
      isVideoLink: false,
      contentData: ["https://www.business.gov.au"],
      style: "None",
      tagType: "a",
      isBold: false,
      isUnderLine: false,
      isLink: true,
      isList: false
      },
      {
        isVideoLink: false,
        contentData: [" website."],
        style: "None",
        tagType: "span",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [" "],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: ""
      },
      {
        isVideoLink: false,
        contentData: ["Benefits of a website"],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: "low_spaces_para"
      },
      {
      isVideoLink: false,
      contentData: ["A website can be important to your business’s success and growth. Some of the benefits of having a website for your business may include:"],
      style: "None",
      tagType: "p",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false,
        className: "low_spaces_para"
      },
      {
        isVideoLink: false,
        contentData: ["Giving your business a digital shopfront", "Allowing your business to be open 24/7", "Increasing your target audience reach to a global audience", "Allowing customer access on your products and services anytime and anywhere", "Working as a marketing tool to sell and promote your products and services, and increase customer engagement", "Creating or enhancing your brand and reputation", "Improving your business productivity and efficiency"],
        style: "None",
        tagType: "ul",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: true
      },
      {
        isVideoLink: false,
        contentData: ["For more important information on domain names click on the link below."],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: "low_spaces_para"
      },
      {
        isVideoLink: false,
        contentData: ["https://www.business.gov.au/Marketing/Websites"],
        style: "None",
        tagType: "a",
        isBold: false,
        isUnderLine: false,
        isLink: true,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [" "],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: ""
      },
      {
        isVideoLink: false,
        contentData: ["To register your domain name click here."],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: "low_spaces_para"
      },
      {
        isVideoLink: false,
        contentData: ["https://www.business.gov.au/Marketing/Websites/Register-a-website-name"],
        style: "None",
        tagType: "a",
        isBold: false,
        isUnderLine: false,
        isLink: true,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["",""],
        style: "None",
        tagType: "br",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
    ]
  },
  //content stored for step 10
  {
  title: "Marketing & Advertising",
  id: 9,
  stepName: "Step 10",
  contentList: [
    {
      isVideoLink: false,
      contentData: ["In business you usually want to sell as much of your product or service as possible or at least find enough customers/clients to ensure you are making enough money to be profitable and keep your business going."],
      style: "None",
      tagType: "p",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false
    },
    {
      isVideoLink: false,
      contentData: ["That’s where marketing and advertising comes in. The marketing process is the preparation of your product or service to give you the best possible chance of enticing your target market and getting them to want your product and to choose your product or service over competitors."],
      style: "None",
      tagType: "p",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false,
      className: "low_spaces_para"
    },
    {
      isVideoLink: false,
      contentData: ["Marketing is the process of knowing who your target audience is and who your customers will be. This is where you will be researching your product or service, current trends in the market, where your customers are located and how you’re going to reach and attract them to you."],
      style: "None",
      tagType: "p",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false,
      className: "low_spaces_para"
    },
    {
      isVideoLink: false,
      contentData: [" "],
      style: "None",
      tagType: "p",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false
    },
    {
      isVideoLink: false,
      contentData: ["Most businesses will have a marketing plan. Having a plan to follow will help you to keep thinking about and taking steps to ensure you are contently attracting your target market customers.", "To help with this business victoria offers some great information and has a ready made marketing template for you to use. Just"],
      style: "None",
      tagType: "p",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false
    },
    {
      isVideoLink: false,
      contentData: ["To help with this, Business Victoria offers some great information and has a ready made marketing template for you to use. Just "],
      style: "None",
      tagType: "span",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false
    },
    {
      isVideoLink: false,
      contentData: ["click here."],
      style: "None",
      tagType: "a",
      href: "http://www.business.vic.gov.au/marketing-and-sales/increasing-sales-through-marketing/marketing-plan-template",
      isBold: false,
      isUnderLine: true,
      isLink: false,
      isList: false
    },
    {
      isVideoLink: false,
      contentData: [" "],
      style: "None",
      tagType: "p",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false
    },
    {
      isVideoLink: false,
      contentData: ["http://www.business.vic.gov.au/marketing-and-sales/increasing-sales-through-marketing/marketing-plan-template"],
      style: "None",
      tagType: "a",
      isBold: false,
      isUnderLine: false,
      isLink: true,
      isList: false
    },
    {
      isVideoLink: false,
      contentData: [" "],
      style: "None",
      tagType: "p",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false
    },
    {
      isVideoLink: false,
      contentData: ["To go straight to the Marketing template "],
      style: "None",
      tagType: "span",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false
    },
    {
      isVideoLink: false,
      contentData: ["click here."],
      style: "None",
      tagType: "a",
      href: "http://www.business.vic.gov.au/__data/assets/word_doc/0007/1009636/Marketing-Plan-Template.docx",
      isBold: false,
      isUnderLine: true,
      isLink: false,
      isList: false
    },
    {
      isVideoLink: false,
      contentData: [" "],
      style: "None",
      tagType: "p",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false
    },
    {
      isVideoLink: false,
      contentData: ["http://www.business.vic.gov.au/__data/assets/word_doc/0007/1009636/Marketing-Plan-Template.docx"],
      style: "None",
      tagType: "a",
      isBold: false,
      isUnderLine: false,
      isLink: true,
      isList: false
    },
    {
      isVideoLink: false,
      contentData: ["Advertising"],
      style: "None",
      tagType: "p",
      isBold: true,
      isUnderLine: false,
      isLink: false,
      isList: false
    },
    {
      isVideoLink: false,
      contentData: ["Advertising in some ways, is usually very important for almost all businesses, as it enables people to find out about your business and what you offer. It is telling people what product or service you are selling and how and where they can buy it. If no one knows you exist it’s going to be very hard to get customers. Usually the more advertising you can do the better."],
      style: "None",
      tagType: "p",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false,
      className: ""
    },
    {
      isVideoLink: false,
      contentData: ["There are lots of different ways to advertise your business. Some common ways for a new business can include:"],
      style: "None",
      tagType: "p",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false,
      className: "low_spaces_para"
    },
    {
      isVideoLink: false,
      contentData: ["Having a website and internet presence", "On social media such as Facebook, Instagram and Twitter.", "Look at using Google Adwords and or create a Google place listing.", "Networking by going to local business or marketing events, trade shows, workshops, seminars", "Create your own event.", "Newspapers, trade magazines, brochures", "Creating flyers or posters", "Place an ad on a local radio station"],
      style: "None",
      tagType: "ul",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: true,
      className: "low_spaces_para"
    },
    {
      isVideoLink: false,
      contentData: ["These are just a few to give you an idea but there are endless ways to advertise your business your budget and type of product or service will determine what suits your business best."],
      style: "None",
      tagType: "p",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false,
      className: ""
    },
    {
      isVideoLink: false,
      contentData: ["Click here"],
      style: "None",
      tagType: "a",
      href: "http://www.business.vic.gov.au/marketing-and-sales/increasing-sales-through-marketing/ways-to-advertise-your-business",
      isBold: false,
      isUnderLine: true,
      isLink: false,
      isList: false,
      className: ""
    },
    {
      isVideoLink: false,
      contentData: [" for further helpful information on advertising your business."],
      style: "None",
      tagType: "span",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false,
      className: ""
    },
    {
      isVideoLink: false,
      contentData: [" "],
      style: "None",
      tagType: "p",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false,
      className: ""
    },
    {
      isVideoLink: false,
      contentData: ["http://www.business.vic.gov.au/marketing-and-sales/increasing-sales-through-marketing/ways-to-advertise-your-business"],
      style: "None",
      tagType: "a",
      isBold: false,
      isUnderLine: false,
      isLink: true,
      isList: false
    },
    {
      isVideoLink: false,
      contentData: ["It is important to know that in Australia we have The Australian Consumer Law that regulates the ways in which we can advertise and to ensure that our advertising is fair and honest. To read more about these laws click below."],
      style: "None",
      tagType: "p",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false
    },
    {
      isVideoLink: false,
      contentData: ["https://www.accc.gov.au/business/advertising-promoting-your-business"],
      style: "None",
      tagType: "a",
      isBold: false,
      isUnderLine: false,
      isLink: true,
      isList: false
    },
    {
      isVideoLink: false,
      contentData: ["",""],
      style: "None",
      tagType: "br",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false
    },
  ]
  },
  //content stored for step 11
  {
  title: "Get help & support",
  id: 10,
  stepName: "Step 11",
  contentList: [
    {
      isVideoLink: false,
      contentData: ["Starting a business for the first time usually means there’s a lot to learn and we sometimes need help with parts of setting up a business that we might not have much experience with. The good news is that there is so much help and support available for almost every aspect of your business so you don’t have to do it alone.", "The even better news is that most of the help and support available can be found locally in your area, is low cost and in some cases even free.", "A great place to start is with your closest Learn Local training centre. Learn Local organisations offer government subsidised short courses and workshops. With more Learn Local’s across Victoria than there is McDonald’s you're sure to find one near you. Click here to find your nearest Learn Local."],
      style: "None",
      tagType: "p",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false
    },
    {
      isVideoLink: false,
      contentData: ["http://learnlocal.org.au/"],
      style: "None",
      tagType: "a",
      isBold: false,
      isUnderLine: false,
      isLink: true,
      isList: false
    },
    {
      isVideoLink: false,
      contentData: [" "],
      style: "None",
      tagType: "p",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false
    },

    {
      isVideoLink: false,
      contentData: ["Your local council can help with training as well. The Knox council economic and development department offers help and support through their KnoxBiz website.  "],
      style: "None",
      tagType: "span",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false
    },
    {
      isVideoLink: false,
      contentData: ["https://www.knoxbiz.com.au/Pub/pStart.asp"],
      style: "None",
      tagType: "a",
      isBold: false,
      isUnderLine: false,
      isLink: true,
      isList: false
    },
    {
      isVideoLink: false,
      contentData: [" Knoxbiz can help to find local low cost business workshops, courses and information."],
      style: "None",
      tagType: "span",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false
    },
    {
      isVideoLink: false,
      contentData: [" "],
      style: "None",
      tagType: "p",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false
    },
    {
      isVideoLink: false,
      contentData: ["Another great resource to learn about various small businesses topics is at Business Victoria. Business Victoria provides lots of seminars, webinars, workshops, events and even mentoring sessions available across Victoria. For a list of workshops and seminars available you can "],
      style: "None",
      tagType: "span",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false
    },
    {
      isVideoLink: false,
      contentData: ["click here"],
      style: "None",
      tagType: "span",
      isBold: false,
      isUnderLine: true,
      href: "http://www.business.vic.gov.au/events",
      isLink: false,
      isList: false
    },
    {
      isVideoLink: false,
      contentData: [" or call Business Victoria on "],
      style: "None",
      tagType: "span",
      isBold: true,
      isUnderLine: false,
      isLink: false,
      isList: false
    },
    {
      isVideoLink: false,
      contentData: [" 132215 "],
      style: "None",
      tagType: "span",
      isBold: true,
      isUnderLine: false,
      isLink: false,
      isList: false
    },
    {
      isVideoLink: false,
      contentData: ["http://www.business.vic.gov.au/events"],
      style: "None",
      tagType: "a",
      isBold: false,
      isUnderLine: false,
      isLink: true,
      isList: false
    },
  ]
  },
  //content stored for step 12
  {
    title: 'Hiring & training staff',
    id: 11,
    stepName: "Step 12",
    contentList: [
      {
        isVideoLink: false,
        contentData: ["Employees should be a business’s greatest resource. Therefore, hiring the right staff is vital. Great employees can help to grow a business and contribute to its success and reputation as well as making your life easier.  However, employees who are not suited to the job, do not have the skills or knowledge needed, or do not have good work ethic can have the opposite effect on your business. So, you want to make sure the people you hire have the right skills and knowledge to do the job well and in a safe manner. To help them to do this, you have to take the time to train them properly so they understand everything you need them to do and how you need them to do it so the job can get done properly and safely. You also want people who work for you to be trustworthy, honest, reliable and punctual so you may want to put some time and effort into choosing the right person for the job."],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["As we have a great deal of legislation governing how we employe, manage, pay and dismiss staff in Australia we want to make sure we get it right.  The Fair Work Act 2009 is the law that regulates nearly all areas of the workplace in regards to employing staff.  The National Employment Standards (NES) are the minimum standards that you will need to provide to your staff under this law.  The Fair work website"],
        style: "None",
        tagType: "span",
        isBsold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [" www.fairwork.gov.au"],
        style: "None",
        tagType: "a",
        isBold: false,
        isUnderLine: false,
        isLink: true,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [" will have lots of tools, templates and information to help with every aspect of hiring employees."],
        style: "None",
        tagType: "span",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["",""],
        style: "None",
        tagType: "br",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["Thinkbiz highly recommends that you read the Fair Work guide to hiring new staff."],
        style: "None",
        tagType: "span",
        isBold: true,
        isUnderLine: false,
        isLink: false,
        isList: false,
      },
      {
        isVideoLink: false,
        contentData: [" It outlines all the basics of what you need to know before you hire anyone.  It is a simple to read document written to help small business understand their legal obligations when employing staff."],
        style: "None",
        tagType: "span",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
      },
      {
        isVideoLink: false,
        contentData: ["",""],
        style: "None",
        tagType: "br",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["To read the guide to hiring new staff"],
        style: "None",
        tagType: "span",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [" click on the link below."],
        style: "None",
        tagType: "span",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [""],
        style: "None",
        tagType: "br",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["https://www.fairwork.gov.au/ArticleDocuments/712/a-guide-to-hiring-new-employees.docx.aspx"],
        style: "None",
        tagType: "a",
        isBold: false,
        isUnderLine: false,
        isLink: true,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["",""],
        style: "None",
        tagType: "br",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["If you are considering"],
        style: "None",
        tagType: "span",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [" hiring an apprentice"],
        style: "None",
        tagType: "span",
        isBold: true,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [" click here."],
        style: "None",
        tagType: "a",
        isBold: false,
        href: "https://www.fairwork.gov.au/ArticleDocuments/712/guide-to-taking-on-an-apprentice.docx.aspx",
        isUnderLine: true,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [""],
        style: "None",
        tagType: "br",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["https://www.fairwork.gov.au/ArticleDocuments/712/guide-to-taking-on-an-apprentice.docx.aspx"],
        style: "None",
        tagType: "a",
        isBold: false,
        isUnderLine: false,
        isLink: true,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["",""],
        style: "None",
        tagType: "br",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["To help you to work out the"],
        style: "None",
        tagType: "span",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [" correct amount of money you will need to pay your staff"],
        style: "None",
        tagType: "span",
        isBold: true,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [" you can use the wage calculator provided by Australian Fair Work."],
        style: "None",
        tagType: "span",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [""],
        style: "None",
        tagType: "br",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["https://calculate.fairwork.gov.au/FindYourAward"],
        style: "None",
        tagType: "a",
        isBold: false,
        isUnderLine: false,
        isLink: true,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["",""],
        style: "None",
        tagType: "br",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["You will also need to think about what"],
        style: "None",
        tagType: "span",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [" superannuation payments "],
        style: "None",
        tagType: "span",
        isBold: true,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["you may need to make on behalf of your employees.  To find out if you will be required to make these payments click on the link below."],
        style: "None",
        tagType: "span",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [""],
        style: "None",
        tagType: "br",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["https://www.fairwork.gov.au/pay/tax-and-superannuation"],
        style: "None",
        tagType: "a",
        isBold: false,
        isUnderLine: false,
        isLink: true,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["",""],
        style: "None",
        tagType: "br",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["There are also tax requirements that you will need to abide by when employing staff."],
        style: "None",
        tagType: "span",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [" ThinkBiz highly recommends"],
        style: "None",
        tagType: "span",
        isBold: true,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [" getting advice from your accountant on making sure you do this correctly to meet all your legal tax obligations and keep the correct records."],
        style: "None",
        tagType: "span",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["",""],
        style: "None",
        tagType: "br",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [" To watch a short video on the"],
        style: "None",
        tagType: "span",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [" tax requirements of employing staff "],
        style: "None",
        tagType: "span",
        isBold: true,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [" click here."],
        style: "None",
        tagType: "a",
        href: "https://www.youtube.com/watch?v=BUojpXYRtnk",
        isBold: false,
        isUnderLine: true,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [""],
        style: "None",
        tagType: "br",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["https://www.youtube.com/watch?v=BUojpXYRtnk"],
        style: "None",
        tagType: "a",
        isBold: false,
        isUnderLine: false,
        isLink: true,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["",""],
        style: "None",
        tagType: "br",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["Keeping your workers and your workplace safe"],
        style: "None",
        tagType: "span",
        isBold: true,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [" is extremely important and taken very seriously in Australia.  When you employ staff you will need to apply for"],
        style: "None",
        tagType: "span",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [" workers compensation insurance"],
        style: "None",
        tagType: "span",
        isBold: true,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["and pay this insurance to cover your employees for any accidents or injuries that may occur at work."],
        style: "None",
        tagType: "span",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [""],
        style: "None",
        tagType: "br",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["For more information on workers compensation insurance click here."],
        style: "None",
        tagType: "span",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [""],
        style: "None",
        tagType: "br",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["https://www.fairwork.gov.au/leave/workers-compensation"],
        style: "None",
        tagType: "a",
        isBold: false,
        isUnderLine: false,
        isLink: true,
        isList: false
      },
    ]
  },
  {
    title: "Registrations, permits & licences",
    id: 7,
    stepName: "Step 8",
    contentList: [
      {
      isVideoLink: false,
      contentData: ["Besides the various taxation registrations required for business as discussed in Step 3, there are numerous types of registrations, permits and licences required in Victoria to set up and operate your business legally.  Some businesses require more registrations, permits and licences than others.  Some businesses may only have registrations required and may not require any permits or licences."],
      style: "None",
      tagType: "p",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false
      },
      {
      isVideoLink: false,
      contentData: ["What type of registrations, permits and licences you require for your business depends on a wide range of things such as:"],
      style: "None",
      tagType: "p",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false
      },
      {
      isVideoLink: false,
      contentData: ["What your business does", "How it is set up", "Where you're going to operate your business from", "If you are buying and selling goods from overseas", "If you are providing a service to customers/clients and what that service involves", "If the service requires a qualification to perform the service", "Whether you are going to employ people or not", "If you are going to have any effect on the environment"],
      style: "None",
      tagType: "ul",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: true
      },
      {
      isVideoLink: false,
      contentData: ["These are just to name a few. There are many, many more variables that make a difference to what your business will specifically require.  The Australian Business Licence and Information Service (ABLIS) is a government service that provides information on determining what registrations, permits and licences are needed for different businesses."],
      style: "None",
      tagType: "p",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false
      },
      {
        isVideoLink: false,
        contentData: ["ThinkBiz highly recommends "],
        style: "None",
        tagType: "span",
        isBold: true,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["you "],
        style: "None",
        tagType: "span",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["click here"],
        style: "None",
        tagType: "a",
        isBold: false,
        href: "https://ablis.business.gov.au/search/activity",
        isUnderLine: true,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [" and go to the Australian Business Licence and Information Service (ABLIS) and complete the activity that will help you to learn exactly what your business will need."],
        style: "None",
        tagType: "span",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [" "],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
      isVideoLink: false,
      contentData: ["https://ablis.business.gov.au/search/activity"],
      style: "None",
      tagType: "a",
      isBold: false,
      isUnderLine: false,
      isLink: true,
      isList: false
      },
      {
        isVideoLink: false,
        contentData: [" "],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["You can also find more really helpful information to assist with registrations, permits and licences by "],
        style: "None",
        tagType: "span",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["clicking on the link below"],
        style: "None",
        tagType: "a",
        href: "https://www.vic.gov.au/business-industry/business-practice-management/registration-permits-licences.html",
        isBold: false,
        isUnderLine: true,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [" "],
        style: "None",
        tagType: "p",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: "low_spaces_para"
      },
      {
        isVideoLink: false,
        contentData: ["https://www.vic.gov.au/business-industry/business-practice-management/registration-permits-licences.html"],
        style: "None",
        tagType: "a",
        isBold: false,
        isUnderLine: false,
        isLink: true,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["",""],
        style: "None",
        tagType: "br",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
    ]
  },
  //content stored for step 9
  {
    title: "Decide where your business will operate",
    id: 8,
    stepName: "Step 9",
    contentList: [
      {
      isVideoLink: false,
      contentData: ["Working out the best place to operate your business will be determined by many factors, the most important being the type of business you want to have."],
      style: "None",
      tagType: "p",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false
      },
      {
      isVideoLink: false,
      contentData: ["Business types such as an online business, a trade working on site, making a product yourself to sell, providing a personal service such as consulting, counselling and wellbeing, or a service such as massage, beauty or hair dressing, then working from home would probably be the cheapest, easiest and most convenient place to work from."],
      style: "None",
      tagType: "p",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false
      },
      {
      isVideoLink: false,
      contentData: ["However, if you want to sell a product that needs to be manufactured on a bigger scale or open a restaurant, shop, holiday accommodation or sell a professional service that needs an office or showroom, then you will have lots to consider when looking for a building away from your home."],
      style: "None",
      tagType: "p",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false
      },
      {
      isVideoLink: false,
      contentData: ["You will have to think of things such as :"],
      style: "None",
      tagType: "p",
      isBold: false,
      isUnderLine: false,
      isLink: false,
      isList: false,
        className: "low_spaces_para"
      },
      {
        isVideoLink: false,
        contentData: [" How much space you need?" , "What kind of space?", "Where is the best location?", "Is the location accessible to your customers, is there public transport nearby?", "Is there parking available for your customers?", "Is it near the customers you want to attract?", "Is it too close to competition?", "Does the location suit your business type and image?", "Is the location practical to travel to everyday?", "Will you need a permit to carry out your business at that location?", "Would there be issues with your business operation and the local council?", "Will you buy or lease an existing building, factory, shop or office etc...?", "Is the space set up to be safe for you and or employees to operate from?", "Will you have to make modifications to the premises or extend?", "Is it possible to extend the premises in the future if needed?", "Will you need a planning or building permit to carry out any works on the premises?", "How much will it costs to prepare the premises to get it to what you need to it to be?", "Will you have to buy land and build what you need on it?", "What costs and timeframes would be involved in a new build?"],
        style: "None",
        tagType: "ul",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: true,
        className: "low_spaces_para"
      },
      {
        isVideoLink: false,
        contentData: ["As you can see, choosing the right base for your business needs a lot of thought, research and planning before you decide. "],
        style: "None",
        tagType: "span",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["Click here"],
        style: "None",
        href: "https://knowyourcouncil.vic.gov.au/",
        tagType: "a",
        isBold: false,
        isUnderLine: true,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: [" to help with researching the planning, permits, building possibilities and safety of the premises."],
        style: "None",
        tagType: "span",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["",""],
        style: "None",
        tagType: "br",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["Local council information "],
        style: "None",
        tagType: "p",
        isBold: true,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: "low_spaces_para"
      },
      {
        isVideoLink: false,
        contentData: ["https://knowyourcouncil.vic.gov.au/"],
        style: "None",
        tagType: "a",
        isBold: false,
        isUnderLine: false,
        isLink: true,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["",""],
        style: "None",
        tagType: "br",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["Planning and permits"],
        style: "None",
        tagType: "p",
        isBold: true,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: "low_spaces_para"
      },
      {
        isVideoLink: false,
        contentData: ["https://www.planning.vic.gov.au/permits-and-applications/do-i-need-a-permit"],
        style: "None",
        tagType: "a",
        isBold: false,
        isUnderLine: false,
        isLink: true,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["",""],
        style: "None",
        tagType: "br",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["Building"],
        style: "None",
        tagType: "p",
        isBold: true,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: "low_spaces_para"
      },
      {
        isVideoLink: false,
        contentData: ["https://consumer.etoolbox.buildingcommission.com.au/Pages/Search.aspx"],
        style: "None",
        tagType: "a",
        isBold: false,
        isUnderLine: false,
        isLink: true,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["",""],
        style: "None",
        tagType: "br",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["Safety"],
        style: "None",
        tagType: "p",
        isBold: true,
        isUnderLine: false,
        isLink: false,
        isList: false,
        className: "low_spaces_para"
      },
      {
        isVideoLink: false,
        contentData: ["http://www.worksafe.vic.gov.au/"],
        style: "None",
        tagType: "a",
        isBold: false,
        isUnderLine: false,
        isLink: true,
        isList: false
      },
      {
        isVideoLink: false,
        contentData: ["",""],
        style: "None",
        tagType: "br",
        isBold: false,
        isUnderLine: false,
        isLink: false,
        isList: false
      },
    ]
  },
];

/*

{
title: "Getting Started",
id: 0,
stepName: "Step 1",
contentList: [

]
},

{
  isVideoLink: false,
  contentData: [""],
  style: "None",
  tagType: "p",
  isBold: false,
  isUnderLine: false,
  isLink: false,
  isList: false
},

<iframe width="1440" height="540" src="https://www.youtube.com/embed/yZOF8bwLjPM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
*/
