const data = {
  "Customization": {
    "Species": ["Human"],
    "Age": ["Infant", "Child", "Teenager", "Young Adult", "Adult", "Old Adult", "Senior"],
    "Gender": ["Female", "Male", "Abstract"],
    "HairColor": ["Black", "Blonde", "Blue", "Brown", "Green", "Grey", "Orange", "Purple", "Red", "Yellow", "White"],
    "EyeColor": ["Blue", "Brown", "Green", "Grey", "Black"],
    "Height": ["Dwarf", "Short", "Average Height", "Tall", "Giant"],
    "Build": ["Ectomorph", "Mesomorph", "Endomorph"],
    "Wealth": ["Homeless", "Lower Class", "Middle Class", "Upper Class", "Ruling Class"],
    "StateOfExistence": ["Healthy", "Tired", "Wounded", "Incapacitated"],
  },
  "PersTraits": [
    {
      "Id": "openness",
      "Name": "Openness",
      "Description": "Openness is a general appreciation for art, emotion, adventure, unusual ideas, imagination, curiosity, and variety of experience. People who are open to experience are intellectually curious, open to emotion, sensitive to beauty and willing to try new things. They tend to be, when compared to closed people, more creative and more aware of their feelings. They are also more likely to hold unconventional beliefs. High openness can be perceived as unpredictability or lack of focus, and more likely to engage in risky behavior or drug-taking. Moreover, individuals with high openness are said to pursue self-actualization specifically by seeking out intense, euphoric experiences. Conversely, those with low openness seek to gain fulfillment through perseverance and are characterized as pragmatic and data-driven—sometimes even perceived to be dogmatic and closed-minded.",
      "Options": [
        {
          "Id": "traitProgressive",
          "Name": "Progressive",
          "Abilities": [
            {
              "Name": "Thinking on Your Feet",
              "Description": "In surprise conflict situations, ones without preparation, roll twice on your first round and take the better of the two."
            },
            {
              "Name": "No! Care killed the Cat",
              "Description": "And satisfaction brought it back! Go up a skill category for 3 rounds when taking risks in unfamiliar places."
            },
            {
              "Name": "Progressive",
              "Description": "You're forward thinking, always ready for change and get along best with people who drive society forward. Progressives react positively to you."
            },
            {
              "Name": "Rock N' Rolla",
              "Description": "Sex drugs and rock and roll!  By taking your mind off things, destressing and getting wild you're able to give yourself a break from the monotony.While this might drain other people, once per session you may gain a state of existence by having fun."
            }
          ],
          "CharTraits": ["Creative", "Curious", "Unorthodox", "Unpredictable", "Experimental", "Risky"]
        },
        {
          "Id": "traitTraditional",
          "Name": "Traditional",
          "Abilities": [
            {
              "Name": "Routine Precision",
              "Description": "You thrive in routine! Any conflict where you use the same skill 3 times in a row gives a bonus to your third roll and every third roll in the streak after."
            },
            {
              "Name": "Curiosity Killed the Cat",
              "Description": "Avoiding risky situations makes you feel safe, comfortable... efficient. When in a familiar setting the GM should offer you a bit extra information on your surroundings."
            },
            {
              "Name": "Traditional",
              "Description": "You share the values of old and people who share those similar values fit in with you and vice versa. Reactions from conservative and traditionaly minded people should be positively affected."
            },
            {
              "Name": "Devout",
              "Description": "By retreating back into your faith you are able to gain back the stability you've been missing and regain your thoughts. Prolonged peaceful prayer from dogmatic religions, participating in religious practices and ceremony replenish your special, if you have more than one special, pick one to replenish. Can only be used once per session."
            }
          ],
          "CharTraits": ["Ceremonial", "Conventional", "Data-Driven", "Dogmatic", "Safe", "Unrelenting"]
        }
      ]
    },
    {
      "Id": "conscientiousness",
      "Name": "Conscientiousness",
      "Description": "Conscientiousness is a tendency to display self-discipline, act dutifully, and strive for achievement against measures or outside expectations. It is related to the way in which people control, regulate, and direct their impulses. High conscientiousness is often perceived as being stubborn and focused. Low conscientiousness is associated with flexibility and spontaneity, but can also appear as sloppiness and lack of reliability. High scores on conscientiousness indicate a preference for planned rather than spontaneous behavior. The average level of conscientiousness rises among young adults and then declines among older adults.",
      "Options": [
        {
          "Id": "traitOrganized",
          "Name": "Organized",
          "Abilities": [
            {
              "Name": "Zealot",
              "Description": "Driven, disciplined, and deliberate. You will take any and all measures to achieve your goals. When working towards a minor motivation take one less emotional and intellectual damage per round. Conflicts must be directly related to the motivation ie. If your motivation is to find your missing daughter you would take a reduction in damage if you were finding clues to her dissapperance but not if you were helping someone that would eventually reveal a clue."
            },
            {
              "Name": "Neat",
              "Description": "You're never absent minded so you you always have what you need. You never forget important items behind."
            },
            {
              "Name": "White Collar Man",
              "Description": "You lived a life that brought you across the higher echelons of society. Local businessmen, nobles, priests and politicians, you know your ways around them all and get a bonus during Emotional and Intellectual conflicts with them."
            },
            {
              "Name": "Diplomatic",
              "Description": "You know how to hold back and bite your tongue, respond appropriately and listen when you need to. Receive a bonus when befriending someone."
            }
          ],
          "CharTraits": ["Disicplined", "Dutiful", "Stubborn", "Focused", "Ambitious", "Dependable"]
        },
        {
          "Id": "traitCareless",
          "Name": "Careless",
          "Abilities": [
            {
              "Name": "Free Spirit",
              "Description": "Go as you will, go as you please, a free spirit thrives in non traditional roles and environments. Reduce negative effects of being in unfamiliar spaces and situations. Not only that but things seem to just go your way by sheer luck and you should expect random luck to occur when you're exploring such situations."
            },
            {
              "Name": "Go With the Flow",
              "Description": "You are used to making it up as you go and making due with what you got! Who cares if you lost your job or you're in a sticky situation. You are highly resistant to adverse situations."
            },
            {
              "Name": "On the Streets",
              "Description": "You've got connections! All that time growing up with the wrong crowd on the wrong streets going the wrong way. Maybe you've moved on from that now but you can still reach out. You know how to find those seedy bars and shady connections. They also know how to find you from time to time."
            },
            {
              "Name": "Hakunamatata",
              "Description": "You've got a gang. Not a violent one, just a little one. A couple of pals, maybe stoner friends, or buds down at the pub. They might not be bad ass but they don't work so you can always call them in a pinch. They can be reasonably helpful but also are able to pick you up when you're down. If they are around, once per session they are able to pick you up when incapacitated."
            }
          ],
          "CharTraits": ["Flexible", "Easy Going", "Spontaneous", "Adaptable", "Unreliable", "Laid Back"]
        }
      ]
    },
    {
      "Id": "extroversion",
      "Name": "Extroversion",
      "Description": "Extroert is characterized by breadth of activities (as opposed to depth), surgency from external activity/situations, and energy creation from external means. The trait is marked by pronounced engagement with the external world. Extraverts enjoy interacting with people, and are often perceived as full of energy. They tend to be enthusiastic, action-oriented individuals. They possess high group visibility, like to talk, and assert themselves. Introverts have lower social engagement and energy levels than extraverts. They tend to seem quiet, low-key, deliberate, and less involved in the social world. Their lack of social involvement should not be interpreted as shyness or depression; instead they are more independent of their social world than extraverts. Introverts need less stimulation, and more time alone than extraverts. This does not mean that they are unfriendly or antisocial; rather, they are reserved in social situations.",
      "Options": [
        {
          "Id": "traitExtrovert",
          "Name": "Extrovert",
          "Abilities": [
            {
              "Name": "Social Butterfly",
              "Description": "You are one of those people that will go out on the night and make a dozen new friends. Your character has the ability to befriend random people and strangers not in direct opposition to you. NPC's should react positively to you after a reasonable amount of time socialising with them."
            },
            {
              "Name": "Life of the Party",
              "Description": "Receive a bonus to social skills and charm when partying or in party settings."
            },
            {
              "Name": "Friends in [all] Places",
              "Description": "You have a large network of friends in a variety of places. They are typically people who would like to help you if they can, but aren't close enough to make large sacrifices for your goals. The GM will rule on what is reasonable."
            },
            {
              "Name": "Empassioned Leadership",
              "Description": "If you have time to give a speech, your entire party will get a bonus to their first role in the conflict immediately following."
            }
          ],
          "CharTraits": ["Optimist", "Flamboyant", "Talkative", "Bubbly", "Gregarious", "Enthusiastic", "Assertive"]
        },
        {
          "Id": "traitIntrovert",
          "Name": "Introvert",
          "Abilities": [
            {
              "Name": "Peace in Solitude",
              "Description": "By taking time for yourself, through things like mediation, solitude or other solo activities that are calm and peaceful, you are able to recharge. Once per session you can go up a state of existence if your character is able to find a few hours of peaceful time to themself."
            },
            {
              "Name": "The Pen is Mighty",
              "Description": "Receive a bonus to any written social interactions , this can be letters, texts, prepared speeches or dialogue."
            },
            {
              "Name": "Keep your friends close",
              "Description": "You have a small tight nit group of friends that are very loyal. They often have a single skill that can be useful and called upon when needed."
            },
            {
              "Name": "Fade to the back",
              "Description": "Through your reserved demeanor and low profile you tend to blend into crowds. Get a bonus when hiding, losing a tail, avoiding being seen, and other such events when in a crowd or social function."
            }
          ],
          "CharTraits": ["Quiet", "Reserved", "Shy", "Analytical", "Independent", "Reflective"]
        }
      ]
    },
    {
      "Id": "agreeableness",
      "Name": "Agreeableness",
      "Description": "The agreeableness trait reflects individual differences in general concern for social harmony. Agreeable/selfess individuals value getting along with others. They are generally considerate, kind, generous, trusting and trustworthy, helpful, and willing to compromise their interests with others. Agreeable people also have an optimistic view of human nature. Disagreeable/selfish individuals place self-interest above getting along with others. They are generally unconcerned with others' well-being, and are less likely to extend themselves for other people. Sometimes their skepticism about others' motives causes them to be suspicious, unfriendly, and uncooperative. Low agreeableness personalities are often competitive or challenging people, which can be seen as argumentative or untrustworthy.",
      "Options": [
        {
          "Id": "traitSelfless",
          "Name": "Selfless",
          "Abilities": [
            {
              "Name": "Kinship",
              "Description": "You care for your people and they care for you. Or so it feels. Any big sacrifice for the party results in you gaining a state of existence. This sacrifice must be significant to the character and the GM has the final verdict. Sacrificing can including giving/buying gifts, taking hits for other people, putting yourself in a pricarious situation to help a team mate etc etc."
            },
            {
              "Name": "Lead by doing",
              "Description": "When you lead the charge, take on risk for the group or put others before you in a conflict situation, everyone in the party receives a bonus, if you drop a state of existence, for one round."
            },
            {
              "Name": "Minimalism",
              "Description": "You have removed yourself from material attachment. You can survive off very little and have no issues with giving up valuable items. You have the ability to find use in reusable items, take no emotional damage from poor accommodations, rations or any other quality of life items."
            },
            {
              "Name": "The good in people",
              "Description": "You believe people are good by nature and  are willing to trust them easily.  Take intellectual damage when trusting someone doesn't work in your favor but gain 1 XP."
            }
          ],
          "CharTraits": ["Trusting", "Straightforward", "Modest", "Altruistic", "Compliant", "Tender-Mindedness"]
        },
        {
          "Id": "traitSelfish",
          "Name": "Selfish",
          "Abilities": [
            {
              "Name": "Kill; No Remorse",
              "Description": "Death has very little effect on you. Take no Emotional damage for killing or people dying near you."
            },
            {
              "Name": "Machevellian Tactics",
              "Description": "You'll do whatever it takes to get to your goals. You have no remorse when manipulating people to your bidding. Use and abuse people without receiving any emotional damage."
            },
            {
              "Name": "Materialism",
              "Description": "Your desire for the material world is never ending! You derive great pleasure from acquiring things of value. From that you have a knack for making money, bartering and finding a good deal. Receive a bonus when involved in commerce conflict resolutions."
            },
            {
              "Name": "Narcisism",
              "Description": "You are so self absorbed you just know you're better than everyone else, and you look it too! Get a bonus to physical appearance and sex appeal. Reduce the difficulty of charming someone through appearance by 2."
            }
          ],
          "CharTraits": ["Cynical", "Deceitful", "Conceited", "Greedy", "Antagonistic", "Tough-Mindedness"]
        }
      ]
    },
    {
      "Id": "neuroticism",
      "Name": "Neuroticism",
      "Description": "is the tendency to experience negative emotions, such as anger, anxiety, or depression. It is sometimes called emotional instability, or is reversed and referred to as emotional stability. Those who score high in neuroticism are emotionally reactive and vulnerable to stress, also tending to be flippant in the way they express emotion. They are more likely to interpret ordinary situations as threatening, and minor frustrations as hopelessly difficult. Their negative emotional reactions tend to persist for unusually long periods of time, which means they are often in a bad mood. At the other end of the scale, individuals who score low in neuroticism are less easily upset and are less emotionally reactive. They tend to be calm, emotionally stable, and free from persistent negative feelings. Freedom from negative feelings does not mean that low-scorers experience a lot of positive feelings.",
      "Options": [
        {
          "Id": "traitSensitive",
          "Name": "Sensitive",
          "Abilities": [
            {
              "Name": "No Risky Business",
              "Description": "If the player has some time to think then the GM should offer a small warning if the player is about to enter a risky situation."
            },
            {
              "Name": "I don't believe in no ghosts",
              "Description": "You are so anxious you have borderline trust issues, and so you don't believe a word anyone tells you without proof. Get a bonus when avoiding being deceived."
            },
            {
              "Name": "What if I forget my...",
              "Description": "You don't forget any items, but you also tend to bring too much."
            },
            {
              "Name": "I'm my own best critic",
              "Description": "Gain 1 xp when rolling a critical fail."
            }
          ],
          "CharTraits": ["Anxious", "Cautious", "Pessimist", "Depressed", "Jealous", "Providing", "Self-Aware", "Realistic"]
        },
        {
          "Id": "traitResilient",
          "Name": "Resilient",
          "Abilities": [
            {
              "Name": "Fortune Favors the bold",
              "Description": "When this character charges forward into a situation bravely, not to be confused with recklessly, they get a bonus for one round. This could be running after captors of a kidnap situation, rushing towards a predator that has attacked a friend, or perhaps driving onto a battlefield to pick up the wounded."
            },
            {
              "Name": "Gifted leadership",
              "Description": "Being calm under pressure means people look to you for leadership and guidance. Gain a bonus when trying to recruit NPC's to your cause."
            },
            {
              "Name": "Nerves of Steel",
              "Description": "You don't crack under pressure! A person with this trait has a resistance to high tense situations or stress. Gain a bonus on the first round of conflict involving high emotional stakes or pressure."
            },
            {
              "Name": "Emotional Rock",
              "Description": "When reaching 0 in emotional health roll a 6 sided die. If it lands on odd, add that back to your HP and do not drop a state of existence."
            }
          ],
          "CharTraits": ["Calm", "Realist", "Stable", "Resilient", "Unintuitive"]
        }
      ]
    }
  ],
  "FlawData": {
    "Categories": ["Bias", "Limitation", "Imperfection", "Problem", "Personality Disorder", "Vice", "Phobia", "Prejudice", "Deficiency"],
    "Dnas": ["Physical", "Emotional", "Intellectual"],
    "Intensities": [
      {
        "Name": "Minor",
        "Effects": [
          "Start of the Session - The GM rolls a 6 sided die. If it lands on 1, then you will have to deal with this affliction throughout the session.",
          "Every Roll - Every time you roll in the affected DNA category and fail, your affliction causes 1 extra damage",
          "When Encountering - If your character encounters your affliction then they suffer -1 to all skill checks in that DNA category",
          "Skill Effect - This affliction affects a skill by lowering it -1",
          "Special Effect - Roll willpower check, on failure you are affected by your affliction",
          "Restriction - Circumventing this flaw lowers your state of existence"
        ]
      },
      {
        "Name": "Major",
        "Effects": [
          "Start of the Session - The GM rolls a 6 sided die, if it lands on 1 or 2, then you will have to deal with this affliction throughout the session.",
          "Every Roll - Every time you roll in the affected DNA category and fail, your affliction causes 2 extra damage",
          "When Encountering - If your character encounters your affliction then they suffer -2 to all skill checks in that DNA category",
          "Skill Effect - This affliction affects a skill by lowering it -2",
          "Special Effect - Roll willpower check at -1, on failure you are affected by your affliction",
          "Restriction - Opposing this flaw lowers your state of existence twice"
        ]
      },
      {
        "Name": "Fatal",
        "Effects": [
          "Start of the Session - The GM rolls a 6 sided die, if it lands on odd, then you will have to deal with this affliction throughout the session.",
          "Every Roll - Every time you roll in the affected DNA category and fail, your affliction causes 3 extra damage",
          "When Encountering - If your character encounters your affliction then they suffer -3 to all skill checks in that DNA category",
          "Skill Effect - This affliction affects a skill by lowering it -3",
          "Special Effect - Roll willpower check at -2, on failure you are affected by your affliction",
          "Restriction - Opposing this flaw lowers your state of existence to incapacitated"
        ]
      }
    ]
  },
  "DnaData": {
    "DnaMin": -2,
    "DnaMax": 2,
    "PointMultipliers": [14, 12, 10, 8, 6],
    "Skills": [
      [
        {
          "Name": "Strength",
          "Description": "Ability to lift, push, crush things due to your physical aptitude. This is typically used for the movement of objects or things rather than your body."
        },
        {
          "Name": "Stalker",
          "Description": "Ability to be stealthy, quiet or move silently."
        },
        {
          "Name": "Combatant",
          "Description": "Physical combat skill, with our without weapons. This skill is used when engaging in combat with an opponent at close range."
        },
        {
          "Name": "Marksmen",
          "Description": "Ranged combat skill, with weapons. This skill is typically used when trying to shoot something from far range. This could be in a combat or non combat situation, but it's restricted to the use of weapons."
        },
        {
          "Name": "Athlete",
          "Description": "Ability to perform athletic feats. This is typically used for the movement of the body rather than objects. This is more guaged towards your body's ability to perform physically straining activities."
        },
        {
          "Name": "Acrobat",
          "Description": "Ability to perform Acrobatic feats. This is typically used for the movement of the body rahter than objects. It is more guaged towards your body's ability to perform physicially dexterous activites."
        },
        {
          "Name": "Aesthetics",
          "Description": "The physical appearance of your character, used in conflict versus constitution. If the opponent fails then they are attracted to your character and will react more positively towards you. The higher the difference in your aesthetics roll and their will power roll the larger the effect."
        },
        {
          "Name": "Senses",
          "Description": "This is your ability to use hearing, sight, taste, smell, and touch to detect things. At super and incredible you can unlock senses beyond natural human function."
        },
        {
          "Name": "Carnal Magician",
          "Description": "Physical magic abilities that affec the physical realm."
        },
        {
          "Name": "Constitution",
          "Description": "Ability to withstand effects on the body, whether that be a lack of oxygen, toxins, heat, cold etc etc."
        }
      ],
      [
        {
          "Name": "Communicator",
          "Description": "The skill of your character to communicate with other sentient beings. This involves negotiations, bartering, intimidation and diplmoacy."
        },
        {
          "Name": "Charisma",
          "Description": "The impact your character has on other people in the same species.This skill is used when trying to get someone to like you more."
        },
        {
          "Name": "Animal Handler",
          "Description": "The ability to interact with non sentient animals.This would include training and rudimentary communication."
        },
        {
          "Name": "Performer",
          "Description": "Ability to perform, could be acting, music, dancing."
        },
        {
          "Name": "Rogue",
          "Description": "Ability to indulge in the cladestine areas of social society, especially in the realms of deceit and mischief. It would be used for finding and fitting in with illegal functions of society."
        },
        {
          "Name": "Willpower",
          "Description": "The ability to resist mental stress. This could be withstanding interrogation, charm, not laughing at the wrong time, resisting charm or being convinced to do something you don't want to do etc etc."
        },
        {
          "Name": "Intuition",
          "Description": "The gut feeling of your character, the ability to read a room or situation through feeling. Passing this skill will tell you the general aura of an environment, weather it's dangerous or safe, happy or sad, if you are being deceived or not. This does not give concrete answers though, only the general feel."
        },
        {
          "Name": "Empathy",
          "Description": "How your character reads other people's emotions and experiences. Used for getting a read on someone, being able to tell if they are lying or not, how they feel towards you and their current mood."
        },
        {
          "Name": "Illusory Magician",
          "Description": "Magic that affects the perceptions of other beigns."
        },
        {
          "Name": "Interrogator",
          "Description": "Ability to retreive information from other sentient beings. To resist an interrogation you must roll will power. To lie during an interrogation you must roguery."
        },
        {
          "Name": "Leader",
          "Description": "The skill used when motivating other people. It can be used to convince someone else to do somethign as well as improve people's performance of a skill. When used in a conflict resolution, use your damage to improve the roll of other members involved in the same conflict resolution. Each point in damage will reduce their roll by 1 and you can divide your damage between members any way you wish."
        }
      ],
      [
        {
          "Name": "Pilot",
          "Description": "The skill used when operating machinery. This includes cars, carts, chariots, spaceships, airplanes boats etc etc"
        },
        {
          "Name": "Scientist",
          "Description": "The skill used in doing scientific research. This would include archeology, geology, physics, chemistry etc etc. This skill is used when deciphering raw information rather than documented."
        },
        {
          "Name": "Engineer",
          "Description": "A skill that is used to build, design or construct machinery and buildings."
        },
        {
          "Name": "Strategist",
          "Description": "The skill to creat a plan for you or other people or groups. If successful, then the conflict you are planning for will have a reduced difficulty rating. This will depend on the success of the strategy and the ruling of the GM."
        },
        {
          "Name": "Intellectual",
          "Description": "The ability to think things through and learn new information as well as memory capabilities. This is used for learning and gathering information in the theoretical world."
        },
        {
          "Name": "Intelligencer",
          "Description": "The skill used when doing espionage like activities. This is used for observing and gathering information in the physical world."
        },
        {
          "Name": "Detective",
          "Description": "A skill used to find and link together clues in order to come to a conclusion. To unlock a clue you must complete a conflict resolution against the clue difficulty and HP."
        },
        {
          "Name": "Artisan",
          "Description": "A skill used for crafting things such as woodwork, leather work or other trades."
        },
        {
          "Name": "Charm Magician",
          "Description": "Magic ability that affects how a person perceives you."
        },
        {
          "Name": "Scholar",
          "Description": "Educational ability used in acquiring and using academic knowledge. This skill can be used to determine what type of information you possess and your ability to acquire information through scholarly methods."
        },
        {
          "Name": "Survivalist",
          "Description": "The ability and skill to survive in hostile environments."
        }
      ]
    ]
  },
  "Abilities": [
    [
      {
        "Name": "Success At All Costs",
        "Description": "Sacrifice a state of existence to do triple damage.",
        "Required": [],
        "Disallowed": []
      },
      {
        "Name": "Disengage",
        "Description": "Get out of a conflict situation when you roll +4 on your skill check. Forgo your damage to the opponent, as you are leaving the altercation.",
        "Required": [],
        "Disallowed": []
      },
      {
        "Name": "Trick Shot",
        "Description": "Reduce your physical skill by 4; triple your damage.",
        "Required": [],
        "Disallowed": []
      },
      {
        "Name": "Over Exertion",
        "Description": "Roll 2 damage dice instead of 1 and take half the damage to yourself. ",
        "Required": [],
        "Disallowed": []
      },
      {
        "Name": "Multitask",
        "Description": "Use 2 points (up to 6) to reduce 1 point (up to 3) of damage to another teammate (as many as you have points to distribute)",
        "Required": [],
        "Disallowed": []
      },
      {
        "Name": "Stalwart Defence",
        "Description": "Instead of causing damage, use your damage role and deduct it from your skill roll.",
        "Required": [],
        "Disallowed": []
      },
      {
        "Name": "Guardian",
        "Description": "Instead of causing damage, use your damage role and deduct it from another party member's skill roll.",
        "Required": [],
        "Disallowed": []
      }
    ],
    [
      {
        "Name": "Success At All Costs",
        "Description": "Sacrifice a state of existence to do triple damage.",
        "Required": [],
        "Disallowed": []
      },
      {
        "Name": "Disengage",
        "Description": "Get out of a conflict situation when you roll +4 on your skill check. Forgo your damage to the opponent, as you are leaving the altercation.",
        "Required": [],
        "Disallowed": []
      },
      {
        "Name": "Unorthodox Appeal",
        "Description": "Reduce your emotional skill by 4; roll 2 damage dice",
        "Required": [],
        "Disallowed": []
      },
      {
        "Name": "Over Exertion",
        "Description": "Roll 2 damage dice instead of 1 and take half the damage to yourself. ",
        "Required": [],
        "Disallowed": []
      },
      {
        "Name": "Multitask",
        "Description": "Use 2 points (up to 6) to reduce 1 point (up to 3) of damage to another teammate (as many as you have points to distribute)",
        "Required": [],
        "Disallowed": []
      },
      {
        "Name": "Inner Peace",
        "Description": "Instead of causing damage on a  successful roll, use the damage to reduce the damage of a single party member.",
        "Required": [],
        "Disallowed": []
      },
      {
        "Name": "Shut up! That's my friend",
        "Description": "Instead of causing damage on a successful roll, use the damage to boost the roll of a party memeber using the same skill.",
        "Required": [],
        "Disallowed": []
      }
    ],
    [
      {
        "Name": "Success At All Costs",
        "Description": "Sacrifice a state of existence to do triple damage.",
        "Required": [],
        "Disallowed": []
      },
      {
        "Name": "Disengage",
        "Description": "Get out of a conflict situation when you roll +4 on your skill check. Forgo your damage to the opponent, as you are leaving the altercation.",
        "Required": [],
        "Disallowed": []
      },
      {
        "Name": "Twist of the Tongue",
        "Description": "Reduce your intellectual skill by 4; roll 2 damage dice",
        "Required": [],
        "Disallowed": []
      },
      {
        "Name": "My Mind: Impenetrable",
        "Description": "Instead of causing damage on a  successful roll, use the damage to reduce the damage of a single party member.",
        "Required": [],
        "Disallowed": []
      },
      {
        "Name": "Apes Together Strong",
        "Description": "Instead of causing damage on a successful roll, use the damage to boost the roll of a party memeber using the same skill.",
        "Required": [],
        "Disallowed": []
      },
      {
        "Name": "Over Exertion",
        "Description": "Roll 2 damage dice instead of 1 and take half the damage to yourself. ",
        "Required": [],
        "Disallowed": []
      },
      {
        "Name": "Multitask",
        "Description": "Use 2 points (up to 6) to reduce 1 point (up to 3) of damage to another teammate (as many as you have points to distribute)",
        "Required": [],
        "Disallowed": []
      }
    ]
  ],
  "Specials": [
    {
      "Name": "Tie 'em up",
      "Description": "Grab 'em in a bear hug, hog tie him with a lassoo, or wrap 'em up in magic vines! You can prevent your opponent from doing any physical damage this round. You do your normal damage and the opponent's difficulty skill is reduced by 1.",
      "Required": [],
      "Disallowed": []
    },
    {
      "Name": "Honed Reflexes",
      "Description": "Through training, cybernetics, magic or super powers you have reflexes beyond normal skills and rarely make mistakes. Reroll up to 3 physical conflict rolls.",
      "Required": [],
      "Disallowed": []
    },
    {
      "Name": "Dig Down Deep",
      "Description": "At incredible moments of stress a person can look deep inside and muster up physicality far greater than they are normally capable of. Perform a physical skill one tier higher for the rest of the conflict encounter.",
      "Required": [[4, 1, 2]],
      "Disallowed": []
    },
    {
      "Name": "Inspiring Feat",
      "Description": "You perform a physical feat at such an amazing sill level you gain confidence like never before. After successfully rolling a single physical skill in a conflict use this ability to move yourself up a state of existence. All other party members get +1 to their skill check.",
      "Required": [],
      "Disallowed": []
    },
    {
      "Name": "RAGE!!!",
      "Description": "Lose all sense of control and do ultimate destruction!! Multiply your damage die by 5 and apply it to your opponent. Also take double your pre multiplied damage as self harm.",
      "Required": [[4, 0, -1]],
      "Disallowed": []
    },
    {
      "Name": "Daredevil",
      "Description": "Automatically succeed in a conflict round when the skill level is higher than your skill's level.",
      "Required": [],
      "Disallowed": [[4, 0, 0], [0, 1, -1]]
    },
    {
      "Name": "Gut Feeling",
      "Description": "I got a bad feeling about this, my spidey senses are tingling, i'm going with my gut on this one. Use this ability to get a read on a situation that isn't obvious. The GM can tell you if there is impending danger, someone isn't being honest, or a set up is coming!",
      "Required": [[4, 0, -1]],
      "Disallowed": [[0, 1, 2]]
    },
    {
      "Name": "Wink and a Smile",
      "Description": "Automatically pass a social conflict check.",
      "Required": [[2, 0, -1]],
      "Disallowed": [[4, 0, -1]]
    },
    {
      "Name": "Never Give up, Never Surrender",
      "Description": "In one last dire attempt to persevere, your emotional resilience peaks and you barrel forward stronger than ever. When you are in the wounded state of existence,  make a last ditch effort by boosting your critical successes to 3, 4, 5, 6 and 7 until you either win/lose the encounter or heal up a state of existence.",
      "Required": [[4, 1, -1]],
      "Disallowed": []
    },
    {
      "Name": "Inspiring Speech",
      "Description": "Rousing your troops with such verbal conviction that their morale surges! Roll for a personal success vs skill and if successful perform a speech before any conflict with the leadership skill and move all other party members up a state of existence.",
      "Required": [],
      "Disallowed": [[2, 1, -1]]
    },
    {
      "Name": "Kansas City Shuffle",
      "Description": "At any time in any conflict you and your party may retreat from battle through a magnificient trick, forethought and planning, or strategic maneuvre.",
      "Required": [],
      "Disallowed": []
    },
    {
      "Name": "Inspiring Maneuver",
      "Description": "Position yourself strategically, whether it be in a physical or intellectual conflict in such  magnificent way it raises one of your party members of your choosing up to healthy state of existence. All party members receive +1 to their skill check.",
      "Required": [],
      "Disallowed": []
    },
    {
      "Name": "Outside the Box Thinking",
      "Description": "You have a knack for perceiving things differently and finding an opportunity when there appears to be none. Switch up to 3 dice outcomes with anyone on the table.",
      "Required": [[0, 0, 0]],
      "Disallowed": [[1, 0, 0]]
    },
    {
      "Name": "Deductive Detective",
      "Description": "Solve a missing piece of a puzzle, situation or any logical problem like finding a missing person, murderer, combination.",
      "Required": [[1, 0, -1]],
      "Disallowed": []
    },
    {
      "Name": "Inductive Detective",
      "Description": "You can predict the future! Well, it feels that way with enough data. If you can spend a reasonable amount of time researching a topic, get an idea of what will happen.",
      "Required": [[1, 0, -1]],
      "Disallowed": []
    },
    {
      "Name": "Tactical Superiority",
      "Description": "It's not just about the body, the brain is the best tool to get out of a sticky situation. Use your strategy skill in place of a phyisical or emotional skill for one conflict resolution.",
      "Required": [[4, 1, -1]],
      "Disallowed": []
    },
  ],
  "Motives": [
    {"Motive": "CUSTOM", "Link": ""},
    {"Motive": "ACHIEVING DOMINION OVER ANOTHER (DARK)", "Link": ""},
    {"Motive": "ACHIEVING SPIRITUAL ENLIGHTENMENT", "Link": ""},
    {"Motive": "AVOIDING CERTAIN DEATH", "Link": ""},
    {"Motive": "AVOIDING FINANCIAL RUIN", "Link": ""},
    {"Motive": "BEATING A DIAGNOSIS OR CONDITION", "Link": ""},
    {"Motive": "BECOMING A LEADER OF OTHERS", "Link": ""},
    {"Motive": "BECOMING THE SOLE POWER OR AUTHORITY (DARK)", "Link": ""},
    {"Motive": "BEING ACCEPTED BY OTHERS", "Link": ""},
    {"Motive": "BEING ACKNOWLEDGED OR APPRECIATED BY FAMILY", "Link": ""},
    {"Motive": "BEING A PHILANTHROPIST", "Link": ""},
    {"Motive": "BEING THE BEST AT SOMETHING", "Link": ""},
    {"Motive": "BREAKING PEOPLE SO THEY ABANDON THEIR BELIEFS (DARK)", "Link": ""},
    {"Motive": "CARING FOR AN AGING PARENT", "Link": ""},
    {"Motive": "CARRYING ON A LEGACY", "Link": ""},
    {"Motive": "CATCHING THE BAD GUY OR GIRL", "Link": ""},
    {"Motive": "CAUSING SOMEONE PAIN (DARK)", "Link": ""},
    {"Motive": "COMING TO GRIPS WITH A MENTAL DISORDER", "Link": ""},
    {"Motive": "CONTROLLING OTHERS (DARK)", "Link": ""},
    {"Motive": "COPING WITH A LEARNING DISABILITY OR ILLNESS (KIDLIT)", "Link": ""},
    {"Motive": "CORRECTING A PERCEIVED MISTAKE (DARK)", "Link": ""},
    {"Motive": "CREATING OR DISCOVERING SOMETHING IMPORTANT", "Link": ""},
    {"Motive": "DEALING WITH BULLIES (KIDLIT)", "Link": ""},
    {"Motive": "DISCOVERING ONE'S TRUE SELF", "Link": ""},
    {"Motive": "DOING THE RIGHT THING", "Link": ""},
    {"Motive": "DOING THE RIGHT THING (KIDLIT)", "Link": ""},
    {"Motive": "EMBRACING A PERSONAL IDENTITY (KIDLIT)", "Link": ""},
    {"Motive": "ESCAPING A DANGEROUS LIFE ONE NO LONGER WANTS TO LIVE", "Link": ""},
    {"Motive": "ESCAPING A KILLER", "Link": ""},
    {"Motive": "ESCAPING CONFINEMENT", "Link": ""},
    {"Motive": "ESCAPING DANGER (KIDLIT)", "Link": ""},
    {"Motive": "ESCAPING HOMELESSNESS", "Link": ""},
    {"Motive": "ESCAPING INVADERS", "Link": ""},
    {"Motive": "ESCAPING WIDESPREAD DISASTER", "Link": ""},
    {"Motive": "EVADING RESPONSIBILITY (DARK)", "Link": ""},
    {"Motive": "EXPLORING ONE'S BIOLOGICAL ROOTS", "Link": ""},
    {"Motive": "FINDING A LIFELONG PARTNER", "Link": ""},
    {"Motive": "FINDING FRIENDSHIP OR COMPANIONSHIP", "Link": ""},
    {"Motive": "FINDING ONE'S PURPOSE", "Link": ""},
    {"Motive": "FINDING SOMETHING LOST", "Link": ""},
    {"Motive": "FITTING IN (KIDLIT)", "Link": ""},
    {"Motive": "FORCING A BIG CHANGE (DARK)", "Link": ""},
    {"Motive": "FORCING CONVERSION (DARK)", "Link": ""},
    {"Motive": "FORGIVING ONESELF", "Link": ""},
    {"Motive": "GAINING CONTROL OVER ONE'S OWN LIFE", "Link": ""},
    {"Motive": "GETTING REVENGE (DARK)", "Link": ""},
    {"Motive": "GIVING UP A CHILD", "Link": ""},
    {"Motive": "HAVING A CHILD", "Link": ""},
    {"Motive": "HAVING IT ALL (DARK)", "Link": ""},
    {"Motive": "HELPING A LOVED ONE RECOGNIZE THEY ARE HURTING THEMSELVES AND OTHERS", "Link": ""},
    {"Motive": "KEEPING WHAT ONE HAS NO MATTER WHAT (DARK)", "Link": ""},
    {"Motive": "LEARNING TO TRUST (KIDLIT)", "Link": ""},
    {"Motive": "MAKING SOMEONE PROUD", "Link": ""},
    {"Motive": "NAVIGATING A CHANGING FAMILY SITUATION (KIDLIT)", "Link": ""},
    {"Motive": "OBLITERATING AN ENEMY (DARK)", "Link": ""},
    {"Motive": "OBSESSIVELY PURSUING A RELATIONSHIP (DARK)", "Link": ""},
    {"Motive": "OBTAINING GLORY WHATEVER THE COST (DARK)", "Link": ""},
    {"Motive": "OBTAINING SHELTER FROM THE ELEMENTS", "Link": ""},
    {"Motive": "OVERCOMING ABUSE AND LEARNING TO TRUST", "Link": ""},
    {"Motive": "OVERCOMING ADDICTION", "Link": ""},
    {"Motive": "OVERCOMING A DEBILITATING FEAR", "Link": ""},
    {"Motive": "OVERCOMING A FEAR (KIDLIT)", "Link": ""},
    {"Motive": "OVERTHROWING GOOD WITH EVIL (DARK)", "Link": ""},
    {"Motive": "PROFITEERING (DARK)", "Link": ""},
    {"Motive": "PROMOTING CHAOS (DARK)", "Link": ""},
    {"Motive": "PROTECTING A LOVED ONE", "Link": ""},
    {"Motive": "PROTECTING ONE'S HOME OR PROPERTY", "Link": ""},
    {"Motive": "PROVIDING FOR ONE'S FAMILY", "Link": ""},
    {"Motive": "PROVIDING SECURITY FOR FUTURE GENERATIONS", "Link": ""},
    {"Motive": "PROVING SOMEONE WRONG", "Link": ""},
    {"Motive": "PURSUING A PASSION", "Link": ""},
    {"Motive": "PURSUING A TOXIC DESIRE (DARK)", "Link": ""},
    {"Motive": "PURSUING JUSTICE FOR ONESELF OR OTHERS", "Link": ""},
    {"Motive": "PURSUING KNOWLEDGE", "Link": ""},
    {"Motive": "PURSUING MASTERY OF A SKILL OR TALENT", "Link": ""},
    {"Motive": "REALIZING A DREAM", "Link": ""},
    {"Motive": "RECONCILING WITH AN ESTRANGED FAMILY MEMBER", "Link": ""},
    {"Motive": "REPAYING A DEBT", "Link": ""},
    {"Motive": "RESCUING A LOVED ONE FROM A CAPTOR", "Link": ""},
    {"Motive": "RESISTING PEER PRESSURE (KIDLIT)", "Link": ""},
    {"Motive": "RESTORING ONE'S NAME OR REPUTATION", "Link": ""},
    {"Motive": "RIGHTING A DEEP WRONG", "Link": ""},
    {"Motive": "RUINING SOMEONE'S LIFE (DARK)", "Link": ""},
    {"Motive": "RUINING SOMEONE'S REPUTATION (DARK)", "Link": ""},
    {"Motive": "SAVING THE WORLD", "Link": ""},
    {"Motive": "SEEKING DEATH (DARK)", "Link": ""},
    {"Motive": "SERVING OTHERS", "Link": ""},
    {"Motive": "SOLVING A PROBLEM (KIDLIT)", "Link": ""},
    {"Motive": "STOPPING AN EVENT FROM HAPPENING", "Link": ""},
    {"Motive": "SUPPORTING ONESELF FINANCIALLY", "Link": ""},
    {"Motive": "SURVIVING LOSS", "Link": ""},
    {"Motive": "SURVIVING THE DEATH OF A LOVED ONE", "Link": ""},
    {"Motive": "TAKING WHAT ONE IS OWED (DARK)", "Link": ""},
    {"Motive": "TRYING SOMETHING NEW (KIDLIT)", "Link": ""},
    {"Motive": "TRYING TO SUCCEED WHERE ONE HAS PREVIOUSLY FAILED", "Link": ""},
    {"Motive": "WINNING A COMPETITION", "Link": ""},
  ]
}