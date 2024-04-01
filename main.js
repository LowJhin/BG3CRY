//LOAD LANGUAGE RESOURCES
const Lang = {
    en : {
        ui_desc : "For Baldur\'s Gate 3 Players <span class=\"point_text\">Class Recommender</span>",
        ui_start : "Click To Start",
        ui_questions : {
            0 : "Animals...",
            1 : "Choose a statement",
            2 : "Choose a statement",
            3 : "Choose a statement",
            4 : "Choose a statement",
            5 : "Choose a statement",
            6 : "Civilization makes us...",
            7 : "Do you enjoy reading?",
            8 : "I am more confidient...",
            9 : "I have a greater interest in...",
            10 : "I like pets that are...",
            11 : "I put my faith in...",
            12 : "I think it would be interesting to have a supernatural experience...",
            13 : "I use the force of my personality...",
            14 : "I use the force of my personality...",
            15 : "I work out...",
            16 : "I would rather be a member of a religion that is...",
            17 : "I would rather be...",
            18 : "I would rather live...",
            19 : "I would rather spend two hours...",
            20 : "I would rather spend two hours...",
            21 : "I would rather spend two hours...",
            22 : "I would rather spend two hours...",
            23 : "I would rather spend two hours...",
            24 : "I would rather spend two hours...",
            25 : "I would rather spend two hours...",
            26 : "I would rather spend...",
            27 : "I would rather watch...",
            28 : "If you want to make a lot of money, it is important to be educated.",
            29 : "I\'m hungry for...",
            30 : "In a fight, it is better to...",
            31 : "In a fight, it is better to...",
            32 : "In a fight, it is better to be...",
            33 : "In my job, I rely more on my...",
            34 : "In my job, I...",
            35 : "It is better to be...",
            36 : "It is better to confront your enemies...",
            37 : "It is better to serve...",
            38 : "It is better to...",
            39 : "It is better to...",
            40 : "It is better to...",
            41 : "It is better to...",
            42 : "It is better to...",
            43 : "It is easier for me to learn by...",
            44 : "It is more important to support your cause with...",
            45 : "Knowledge should be used to...",
            46 : "Life is about...",
            47 : "Personal power comes from...",
            48 : "Religion is an institution that...",
            49 : "The universe is ruled by...",
            50 : "The universe...",
            51 : "The wilderness is a nive place to visit, but I wouldn\'t want to live there.",
            52 : "There\'s a right way to do things and a wrong way to do things.",
            53 : "Visiting a haunted house would...",
            54 : "What is more important in your life?",
            55 : "What is more important in your life?",
            56 : "What is more important in your life?",
            57 : "What is more important in your life?",
            58 : "When handling life\'s challenges I call on...",
            59 : "When I was young, I enjoyed gym class.",
            60 : "When I was young, I performed better in...",
            61 : "When it comes to talent, I believe...",
            62 : "Which do you prefer?",
            63 : "Which do you prefer?",
            64 : "Which do you prefer?",
            65 : "Would you cheat on an important test?"
        },
        ui_anwserOne : {
            0 : "Deserve our respect.",
            1 : "I love technology.",
            2 : "I love the city.",
            3 : "Human is stronger than nature.",
            4 : "Nature should be left unspoiled an undisturbed.",
            5 : "Technology is stronger than nature.",
            6 : "Stronger.",
            7 : "Yes",
            8 : "At work.",
            9 : "The supernatural.",
            10 : "Loyal.",
            11 : "A higher power.",
            12 : "True",
            13 : "To convince people that I\'m right.",
            14 : "To get what I want.",
            15 : "So that I will be healthier.",
            16 : "Well-established with a long history.",
            17 : "Well-paid.",
            18 : "In the city.",
            19 : "Alone in the wilderness.",
            20 : "At the gym.",
            21 : "Camping with my friends.",
            22 : "Enjoying the outdoors",
            23 : "Hiking a trail.",
            24 : "Learning something new.",
            25 : "Playing a sport.",
            26 : "A night on the town.",
            27 : "A nature documentrary",
            28 : "True.",
            29 : "Wealth.",
            30 : "Rely on your own skills.",
            31 : "Quick.",
            32 : "Keep your head and wait for opportune moments.",
            33 : "Education.",
            34 : "Use tools and equipment.",
            35 : "Rich.",
            36 : "Openly and honestly.",
            37 : "A cause.",
            38 : "Actively champion a cause",
            39 : "Be yourself.",
            40 : "Defend the weak.",
            41 : "Fight fiar.",
            42 : "Take a stand for what you believe in.",
            43 : "Doing.",
            44 : "Facts.",
            45 : "Educate and entertain others.",
            46 : "Improving yourself.",
            47 : "Living a disciplined life.",
            48 : "Allows some people to exploit the fears of others.",
            49 : "A higher power.",
            50 : "Has supernatural being that take a personal interest in me.",
            51 : "True.",
            52 : "True.",
            53 : "Be exciting.",
            54 : "Feeling emotions.",
            55 : "Love.",
            56 : "Practical skills.",
            57 : "Wisdom.",
            58 : "The power within myself.",
            59 : "True",
            60 : "My math and science classes.",
            61 : "A person either has it or they don\'t",
            62 : "Eastern religion.",
            63 : "New Age religion.",
            64 : "Western religion.",
            65 : "Yes."
        },
        ui_anwserTwo : {
            0 : "Are delicious.",
            1 : "I hate technology.",
            2 : "I hate the city.",
            3 : "Nature is stronger than human.",
            4 : "Natrue is should be used responsibly and enjoyed.",
            5 : "Nature is stronger than technology.",
            6 : "Weaker.",
            7 : "No.",
            8 : "At play.",
            9 : "the natural world.",
            10 : "Exotic.",
            11 : "Myself.",
            12 : "False.",
            13 : "To enterain others.",
            14 : "To guide others in making the right decisions.",
            15 : "So that I will be more attractive.",
            16 : "Recently established with innovative new ideas.",
            17 : "Doing something I enjoy.",
            18 : "In the country.",
            19 : "Alone working with my hands.",
            20 : "At church.",
            21 : "Drinking with my friends.",
            22 : "At a good concert.",
            23 : "Discussing philosophy.",
            24 : "Leisurely jogging.",
            25 : "Reading a book.",
            26 : "A day riding horses.",
            27 : "A scientific documentary.",
            28 : "False.",
            29 : "Power.",
            30 : "Call for reinforcements.",
            31 : "Tough.",
            32 : "Go at it with everything you\'ve got.",
            33 : "Common sense.",
            34 : "Do not use tools and equipment.",
            35 : "Powerful.",
            36 : "Using guile and wit.",
            37 : "Someone influential.",
            38 : "Live as a good example to others.",
            39 : "Be polite.",
            40 : "Help the poor.",
            41 : "Fight dirty.",
            42 : "Try to see both sides of an issue.",
            43 : "Studying.",
            44 : "Conviction.",
            45 : "Develop and enlighten yourself.",
            46 : "Having fun.",
            47 : "Having confidence in yourself.",
            48 : "Helps people live meaningful lives.",
            49 : "Scientific laws.",
            50 : "Is governed by impersonal forces that can be understood.",
            51 : "False.",
            52 : "False.",
            53 : "Frighten me.",
            54 : "Being disciplined.",
            55 : "Honor.",
            56 : "Enlightenment.",
            57 : "Wealth.",
            58 : "The powers that watch over me.",
            59 : "False.",
            60 : "My music and art classes.",
            61 : "That with an excellent teacher, the sky\'s the limit.",
            62 : "Western religion.",
            63 : "Eastern religion.",
            64 : "New Age religion.",
            65 : "No.",
        },
        ui_result : "Here are the classes we recommend for you",
        ui_resultClass : {
            barbarian : "Barbarian",
            bard : "Bard",
            cleric : "Cleric",
            druid : "Druid",
            fighter : "Fighter",
            monk : "Monk",
            paladin : "Paladin",
            ranger : "Ranger",
            rogue : "Rogue",
            sorcerer : "Sorcerer",
            warlock : "Warlock",
            wizard : "Wizard"
        },
        ui_resultLore : {
            barbarian : "Barbarians are brave, even reckless, and their warrior skills make them well suited to adventure.<br />Instead of training and discipline, barbarians have a powerful rage that makes them stronger, tougher, and better able to withstand attacks.<br />They only have the energy for a few such displays per day, but it is usually sufficient.<br />Constant exposure to danger has also given barbarians a sort of 'sixth sense,' the preternatural ability to sense danger and dodge attacks, and their running stamina is legendary.",
            bard : "Bards often serve as negotiators, messengers, scouts, and spies.<br />They love to accompany heroes (and villains) to witness heroic (or villainous) deeds firsthand, since a bard who can tell a story from personal experience earns renown among his fellows.<br />A bard casts arcane spells without any advance preparation, much like a sorcerer.<br />Bards also share some specialized skills with rogues, and their knowledge of item lore is nearly unmatched.<br />A high Charisma score allows a bard to cast high-level spells.",
            cleric : "Clerics act as intermediaries between the earthly and the divine (or infernal) worlds.<br />A good cleric helps those in need, while an evil cleric seeks to spread his patron's vision of evil across the world.<br />All clerics can heal wounds and bring people back from the brink of death, and powerful clerics can even raise the dead.<br />Likewise, all clerics have authority over undead creatures, and they can turn away or even destroy these creatures.<br />Clerics are trained in the use of simple weapons, and can use all forms of armor and shields without penalty, since armor does not interfere with the casting of divine spells.<br />In addition to his normal complement of spells, every cleric chooses to focus on two of his deity's domains.<br />These domains grants the cleric special powers, and give him access to spells that he might otherwise never learn.<br />A cleric's Wisdom score should be high, since this determines the maximum spell level that he can cast.",
            druid : "Druids gain power not by ruling nature but by being at one with it.<br />They hate the unnatural, including aberrations or undead, and destroy them where possible.<br />Druids receive divine spells from nature, not the gods, and can gain an array of powers as they gain experience, including the ability to take the shapes of animals.<br />The weapons and armor of a druid are restricted by their traditional oaths, not simply training.<br />A druid's Wisdom score should be high, as this determines the maximum spell level that they can cast.",
            fighter : "Fighters can be many things, from soldiers to criminal enforcers.<br />Some see adventure as a way to get rich, while others use their skills to protect the innocent.<br />Fighters have the best all-around fighting capabilities of the PC classes, and they are trained to use all standard weapons and armor.<br />A fighter's rigorous martial training grants him many bonus feats as he progresses, and high-level fighters have access to special melee maneuvers and exotic weapons not available to any other character.",
            monk : "Monks are versatile warriors skilled at fighting without weapons or armor.<br />Good-aligned monks serve as protectors of the people, while evil monks make ideal spies and assassins.<br />Though they don't cast spells, monks channel a subtle energy, called ki.<br />This energy allows them to perform amazing feats, such as healing themselves, catching arrows in flight, and dodging blows with lightning speed.<br />Their mundane and ki-based abilities grow with experience, granting them more power over themselves and their environment.<br />Monks suffer unique penalties to their abilities if they wear armor, as doing so violates their rigid oath.<br />A monk wearing armor loses their Wisdom and level based armor class bonuses, their movement speed, and their additional unarmed attacks per round.",
            paladin : "Paladins take their adventures seriously, and even a mundane mission is,<br />in the heart of the paladin, a personal test an opportunity to demonstrate bravery, to learn tactics, and to find ways to do good.<br />Divine power protects these warriors of virtue, warding off harm, protecting from disease, healing, and guarding against fear.<br />The paladin can also direct this power to help others, healing wounds or curing diseases, and also use it to destroy evil.<br />Experienced paladins can smite evil foes and turn away undead.<br />A paladin's Wisdom score should be high, as this determines the maximum spell level that they can cast.<br />Many of the paladin's special abilities also benefit from a high Charisma score.",
            ranger : "Rangers are skilled stalkers and hunters who make their home in the woods.<br />Their martial skill is nearly the equal of the fighter, but they lack the latter's dedication to the craft of fighting.<br />Instead, the ranger focuses his skills and training on a specific enemy a type of creature he bears a vengeful grudge against and hunts above all others.<br />Rangers often accept the role of protector, aiding those who live in or travel through the woods.<br />His skills allow him to move quietly and stick to the shadows, especially in natural settings, and he also has special knowledge of certain types of creatures.<br />Finally, an experienced ranger has such a tie to nature that he can actually draw on natural power to cast divine spells, much as a druid does, and like a druid he is often accompanied by animal companions.<br />A ranger's Wisdom score should be high, as this determines the maximum spell level that he can cast.",
            rogue : "Rogues have little in common with each other.<br />While some - maybe even the majority - are stealthy thieves, many serve as scouts, spies, investigators, diplomats, and simple thugs.<br />Rogues are versatile, adaptable, and skilled at getting what others don't want them to get.<br />While not equal to a fighter in combat, a rogue knows how to hit where it hurts, and a sneak attack can dish out a lot of damage.<br />Rogues also seem to have a sixth sense when it comes to avoiding danger.<br />Experienced rogues develop nearly magical powers and skills as they master the arts of stealth, evasion, and sneak attacks.<br />In addition, while not capable of casting spells on their own, a rogue can sometimes 'fake it' well enough to cast spells from scrolls, activate wands, and use just about any other magic item.",
            sorcerer : "Sorcerers are arcane spellcasters who manipulate magic energy with imagination and talent rather than studious discipline.<br />They have no books, no mentors, no theories just raw power that they direct at will.<br />Sorcerers know fewer spells than wizards do and acquire them more slowly, but they can cast individual spells more often and have no need to prepare their incantations ahead of time.<br />Also unlike wizards, sorcerers cannot specialize in a school of magic.<br />Since sorcerers gain their powers without undergoing the years of rigorous study that wizards go through, they have more time to learn fighting skills and are proficient with simple weapons.<br />Charisma is very important for sorcerers; the higher their value in this ability, the higher the spell level they can cast.",
            warlock : "Warlocks Warlocks are driven by an insatiable need for knowledge and power, which compels them to enter into a pact with an otherworldly being.<br />Sometimes the relationship between a warlock and their patron is like that of a cleric and a deity, though the beings that serve as patrons to warlocks are not gods.<br /> A warlock might lead a cult dedicated to a fey prince, an archdevil, or an utterly alien entity - beings not typically served by clerics.<br /> More often, though, the arrangement is similar to that between a master and an apprentice.<br /> The warlock learns and grows in power, at the cost of occasional services performed on the patron's behalf.",
            wizard : "Wizards are arcane spellcasters who depend on intensive study to create their magic.<br />To wizards, magic is not a talent but a difficult, rewarding art.<br />When they are prepared for battle, wizards can use their spells to devastating effect.<br />When caught by surprise, they are vulnerable.<br />The wizard's strength is her spells, everything else is secondary.<br />She learns new spells as she experiments and grows in experience, and she can also learn them from other wizards.<br />In addition, over time a wizard learns to manipulate her spells so they go farther, work better, or are improved in some other way.<br />A wizard can call a familiar- a small, magical, animal companion that serves her.<br />With a high Intelligence, wizards are capable of casting very high levels of spells."
        }
    },
    ko : {
        ui_desc : "발더스 게이트 3 플레이어를 위한 <span class=\"point_text\">클래스 추천기</span>",
        ui_start : "클릭하여 시작",
        ui_questions : {
            0 : "동물에 대해서 어떻게 생각하나요?",
            1 : "둘 중 하나를 선택하세요.",
            2 : "둘 중 하나를 선택하세요.",
            3 : "둘 중 하나를 선택하세요.",
            4 : "둘 중 하나를 선택하세요.",
            5 : "둘 중 하나를 선택하세요.",
            6 : "문명은 우리를...",
            7 : "독서를 즐기는 편인가요?",
            8 : "둘 중 어떤 쪽에 더 자신있나요?",
            9 : "둘 중 어떤 것에 관심이 있나요?",
            10 : "어떤 반려 동물을 선호하나요?",
            11 : "둘 중 어떤 것에 믿음이 가나요?",
            12 : "만약, 초자연적 경험을 할 수 있다면?",
            13 : "둘 중 어느 것에 자신이 있나요?",
            14 : "둘 중 어느 것에 자신이 있나요?",
            15 : "운동을 한다면 그 주된 이유는?",
            16 : "다음 중 어떤 종교를 더 선호하나요?",
            17 : "어떤 직장을 선호하나요?",
            18 : "두 장소 중, 평생을 그곳에서 살아야 한다면?",
            19 : "두 시간이 남는데... 무엇을 해야할까?",
            20 : "두 시간이 남는데... 어디서 시간을 보낼까?",
            21 : "두 시간이 남는데... 무엇을 해야할까?",
            22 : "두 시간이 남는데... 무엇을 해야할까?",
            23 : "두 시간이 남는데... 무엇을 해야할까?",
            24 : "두 시간이 남는데... 무엇을 해야할까?",
            25 : "두 시간이 남는데... 무엇을 해야할까?",
            26 : "둘 중 무엇이 더 마음에 드나요?",
            27 : "둘 중 무엇이 더 마음에 드나요?",
            28 : "돈을 많이 벌고 싶다면, 기초 교육을 받는 것이 중요하다고 생각하나요?",
            29 : "당신은 둘 중 무엇에 굶주려 있나요?",
            30 : "싸울 때는...",
            31 : "싸울 때 무엇이 더 도움이 될 것 같나요?",
            32 : "싸울 때는...",
            33 : "둘 중 무엇이 일을 할때 중요하다고 생각하나요?",
            34 : "일을 할때 나는...",
            35 : "둘 중 어떤 것을 더 선호하나요?",
            36 : "적을 대하는 더 나은 방법은...",
            37 : "둘 중 어떤 것을 위해 일하는 것이 좋다고 생각하나요?",
            38 : "둘 중 무엇이 더 마음에 드나요?",
            39 : "둘 중 무엇이 더 마음에 드나요?",
            40 : "둘 중 무엇이 더 마음에 드나요?",
            41 : "둘 중 무엇이 더 마음에 드나요?",
            42 : "둘 중 무엇이 더 마음에 드나요?",
            43 : "무언가를 배울 때의 당신은?",
            44 : "다른 사람을 설득할 때, 당신의 설득을 뒷받침하는 것은?",
            45 : "지식은 어디에 사용되어야 한다고 생각하나요?",
            46 : "삶은 어떻게 살아야 한다고 생각하나요?",
            47 : "개인의 힘은 어디서 온다고 생각하나요?",
            48 : "종교에 대해서 어떻게 생각하나요?",
            49 : "세계는 누구에 의해 그 규칙이 정해진다고 생각하나요?",
            50 : "이 세계는 누구에 의해 통치된다고 생각하나요?",
            51 : "야생은 좋지만, 그곳에서 살고 싶지는 않다고 생각하나요?",
            52 : "모든 일에는 항상 옳은 길과 옳지 않은 길이 있다고 생각하나요?",
            53 : "유령의 집을 방문하면 어떨까요?",
            54 : "인생에서 무엇이 더 중요하다고 생각하나요?",
            55 : "인생에서 무엇이 더 중요하다고 생각하나요?",
            56 : "인생에서 무엇이 더 중요하다고 생각하나요?",
            57 : "인생에서 무엇이 더 중요하다고 생각하나요?",
            58 : "인생에서 고난을 마주쳤을 때, 어떤 것에 의존하나요?",
            59 : "몸을 움직이는 활동을 ",
            60 : "어렸을 때, 당신은 무언가에 더 자신있었나요?",
            61 : "재능에 대해 어떻게 생각하나요?",
            62 : "무엇을 조금 더 선호합니까?",
            63 : "무엇을 조금 더 선호합니까?",
            64 : "무엇을 조금 더 선호합니까?",
            65 : "중요한 시험이 있는데, 부정을 저지를 것입니까?"
        },
        ui_anwserOne : {
            0 : "우리의 존중과 존경을 받아야 한다고 생각해요.",
            1 : "과학 기술을 좋아해요.",
            2 : "도시에 살고 싶어요.",
            3 : "인간은 자연을 이길 수 있다고 생각해요.",
            4 : "자연은 그대로 보존되어야 한다고 생각해요.",
            5 : "과학 기술로 자연을 이길 수 있다고 생각해요.",
            6 : "더 강하게 만든다고 생각해요.",
            7 : "네.",
            8 : "일 하는 것이요.",
            9 : "초자연적인 현상에 관심있어요.",
            10 : "충성스러운 반려동물이 좋아요.",
            11 : "더 높은 힘(권력)이 믿음이 가는 편이죠.",
            12 : "흥미롭네요! 좋아요.",
            13 : "내가 옳다고 타인을 설득하는 것.",
            14 : "내가 원하는 것을 얻는 것.",
            15 : "더 건강하게 될 수 있도록",
            16 : "오랜 역사를 가지고 잘 수립된 종교를 선호해요.",
            17 : "돈을 많이 주는 회사.",
            18 : "도시.",
            19 : "홀로 자연 속에서 돌아다니기.",
            20 : "체육관에서.",
            21 : "친구들과 캠핑.",
            22 : "야외에서 놀기.",
            23 : "등산로를 따라 걷기.",
            24 : "새로운 것을 배우기.",
            25 : "스포츠를 하기.",
            26 : "거대한 호텔에서 밤을 보내기.",
            27 : "자연 다큐멘터리를 보기.",
            28 : "그렇죠? 아무래도.",
            29 : "부, 더 많은 돈.",
            30 : "내 기술을 믿는 편입니다. 이래봐도 운동을 했다고요.",
            31 : "재빠른 것.",
            32 : "머리를 보호한 채로 적절한 순간을 기다리는 것.",
            33 : "교육.",
            34 : "도구와 장비를 사용합니다.",
            35 : "수 많은 재화.",
            36 : "솔직하고 정직하게.",
            37 : "대의를 위하여.",
            38 : "옳은 일의 예시를 설파하는 것.",
            39 : "자기 스스로를 감추지 않는 것.",
            40 : "약자를 보호하는 것.",
            41 : "공정하게 싸우는 것.",
            42 : "믿음을 따르며, 그 믿음에 따라 형을 집행하는 것.",
            43 : "몸으로 부딪히면 다 알게 되는거지.",
            44 : "진실.",
            45 : "다른 사람을 교육하고 즐겁게 하는데 사용되어야 해요.",
            46 : "자신을 개선해 나아가는 것.",
            47 : "다른 의지(불의 등)와 타협하지 않는 것.",
            48 : "특정 소수의 인원이 다른 사람들의 두려움을 이용하는 것일 뿐이죠.",
            49 : "더 강한 힘에 의해 통치되죠.",
            49 : "거대한 외부의 존재가 통치하고 있죠.",
            50 : "거대한 외부의 존재가 통치하고 있죠.",
            51 : "네",
            52 : "보통은 그렇죠?",
            53 : "흥미롭네요.",
            54 : "감정에 따르는 것",
            55 : "사랑",
            56 : "실용적인 기술",
            57 : "지혜",
            58 : "내 안에 잠재되어 있는 힘",
            59 : "네",
            60 : "수학과 과학 수업",
            61 : "사람마다 각자 다르게 가지고 태어나는 것이죠.",
            62 : "동양 종교",
            63 : "신흥(외계?) 종교",
            64 : "서양 종교",
            65 : "그럼 당연히 해야죠!"
        },
        ui_anwserTwo : {
            0 : "맛있는 음식이죠.",
            1 : "과학 기술을 싫어해요.",
            2 : "한적한 시골에서 살고 싶어요.",
            3 : "인간은 자연을 거스를 수 없다고 생각해요.",
            4 : "자연은 책임있게 사용되고, 그 혜택을 누려야 한다고 생각해요.",
            5 : "과학 기술도 결국 자연의 것인걸요.",
            6 : "더 약하게 만들 뿐이죠.",
            7 : "아니요.",
            8 : "노는게 제일 좋아요.",
            9 : "위대한 자연 그 자체에 관심있어요.",
            10 : "외형이 독특한 반려동물이 좋아요.",
            11 : "내 자신이 믿음직스럽죠.",
            12 : "별로 하고 싶진 않네요.",
            13 : "남들을 즐겁게 하는 것.",
            14 : "다른 사람들이 올바른 결정을 내리도록 안내하는 것.",
            15 : "다른 사람들에게 더 매력적으로 보일 수 있도록 운동을 해요.",
            16 : "혁신적인 새로운 아이디어를 갖춘 최근에 생긴 종교가 조금 더 끌리네요.",
            17 : "내가 즐기는 일을 하고 돈은 적게 받는 회사.",
            18 : "시골.",
            19 : "혼자 무언가를 만드는 것.",
            20 : "교회에서.",
            21 : "친구들과 술 마시기.",
            22 : "좋은 콘서트 구경가기.",
            23 : "철학을 논의하기.",
            24 : "느긋한 조깅.",
            25 : "책을 읽기.",
            26 : "말을 타며 하루를 보내기.",
            27 : "과학 다큐멘터리를 보기.",
            28 : "아니요, 그렇게 중요하진 않다고 생각해요.",
            29 : "권력, 그 누구도 내 위에 있을 수 없어요.",
            30 : "지원군을 불러서 안정적으로 싸워요.",
            31 : "튼튼한 것.",
            32 : "모든 것을 사용해서 싸우는 편이에요. 주변에 떨어진 돌까지요.",
            33 : "상식.",
            34 : "도구와 장비를 사용하지 않습니다. 몸이 가장 좋은 도구죠.",
            35 : "그 누구도 눈 앞에 꿇릴 수 있는 권력.",
            36 : "교묘하고 영리하게 대합니다. 내 진심을 상대방이 모르게요.",
            37 : "높은 자리에 올라서는게 유력한 사람을 위하여.",
            38 : "좋은 예를 직접 행동으로 실천하는 것.",
            39 : "문명적으로 행동하기.",
            40 : "가난한 사람을 도와주는 것.",
            41 : "비겁하게 싸우는 것.",
            42 : "문제의 양면을 보려고 노력하는 것.",
            43 : "이론부터 빠싹하게 공부하고 행동해야죠.",
            44 : "신념.",
            45 : "자신을 개발하고 깨우치는데 사용되어야 해요.",
            46 : "그 자체를 즐기는 것이라 생각해요.",
            47 : "자신에 대한 자신감을 가지는 것.",
            48 : "사람들이 의미있는 삶을 살 수 있도록 도와주는 것.",
            49 : "과학적인 법칙에 의해 통치되죠. 사람들끼리 정한 규율을 따르면서요.",
            50 : "이해할 수 없는 비인간적인 힘에 의해 통치된다 생각해요.",
            51 : "아니요. 자연은 살기 좋은 곳이죠.",
            52 : "그렇진 않죠. 모든 것에 정해진 답은 없어요.",
            53 : "무... 섭겠죠? 딱히 가고싶지 않네요.",
            54 : "규율을 지키는 것.",
            55 : "명예.",
            56 : "계몽(정신적인 깨달음).",
            57 : "부.",
            58 : "거대한 외부의 힘.",
            59 : "아니요.",
            60 : "음악과 미술 수업.",
            61 : "탁월한 스승과 함께라면 하늘의 신들도 넘볼 수 있을것이라 생각해요.",
            62 : "서양 종교.",
            63 : "동양 종교.",
            64 : "신흥 종교.",
            65 : "아니요."
        },
        ui_result : "당신을 위한 맞춤형 클래스는...?",
        ui_resultClass : {
            barbarian : "바바리안",
            bard : "바드",
            cleric : "클레릭",
            druid : "드루이드",
            fighter : "파이터",
            monk : "몽크",
            paladin : "팔라딘",
            ranger : "레인저",
            rogue : "로그",
            sorcerer : "소서러",
            warlock : "워록",
            wizard : "위저드"
        },
        ui_resultLore : {
            barbarian : "바바리안은 용감하고 때로는 무모하며, 전사적인 기술 덕분에 모험에 적합합니다.<br/>훈련과 규율 대신 바바리안은 강력한 분노를 가지고 있으며, 이것은 그들을 강하고 단단하게 만들고 공격에 견디기 쉽게 만듭니다.<br/>하루에 몇 번 그런 행동을 할 에너지만 있으면 충분합니다.<br/>지속적으로 위험에 노출되면 바바리안들은 '여섯 번째 감각'이라고 불리는, 위험을 감지하고 공격을 회피하는 선천적 능력을 가지게 됩니다.<br/>그들의 장거리 달리기 능력은 전설적입니다.",
            bard : "바드는 종종 조정자, 메신저, 정찰병 및 첩으로 활동합니다.<br/>영웅 (또는 악당)과 함께하면 영웅적 (또는 악랄한) 행동을 직접 목격하고, 개인 경험으로 이야기를 할 수 있는 바드는 동료들 사이에서 명성을 얻습니다.<br/>바드는 소서러처럼 미리 준비하지 않고도 비밀 스펠을 시전합니다.<br/>바드는 몇몇 특수 기술을 도적들과 공유하며, 아이템 이야기에 대한 지식은 거의 무적입니다.<br/>높은 매력 수치는 바드가 고급 스펠을 시전할 수 있도록 합니다.",
            cleric : "클레릭은 세속적이고 신성한 (또는 지하) 세계 사이의 중재자로 활동합니다.<br/>선량한 클레릭은 필요한 사람들을 돕고, 악의 클레릭은 자신의 후원자의 악의적 비전을 세계에 퍼뜨리려고 합니다.<br/>모든 클레릭은 상처를 치유하고 죽음의 가장자리에서 사람들을 되살리며, 강력한 클레릭은 심지어 죽은 자를 일으킬 수도 있습니다.<br/>마찬가지로, 모든 클레릭은 언데드 생물을 통제하고 돌려 보내거나 심지어 파괴할 수 있습니다.<br/>클레릭들은 신성한 주문을 시전하는 데 방해가 되지 않도록 간단한 무기의 사용을 훈련 받았으며, 갑옷이 신성 주문의 시전과 간섭하지 않기 때문에 갑옷 및 방패를 모두 사용할 수 있습니다.<br/>정상적인 주문 외에도 모든 클레릭은 각자의 신의 두 영역에 집중하기로 선택합니다.<br/>이러한 영역은 클레릭에게 특별한 능력을 부여하고 그가 그렇지 않았을 경우 배울 수도 있는 주문에 대한 액세스 권한을 제공합니다.<br/>클레릭의 지혜 점수는 그가 시전할 수 있는 최대 주문 레벨을 결정하는 데 중요합니다.",
            druid : "드루이드는 자연을 지배하는 것이 아니라 그와 일체가 되는 것으로 권력을 얻습니다.<br/>그들은 외부적인 존재와 언데드를 싫어하며 가능한 경우 파괴합니다.<br/>드루이드는 신이 아닌 자연으로부터 신성한 주문을 받으며, 경험을 쌓을수록 동물의 모습을 취할 수 있는 능력을 비롯한 여러 능력을 얻을 수 있습니다.<br/>드루이드의 무기와 갑옷은 ㅅ통적인 서약에 의해 제한됩니다.<br/>드루이드의 지혜 점수는 그가 시전할 수 있는 최대 주문 레벨을 결정하는 데 중요합니다.",
            fighter : "파이터들은 병사부터 범죄 집행관까지 많은 역할을 할 수 있습니다.<br/>어떤 사람은 부자가 되는 길로 모험을 보고, 다른 사람은 기술을 이용해 무고한 사람을 보호합니다.<br/>파이터는 PC 클래스의 최고의 모든 영역에서 싸움을 할 수 있으며, 모든 표준 무기와 갑옷을 사용하는 훈련을 받습니다.<br/>파이터의 엄격한 무예 훈련은 그가 전진함에 따라 많은 추가 특성을 부여하며, 높은 레벨의 파이터는 다른 캐릭터에게 없는 특수 군사 기술 및 특이한 무기에 액세스할 수 있습니다.",
            monk : "수도사는 무기나 갑옷 없이도 싸우는 다재다능한 전사입니다.<br/>선량한 수도사들은 사람들의 보호자 역할을 하며, 악한 수도사들은 이상적인 정찰병과 암살자입니다.<br/>그들은 주문을 시전하지는 않지만, 수도사는 섬세한 에너지 인 키를 전달합니다.<br/>이 에너지를 이용하여 자신을 치료하거나, 화살을 맞아도 붙잡거나, 번개 속도로 타격을 회피할 수 있습니다.<br/>그들의 일상적이고 키 기반의 능력은 경험을 통해 ㄱ장하며, 자신과 환경에 대한 더 많은 힘을 제공합니다.<br/>갑옷을 입는 것은 그들의 엄격한 맹세를 위반하기 때문에 수도사는 고유한 능력에 독특한 패널티를 받습니다.<br/>갑옷을 입은 수도사는 그들의 지혜와 레벨에 따른 갑옷 등급 보너스, 이동 속도 및 추가 무장한 공격을 잃게 됩니다.",
            paladin : "팔라딘들은 모험을 진지하게 여기며, 단순한 임무조차도 팔라딘의 마음속에는 개인적인 시험 기회가 있습니다.<br/>용감함을 시연하고 전술을 배우고 선을 행하는 방법을 찾는 기회입니다.<br/>신성한 힘은 이 도덕적인 전사들을 보호하며, 해로부터 면역을 제공하고, 질병을 예방하고, 치유하며, 공포에 대비합니다.<br/>팔라딘는 또한 이 힘을 사용하여 다른 사람을 돕고 상처를 치료하거나 질병을 치료하며, 악을 파괴하는 데 사용할 수 있습니다.<br/>경험 많은 팔라딘는 악한 적을 치르고 언데드를 퇴치할 수 있습니다.<br/>팔라딘의 지혜 점수는 그가 시전할 수 있는 최대 주문 레벨을 결정하는 데 중요하며, 팔라딘의 특별 능력 중 많은 것이 높은 매력 점수에서 이익을 얻습니다.",
            ranger : "레인저는 숲에서 생활하는 숙련된 추적자 및 사냥꾼입니다.<br/>그들의 군사 기술은 파이터와 거의 동급이지만, 파이터만큼 전투 기술을 정밀하게 파고들지는 않습니다.<br/>대신 레인저는 특정 적인 훼방한 숙련된 적인을 중점적으로 공격하고 사냥합니다.<br/>레인저는 종종 수호자 역할을 받아들이며, 숲에서 생활하거나 이저하는 사람들을 돕습니다.<br/>그의 기술은 그가 조용히 움직이고 그림자에 숨을 수 있도록 하며, 특정 종류의 생물에 대한 특수 지식도 가지고 있습니다.<br/>마지막으로, 경험 많은 레인저는 실제로 자연력을 활용하여 드루이드와 같은 방법으로 신성한 주문을 시전할 수 있으며, 드루이드와 같이 종종 동물 동반자와 함께합니다.<br/>레인저의 지혜 점수는 그가 시전할 수 있는 최대 주문 레벨을 결정하는 데 중요합니다.",
            rogue : "로그들은 정말 다양한 종류가 있고, 그들은 저마다의 특색이 있습니다.<br/>몇몇은 몰래 도둑질을 하는 것이지만, 많은 사람들이 정찰병, 첩보원, 조사관, 외교관 및 간단한 폭도로 활동합니다.<br/>로그들은 다재다능하며, 적응력이 있으며, 다른 사람들이 원하지 않는 것을 얻는 데 능숙합니다.<br/>싸움에서 전사에게 미치지 않지만, 로그는 어디를 때릴지 알고 있으며, 비밀 공격은 많은 피해를 입힐 수 있습니다.<br/>로그들은 위험을 피하는 데 대해 육감이 있는 것으로 보입니다.<br/>경험 많은 로그들은 스텔스, 회피 및 은밀한 공격의 기술을 마법과 같은 능력으로 발전시킵니다.<br/>또한 자신으로 주문을 시전할 수 없지만, 로그는 때로는 스크롤에서 주문을 시전하거나 지팡이를 활성화하며, 거의 모든 기타 마법 아이템을 사용할 수 있습니다.",
            sorcerer : "소서러는 교육된 디시플린이 아닌 상상력과 재능으로 마법 에너지를 조작하는 신비한 주문 사용자입니다.<br/>그들은 책, 멘토, 이론 없이 단순히 자유로운 힘을 가지고 있으며, 그 힘을 자유롭게 조작합니다.<br/>소서러는 마법사보다 더 적은 주문을 알고 있으며, 더 느리게 습득하지만, 개별 주문을 더 자주 시전할 수 있으며, 시전 전에 자신의 주문을 준비할 필요가 없습니다.<br/>또한 마법사와 달리, 소서러는 특정 마법 학파에 전문화할 수 없습니다.<br/>소서러는 마법사가 겪는 엄격한 연구 연수를 거치지 않고도 자신의 능력을 키우는 데 더 많은 시간을 가지고 있으며, 간단한 무기에 능숙합니다.<br/>카리스마는 소서러에게 매우 중요합니다.<br/>이 능력의 값이 높을수록 소서러가 시전할 수 있는 주문 레벨이 높아집니다.",
            warlock : "워락들은 타의 추구할 수 없는 지식과 힘에 대한 탐욕으로 이끌리며, 그들을 이끌어 다른 세계의 존재와 계약하게 합니다.<br/>때로는 워락과 그들의 후원자 간의 관계는 클레릭와 신과의 관계와 비슷하지만, 워락에게 후원자로서 복종하는 존재는 신이 아닙니다.<br/>워락은 요정 왕자, 대악마, 또는 완전히 이상한 신체와 같은 클레릭에게는 보통 섬기지 않는 존재에게 바친 사제단을 이끌 수 있습니다.<br/>그러나 더 자주, 그 관계는 스승과 제자 사이의 것과 유사합니다.<br/>워락은 힘을 배우고 키우며, 가끔 후원자를 위해 행하는 일을 통해 힘을 얻습니다."
            wizard : "마법사는 자신의 마법을 만들기 위해 집중된 연구에 의존하는 신비한 주문 사용자입니다.<br/>마법사에게 마법은 재능이 아닌 어려운 보상이 있는 예술입니다.<br/>그들이 전투에 대비하여 준비되어 있을 때, 마법사는 그들의 주문을 치명적인 효과로 사용할 수 있습니다.<br/>마법을 시전 중일 때, 그들은 취약합니다.<br/>마법사의 강점은 시전이 완료된 그들의 주문입니다.<br/>그들은 학습과 경험을 통해 새로운 주문을 배우고, 다른 마법사로부터도 배울 수 있습니다.<br/>또한 시간이 지남에 따라 마법사는 자신의 주문을 더 멀리, 더 나은 방식으로 조작하는 법을 배웁니다.<br/>마법사는 친구를 부를 수 있습니다-자신을 섬기는 작은 마법 동물 동반자입니다.<br/>높은 지능으로, 마법사는 매우 높은 주문 레벨을 시전할 수 있습니다."
        }
    }
}
// INIT TEST
var language = "en";
this.barbarian = 0;
this.bard = 0;
this.cleric = 0;
this.druid = 0;
this.fighter = 0;
this.monk = 0;
this.paladin = 0;
this.ranger = 0;
this.rogue = 0;
this.sorcerer = 0;
this.warlock = 0;
this.wizard = 0;

this.container = document.querySelector(".cry_container")
this.page = 0 // 0 TITLE 1 TEST 2 CALCULATING 3 RESULT&SHARE
this.progress = 0 // PROGRESSION OF TEST
this.anwsers = [] // USERS CHOICES
this.resultPrim = "fighter";
// REGISTER CORE EVENTS
window.addEventListener("load", function() {
    this.container = document.querySelector(".cry_container")
    document.getElementById("langSelector").value = language;
    updateLanguage();
    document.getElementById("langSelector").addEventListener("change", function() {
        language = document.getElementById("langSelector").value;
        updateLanguage();
        render();
    });
    render();
});
function sleep(sec) {
    return new Promise(resolve => setTimeout(resolve, sec * 1000));
}
function updateLanguage() {
    for (let key in Lang[language]) {
        if(key == "ui_desc" || key == "ui_start" || key == "ui_result") if (document.getElementById(key)) document.getElementById(key).innerHTML = Lang[language][key];
        else if(key == "ui_resultLore" || key == "ui_resultClass") if (document.getElementById(key)) document.getElementById(key).innerHTML = Lang[language][key][result];
        else { if (document.getElementById(key)) document.getElementById(key).innerHTML = Lang[language][key][progress]; }
    }
}
function render() {
    const introContainer = this.container.querySelector('.intro_container');
    const testContainer = this.container.querySelector('.test_container');
    const calcContainer = this.container.querySelector('.calc_container');
    const resultContainer = this.container.querySelector('.result_container');

    if (this.page === 0) {
        introContainer.classList.add('active');
        testContainer.classList.remove('active');
        calcContainer.classList.remove('active');
        resultContainer.classList.remove('active');

    } else if (this.page === 1) {
        introContainer.classList.remove('active');
        testContainer.classList.add('active');
        calcContainer.classList.remove('active');
        resultContainer.classList.remove('active');

        const progressElement = this.container.querySelector('.progress');
        const questionElement = this.container.querySelector('.question');
        const answerAElement = this.container.querySelector('#ui_anwserOne');
        const answerBElement = this.container.querySelector('#ui_anwserTwo');
        const imageQuestion = this.container.querySelector('#img_question');
    
        progressElement.textContent = `Q${this.progress + 1}. `;
        questionElement.textContent = Lang[document.getElementById("langSelector").value]["ui_questions"][progress];
        answerAElement.textContent = Lang[document.getElementById("langSelector").value]["ui_anwserOne"][progress];
        answerBElement.textContent = Lang[document.getElementById("langSelector").value]["ui_anwserTwo"][progress];

    } else if (this.page === 2) {
        introContainer.classList.remove('active');
        testContainer.classList.remove('active');
        calcContainer.classList.add('active');
        resultContainer.classList.remove('active');
        (async () => {
            calculate()
            await sleep(5);
            this.page = 3;
            render();
            return;
        })();
    } else if (this.page === 3) {
        introContainer.classList.remove('active');
        testContainer.classList.remove('active');
        calcContainer.classList.remove('active');
        resultContainer.classList.add('active');
    
        const resultIconElement = this.container.querySelector('.result_icon');
        const resultTextElement = this.container.querySelector('.result_text');
        const resultInforTitleElement = this.container.querySelector('.result_infor_title');
        const resultInforElement = this.container.querySelector('.result_infor');
    
        resultIconElement.src = "https://github.com/VirusAbility/ProjectCRY-BG3/blob/main/src/class_" + resultPrim + ".png?raw=true";
        resultTextElement.innerHTML = Lang[document.getElementById("langSelector").value]["ui_result"];
        resultInforTitleElement.innerHTML = `[ ${Lang[document.getElementById("langSelector").value]["ui_resultClass"][resultPrim]} ]`;
    
        resultInforElement.innerHTML = Lang[document.getElementById("langSelector").value]["ui_resultLore"][resultPrim]
        .split('<br />')
        .map(el => `<li>${el}</li>`)
        .join('');
    }
}
function writeAnwser(selection) {
    this.anwsers.push(selection);
    this.progress++;
    if(this.progress > 65) this.page = 2;
    render();
}
function start() {
    if(this.progress !== 0) return;

    this.page = 1;
    this.render();
}
function calculate() {
    if(anwsers[0] == 0) druid += 2; else barbarian += 2;
    if(anwsers[1] == 0) sorcerer += 2; else barbarian += 2;
    if(anwsers[2] == 0) rogue += 2; else barbarian += 2;
    if(anwsers[3] == 0) sorcerer += 2; else druid += 2;
    if(anwsers[4] == 0) druid += 2; else ranger += 2;
    if(anwsers[5] == 0) wizard += 2; else druid += 2;
    if(anwsers[6] == 0) paladin += 2; else barbarian += 2;
    if(anwsers[7] == 0) wizard += 2; else barbarian += 2;
    if(anwsers[8] == 0) sorcerer += 2; else bard += 2;
    if(anwsers[9] == 0) warlock += 2; else druid += 2;
    if(anwsers[10] == 0) ranger += 2; else warlock += 2;
    if(anwsers[11] == 0) cleric += 2; else sorcerer += 2;
    if(anwsers[12] == 0) cleric += 2; else barbarian += 2;
    if(anwsers[13] == 0) cleric += 2; else bard += 2;
    if(anwsers[14] == 0) sorcerer += 2; else paladin += 2;
    if(anwsers[15] == 0) fighter += 2; else bard += 2;
    if(anwsers[16] == 0) cleric += 2; else warlock += 2;
    if(anwsers[17] == 0) fighter += 2; else paladin += 2;
    if(anwsers[18] == 0) rogue += 2; else ranger += 2;
    if(anwsers[19] == 0) druid += 2; else rogue += 2;
    if(anwsers[20] == 0) fighter += 2; else cleric += 2;
    if(anwsers[21] == 0) druid += 2; else fighter += 2;
    if(anwsers[22] == 0) druid += 2; else bard += 2;
    if(anwsers[23] == 0) ranger += 2; else cleric += 2;
    if(anwsers[24] == 0) sorcerer += 2; else fighter += 2;
    if(anwsers[25] == 0) fighter += 2; else wizard += 2;
    if(anwsers[26] == 0) bard += 2; else ranger += 2;
    if(anwsers[27] == 0) ranger += 2; else sorcerer += 2;
    if(anwsers[28] == 0) bard += 2; else rogue += 2;
    if(anwsers[29] == 0) ranger += 2; else warlock += 2;
    if(anwsers[30] == 0) fighter += 2; else warlock += 2;
    if(anwsers[31] == 0) ranger += 2; else fighter += 2;
    if(anwsers[32] == 0) fighter += 2; else barbarian += 2;
    if(anwsers[33] == 0) wizard += 2; else ranger += 2;
    if(anwsers[34] == 0) fighter += 2; else monk += 2;
    if(anwsers[35] == 0) rogue += 2; else sorcerer += 2;
    if(anwsers[36] == 0) paladin += 2; else ranger += 2;
    if(anwsers[37] == 0) paladin += 2; else warlock += 2;
    if(anwsers[38] == 0) paladin += 2; else monk += 2;
    if(anwsers[39] == 0) barbarian += 2; else bard += 2;
    if(anwsers[40] == 0) paladin += 2; else cleric += 2;
    if(anwsers[41] == 0) fighter += 2; else rogue += 2;
    if(anwsers[42] == 0) paladin += 2; else druid += 2;
    if(anwsers[43] == 0) sorcerer += 2; else wizard += 2;
    if(anwsers[44] == 0) wizard += 2; else paladin += 2;
    if(anwsers[45] == 0) bard += 2; else warlock += 2;
    if(anwsers[46] == 0) monk += 2; else bard += 2;
    if(anwsers[47] == 0) monk += 2; else sorcerer += 2;
    if(anwsers[48] == 0) rogue += 2; else cleric += 2;
    if(anwsers[49] == 0) cleric += 2; else wizard += 2;
    if(anwsers[50] == 0) warlock += 2; else wizard += 2;
    if(anwsers[51] == 0) barbarian += 2; else ranger += 2;
    if(anwsers[52] == 0) paladin += 2; else rogue += 2;
    if(anwsers[53] == 0) warlock += 2; else barbarian += 2;
    if(anwsers[54] == 0) barbarian += 2; else monk += 2;
    if(anwsers[55] == 0) bard += 2; else paladin += 2;
    if(anwsers[56] == 0) ranger += 2; else monk += 2;
    if(anwsers[57] == 0) monk += 2; else rogue += 2;
    if(anwsers[58] == 0) monk += 2; else warlock += 2;
    if(anwsers[59] == 0) monk += 2; else wizard += 2;
    if(anwsers[60] == 0) wizard += 2; else bard += 2;
    if(anwsers[61] == 0) sorcerer += 2; else warlock += 2;
    if(anwsers[62] == 0) monk += 2; else cleric += 2;
    if(anwsers[63] == 0) druid += 2; else monk += 2;
    if(anwsers[64] == 0) cleric += 2; else druid += 2;
    if(anwsers[65] == 0) rogue += 2; else wizard += 2;

    let i = fighter;
    resultPrim = "fighter";
    if (warlock > i) { resultPrim = "warlock"; i = warlock; }
    if (paladin > i) { resultPrim = "paladin"; i = paladin; }
    if (monk > i) { resultPrim = "monk"; i = monk; }
    if (barbarian > i) { resultPrim = "barbarian"; i = barbarian; }
    if (druid > i) { resultPrim = "druid"; i = druid; }
    if (ranger > i) { resultPrim = "ranger"; i = ranger; }
    if (bard > i) { resultPrim = "bard"; i = bard; }
    if (wizard > i) { resultPrim = "wizard"; i = wizard; }
    if (cleric > i) { resultPrim = "cleric"; i = cleric; }
    if (sorcerer > i) { resultPrim = "sorcerer"; i = sorcerer; }
    if (rogue > i) { resultPrim = "rogue"; i = rogue; }
    if (fighter > i) { resultPrim = "fighter"; i = fighter; }
}
