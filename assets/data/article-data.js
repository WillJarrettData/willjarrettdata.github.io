const articles = [
    {
        id: -1,
        title: "Ukraine war timeline",
        description: "An interactive map of the day-by-day territorial changes in the Russia-Ukraine war, with major events highlighted.",
        link: "https://apnews.com/article/russia-ukraine-war-ukraine-vladimir-putin-0000019c8ad8dd59afffcadd1e100000",
        tags: ["ArcGIS", "React", "Python"],
        media: {
            type: "image",
            src: "ukraineTimeline_thumb.webp",
            alt: "Article showing how the Venezuelan oil industry has changed over time"
        }
    },
    {
        id: 0,
        title: "Climate misinfo database",
        description: "Svelte apps showing thousands of examples of AI-categorised climate change misinformation from social media.",
        link: "https://www.tortoisemedia.com/data/hot-air",
        tags: ["JavaScript", "Svelte", "Python"],
        media: {
            type: "image",
            src: "hotAir_thumb.webp",
            alt: "Svelte app showing climate change misinformation on the internet"
        }
    },
    {
        id: 1,
        title: "Hill bomb arrests",
        description: "Interactive timeline of the Dolores Park Hill Bomb, where 117 people were arrested during a purported riot.",
        link: "https://missionlocal.org/2023/07/hill-bomb-timeline-police-skaters-map-juvenile-policies/",
        tags: ["JavaScript", "Mapbox", "Scrollama"],
        media: {
            type: "video",
            src: "hillBomb_thumb.mp4",
            alt: "Scrolling map timeline of the Dolores Park Hill Bomb arrests"
        }
    },
    {
        id: 2,
        title: "Big money in SF politics",
        description: "Months-long investigation with Guardian US into 'grey money' political spending by tech billionaires in San Francisco.",
        link: "https://www.theguardian.com/us-news/2024/feb/12/san-francisco-tech-billionaires-political-influence",
        tags: ["JavaScript", "D3"],
        media: {
            type: "image",
            src: "bigMoney_thumb.webp",
            alt: "Network graph showing connections between ultra-rich and SF political causes"
        }
    },
    {
        id: 3,
        title: "March 2024 election",
        description: "Maps and graphics showing precinct-level results of the March 2024 primary, with candidate races and props.",
        link: "https://missionlocal.org/2024/03/election-results-march-2024-dccc-assembly-props-court-maps-live-updates/",
        tags: ["JavaScript", "Mapbox"],
        media: {
            type: "image",
            src: "march2024Election_thumb.webp",
            alt: "Map from the San Francisco March 2024 local election"
        }
    },
    {
        id: 4,
        title: "Fatal SFPD shootings",
        description: "An interactive database with details on everyone killed in San Francisco police shootings since 2000.",
        link: "https://missionlocal.org/2022/10/police-shooting-deaths-san-francisco-2000-database/",
        tags: ["Javascript", "Shuffle", "illustration"],
        media: {
            type: "image",
            src: "2000shootings_thumb.webp",
            alt: "Portraits of people killed by police in San Francisco since 2000"
        }
    },
    {
        id: 5,
        title: "San Francisco budget",
        description: "Created an interactive budget explorer for the 2023-25 period, with detailed explanations and breakdowns.",
        link: "https://missionlocal.org/2023/08/explore-san-francisco-budget-2023-2024-2025/",
        tags: ["JavaScript", "D3", "Datawrapper"],
        media: {
            type: "image",
            src: "budget_thumb.webp",
            alt: "Donut chart showing budget for San Francisco 2023-25"
        }
    },
    {
        id: 6,
        title: "Web of corruption",
        description: "See how all the major players in San Francisco's ongoing city corruption scandal are connected.",
        link: "https://missionlocal.org/2021/11/web-of-corruption-explore-the-cronyism-lies-and-federal-crimes-at-the-heart-of-san-franciscos-government/",
        tags: ["JavaScript", "D3", "Python"],
        media: {
            type: "image",
            src: "webOfCorruption_thumb.webp",
            alt: "Network graph showing connections between players in SF corruption scandal"
        }
    },
    {
        id: 7,
        title: "Bomb-armed police robots",
        description: "Broke the news that SFPD was planning to explicitly authorize robot lethal force. The policy was reversed after protests.",
        link: "https://missionlocal.org/2022/11/killer-robots-to-be-permitted-under-sfpd-draft-policy/",
        tags: ["Plain old reporting"],
        media: {
            type: "image",
            src: "robot_thumb.webp",
            alt: "Police bomb disposal robot"
        }
    },
    {
        id: 8,
        title: "Weekly news quiz",
        description: "An interactive quiz format to recap the week's news, with backend development from Craig Mautner.",
        link: "https://missionlocal.org/2023/04/quiz-of-the-week-which-mission-sculpture-was-targeted-by-thieves/",
        tags: ["JavaScript", "PHP"],
        media: {
            type: "image",
            src: "weeklyQuiz_thumb.webp",
            alt: "Bar chart showing quiz results"
        }
    },
    {
        id: 9,
        title: "$70 million in cop settlements",
        description: "Explore the cash that has been paid out in all the San Francisco law enforcement settlements since 2010.",
        link: "https://missionlocal.org/2023/06/millions-law-enforcement-sfpd-sheriff-lawsuit-settlements/",
        tags: ["JavaScript", "D3", "Python", "Illustrator"],
        media: {
            type: "video",
            src: "policeSettlements_thumb.mp4",
            alt: "Interactive beeswarm chart showing police settlements in San Francisco"
        }
    },
    {
        id: 10,
        title: "Your neighborhood in data",
        description: "A JavaScript web app that allows users to compare data on a custom area in San Francisco with the city at large.",
        link: "https://missionlocal.org/2023/02/census-custom-area-builder-san-francisco-demographics-data-map/",
        tags: ["JavaScript", "Mapbox", "Python"],
        media: {
            type: "image",
            src: "censusMap_thumb.webp",
            alt: "Map showing custom area in San Francisco"
        }
    },
    {
        id: 11,
        title: "Boudin recall funding",
        description: "Interactive beeswarms and donut charts show donors for and against the recall of Chesa Boudin.",
        link: "https://missionlocal.org/2022/05/explore-almost-9-million-donated-for-and-against-boudin-recall/",
        tags: ["JavaScript", "D3", "Python", "Illustrator"],
        media: {
            type: "image",
            src: "boudin_thumb.webp",
            alt: "Beeswarm chart showing donors for and against the recall of Chesa Boudin"
        }
    },
    // {
    //     id: 12,
    //     title: "SF's redistricting debacle",
    //     description: "Deeply covered the city's redistricting process, and broke the news that Chair Townsend felt pressured by the mayor.",
    //     link: "https://missionlocal.org/2022/04/chair-of-redistricting-task-force-told-others-he-felt-mayors-pressure-in-voting-on-maps/",
    //     tags: ["JavaScript", "Mapbox"],
    //     media: {
    //         type: "image",
    //         src: "redistricting_thumb.webp",
    //         alt: "Text messages from the redistricting chair"
    //     }
    // },
    {
        id: 13,
        title: "Crime change in 2022",
        description: "Maps and scrollytelling charts to show how different types of crime changed from 2017 to 2022.",
        link: "https://missionlocal.org/2023/01/explore-how-crime-changed-in-2022/",
        tags: ["JavaScript", "Scrollama", "Python", "Illustrator"],
        media: {
            type: "image",
            src: "crimeChange2022_thumb.webp",
            alt: "Line chart showing crime change in 2022"
        }
    },
    {
        id: 14,
        title: "Trashcan showdown",
        description: "A data deep dive into FOIA'd survey results on the city's surprisingly controversial trashcan replacement program.",
        link: "https://missionlocal.org/2022/09/san-francisco-trash-can-trial-survey-results/",
        tags: ["Python", "Illustrator"],
        media: {
            type: "image",
            src: "binSurvey_thumb.webp",
            alt: "Chart showing positive and negative responses to a trashcan design"
        }
    },
    {
        id: 15,
        title: "How did your neighbors vote?",
        description: "An interactive that shows users how their neighborhood voted on Nov. 8 compared to the rest of the city.",
        link: "https://missionlocal.org/2022/11/nov-8-election-jenkins-dorsey-precinct-neighborhood-vote-interactive-explore/",
        tags: ["JavaScript", "Mapbox", "Google API"],
        media: {
            type: "image",
            src: "voteFinder_thumb.webp",
            alt: "Map app showing votes in San Francisco neighborhoods"
        }
    },
    {
        id: 16,
        title: "Rise in scooter collisions",
        description: "Interactive mapping and graphics to show the 31% increase in scooter collisions in the past year.",
        link: "https://missionlocal.org/2023/05/scooter-injuries-rise-31-percent-2022-infrastructure-lime-spin/",
        tags: ["JavaScript", "Mapbox", "Python", "Illustrator"],
        media: {
            type: "image",
            src: "scooterCollisions_thumb.webp",
            alt: "Bar chart showing scooter injuries across a six-year period"
        }
    },
    {
        id: 17,
        title: "Mission Local crossword",
        description: "Created a New York Times-style crossword app and wrote a spooky(ish) puzzle for Halloween.",
        link: "https://missionlocal.org/2023/10/halloween-crossword-2023/",
        tags: ["JavaScript"],
        media: {
            type: "image",
            src: "crossword_thumb.webp",
            alt: "Crossword puzzle"
        }
    }
];
