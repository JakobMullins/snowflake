// @flow
import * as d3 from 'd3'

export type TrackId = 'TEST' | 'ANALYZE' | 'DRIVE' //| 'SERVERS' |
  'PROJECT_MANAGEMENT' | 'COMMUNICATION' | 'CRAFT' | 'INITIATIVE' |
  'CAREER_DEVELOPMENT' | 'ORG_DESIGN' | 'WELLBEING' | 'ACCOMPLISHMENT' |
  'MENTORSHIP' | 'EVANGELISM' | 'RECRUITING' | 'COMMUNITY'
export type Milestone = 0 | 1 | 2 | 3

export type MilestoneMap = {
  'TEST': Milestone,
  'ANALYZE': Milestone,
  'DRIVE': Milestone,
  //'TESTING PLANS': Milestone,
  'PROJECT_MANAGEMENT': Milestone,
  'COMMUNICATION': Milestone,
  'CRAFT': Milestone,
  'INITIATIVE': Milestone,
  'CAREER_DEVELOPMENT': Milestone,
  'ORG_DESIGN': Milestone,
  'WELLBEING': Milestone,
  'ACCOMPLISHMENT': Milestone,
  'MENTORSHIP': Milestone,
  'EVANGELISM': Milestone,
  'RECRUITING': Milestone,
  'COMMUNITY': Milestone
}
export const milestones = [0, 1, 2, 3]

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0
    case 1: return 1
    case 2: return 3
    case 3: return 6
    case 4: return 12
    case 5: return 20
    default: return 0
  }
}

export const pointsToLevels = {
  '0': '1.1',
  '5': '1.2',
  '11': '1.3',
  '17': '2.1',
  '23': '2.2',
  '29': '2.3',
  '36': '3.1',
  '43': '3.2',
  '50': '3.3',
  '58': '4.1',
  '66': '4.2',
  '74': '4.3',
  '90': '5.1',
  //'110': '5.2',
  //'135': '5.3',
}

export const maxLevel = 180

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
}

type Tracks = {|
  'TEST': Track,
  'ANALYZE': Track,
  'FOUNDATIONS': Track,
  'SERVERS': Track,
  'PROJECT_MANAGEMENT': Track,
  'COMMUNICATION': Track,
  'CRAFT': Track,
  'INITIATIVE': Track,
  'CAREER_DEVELOPMENT': Track,
  'ORG_DESIGN': Track,
  'WELLBEING': Track,
  'ACCOMPLISHMENT': Track,
  'MENTORSHIP': Track,
  'EVANGELISM': Track,
  'RECRUITING': Track,
  'COMMUNITY': Track
|}

export const tracks: Tracks = {
  "MOBILE": {
    "displayName": "Test: Testing Methods",
    "category": "A",
    "description": "Strategies and approaches used to test an application to ensure it behaves and looks as expected.",
    "milestones": [{
      //Milestone 1
      "summary": "You are learning Hudl’s test methods and tools and have started to implement them into your testing.",
      "signals": [
        "Automation",
        "Test Bashes",
        "Exploratory Testing",
      ],
      "examples": [
        "LEARNING: You outcomes largely impact self and you are starting to see the benefits of metric and focus area outcomes.",
      ],
      //Milestone 2
    }, {
      "summary": "You know how and when to use the right testing method and tools during testing.",
      "signals": [
        "Automation",
        "Test Bashes",
        "Exploratory Testing",
      ],
      "examples": [
        "MASTERY: Your outcomes largely impact your expected roles area of impact and your outcomes reflect a higher level of understanding, efficiency and success.",
        // "Example Task",
        // "Example Task",
      ],
      //Milestone 3
    }, {
      "summary": "You are creating and coaching others on how to best use specific testing methods and tools.",
      "signals": [
        "Automation",
        "Test Bashes",
        "Exploratory Testing",
      ],
      "examples": [
        "COACHING: You are sharing your mastery of metrics and focus areas with those outside of your role expected area of impact. Your outcomes can be seen being leveraged by others throughout the Tribe(s) and or Chapter.",
        // "Example Task",
        // "Example Task",
      ],
      //Milestone 4
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": [
        "Pioneers architecture migration strategies that reduce programmer burden",
        "Fixes subtle memory management issues",
        "Implements interactive dismissals that bring delight",
      ],
      "examples": [
        "Upgraded CocoaPods to a new major version",
        "Designed architecture for fetching and rendering stream items",
        "Migrated Android persistance layer to reactive programming",
      ],
      //Milestone 5
    }],
  },

  "WEB_CLIENT": {
    "displayName": "Test: Shifting Left",
    "category": "A",
    "description": "Ensuring quality earlier in the product lifecycle.",
    "milestones": [{
      //Milestone 1
      "summary": "You are starting to identify and documenting risk for features.",
      "signals": [
        "Test Plans",
        "Acceptance Criteria",
        "Design Reviews",
      ],
      "examples": [
        "LEARNING: You outcomes largely impact self and you are starting to see the benefits of metric and focus area outcomes.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 2
      "summary": "You are starting to implement multiple ways of introducing quality earlier into the product lifecycle.",
      "signals": [
        "Test Plans",
        "Acceptance Criteria",
        "Design Reviews",
      ],
      "examples": [
        "MASTERY: Your outcomes largely impact your expected roles area of impact and your outcomes reflect a higher level of understanding, efficiency and success.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 3
      "summary": "You use your various methods of preventing risk to coach others on how to mitigate risk and the different ways of introducing quality earlier in the product life cycle.",
      "signals": [
        "Test Plans",
        "Acceptance Criteria",
        "Design Reviews",
      ],
      "examples": [
        "COACHING: You are sharing your mastery of metrics and focus areas with those outside of your role expected area of impact. Your outcomes can be seen being leveraged by others throughout the Tribe(s) and or Chapter.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 4
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": [
        "Pioneers architecture migrations that reduce programmer burden",
        "Implements complex UI transitions that bring delight",
        "Makes architectural decisions that eliminate entire classes of bugs",
      ],
      "examples": [
        "Designed Medium's post morpher and delta system",
        "Implemented Medium's scrolling text over image blur",
        "Designed and pioneered proto-based model storage",
      ],
    }, {
      //Milestone 5
      "summary": "Is an industry-leading expert in web client or sets strategic web client direction for an eng team",
      "signals": [
        "Invents new techniques to innovate and overcome browser constraints",
        "Identifies and solved systemic problems with current architecture",
        "Defines a long-term vision for web client and ensures projects are in service of it",
      ],
      "examples": [
        "Invented CSS in JS",
        "Defined and drove migration strategy to Lite",
        "Implemented unidirectional data flow to completion",
      ],
    }],
  },

  "FOUNDATIONS": {
    "displayName": "Test: Product Stack",
    "category": "A",
    "description": "Knowledge and insight to the different software, platforms and business levels that make up a product.",
    "milestones": [{
      //Milestone 1
      "summary": "You are learning how your features work on the product level.",
      "signals": [
        "Integration Testing",
        "Tribe Product & Feaure Knowledge",
        "Hudl Tools & Platforms Expertise",
      ],
      "examples": [
        "LEARNING: You outcomes largely impact self and you are starting to see the benefits of metric and focus area outcomes.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 2
      "summary": "You know your squad's system architecture and understand the key components that make up your feature or platform on the business and product level.",
      "signals": [
        "Integration Testing",
        "Tribe Product & Feaure Knowledge",
        "Hudl Tools & Platforms Expertise",
      ],
      "examples": [
        "MASTERY: Your outcomes largely impact your expected roles area of impact and your outcomes reflect a higher level of understanding, efficiency and success.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 3
      "summary": "You coach others on how to better understand your products key features, workflows and technical aspects that make up the product. You are leveraging your product stack knowledge to enhance quality.",
      "signals": [
        "Integration Testing",
        "Tribe Product & Feaure Knowledge",
        "Hudl Tools & Platforms Expertise",
      ],
      "examples": [
        "COACHING: You are sharing your mastery of metrics and focus areas with those outside of your role expected area of impact. Your outcomes can be seen being leveraged by others throughout the Tribe(s) and or Chapter.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 4
      "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
      "signals": [
        "Designs complex projects that encompass multiple systems and technologies",
        "Demonstrates deep knowledge of foundational systems",
        "Introduces new databases and technologies to meet underserved needs",
      ],
      "examples": [
        "Designed and built BBFD",
        "Designed AWS configuration management",
        "Introduced Kinesis and pioneered streaming events pipeline",
      ],
    }, {
      //Milestone 5
      "summary": "Is an industry-leading expert in foundational engineering or sets strategic foundational direction for an eng team",
      "signals": [
        "Designs transformational projects in service of long-term goals",
        "Defines the strategic vision for foundational work and supporting technologies",
        "Invents industry-leading techniques to solve complex problems",
      ],
      "examples": [
        "Invented a novel ML technique that advanced the state of the art",
        "Defined and developed Medium's continuous delivery strategy",
        "Developed and implemented HA strategy",
      ],
    }],
  },

  "SERVERS": {
    "displayName": "Test: User Focus",
    "category": "A",
    "description": "Understanding and adoption of user workflows, stories, and insights to product usage.",
    "milestones": [{
      //Milestone 1
      "summary": "You are learning about your squad's users and how they use the product stack.",
      "signals": [
        "User Workflows",
        "Real World Testing",
        "Understanding the customers wants vs needs",
      ],
      "examples": [
        "LEARNING: You outcomes largely impact self and you are starting to see the benefits of metric and focus area outcomes.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 2
      "summary": "You are introducing insights from user workflows into your testing approach and methods.",
      "signals": [
        "User Workflows",
        "Real World Testing",
        "Understanding the customers wants vs needs",
      ],
      "examples": [
        "MASTERY: Your outcomes largely impact your expected roles area of impact and your outcomes reflect a higher level of understanding, efficiency and success.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 3
      "summary": "You evolve and coach others understanding and testing approach based on your user knowledge.",
      "signals": [
        "User Workflows",
        "Real World Testing",
        "Understanding the customers wants vs needs",
      ],
      "examples": [
        "COACHING: You are sharing your mastery of metrics and focus areas with those outside of your role expected area of impact. Your outcomes can be seen being leveraged by others throughout the Tribe(s) and or Chapter.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 4
      "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
      "signals": [
        "Delivers complex systems that achieve their goals",
        "Avoids subtle architectural mistakes when considering new systems",
        "Makes appropriate buy vs build choices",
      ],
      "examples": [
        "Designed Medium's ranked feed architecture",
        "Designed custom domains architecture",
        "Created Gotham framework for creating Go services",
      ],
    }, {
      //Milestone 5
      "summary": "Is an industry-leading expert in server side engineering or sets strategic server side direction for an eng team",
      "signals": [
        "Designs transformational projects of significant complexity and scope",
        "Makes decisions that have positive, long term, wide ranging consequences",
        "Identifies and solves systemic problems with current architecture",
      ],
      "examples": [
        "Researched, vetted, and selected Go as Medium's statically typed language",
        "Defined microservices architecture and medium2 migration plan",
        "Defined and implemented proprietary IP core to the company's success",
      ],
    }],
  },

  "PROJECT_MANAGEMENT": {
    "displayName": "Analyze: Data Analysis",
    "category": "B",
    "description": "Ability to understand insights relating to products and users.",
    "milestones": [{
      //Milestone 1
      "signals": [
        "Feature Usage",
        "User Insights",
        "Feaure & App Peformance Health"
      ],
      "examples": [
        "LEARNING: You outcomes largely impact self and you are starting to see the benefits of metric and focus area outcomes.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 2
      "summary": "You utilize data from multiple available sources to draw conclusions about the quality of your product.",
      "signals": [
        "Feature Usage",
        "User Insights",
        "Feaure & App Peformance Health"
      ],
      "examples": [
        "MASTERY: Your outcomes largely impact your expected roles area of impact and your outcomes reflect a higher level of understanding, efficiency and success.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 3
      "summary": "You leverage different sournces of data to answer complex questions about product and user trends. You use that data in conversations to drive change and a deeper level of understanding relating to the product.",
      "signals": [
        "Feature Usage",
        "User Insights",
        "Feaure & App Peformance Health"
      ],
      "examples": [
        "COACHING: You are sharing your mastery of metrics and focus areas with those outside of your role expected area of impact. Your outcomes can be seen being leveraged by others throughout the Tribe(s) and or Chapter.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 4
      "summary": "Effectively delivers projects through a large team, or with a significant amount of stakeholders or complexity",
      "signals": [
        "Finds ways to deliver requested scope faster, and prioritizes backlog",
        "Manages dependencies on other projects and teams",
        "Leverages recognition of repeated project patterns",
      ],
      "examples": [
        "Oversaw technical delivery of Hightower",
        "Managed infrastructure migration to VPC",
        "Involved marketing, legal, and appropriate functions at project start",
      ],
    }, {
      //Milestone 5
      "summary": "Manages major company pushes delivered by multiple teams",
      "signals": [
        "Considers external constraints and business objectives when planning",
        "Leads teams of teams, and coordinates effective cross-functional collaboration",
        "Owns a key company metric",
      ],
      "examples": [
        "Managed technical migration to SOA",
        "Lead technical delivery of 10/7",
        "Delivered multi-month engineering project on time",
      ],
    }],
  },

  "COMMUNICATION": {
    "displayName": "Analyze: Risk Communication",
    "category": "B",
    "description": "Shares the right amount of information with the right people, at the right time, and reacts effectively.",
    "milestones": [{
      //Milestone 1
      "summary": "You are learning about the different types of risk and how to prirotizie that risk based on user impact in different conversations and meetings.",
      "signals": [
        "Feature & User Dashboards",
        "Quality Indicators",
        "Tracking & Prioritizing Quality Debt",
      ],
      "examples": [
        "LEARNING: You outcomes largely impact self and you are starting to see the benefits of metric and focus area outcomes.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 2
      "summary": "You understand the risk and impact of changes to your product/feature and communicate risk(s) to your squad.",
      "signals": [
        "Feature & User Dashboards",
        "Quality Indicators",
        "Tracking & Prioritizing Quality Debt",
      ],
      "examples": [
        "MASTERY: Your outcomes largely impact your expected roles area of impact and your outcomes reflect a higher level of understanding, efficiency and success.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 3
      "summary": "You identify and communicate high-risk areas for projects and features to help drive strategy and direction.",
      "signals": [
        "Feature & User Dashboards",
        "Quality Indicators",
        "Tracking & Prioritizing Quality Debt",
      ],
      "examples": [
        "COACHING: You are sharing your mastery of metrics and focus areas with those outside of your role expected area of impact. Your outcomes can be seen being leveraged by others throughout the Tribe(s) and or Chapter.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 4
      "summary": "Communicates complex ideas skillfully and with nuance, and establishes alignment within the wider organization",
      "signals": [
        "Example Behavior",
        "Example Behavior",
        "Example Behavior",
      ],
      "examples": [
        "Example Task",
        "Example Task",
        "Example Task",
      ],
    }, {
      //Milestone 5
      "summary": "Influences outcomes at the highest level, moves beyond mere broadcasting, and sets best practices for others",
      "signals": [
        "Defines processes for clear communication for the entire team",
        "Shares the right amount of information with the right people, at the right time",
        "Develops and delivers plans to execs, the board, and outside investors",
      ],
      "examples": [
        "Organized half year check-in company offsite",
        "Created the communication plan for a large organizational change",
        "Presented to the board about key company metrics and projects",
      ],
    }],
  },

  "CRAFT": {
    "displayName": "Analyze: Deep Dive",
    "category": "B",
    "description": "Ability to discover and then understand the why behind trends and issues.",
    "milestones": [{
      //Milestone 1
      "summary": "You are learning the processes and tools for discovering root causes of issues or trends.",
      "signals": [
        "Post Mortems",
        "Stack Traces",
        "Reproing Issues",
      ],
      "examples": [
        "LEARNING: You outcomes largely impact self and you are starting to see the benefits of metric and focus area outcomes.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 2
      "summary": "You discover and communicate the why and how behind issues and trends.",
      "signals": [
        "Post Mortems",
        "Stack Traces",
        "Reproing Issues",
      ],
      "examples": [
        "MASTERY: Your outcomes largely impact your expected roles area of impact and your outcomes reflect a higher level of understanding, efficiency and success.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 3
      "summary": "Your investigation skills go beyond talking about the what and why; you go a level deeper by using insights to predict and prevent future issues. You then use these insights to coach and help others better understand the root cause for risks, issues or trends.",
      "signals": [
        "Post Mortems",
        "Stack Traces",
        "Reproing Issues",
      ],
      "examples": [
        "COACHING: You are sharing your mastery of metrics and focus areas with those outside of your role expected area of impact. Your outcomes can be seen being leveraged by others throughout the Tribe(s) and or Chapter.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 4
      "summary": "Advocates for and models great quality with proactive actions, and tackles difficult and subtle system issues",
      "signals": [
        "Builds systems so as to eliminate entire classes of programmer error",
        "Focuses the team on quality with regular reminders",
        "Coordinates Watch priorities and projects",
      ],
      "examples": [
        "Added code coverage reporting to iOS CI pipeline",
        "Iterated repeatedly to develop Medium's underlines solution",
        "Defined and oversaw plan for closing Heartbleed vulnerability",
      ],
    }, {
      //Milestone 5
      "summary": "Enables and encourages the entire organization to make quality a central part of the development process",
      "signals": [
        "Defines policies for the engineering org that encourage quality work",
        "Identifies and eliminates single points of failure throughout the organization",
        "Secures time and resources from execs to support great quality",
      ],
      "examples": [
        "Negotiated resources for Fix-It week with exec team",
        "Instituted and ensured success of a 20% time policy",
        "Started The Watch",
      ],
    }],
  },
  "INITIATIVE": {
    "displayName": "Analyze: Connections",
    "category": "B",
    "description": "Undertanding how all the pieces fit together and how each piece impacts all aspects of a product.",
    "milestones": [{
      //Milestone 1
      "summary": "You are learning how all of your squads features impact user workflows.",
      "signals": [
        "Feature Interactions",
        "Product & System Architecture",
        "Impact & Risk Analysis",
      ],
      "examples": [
        "LEARNING: You outcomes largely impact self and you are starting to see the benefits of metric and focus area outcomes.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 2
      "summary": "You understand how users and the team will be impacted by various changes and outcomes.",
      "signals": [
        "Feature Interactions",
        "Product & System Architecture",
        "Impact & Risk Analysis",
      ],
      "examples": [
        "MASTERY: Your outcomes largely impact your expected roles area of impact and your outcomes reflect a higher level of understanding, efficiency and success.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 3
      "summary": "You help shape how changes and outcomes will fit into the bigger picture and overall success of the product.",
      "signals": [
        "Feature Interactions",
        "Product & System Architecture",
        "Impact & Risk Analysis",
      ],
      "examples": [
        "COACHING: You are sharing your mastery of metrics and focus areas with those outside of your role expected area of impact. Your outcomes can be seen being leveraged by others throughout the Tribe(s) and or Chapter.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 4
      "summary": "Effects change that has a substantial positive impact on the engineering organization or a major product impact",
      "signals": [
        "Champions and pioneers new technologies to solve new classes of problem",
        "Exemplifies grit and determination in the face of persistent obstacles",
        "Instigates major new features, services, or architectures",
      ],
      "examples": [
        "Created the interviewing rubric and booklet",
        "Implemented and secured support for native login",
        "Migrated medium2 to mono repo and bazel",
      ],
    }, {
      //Milestone 5
      "summary": "Effects change that has a substantial positive impact on the whole company",
      "signals": [
        "Creates a new function to solve systemic issues",
        "Galvanizes the entire company and garners buy in for a new strategy",
        "Changes complex organizational processes",
      ],
      "examples": [
        "Migrated the organization from Holacracy",
        "Built Medium Android prototype and convinced execs to fund it",
        "Convinced leadership and engineering org to move to Medium Lite architecture",
      ],
    }],
  },

  "CAREER_DEVELOPMENT": {
    "displayName": "Drive: Improvement",
    "category": "C",
    "description": "Focus on driving improvement for self, squad, chapter, and Hudl.",
    "milestones": [{
      //Milestone 1
      "summary": "You are learning how your role delivers value.",
      "signals": [
        "Personal & Professional Development",
        "QA Projects",
        "Hudl Work Smarter Learnings",
      ],
      "examples": [
        "LEARNING: You outcomes largely impact self and you are starting to see the benefits of metric and focus area outcomes.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 2
      "summary": "You seek to increase the amount of value your role delivers.",
      "signals": [
        "Personal & Professional Development",
        "QA Projects",
        "Hudl Work Smarter Learnings",
      ],
      "examples": [
        "MASTERY: Your outcomes largely impact your expected roles area of impact and your outcomes reflect a higher level of understanding, efficiency and success.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 3
      "summary": "You are evolving the way your role delivers value and mitigates risk.",
      "signals": [
        "Personal & Professional Development",
        "QA Projects",
        "Hudl Work Smarter Learnings",
      ],
      "examples": [
        "COACHING: You are sharing your mastery of metrics and focus areas with those outside of your role expected area of impact. Your outcomes can be seen being leveraged by others throughout the Tribe(s) and or Chapter.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 4
      "summary": "Manages interactions and processes between groups, promoting best practices and setting a positive example",
      "signals": [
        "Manages team transitions smoothly, respecting team and individual needs",
        "Develops best practices for conflict resolution",
        "Ensures all group members' roles are meeting their career needs",
      ],
      "examples": [
        "Completed training on situational leadership",
        "Built a resourcing plan based on company, team, and individual goals",
        "Prevented regretted attrition with intentional, targeted intervention",
      ],
    }, {
      //Milestone 5
      "summary": "Supports the development of a signficant part of the engineering org, and widely viewed as a trusted advisor",
      "signals": [
        "Supports and develops senior leaders",
        "Identified leadership training opportunities for senior leadership",
        "Pushes everyone to be as good as they can be, with empathy",
      ],
      "examples": [
        "Provided coaching to group leads",
        "Devised Pathwise curriculum for group leads",
        "Advocated to execs for engineer development resources and programs",
      ],
    }],
  },

  "ORG_DESIGN": {
    "displayName": "Drive: Challenge",
    "category": "C",
    "description": "Challenging the status quo with the end goal of improvement.",
    "milestones": [{
      //Milestone 1
      "summary": "You are having conversations that help yourself and others understand issues and the status of quality.",
      "signals": [
        "Code Reviews",
        "Design Reviews",
        "Release Strategy",
      ],
      "examples": [
        "LEARNING: You outcomes largely impact self and you are starting to see the benefits of metric and focus area outcomes.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 2
      "summary": "You challenge squad quality while focusing on prevention and efficiency.",
      "signals": [
        "Code Reviews",
        "Design Reviews",
        "Release Strategy",
      ],
      "examples": [
        "MASTERY: Your outcomes largely impact your expected roles area of impact and your outcomes reflect a higher level of understanding, efficiency and success.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 3
      "summary": "You are stragically challenging process and direction by leveling up others mindsets regarding quality best pratices and risk mitigation.",
      "signals": [
        "Code Reviews",
        "Design Reviews",
        "Release Strategy",
      ],
      "examples": [
        "COACHING: You are sharing your mastery of metrics and focus areas with those outside of your role expected area of impact. Your outcomes can be seen being leveraged by others throughout the Tribe(s) and or Chapter.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 4
      "summary": "Thinks deeply about organizational issues and identifies hidden dynamics that contribute to them",
      "signals": [
        "Example Behavior",
        "Example Behavior",
        "Example Behavior",
      ],
      "examples": [
        "Example Task",
        "Example Task",
        "Example Task",
      ],
    }, {
      //Milestone 5
      "summary": "Leads initiatives to address issues stemming from hidden dynamics and company norms",
      "signals": [
        "Example Behavior",
        "Example Behavior",
        "Example Behavior",
      ],
      "examples": [
        "Example Task",
        "Example Task",
        "Example Task",
      ],
    }],
  },

  "WELLBEING": {
    "displayName": "Drive: Value",
    "category": "C",
    "description": "Your outcomes drive yourself, squad, chapter, and Hudl forward.",
    "milestones": [{
      //Milestone 1
      "summary": "You are leveling up personally and starting to drive change on the squad level.",
      "signals": [
        "Please work with your Team Lead to best capture how your outcomes are adding value.",
        // "Example Behavior",
        // "Example Behavior",
      ],
      "examples": [
        "LEARNING: You outcomes largely impact self and you are starting to see the benefits of metric and focus area outcomes.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 2
      "summary": "You are implementing change on the squad level and you are starting to have an impact outside of the squad.",
      "signals": [
        "Please work with your Team Lead to best capture how your outcomes are adding value.",
        // "Example Behavior",
        // "Example Behavior",
      ],
      "examples": [
        "MASTERY: Your outcomes largely impact your expected roles area of impact and your outcomes reflect a higher level of understanding, efficiency and success.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 3
      "summary": "You are driving change outside of the squad and your impact is being felt on the chapter level.",
      "signals": [
        "Please work with your Team Lead to best capture how your outcomes are adding value.",
        // "Example Behavior",
        // "Example Behavior",
      ],
      "examples": [
        "COACHING: You are sharing your mastery of metrics and focus areas with those outside of your role expected area of impact. Your outcomes can be seen being leveraged by others throughout the Tribe(s) and or Chapter.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 4
      "summary": "Advocates for the needs of teams and group members, and proactively works to calm the organization",
      "signals": [
        "Ensures team environments are safe and inclusive, proactively",
        "Grounds group member anxieties in reality",
        "Tracks team retention actively and proposes solutions to strengthen it",
      ],
      "examples": [
        "Relieved org tension around product direction by providing extra context",
        "Encouraged group members to focus on what they can control",
        "Guided people through complex organizational change",
      ],
    }, {
      //Milestone 5
      "summary": "Manages narratives, channels negativity into inspiration and motivation, and protects the entire team",
      "signals": [
        "Recognizes and points out narratives when appropriate",
        "Works to reshape narratives from victimization to ownership",
        "Increases the psychological safety of the entire team",
      ],
      "examples": [
        "Converted group member from a problem haver to a problem solver",
        "Challenged false narrative and redirected to compassion and empathy",
        "Cultivated and championed a culture of empathy within the entire team",
      ],
    }],
  },

  "ACCOMPLISHMENT": {
    "displayName": "Drive: Advocate",
    "category": "C",
    "description": "Inspires a better understanding and adoption of quality best practices.",
    "milestones": [{
      //Milestone 1
      "summary": "You are learning quality best practices and are starting to share that information with your squad.",
      "signals": [
        "Giving presentations",
        "Creating blog posts",
        "Increasing knowledge within the Chapter",
      ],
      "examples": [
        "LEARNING: You outcomes largely impact self and you are starting to see the benefits of metric and focus area outcomes.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 2
      "summary": "You are leveling up others and implementing quality best practices on the squad level.",
      "signals": [
        "Giving presentations",
        "Creating blog posts",
        "Increasing knowledge within the Chapter",
      ],
      "examples": [
        "MASTERY: Your outcomes largely impact your expected roles area of impact and your outcomes reflect a higher level of understanding, efficiency and success.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 3
      "summary": "You are coaching and changing others mindsets around quality outside of the squad.",
      "signals": [
        "Giving presentations",
        "Creating blog posts",
        "Increasing knowledge within the Chapter",
      ],
      "examples": [
        "COACHING: You are sharing your mastery of metrics and focus areas with those outside of your role expected area of impact. Your outcomes can be seen being leveraged by others throughout the Tribe(s) and or Chapter.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 4
      "summary": "Mediates escalated situations, empowers underperforming teams, and resolves conflict",
      "signals": [
        "Recognizes heightened situations and toxic or aggressive interactions",
        "Inserts themself into conflict where appropriate to calm and mediate",
        "Encourages open dialog and builds trust between parties in conflict",
      ],
      "examples": [
        "Empowered a team to drive forward amidst uncertainty",
        "Protected team from externalities so they could focus on goals",
        "Mediated sit-down between team members to address tension",
      ],
    }, {
      //Milestone 5
      "summary": "Resolves complex organizational dysfunction, or persistent conflict at senior levels",
      "signals": [
        "Takes control of dysfunctional teams to organise chaos",
        "Repairs broken team dynamics and builds harmony",
        "Presides over a well-oiled team of teams",
      ],
      "examples": [
        "Turned around the performance of a problematic team",
        "De-escalated serious tensions between teams",
        "Rebuilt trust between senior team leads",
      ],
    }],
  },

  "MENTORSHIP": {
    "displayName": "Test Metric",
    "category": "D",
    "description": "You drive quality from start to finish for any product by leveraging multiple testing approaches and methods. You mitigate risk by efficiently testing against different levels in the product stack.  Your testing approach and strategy is built around understanding users common workflows and stories. You help move testing left by focusing on prevention while increasing efficiency and confidence.",
    "milestones": [{
      //Milestone 1
      "summary": "You are learning about testing strategies and are starting to introduce multiple methods into your testing approach. You document your test cases, strategy, and results and share that information with the team. You are familiar and comfortable with Hudl’s internal tools and independently deploying code to production. You are learning who your users are and applying user knowledge in your testing.",
      "signals": [
        // "Example Behavior",
        // "Example Behavior",
        // "Example Behavior",
      ],
      "examples": [
        "LEARNING: You outcomes largely impact self and you are starting to see the benefits of metric and focus area outcomes.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 2
      "summary": "You ensure quality within different levels of the product by knowing when and how to best leverage different testing methods and tools. You lead testing efforts by working closely with the other roles on your squad. Your testing approach is a reflection of knowing how to think like your users. You are introducing process or methods to help find defects early in the development lifecycle.",
      "signals": [
        // "Example Behavior",
        // "Example Behavior",
        // "Example Behavior",
      ],
      "examples": [
        "MASTERY: Your outcomes largely impact your expected roles area of impact and your outcomes reflect a higher level of understanding, efficiency and success.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 3
      "summary": "Your entire testing approach is focused around mitigating risk early in the development lifecycle. You prevent defects by leveraging past experience and knowledge. You coach others on how to improve quality earlier in the product life cycle. You have a deep knowledge of your product system architecture and know the key components that make up your feature or platform which leads to a higher level of quality.",
      "signals": [
        // "Example Behavior",
        // "Example Behavior",
        // "Example Behavior",
      ],
      "examples": [
        "COACHING: You are sharing your mastery of metrics and focus areas with those outside of your role expected area of impact. Your outcomes can be seen being leveraged by others throughout the Tribe(s) and or Chapter.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 4
      "summary": "Encourages people to mentor each other, and creates ways for them to do so",
      "signals": [
        "Defines an entire curriculum for a discipline",
        "Draws positive attention to well-modeled mentor and teaching behaviours",
        "Creates brown bag series and lines up speakers",
      ],
      "examples": [
        "Created and lead Medium's Women in Eng group",
        "Organized an Eng All Hands with an outside speaker",
        "Designed and taught web client guild curriculum",
      ],
    }, {
      //Milestone 5
      "summary": "Instills and promotes a culture of learning and development within the team",
      "signals": [
        "Sets incentive structures to recognise and reward mentorship",
        "Empowers team members to develop themselves",
        "Role models productive and healthy mentor relationships",
      ],
      "examples": [
        "Instituted the professional education budget for engineers",
        "Mentored mentors",
        "Started the eng advisor program and lined up external mentors",
      ],
    }],
  },

  "EVANGELISM": {
    "displayName": "Analyze Metric",
    "category": "D",
    "description": "You evaluate user and feature information from multiple sources to help understand and mitigate risk. You effectively report your findings to help guide product direction and strategy. You are able to dive into the different levels of a product and feature to understand the cause and effect for issues and trends. You understand how all the pieces fit into the bigger picture and overall success of the product.",
    "milestones": [{
      //Milestone 1
      "summary": "You are learning about Hudl’s analysis tools and methods and are starting to use those tools to evaluate and guide your decisions. You are beginning to identify the root cause behind issues and trends. You use data to better understand feature usage and apply that insight to your testing approach and squad discussions. You can assess the user impact of issues and prioritize accordingly. You understand the importance and role each feature plays in your users workflows.",
      "signals": [
        // "Example Behavior",
        // "Example Behavior",
        // "Example Behavior",
      ],
      "examples": [
        "LEARNING: You outcomes largely impact self and you are starting to see the benefits of metric and focus area outcomes.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 2
      "summary": "You utilize data from multiple available sources to draw conclusions about the quality of your product. You discover and communicate the why and how behind issues and trends. You run ongoing analysis relating to the usage and health of your products. You understand the impact of changes to your product/feature and communicate risk(s) to your squad.  You bring these conclusions to planning discussions to help guide the direction and overall success of the product. You understand how all the pieces of your team's products and process fit into the bigger picture and the overall success of the squad.",
      "signals": [
        // "Example Behavior",
        // "Example Behavior",
        // "Example Behavior",
      ],
      "examples": [
        "MASTERY: Your outcomes largely impact your expected roles area of impact and your outcomes reflect a higher level of understanding, efficiency and success.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 3
      "summary": "You are able to pull insights from many different sources of data to answer complex questions about product and user trends to help drive feature and Bet direction. Your investigation skills go beyond talking about the what and why; you go a level deeper by using insights to predict and prevent future issues. You leverage user and feature insights to help understand and mitigate risk throughout the product lifecycle. You identify and communicate high-risk areas for projects on your Bet/Tribe roadmap. You share your conclusions with other parties at the company to help frame product decisions. You understand how each outcome impacts stakeholders, departments and the success of the product.",
      "signals": [
        // "Example Behavior",
        // "Example Behavior",
        // "Example Behavior",
      ],
      "examples": [
        "COACHING: You are sharing your mastery of metrics and focus areas with those outside of your role expected area of impact. Your outcomes can be seen being leveraged by others throughout the Tribe(s) and or Chapter.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 4
      "summary": "Establishes Medium as an great, innovative company and workplace to the whole industry",
      "signals": [
        "Establishes themself as an industry thought leader who attracts talent",
        "Publishes material about Medium's organizational or technical innovations",
        "Leverages significant following to evangelise Medium",
      ],
      "examples": [
        "Published a paper on Medium technology in a peer-reviewed journal",
        "Authored joint-press release with EFF on DNT",
        "Published “Why Content Editable Is Terrible” on the Medium engineering blog",
      ],
    }, {
      //Milestone 5
      "summary": "Introduces Medium in a positive light to a wider audience outside the industry",
      "signals": [
        "Delivers key messages to broad, mainstream audiences",
        "Influences people with large audiences to talk about Medium positively",
        "Drives recognition and adoption of Medium in significant numbers",
      ],
      "examples": [
        "Published or interviewed in a mainstream newspaper or website outside tech",
        "Keynoted a conference with international attention",
        "Represented Medium in national televised media",
      ],
    }],
  },

  "RECRUITING": {
    "displayName": "Drive Metric",
    "category": "D",
    "description": "You have a focus to learn and continuously improve yourself, process and quality throughout Hudl.  You build relationships that help get things done faster and better. You challenge and level up others on how to view and think about quality by focusing on prevention and efficiency. You bring the #realtalk when challenging the status quo and then provide the strategy and solutions for actionable next steps.", 
    "milestones": [{
      //Milestone 1
      "summary": "You are learning about how your role delivers value. You are forming relationships focused on building trust and confidence within your squad. You’re having conversations that help yourself and others understand and improve quality and processes. ",
      "signals": [
        // "Example Behavior",
        // "Example Behavior",
        // "Example Behavior",
      ],
      "examples": [
        "LEARNING: You outcomes largely impact self and you are starting to see the benefits of metric and focus area outcomes.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 2
      "summary": "You seek to increase the amount of value you’re delivering. You utilize your relationships to help guide direction and discussions focused on delivering high-quality solutions. You are knowledgeable about quality best practices and processes and are looking for ways to evolve them. You challenge and level up your squad on how to view and think about quality by focusing on prevention and efficiency.",
      "signals": [
        // "Example Behavior",
        // "Example Behavior",
        // "Example Behavior",
      ],
      "examples": [
        "MASTERY: Your outcomes largely impact your expected roles area of impact and your outcomes reflect a higher level of understanding, efficiency and success.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 3
      "summary": "You are evolving the way your role delivers value and mitigates risk. You leverage relationships throughout the chapter and product team to push improvements in quality forward. You coach and empower others to make decisions that contribute to high-quality products. You strategically challenge process and direction and then lead the charge in implementing successful solutions.",
      "signals": [
        // "Example Behavior",
        // "Example Behavior",
        // "Example Behavior",
      ],
      "examples": [
        "COACHING: You are sharing your mastery of metrics and focus areas with those outside of your role expected area of impact. Your outcomes can be seen being leveraged by others throughout the Tribe(s) and or Chapter.",
        // "Example Task",
        // "Example Task",
      ],
    }, {
      //Milestone 4
      "summary": "Actively contributes to and leads hiring decisions, and goes to great lengths to source great candidates",
      "signals": [
        "Documents subtle cues in interviews that indicate values alignment",
        "Makes hiring decisions, resolving discrepancies between conflicting reports",
        "Top-grades candidates and teases out character traits",
      ],
      "examples": [
        "Planned engineering summit on interview process and training",
        "Organized and lead Medium's presence at a recruitment fair",
        "Started CODE2040 internship program",
      ],
    }, {
      //Milestone 5
      "summary": "Sets recruitment strategy, invests in long-term relationships for critical roles, and recruits at scale",
      "signals": [
        "Sets the tone, policy and goals around building a diverse, high-quality team",
        "Identifies and brings in promising acquisitions",
        "Tracks industry activity, identifying opportunities for critical roles",
      ],
      "examples": [
        "Talked with a senior candidate over many months to fill a critical role",
        "Organized efforts around convincing acquired engineers to join and stay",
        "Set goals, then tracked and reported metrics on team demographics over time",
      ],
    }],
  },

  /*"COMMUNITY": {
    "displayName": "Community",
    "category": "D",
    "description": "Builds community internally, gives of themself to the team, and champions and extols company values",
    "milestones": [{
      "summary": "Is available and present on current teams, and works to contribute positively to company culture",
      "signals": [
        "Participates in team activities and offsites",
        "Treats colleagues and clients with respect",
        "Joins groups or committees outside regular duties",
      ],
      "examples": [
        "Joined and actively participated in the web client guild",
        "Brought a small gift back from vacation for the team",
        "Wrote entertaining and informative Prod Ops writeups on Hatch",
      ],
    }, {
      "summary": "Steps up, builds connectedness, and takes concrete actions to promote an inclusive culture",
      "signals": [
        "Makes space for others to participate",
        "Collaborates with other engineers outside direct responsibilities",
        "Finds ways to ramp up and engage new hires quickly",
      ],
      "examples": [
        "Created onboarding bingo",
        "Brought shy and introverted people into a dominant conversation",
        "Volunteered as secretary for a team",
      ],
    }, {
      "summary": "Contributes to improving team relatedness, and helps build a culture of lending support",
      "signals": [
        "Takes on additional Watch shifts at short notice",
        "Pitches in to help other teams hit deadlines, without missing own deadlines",
        "Uses position to raise difficult issues on someone's behalf",
      ],
      "examples": [
        "Lead Watch cycles with little support while still contributing to projects",
        "Started and drove the LGBTQIA ERG",
        "Stayed positive and improved team morale during period after layoffs",
      ],
    }, {
      "summary": "Exemplifies selflessness for the team without compromising responsibilities, and lifts everyone up",
      "signals": [
        "Goes above and beyond on the Watch, serving the team without complaint",
        "Implements concrete programs to signficantly improve team inclusivity",
        "Takes on large amounts of tedious grunt work for the team without being asked",
      ],
      "examples": [
        "Devoted large amount of time to helping outside direct responsibilities",
        "Refactored hundreds of legacy Shepherd nodes",
        "Acted as sole maintainer of Boxen for years",
      ],
    }, {
      "summary": "Lives the company values, guards positive culture, and defines policies that support relatedness between teams",
      "signals": [
        "Brings separate teams together to build relatedness",
        "Holds individuals, teams, and leadership accountable to Medium's values",
        "Sets the tone, policy, and goals around maintaining an inclusive company",
      ],
      "examples": [
        "Organized wine and olive tasting offsite to Napa for the whole engineering org",
        "Devised, delivered and acted on findings from an engineer happiness survey",
        "Challenged and corrected exclusionary behaviour or policies",
      ],
    }],
},*/
}

export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#009ce3', '#5f7284', '#ff6300', '#A7AEB5'])

export const titles = [
  {label: 'QA', minPoints: 0, maxPoints: 90},
  {label: 'QA II', minPoints: 91, maxPoints: 92},
  {label: 'Senior QA/Team Lead', minPoints: 93, maxPoints: 94},
  {label: 'Quality Lead', minPoints: 95, maxPoints: 96},
  {label: 'Principal QA', minPoints: 97},
  {label: 'QA Manager', minPoints: 98}
]

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
}
