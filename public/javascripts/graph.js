// create list of node positions

var main = {
    programs: {"name": "programs", "x": 4, "y": 4, "size": 1.4, "cat":"whole_main","description": "", "details":"", "access":"", "benefits":""},

    wholepersoncare: {"name": "wholepersoncare.gov", "x": 224, "y": 4, "size": 1.4, "cat":"whole_main","description": "A one-stop digital hub for clients and service workers that hosts easy to consume content on the front end that is supported by MEDS data on the back end.  This website will also host client profiles/vital ID statistics that will follow them through the system to aid in maintaining consistent care and access to city services.", "details":"", "access":"wpc.com, wpc.com app, WPC Kiosk, toll free number (user will need to set up a PIN for access to PHI), and request by mail", "benefits":"Allows users to add information about themselves in one place. Keeps users informed of the services they're currently enrolled in. Provides a one-stop location for information online that is specifically written for this audience. Keeps people aware of upcoming appointments with a couple day's notice as a reminder. Houses all information regarding balances and all incentives providers. Provides information about frequently used, common service providers and locations in one place."}
}

var backInt = 1;

var backend = {
    serviceworkerportal: {"name": "service worker portal", "x": main.wholepersoncare.x, "y": main.wholepersoncare.y + 1.1, "size": 1.2, "cat":"whole_main","description": "", "details":"", "access":"wpc.com, wpc.com app, WPC Kiosk, toll free number", "benefits":"Provides a place where service workers can provide their information with as little or as much information as they're comfortable with sharing. A place to easily locate information about client status in the Medi-Cal/WPC service provider system, including a place to host details on what each status code means in lay terms that anyone working within the system can understand. Access to information to support their service work, in field, on the street with clients, or at their office. Documentation that has common service points that workers need to communicate with clients in one place that service workers can access."},

    clientportal: {"name": "client portal", "x": main.wholepersoncare.x, "y": main.wholepersoncare.y + 2, "size": 1.2, "cat":"whole_main","description": "", "details":"", "access":"", "benefits":""},

    kxcenter: {"name": "KX center", "x": main.wholepersoncare.x, "y": main.wholepersoncare.y + 3, "size": 1.2, "cat":"whole_main","description": "Easily accessible Information for community practitioners, pharmacists, and other service professionals who are participating in the gateway program for the Knowledge Center.", "details":"", "access":"wpc.com, wpc.com app, WPC Kiosk.", "benefits":"A  single location to send participating service locations so they can train and get information on serving the homeless population."},

    mycloudwallet: {"name": "my cloud wallet", "x": main.wholepersoncare.x, "y": main.wholepersoncare.y + 4, "size": 1.2, "cat":"whole_main","description": "", "details":"Houses documents for clients who are living in homelessness to help them access and retain documentation required to sign up for services and treatment programs associated with the Whole Care Program.", "access":"wpc.com, wpc.com app, WPC Kiosk, and request by mail through toll free number. ", "benefits":"Helps to reduce churn of trying to keep registering/having documents that take time to be mailed and overhead to deliver to clients and waiting the time it takes to get the documents to the clients, given their lack of reliable physical address. Identification follows the client wherever they are, and can be used or accessed by service professionals signing up clients for WPC services. Helps clients to focus on taking care of themselves instead of holding onto these important documents."}
}

var programs = {

    mymedical:{"name": "my medi cal", "x": main.programs.x, "y": main.programs.y + 3, "size": 1.2,"cat":"program_main","description": "", "details":"MyMedi-Cal is a unique Medi-Cal account for an individual to access Medi-Cal benefits and other associated privileges and store key information related to an individual’s health history. ", "access":"Homeless individuals obtain a MyMedi-Cal account when they register for Medi-Cal. Access to MyMedi-Cal could also be given when Medi-Cal renewal occurs.", "benefits":"The MyMedi-Cal system serves as a repository for benefits that could serve as incentives for Medi-Cal enrollment and renewal.  This account also serves as a ledger of an individual’s interaction with the health care/social service system so that appropriate parties/providers can be aware of and notified to give optimal care to an individual."},

    giftsthatmatter: {"name": "gifts that matter","class": "giftsthatmatter","x": 4,"y": 2,"size": 1.2,"cat": "program_main","description": "", "details":"With the Generosity app the general public is able to donate services to the homeless person based on their personal needs. With technologies such as MyMedi-Cal account or the MyAlert beacons in place, homeless individuals will have associated online accounts in place to track credits/money that can be used towards goods and services. These services could include haircuts, laundry, and rideshare services, clothing and apparel donations or classes or other educational opportunities.", "access":"Client can see the donations on their Gifts that matter account. Clients can access the account on their mobile phone or online.", "benefits":"Clients are being helped by the general public and are able to receive more services than they normally would be. The general public can target their help to a specific person and know their contribution is helping someone. The online account also serves as a database to understand demand for goods and services that a homeless individual might want or need. "},

    mybeaconalert:{"name": "my beacon alert", "x": 4, "y": 4, "size": 1.2,"cat":"program_main","description": "", "details":"MyAlert Beacon is a simple wearable device that enables an individual to be alerted at key times related to health care and social service access.", "access":"Homeless individuals could receive a MyAlert Beacon from their caseworker or when they enroll or renew Medi-Cal.", "benefits":"The MyAlert Beacon could function as a simple and easy to use notification device for homeless that do not have smart phones and do not regularly check email/social media.  For some clients who have limited technical abilities, MyAlert could serve as an essential connection to health and social services."},

    connectedcaseworker:{"name": "connected caseworker", "x": 4, "y": 6, "size": 1.2,"cat":"program_main","description": "", "details":"The Connected Casework initiative provides caseworkers, in the field and in the office, the tools, access, and communication channels they need to enroll individuals in Medi-Cal.", "access":"The intention of the Connected Casework initiative is to go to the client, to help the homeless population where they are. ", "benefits":"Providing digital and print aids to caseworkers and homeless individuals will help to clarify and demystify the Medi-Cal enrollment process.  Giving the right tools and access to caseworkers will aid the enrollment process."},

    networkofcare:{"name": "Network of Care", "x": 4, "y": 8, "size": 1.2,"cat":"program_main","description": "", "details":"Knowledge centers are gateways for individuals to find information about, enroll in, and renew Medi-Cal. Shelters, Navigation Centers, pharmacies and libraries could all serve as knowledge centers.", "access":"The concept behind Knowledge Centers is to broaden the number of access points where individuals can find information about Medi-Cal. These places could be established inexpensively, leveraging existing places like libraries and shelters where peer navigators often go. Navigation Centers could also be part of the Knowledge Center Network.", "benefits":"Knowledge Centers will expand the physical footprint of places where homeless individuals can go to get information about Medi-Cal. Ultimately this expands the number of touchpoints, both physical and digital, where individuals can learn more about the Medi-Cal system potentially increasing the number of enrollees and decreasing the number of dropped renewals."},

    forgetmenot:{"name": "forget me not", "x": 4, "y": 10, "size": 1.2, "cat":"program_main","description": "", "details":"The Forget-Me-Not program establishes a permanent association** with a homeless individual.  This is to ensure that if a person becomes homeless again, that their case will be assigned to their previous case worker. The Whole Person Care Family is always there for support when former clients need them.", "access":"wpc.com, wpc.com app, WPC Kiosk, toll free number (user will need to set up a PIN for access to PHI), and request info by mail", "benefits":"As case workers have broad knowledge of an individual’s health and wellness they would permanently have access to a specific homeless individual’s data to provide continuity within the Whole Person Care plan. The Forget-Me-Not program would ensure that expertise on certain homeless individuals is retained to optimally leverage institutional knowledge."}
}

// program_init[0]

var idx = 0;
for(thing in program_init) {
    thing.y = pr
}

var program_init = {

    // my Medi-Cal
    myincentives: {"name": "incentives", "x": main.programs.x, "y": programs.mymedical.y + 3, "size": 1.1,"cat":"program_init",
    "description": "The City of San Francisco could create partnerships with public organizations such as Metropolitan Transportation Commission (Clipper Card) or private entities such as Safeway. With these relationships created, homeless individuals could be incentivized to enroll in Medi-Cal. Benefits could also be given when an individual renews Medi-Cal even if this renewal is automatic. Additional benefits could be associated with the Gifts that Matter program."},

    myadditionalnotification: {"name": "additional notifications",
    "x": main.programs.x,
    "y": main.programs.y + 3,
    "size": 1.1,"cat":"program_init",
    "description": "Information regarding donations (e.g. the Gifts that Matter program)."},

    mymedicalstatusnotes: {"name": "medi-cal status notes",
    "x": main.programs.x,
    "y": main.programs.y + 3,
    "size": 1.1,"cat":"program_init",
    "description": "Important notes about an individual’s specific health and behavior health needs are created and stored here to ensure that other health care providers or caseworkers will be aware of any unique conditions affecting a person’s well-being."},

    myappointmentnotifications: {"name": "future appointment notifications",
    "x": main.programs.x,
    "y": main.programs.y + 5,
    "size": 1.1,"cat":"program_init",
    "description": "Appointment Notifications are an automated system for contacting MyMedi-Cal account holders for important upcoming appointments. As many MyMedi-Cal users also have smart phones and/or email access, email is the primary method of communication. However, if an individual “opts-in” and provides other contact information, automated phone messages, text messages and Facebook messenger could be additional methods of contacting individuals. These notifications could also be used to contact an individual if there are problems encountered in Medi-Cal renewal."},

    mypastappointments: {"name": "past appointments", "x": main.programs.x, "y":  main.programs.y + 3, "size": 1.1,"cat":"program_init",
    "description": "A record of an individual’s interactions with health care, behavioral health, and social service providers is recorded and able to be accessed by health care providers and caseworkers. "},

    mybolo: {"name": "BOLO",
    "x": main.programs.x,
    "y": main.programs.y + 8 ,
    "size": 1.1,"cat":"program_init",
    "description": "Should an individual with specific health care needs that are a priority to address access any point in the health care or social service system a specific BOLO alert will be triggered. This BOLO alert will remind a health care/social service provider about an individual’s priority needs. The provider will then take appropriate steps to direct the homeless individual to the appropriate next step/provider. The provider will also document when and where and individual has accessed the health care/social service system. BOLO alerts could also be triggered if an individual has access the health care/social service system for the first time in XX (18?) months as part of the Forget Me Not program."},

    //gifts that matter
    beaconnotifications: {
        "name": "app/beacon notifications",
        "x": main.programs.x,
        "y": main.programs.y + 10,
        "size": 1.1,
        "cat": "program_init" ,
        "description": "With the use of a Gifts that matter app, individuals can make donations so that homeless individuals can purchase the goods and services they have listed on their account. The client can access their account, edit their service needs wish list, receive, redeem and track their donations."
    },
    dropofflocations: {
        "name": "drop-off locations",
        "x": main.programs.x,
        "y": main.programs.y + 3,
        "size": 1.1,
        "cat": "program_init" ,
        "description": "Homeless individuals can retrieve the donated goods and services from shelters, navigation centers or partner community-based organizations. They need to pick a donation pick-up location on their Gifts that matter account. The case workers at the chosen location has access to donations database and can direct the donation to the right client. These pick-up points will serve as an opportunity for city employees to check on Medi-Cal enrollment or the general health status of a client."
    },

    account: {
        "name": "account",
        "x": main.programs.x,
        "y": main.programs.y + 5,
        "size": 1.1,
        "cat": "program_init" ,
        "description": "Homeless individuals can retrieve the donated goods and services from shelters, navigation centers or partner community-based organizations. They need to pick a donation pick-up location on their Gifts that matter account. The case workers at the chosen location has access to donations database and can direct the donation to the right client. These pick-up points will serve as an opportunity for city employees to check on Medi-Cal enrollment or the general health status of a client."
    },

    optinproximity: {
        "name": "opt-in proximity alerts",
        "x": main.programs.x,
        "y": main.programs.y + 8,
        "size": 1.1,
        "cat": "program_init" ,
        "description": "Homeless individuals can retrieve the donated goods and services from shelters, navigation centers or partner community-based organizations. They need to pick a donation pick-up location on their Gifts that matter account. The case workers at the chosen location has access to donations database and can direct the donation to the right client. These pick-up points will serve as an opportunity for city employees to check on Medi-Cal enrollment or the general health status of a client."
    },

    // my beacon alert
    onewaynoti: {"name": "1-way notification status",
    "x": main.programs.x,
    "y": main.programs.y + randInt,
    "size": 1.1,"cat":"program_init",
    "description": "Individuals wearing a MyAlert Beacon could be notified by caseworkers at critical times.  These alerts could be displayed on a small simple screen (e.g. a pager) or indicated by a simple blinking light, which would require an individual to call a specific number to hear an automated message. These messages could also communicate that a donation has been given via the Gifts that Matter program. This would show that a homeless individual would need to meet with their caseworker to pick up the gift. "},

    qrcode: {"name": "QR code",
    "x": main.programs.x,
    "y": main.programs.y,
    "size": 1.1,"cat":"program_init",
    "description": "The MyAlert Beacon functions like a State of California Benefits Access/MyMedi-Cal card. A homeless individual can scan the beacon at locations like pharmacies to have their MyMedi-Cal account accessed. "},

    //connected case worker
    mymedicalaccess: {"name": "my medi-cal access", "x": main.programs.x, "y": main.programs.y, "size": 1.1,"cat":"program_init",
    "description": "Caseworkers should be able to access key areas of the wpc.com website to get information on enrollment status, check-in status, BOLO alerts, and the caseworker wiki. "},

    enrollmentcapabilities: {"name": "enrollment capabilities",
    "x": main.programs.x,
    "y": main.programs.y,
    "size": 1.1,"cat":"program_init",
    "description": "Ideally, caseworkers should be able to enroll homeless individuals where they are and engage them whether it is in the office or on the street. "},

    infopackages: {"name": "info packages",
    "x": main.programs.x,
    "y": main.programs.y,
    "size": 1.1,
    "cat":"program_init",
    "description": "Caseworkers would be equipped with information packets for distribution in the field. These would include critical phone numbers, websites, and email addresses needed for enrolling in Medi-Cal. Part of this information packet would be a partially populated map showing key points of access for Medi-Cal information and services. This map could be modified, drawn on, and written on by homeless individuals so they can highlight the key Medi-Cal touchpoints. Some of these Medi-Cal touchpoints could include Knowledge Centers."},

    cheatsheets: {"name": "cheat sheets",
    "x": main.programs.x,
    "y": main.programs.y,
    "size": 1.1,"cat":"program_init",
    "description": "The enrollment cheat sheet is a brochure/website that can be used by caseworkers working onsite. It provides answers to commonly asked questions, information on systems and tools (such as mywpc.gov) as well as phone numbers and contact information for individuals who can help with the Medi-Cal enrollment process. "},

    toolsandtech: {"name": "tools & technology",
    "x": main.programs.x,
    "y": main.programs.y,
    "size": 1.1,"cat":"program_init",
    "description": "Caseworkers should have the right tools and technology to do their job wherever and whenever they need to.  Providing tablets for easy mobility and Wi-Fi hotspots for essential online access in critical to enabling caseworkers to get their jobs done."},


    //network of care
    dotcomconnectivity: {"name": "my whole person care.com connectivity",
    "x": main.programs.x,
    "y": main.programs.y,
    "size": 1.1,"cat":"program_init",
    "description": "In addition to having cheat sheets and information packets, SMEs might be able to connect to a portal on wpc.com that enables them to access the Knowledge Center Hub, which has information about Medi-Cal enrollment, renewal or other information about health and social services."},

    onsitesmes: {"name": "onsite SMEs", "x": main.programs.x, "y": main.programs.y,"size": 1.1,"cat":"program_init",
    "description": "Each Knowledge Center would need at least one subject matter expert who is knowledgeable in the Medi-Cal enrollment and renewal process. These individuals could be equipped with cheat sheets and information packets like the ones individuals use in the field."},


    //forget me not
    caseworkernotifi: {"name": "notification system for case workers",
    "x": main.programs.x,
    "y": main.programs.y,
    "size": 1.1,"cat":"program_init",
    "description": "Case workers would be notified should an individual touch a portion of the system after a period of inactivity. MyMedi-Cal Card Incentives/Gifts That Matter Program use would trigger the notification system that a client has been active in the system. A period of inactivity to be determined by the WPC Service Leads (DPH, DHSH, DHS). Records will be held on file indefinitely regardless of opt in or out of system to recover any files should the client return to homelessness. "},

    permrecordkeeping: {"name": "permanent record keeping",
    "x": main.programs.x,
    "y": main.programs.y,
    "size": 1.1,"cat":"program_init",
    "description": "If a person becomes housed they would have the option to make an update on wholepersoncare.gov (or wpc.gov) to opt out of the active system, but would remain archived and attached with their specific case worker. If the original caseworker leaves their post, they would transition their case and follow specific protocols to ensure this has been communicated to the client and that they know who has taken over their case and who to reach out to for assistance. "},

    //service worker portal
    serviceadditionalnotification: {"name": "additional notification", "x": main.wholepersoncare.x, "y": main.wholepersoncare.y + randInt, "size": 1.1,"cat":"whole_init",
    "description": ""},

    medicalstatusnotes: {"name": "service medi-cal status notes", "x": main.wholepersoncare.x, "y": main.wholepersoncare.y, "size": 1.1,"cat":"whole_init",
    "description": "Allows service workers to check Medi-Cal status for their clients, along with status, account information, and balances for other agencies participating in WPC Program"},

    appointmentnotifications: {"name": "appointment notifications", "x": main.wholepersoncare.x, "y": main.wholepersoncare.y + randInt, "size": 1.1,"cat":"whole_init",
    "description": "Appointment Notifications are an automated system for contacting MyMedi-Cal account holders for important upcoming appointments. As many MyMedi-Cal users also have smart phones and/or email access, email is the primary method of communication. However, if an individual “opts-in” and provides other contact information, automated phone messages, text messages and Facebook messenger could be additional methods of contacting individuals. These notifications could also be used to contact an individual if there are problems encountered in Medi-Cal renewal. "},

    pastappointmentnotes: {"name": "past appointment notes", "x": main.wholepersoncare.x, "y": main.wholepersoncare.y + randInt, "size": 1.1,"cat":"whole_init",
    "description": "A record of an individual’s interactions with health care, behavioral health, and social service providers is recorded and able to be accessed by health care providers and caseworkers. "},

    checkinstatus: {"name": "check-in status", "x": main.wholepersoncare.x, "y": main.wholepersoncare.y + randInt, "size": 1.1,"cat":"whole_init",
    "description": "Should an individual with specific health care needs that are a priority to address access any point in the health care or social service system a specific BOLO alert will be triggered. This BOLO alert will remind a health care/social service provider about an individual’s priority needs. The provider will then take appropriate steps to direct the homeless individual to the appropriate next step/provider. The provider will also document when and where and individual has accessed the health care/social service system.  BOLO alerts could also be triggered if an individual has access the health care/social service system for the first time in XX (18?) months as part of the Forget Me Not program."},

    servicewiki: {"name": "wiki", "x": main.wholepersoncare.x, "y": main.wholepersoncare.y + randInt, "size": 1.1,"cat":"whole_init",
    "description": "Contains easy-to-find general information about service locations, and other information such as information on General Delivery, Food, Legal, Veterans and other homelessness related services (with search functionality) to help refer clients to the right programs."},

    servicecheatsheet: {"name": "cheat sheet", "x": main.wholepersoncare.x, "y": main.wholepersoncare.y + randInt, "size": 1.1,"cat":"whole_init",
    "description": "The service worker portal also provides a glossary of cheat sheets. This glossary has easy to find information regarding information to help service workers with the information they need on who to call, including frequently recommended service locations in one place."},

    donationalert: {"name": "donation alert", "x": main.wholepersoncare.x, "y": main.wholepersoncare.y + randInt, "size": 1.1,"cat":"whole_init",
    "description": "Donation Alerts are managed through wholepersoncare.gov.  When individuals make donations to homeless individuals though the app, they are notified either through the My Medi-Cal app or the My Beacon one way notification alert."},

    incentivenotification: {"name": "incentive notification", "x": main.wholepersoncare.x, "y": main.wholepersoncare.y + randInt, "size": 1.1,"cat":"whole_init",
    "description": "Incentives for maintaining Medi-Cal are communicated via the My Medi-Cal app or the My Beacon one way notification alert."},

    myalertbeacon: {"name": "my alert beacon", "x": main.wholepersoncare.x, "y": backend.serviceworkerportal.y + randInt, "size": 1.1,"cat":"whole_init",
    "description": "Caseworkers can alert individuals via the MyAlert beacon to keep them updated about Medi-Cal status or important health notifications."},

    //client portal
    userprofile: {"name": "user profile", "x": main.wholepersoncare.x, "y": backend.clientportal.y + randInt, "size": 1.1,"cat":"whole_init",
    "description": "Allows client to add a user profile to include as much or as little information as they'd like to include about themselves, including chronic conditions, and nearby relatives."},

    statustool: {"name": "status tool", "x": main.wholepersoncare.x, "y": backend.clientportal.y + randInt, "size": 1.1,"cat":"whole_init",
    "description": "Allows users to check their Medi-Cal status, along with status and general account information"},

    clientwiki: {"name": "client wiki", "x": main.wholepersoncare.x, "y": backend.clientportal.y + randInt, "size": 1.1,"cat":"whole_init",
    "description": "Contains easy-to-navigate general information about service locations, and other information such as information on Shelters, Navigation Centers, Treatment Centers, General Delivery, Food, Legal, Veterans Affairs, and other homelessness related services (with search functionality)"},

    notificationsdashboard: {"name": "notifications dashboard", "x": main.wholepersoncare.x, "y": backend.clientportal.y + randInt, "size": 1.1,"cat":"whole_init",
    "description": "When clients have upcoming appointments or deadlines to submit documentation with any service provider that is part of the Whole Person Care Program, they are notified of the time, location, or other relevant details.  Notifications are viewable on their account dashboard and a notification is sent via their preferred communication platform** 2 days in advance of the appointment or deadline."},

    incentivesprogramdashboard: {"name": "incentives program dashboard", "x": main.wholepersoncare.x, "y": backend.clientportal.y + randInt, "size":1.1,"cat":"whole_init",
    "description": "Contains information about account balances for any incentive programs individuals are participating in, such as balance, desired items, etc. "},

    digitalinformationhub: {"name": "digital information hub", "x": main.wholepersoncare.x, "y": backend.clientportal.y + randInt, "size": 1.1,"cat":"whole_init",
    "description": "Provides info guides with information about services in the WPC program are available with contact information on how to access services."},

    //kx center
    wikiforsmes: {"name": "wiki for SMEs", "x": main.wholepersoncare.x, "y": backend.kxcenter.y + randInt, "size": 1.1,"cat":"whole_init",
    "description": "The Wiki for Subject Matter Experts provides basic information about the Medi-Cal system enabling SMEs to advise individuals seeking to maintain Medi-Cal coverage or enroll for the first time."},

    //my cloud wallet
    birthcertificate: {"name": "birth certificate", "x": main.wholepersoncare.x, "y": backend.mycloudwallet.y + randInt, "size": 1.1,"cat":"whole_init",
    "description": ""},

    californiaid: {"name": "california ID", "x": main.wholepersoncare.x, "y": backend.mycloudwallet.y + randInt, "size": 1.1,"cat":"whole_init",
    "description": ""},

    ssn: {"name": "social security card", "x": main.wholepersoncare.x, "y": backend.mycloudwallet.y + randInt, "size": 1.1,"cat":"whole_init",
    "description": ""},

    esignature: {"name": "electronic signature", "x": main.wholepersoncare.x, "y": backend.mycloudwallet.y + randInt, "size": 1.1,"cat":"whole_init",
    "description": ""},

    biometricid: {"name": "biometric ID", "x": main.wholepersoncare.x, "y": backend.mycloudwallet.y + randInt, "size": 1.1,"cat":"whole_init",
    "description": ""},

    temp:{"name": "temp", "x": main.wholepersoncare.x, "y": backend.mycloudwallet.y + randInt, "size": 1,"cat":"temp",
    "description": ""}
}

var randInt = 1;

var backendpositions = [

    main.wholepersoncare,
    backend.serviceworkerportal,
    program_init.serviceadditionalnotification,
    program_init.medicalstatusnotes,
    program_init.appointmentnotifications,
    program_init.pastappointmentnotes,
    program_init.checkinstatus,
    program_init.servicewiki,
    program_init.servicecheatsheet,
    program_init.donationalert,
    program_init.incentivenotification,
    program_init.myalertbeacon,

    backend.clientportal,
    program_init.userprofile,
    program_init.statustool,
    program_init.clientwiki,
    program_init.notificationsdashboard,
    program_init.incentivesprogramdashboard,
    program_init.digitalinformationhub,

    backend.kxcenter,
    program_init.wikiforsmes,

    backend.mycloudwallet,
    program_init.birthcertificate,
    program_init.californiaid,
    program_init.ssn,
    program_init.esignature,
    program_init.biometricid,
]

var programspositions = [

    main.programs,
    programs.mymedical,
    program_init.mymedicalstatusnotes,
    program_init.myappointmentnotifications,
    program_init.mybolo,
    program_init.myadditionalnotification,
    program_init.mypastappointments,

    programs.giftsthatmatter,
    program_init.beaconnotifications,
    program_init.dropofflocations,

    programs.mybeaconalert,
    program_init.onewaynoti,
    program_init.qrcode,

    programs.connectedcaseworker,
    program_init.mymedicalaccess,
    program_init.enrollmentcapabilities,
    program_init.infopackages,
    program_init.cheatsheets,
    program_init.toolsandtech,

    programs.networkofcare,
    program_init.dotcomconnectivity,
    program_init.onsitesmes,

    programs.forgetmenot,
    program_init.caseworkernotifi,
    program_init.permrecordkeeping


]

// Object.keys(backend).forEach(function(key){
//     positions.push(backend[key]);
// })

var spacing = 8

backendpositions = backendpositions.map(function(pos, i){
    pos.y = main.wholepersoncare.y + ((i)*spacing);
    return pos;
})

programspositions = programspositions.map(function(pos, i){
    pos.y = main.programs.y + ((i)*spacing);
    return pos;
})

positions = backendpositions.concat(programspositions)
positions.push(program_init.temp)
// console.log(positions);

var connectionsTemp = [
    //connected caseworker
    {"source": program_init.servicecheatsheet,"target": program_init.cheatsheets},
    {"source": program_init.mymedicalaccess,"target": program_init.medicalstatusnotes},
    {"source": program_init.mymedicalaccess,"target": program_init.appointmentnotifications},
    {"source": program_init.mymedicalaccess,"target": program_init.pastappointmentnotes},
    {"source": program_init.mymedicalaccess,"target": program_init.checkinstatus},
    {"source": program_init.mymedicalaccess,"target": program_init.myalertbeacon},

    //my alert beacon
    {"source": program_init.onewaynoti,"target": program_init.dropofflocations},
    {"source": program_init.onewaynoti,"target": program_init.beaconnotifications},
    {"source": program_init.qrcode,"target": program_init.caseworkernotifi},
    {"source": program_init.qrcode,"target": program_init.medicalstatusnotes},
    {"source": program_init.onewaynoti,"target": program_init.donationalert},


    //gifts that matter
    {"source": program_init.dropofflocations,"target": program_init.serviceadditionalnotification},
    {"source": program_init.dropofflocations,"target": program_init.onewaynoti},
    {"source": program_init.beaconnotifications,"target": program_init.incentivenotification},
    {"source": program_init.beaconnotifications,"target": program_init.onewaynoti},
    {"source": program_init.beaconnotifications,"target": program_init.notificationsdashboard},

    //my medi-cal
    {"source": program_init.myincentives,"target": program_init.incentivenotification},
    {"source": program_init.myincentives,"target": program_init.incentivesprogramdashboard},
    {"source": program_init.myadditionalnotification,"target": program_init.serviceadditionalnotification},
    {"source": program_init.myadditionalnotification,"target": program_init.notificationsdashboard},
    {"source": program_init.myadditionalnotification,"target": program_init.dropofflocations},
    {"source": program_init.myadditionalnotification,"target": program_init.donationalert},
    {"source": program_init.mymedicalstatusnotes,"target": program_init.medicalstatusnotes},
    {"source": program_init.myappointmentnotifications,"target": program_init.appointmentnotifications},
    {"source": program_init.mypastappointments,"target": program_init.pastappointmentnotes},
    {"source": program_init.mybolo,"target": program_init.checkinstatus},

    //network of care
    {"source": program_init.onsitesmes,"target": program_init.wikiforsmes},

    //forget me not
    {"source": program_init.permrecordkeeping,"target": program_init.medicalstatusnotes},
    {"source": program_init.caseworkernotifi,"target": program_init.qrcode},
]

// Show Modal
// function onClick(e) {
//     console.log(e)
//     if (e.cat=="program_main"||e.cat=="whole_main") {
//         picoModal({
//             content: "<div class='title'>"+e.name+ "</div>" + "<div class='modalcontent'>" +e.details + "<br>" + "<br>" + e.access + "<br>" +"<br>" + e.benefits + "</div>",
//             modalStyles: {
//                 width: "80%",
//                 height: "80%",
//                 backgroundColor: "#fff"
//             }
//         }).show();
//     }
// }

function onHover(e) {
    // console.log(e);
    if (e.cat=="program_init"||e.cat=="whole_init") {
        $("#tooltip").removeClass("hidden");
        $("#tooltip").html("<h3 style='text-transform:uppercase; letter-spacing:2px;'>" + e.name + "</h3>" + "<br>" + "<div id='tooltip-description'>" + e.description + "</div>")
    }else{
        if (e.cat=="program_main"||e.cat=="whole_main") {
        $("#tooltip_main").removeClass("hidden");
        $("#tooltip_main").html("<h3 style='text-transform:uppercase; letter-spacing:2px;'>" + e.name + "</h3>" + "<div id='tooltip-description'>" + e.description + "<br>" + e.details + "<br>" + "<br>" + e.access + "<br>" + "<br>" + e.benefits +"</div>")
        }
    }
    var edgeClass = e.name.hashCode();
    var relevantEdges = d3.selectAll("."+edgeClass+" > "+"line");
    relevantEdges.style("stroke", "rgb(0,0,0)");
    relevantEdges.style("stroke-opacity", 1);
    console.log($("."+edgeClass))
    // console.log(e.name.replace(/\s/g, ''))
    // console.log($("."+e.name.replace(/\s/g, '')).children("rect"))
    $("."+e.name.replace(/\s/g, '')).children("rect").on("hover")
}

function onOut(e){
    $("#tooltip").addClass("hidden");
    $("#tooltip_main").addClass("hidden");
    var edgeClass = e.name.hashCode();
    var relevantEdges = d3.selectAll("."+edgeClass+" > "+"line");
    relevantEdges.style("stroke-opacity", 0);
    console.log($("."+edgeClass))
}


// console.log(positions)
// instantiate d3plus
var visualization = d3plus.viz()
    .container("#viz")
    .type("network")
    .data(positions)
    .nodes(positions)
    .focus({
        tooltip:false
    })
    .labels({
        align: "end",
        padding: 37
    })
    .color({
        primary:"#FFFFFF"
    })
    .class(function(d){
        if(d.x==main.programs.x){
            return "left "+d.name.replace(/\s/g, '')+" "+d.cat;
        }else{
            return "right "+d.name.replace(/\s/g, '')+" "+d.cat;
        }
    })
    .shape("circle")
    .mouse({
        // click: onClick,
        over: onHover,
        out: onOut
    })
    .text(function(d) {
        if (d.cat == "whole_init", "program_init") {
            return d.name
        }
    })
    .edges(connectionsTemp)
    .size({
        value:"size",
        scale:d3.scale.linear()
    })
    .id("name")
    .draw()
    

    var interval = setInterval(function(){


        //makes edges invisible
        d3.selectAll("line").style("stroke-opacity",0)

        //FUGH THIS IS UGLY
        var leftTextDoms = $(".left").children("text");
        var rightTextDoms = $(".right").children("text");
        if(leftTextDoms.length > 0 && rightTextDoms.length > 0 ){
            clearInterval(interval);
            $('.left').attr("white-space","nowrap");
            leftTextDoms.each(function(i, text){
                    //console.log($(text).attr("transform"));
                    var leftTransform = $(text).attr("transform").split(")");
                    // console.log(leftTransform)
                    var position = leftTransform[leftTransform.length-2].split(/\W+/);
                    //console.log(position)
                    var newPositions = "translate("+(position[1]-500)+","+position[2]+"."+position[3];
                    //console.log(newPositions)
                    leftTransform[leftTransform.length-2] = newPositions;
                    leftTransform=leftTransform.join(")");
                    //console.log(leftTransform);
                     $(text).attr("transform", leftTransform);

                     var t = $(text);
                     var label = t.children().map(function (){
                         return $(this).html();
                     }).get().join(" ");

                     //console.log(label);
                      t.children().first().html(label);
                      t.children().not(":first").remove();
                       t.attr("text-anchor", "end");



            })
            rightTextDoms.each(function(i, text){
                    var rightTransform = $(text).attr("transform").split(")");
                    //console.log(rightTransform)
                    var position = rightTransform[rightTransform.length-2].split(/\W+/);
                    //console.log(position)
                    var newPositions = "translate("+(position[1]+500)+","+position[2]+"."+position[3];
                    //console.log(newPositions)
                    rightTransform[rightTransform.length-2] = newPositions;
                    rightTransform=rightTransform.join(")");
                    //console.log(rightTransform);
                     $(text).attr("transform", rightTransform);

                     var t = $(text);
                     var label = t.children().map(function (){
                         return $(this).html();
                     }).get().join(" ");

                    // console.log(label);
                      t.children().first().html(label);
                      t.children().not(":first").remove();
                       t.attr("text-anchor", "start");
            })
            leftTextDoms.each(function(){
                this.style.setProperty("font-size", "15.6em", "important");
            })

            rightTextDoms.each(function(){
                this.style.setProperty("font-size", "15.6em", "important");
            })


            //
            // console.log(
            //     leftTextDoms.attr("transform"),
            //     rightTextDoms.attr("transform"));
        }

    }, 200)
