const charityData = [
  {
    "category": "Education",
    "country": "India",
    "title": "Cultural education without disparity",
    "organization": "Ramana Sunritya Aalaya",
    "summary": "RASA is an organisation serving the cause of empowering people with differing abilities for over  27 years and has successfully enriched the… read more",
    "image": "https://www.globalgiving.org/pfil/25859/pict_featured.jpg"
  },
  {
    "category": "Disaster Recovery",
    "country": "Haiti",
    "title": "Provide medical care to Haiti",
    "organization": "International Medical Corps",
    "summary": "International Medical Corps has been on the ground in Haiti since 22 hours after the devastating 7.0 earthquake hit in January 2010, taking … read more",
    "image": "https://www.globalgiving.org/pfil/4559/pict_med.jpg"
  },
  {
    "category": "Children",
    "country": "Nigeria",
    "title": "Connect young innovators with business in need!",
    "organization": "Leadership Initiatives",
    "summary": "The Leadership Initiative\\'s International Business Alliance Program (IBAP) is designed to let high school students effect real change in the… read more",
    "image": "https://www.globalgiving.org/pfil/17637/pict_featured.jpg"
  },
  {
    "category": "Environment",
    "country": "Madagascar",
    "title": "Save a forest by fighting protein deficiency",
    "organization": "Conservation through Poverty Alleviation, Int",
    "summary": "Farmers living around the Makira Protected Area need to replace the resources they lost when excluded from it. Phase I of the CPALI project … read more",
    "image": "https://www.globalgiving.org/pfil/9949/pict_featured.jpg"
  },
  {
    "category": "Women and Girls",
    "country": "Cambodia",
    "title": "Provide women and girls education in Cambodia",
    "organization": "Women\'s Resource Center",
    "summary": "Access to information and knowledge is the most effective method of self-empowerment. This is why Women\'s Resource Center provides free emot… read more",
    "image": "https://www.globalgiving.org/pfil/10291/pict_featured.jpg"
  },
  {
    "category": "Education",
    "country": "Uganda",
    "title": "Educate Deserving Poor Children in Uganda!",
    "organization": "Arlington Academy of Hope, Inc.",
    "summary": "You can change a life with a donation. In rural Uganda, just 1 in 10 children finish grade school. AAH is changing that. 100% of our student… read more",
    "image": "https://www.globalgiving.org/pfil/11272/pict_featured.jpg"
  },
  {
    "category": "Animals",
    "country": "United States",
    "title": "Rescue Unwanted and Abandoned Companion Birds",
    "organization": "Mickaboo Companion Bird Rescue",
    "summary": "Mickaboo Companion Bird Rescue, based in Northern California, helps birds commonly kept as indoor pets by rescuing, rehabilitating (physical… read more",
    "image": "https://www.globalgiving.org/pfil/7886/pict_featured.jpg"
  },
  {
    "category": "Women and Girls",
    "country": "Indonesia",
    "title": "Support 6 Women\'s Crisis Centers in Indonesia",
    "organization": "Yayasan Sosial Indonesia untuk Kemanusiaan",
    "summary": "Pundi Perempuan is a public fundraising platform to support the work of Women\'s Crisis Center and women victim organization to eliminate the… read more",
    "image": "https://www.globalgiving.org/pfil/29277/pict_featured.jpg"
  },
  {
    "category": "Economic Development",
    "country": "Senegal",
    "title": "Sustainable Livelihoods for 20 Talibes in Senegal",
    "organization": "Aspyre Africa",
    "summary": "We are working to secure sustainable livelihoods in horticulture for 20 vulnerable boys (talibes) in Saint-Louis, Senegal. These boys have a… read more",
    "image": "https://www.globalgiving.org/pfil/29284/pict_featured.jpg"
  },
  {
    "category": "Hunger",
    "country": "United States",
    "title": "Help 100 Youth Exit Homelessness in Washington DC",
    "organization": "Latin American Youth Center",
    "summary": "The Latin American Youth Center (LAYC) Street Outreach Program (SOP) supports runaway and homeless youth ages 18-24, by providing outreach a… read more",
    "image": "https://www.globalgiving.org/pfil/11098/pict_featured.jpg"
  },
  {
    "category": "Health",
    "country": "India",
    "title": "Provide Life Saving Vaccines in Rural India",
    "organization": "Seva Mandir",
    "summary": "Seva Mandir organizes camps to provide immunization in remote areas not served by state health facilities. The immunization covers 6 key dis… read more",
    "image": "https://www.globalgiving.org/pfil/1881/pict_featured.jpg"
  },
  {
    "category": "Economic Development",
    "country": "India",
    "title": "Increase Profits for 3,500 Poor Farmers In India",
    "organization": "Seva Mandir",
    "summary": "Seva Mandir is committed to improving the lives of rural communities in southern Rajasthan. The Dal Mill (lentil processing) project aims to… read more",
    "image": "https://www.globalgiving.org/pfil/2022/pict_featured.jpg"
  },
  {
    "category": "Health",
    "country": "Cameroon",
    "title": "Muteff Community Health Care Services Project",
    "organization": "Research Center for Analytic Diagnosis and Imaging Trends (RECEADIT)",
    "summary": "The Muteff Community Health Care Services Project is designed to bring sustained, dependable health care services to our fellow human beings… read more",
    "image": "https://www.globalgiving.org/pfil/25755/pict_featured.jpg"
  },
  {
    "category": "Children",
    "country": "Kenya",
    "title": "Clean Water For 50+ Rescued Kenyan Infants",
    "organization": "New Life Home Trust",
    "summary": "In Kenya, contaminated drinking water is still a reality for many people. For this reason, New Life Home Trust has installed a water tank or… read more",
    "image": "https://www.globalgiving.org/pfil/21051/pict_featured.jpg"
  },
  {
    "category": "Children",
    "country": "Bulgaria",
    "title": "Teach life skills to children without parents",
    "organization": "Step for Bulgaria Foundation",
    "summary": "Our volunteers provide assistance to more than forty Bulgarian children without parental care. They teach them how to protect their personal… read more",
    "image": "https://www.globalgiving.org/pfil/5270/pict_featured.jpg"
  },
  {
    "category": "Animals",
    "country": "Russia",
    "title": "Help Save Last 30 Amur Leopards from Extinction",
    "organization": "Phoenix Fund",
    "summary": "The Phoenix Fund intends to provide anti-poaching protection for the rarest cat on earth - the Amur leopard. There are only 30-40 of these c… read more",
    "image": "https://www.globalgiving.org/pfil/6144/pict_featured.jpg"
  },
  {
    "category": "Technology",
    "country": "United Kingdom",
    "title": "The GlobalGiving UK Innovation fund",
    "organization": "GlobalGiving UK",
    "summary": "GlobalGiving UK works with over 900 charitable projects all over the world. We believe in local solutions to local problems. The innovation … read more",
    "image": "https://www.globalgiving.org/pfil/12781/pict_featured.jpg"
  },
  {
    "category": "Women and Girls",
    "country": "India",
    "title": "Make Women in Rural India Financially Secure",
    "organization": "Seva Mandir",
    "summary": "Seva Mandir seeks to help women in rural areas attain financial freedom by adopting a habit of saving and inter-loaning through Self-Help Gr… read more",
    "image": "https://www.globalgiving.org/pfil/3907/pict_featured.jpg"
  },
  {
    "category": "Education",
    "country": "Ghana",
    "title": "Hands on computer classes for 1,800 Ghana children",
    "organization": "EIFL",
    "summary": "Children who go to schools in poor and rural areas of Ghana are failing their exams because they do not have hands on computer practice. Wor… read more",
    "image": "https://www.globalgiving.org/pfil/13333/pict_featured.jpg"
  },
  {
    "category": "Environment",
    "country": "Saint Vincent and the Grenadines",
    "title": "Protect Baby Seabirds in the Caribbean",
    "organization": "Environmental Protection in the Caribbean",
    "summary": "There are few areas left where Caribbean seabirds can safely nest. Fortunately, concerned citizens are now standing up to protect the remain… read more",
    "image": "https://www.globalgiving.org/pfil/14296/pict_featured.jpg"
  },
  {
    "category": "Education",
    "country": "Afghanistan",
    "title": "Help Support Kids 4 Afghan Kids Schools",
    "organization": "MASHA (Kids 4 Afghan Kids)",
    "summary": "Kids 4 Afghan Kids (K4AK) was founded in 1998 in Michigan by teacher Khris Nedam, and her sixth grade students, to help kids in rural Afghan… read more",
    "image": "https://www.globalgiving.org/pfil/21466/pict_featured.jpg"
  },
  {
    "category": "Children",
    "country": "Colombia",
    "title": "Protecting the Health of Colombian Orphans",
    "organization": "Fundacion CRAN",
    "summary": "Support 87 children, who are on temporary protection at CRAN Foundation, coming from environments of deprivation or neglection and showing s… read more",
    "image": "https://www.globalgiving.org/pfil/12448/pict_featured.jpg"
  },
  {
    "category": "Children",
    "country": "United States",
    "title": "Help hungry families afford the food they need",
    "organization": "Greater Philadelphia Coalition Against Hunger",
    "summary": "No child should go hungry this year. With your support, the Greater Philadelphia Coalition Against Hunger can continue to help kids get the … read more",
    "image": "https://www.globalgiving.org/pfil/6868/pict_featured.jpg"
  },
  {
    "category": "Education",
    "country": "Uganda",
    "title": "Improve Learning Outcomes for Ugandan Children",
    "organization": "enjuba Spelling Bee",
    "summary": "We work in 1,000 schools, directly impacting over 1,000,000 children in Uganda. Our focus is to bridge the achievement gap by helping childr… read more",
    "image": "https://www.globalgiving.org/pfil/26970/pict_featured.jpg"
  },
  {
    "category": "Women and Girls",
    "country": "Afghanistan",
    "title": "Afghan Institute of Learning Empowers Afghan Women",
    "organization": "Afghan Institute of Learning",
    "summary": "AIL has been empowering Afghans since 1995 by expanding their educational and health opportunities through fostering self-reliance and commu… read more",
    "image": "https://www.globalgiving.org/pfil/921/pict_featured.jpg"
  },
  {
    "category": "Children",
    "country": "India",
    "title": "Send a Child in India to School for a Year",
    "organization": "Seva Mandir",
    "summary": "Seva Mandir\'s primary schools provide children in disadvantaged tribal areas with access to quality education in an interactive and joyful e… read more",
    "image": "https://www.globalgiving.org/pfil/1877/pict_featured.jpg"
  },
  {
    "category": "Education",
    "country": "Kazakhstan",
    "title": "Be a changemaker for the forgotten of Central Asia",
    "organization": "Salem Union",
    "summary": "Salem Social Village is a unique place in Kazakhstan where hearts and minds are challenged to bring lasting change to the forgotten people o… read more",
    "image": "https://www.globalgiving.org/pfil/15461/pict_featured.jpg"
  },
  {
    "category": "Animals",
    "country": "India",
    "title": "Help Street Dogs in Dharamsala and Save Lives!",
    "organization": "Dharamsala Animal Rescue",
    "summary": "Dharamsala Animal Rescue was founded in order to humanely help stray dogs and protect the people of Dharamsala from rabies. There are thousa… read more",
    "image": "https://www.globalgiving.org/pfil/10336/pict_featured.jpg"
  },
  {
    "category": "Hunger",
    "country": "Ireland",
    "title": "Hot, Nutritious Meals for people who are Homeless",
    "organization": "Simon Communities of Ireland",
    "summary": "This project will help the Simon Communities to support over 7,500 families and individuals across Ireland. The funds raised will go directl… read more",
    "image": "https://www.globalgiving.org/pfil/12041/pict_featured.jpg"
  },
  {
    "category": "Hunger",
    "country": "United States",
    "title": "Increase Food Security in Oregon",
    "organization": "Oregon Food Bank, Inc.",
    "summary": "This project aims to increase the supply of nutrient rich foods for approximately 960 relief agencies throughout the Oregon Food Bank Networ… read more",
    "image": "https://www.globalgiving.org/pfil/2567/pict_featured.jpg"
  },
  {
    "category": "Education",
    "country": "Pakistan",
    "title": "Support a TCF School in Pakistan for a Year",
    "organization": "The Citizens Foundation (UK)",
    "summary": "Support a TCF school and help to provide a quality education to some of the most underprivileged children in Pakistan. Give a child the gift… read more",
    "image": "https://www.globalgiving.org/pfil/4051/pict_featured.jpg"
  },
  {
    "category": "Women and Girls",
    "country": "Iraq",
    "title": "Free Yezidi Foundation Women\'s Center",
    "organization": "Free Yezidi Foundation",
    "summary": "The FYF Women\'s Center will open in late 2015. The Women\'s Center will be a safe space for Yezidi women, some of whom have endured unspeakab… read more",
    "image": "https://www.globalgiving.org/pfil/19760/pict_featured.jpg"
  },
  {
    "category": "Health",
    "country": "Guatemala",
    "title": "Feed a Child - Reduce Malnutrition in Guatemala",
    "organization": "Wuqu\' Kawoq",
    "summary": "Combating child malnutrition through education, early detection and treatment in an impoverished, indigenous Kaqchikel speaking community in… read more",
    "image": "https://www.globalgiving.org/pfil/7107/pict_featured.jpg"
  },
  {
    "category": "Disaster Recovery",
    "country": "United States",
    "title": "Hurricane Harvey Relief Fund",
    "organization": "GlobalGiving",
    "summary": "Hurricane Harvey has caused widespread, catastrophic flooding and damage in Texas and along the Gulf Coast. This fund will provide relief to… read more",
    "image": "https://www.globalgiving.org/pfil/29357/pict_featured.jpg"
  },
  {
    "category": "Human Rights",
    "country": "South Korea",
    "title": "Rainbow Teen Safe Space",
    "organization": "Solidarity for LGBT Human Rights of Korea",
    "summary": "Our FINAL goal is to develop a self-sustaining long-term shelter which will assist homeless queer teens make their way toward independence i… read more",
    "image": "https://www.globalgiving.org/pfil/15426/pict_featured.jpg"
  },
  {
    "category": "Women and Girls",
    "country": "Guatemala",
    "title": "Seeds and Skills for Women to Grow Vegetables",
    "organization": "Seed Programs International",
    "summary": "We provide vegetable seeds and support so women can grow food! Female farmers produce more than half the developing world\'s food - yet own l… read more",
    "image": "https://www.globalgiving.org/pfil/18717/pict_featured.jpg"
  },
  {
    "category": "Women and Girls",
    "country": "Armenia",
    "title": "Computer Classes for Creative Minds",
    "organization": "Nor Luyce Mentoring Center for Youth",
    "summary": "Nor Luyce Mentoring Center empowers 40 teenage girls from orphanages & low-income families through mentoring, skill building trainings, & fi… read more",
    "image": "https://www.globalgiving.org/pfil/20317/pict_featured.jpg"
  },
  {
    "category": "Economic Development",
    "country": "United States",
    "title": "GlobalGiving Fund",
    "organization": "GlobalGiving",
    "summary": "This project allows donors to contribute to a general fund that will be used to provide matching funds, grant incentives, and bonus prizes f… read more",
    "image": "https://www.globalgiving.org/pfil/554/pict_featured.jpg"
  },
  {
    "category": "Animals",
    "country": "United States",
    "title": "Help save injured and orphaned wild parrots",
    "organization": "REP for Wildlife; SoCal Parrot",
    "summary": "This project will allow SoCal Parrot to care for, feed and shelter wild parrots in Southern California.  We accept any wild parrot that is i… read more",
    "image": "https://www.globalgiving.org/pfil/17283/pict_featured.jpg"
  },
  {
    "category": "Hunger",
    "country": "United States",
    "title": "Diminish Food Waste by Rescuing Excess for Hungry",
    "organization": "Rescuing Leftover Cuisine, Inc.",
    "summary": "This project is Rescuing Leftover Cuisine in New York City by eliminating some of the 40% of food waste the U.S. produces and taking unsold … read more",
    "image": "https://www.globalgiving.org/pfil/18741/pict_featured.jpg"
  },
  {
    "category": "Education",
    "country": "Tanzania, United Republic of",
    "title": "Help a Tanzanian Orphan Complete Primary School",
    "organization": "GLK Student Fund (Gayle Lyn Kliever Student Fund)",
    "summary": "The GLK Student Fund gives scholarships to send bright, motivated yet vulnerable Tanzanian children to school.  Most of our students are orp… read more",
    "image": "https://www.globalgiving.org/pfil/11035/pict_featured.jpg"
  },
  {
    "category": "Health",
    "country": "Malawi",
    "title": "Help Women in Africa to Beat Cervical Cancer",
    "organization": "Dignitas International",
    "summary": "In Malawi, a country that already has one of the world\'s highest rates of HIV, thousands of women face an added challenge: the world\'s highe… read more",
    "image": "https://www.globalgiving.org/pfil/29302/pict_featured.jpg"
  },
  {
    "category": "Environment",
    "country": "Indonesia",
    "title": "Help Make an Island Plastic Free",
    "organization": "Bottle for Botol Limited",
    "summary": "The project will work on the small Island of Nusa Lembongan, Indonesia, where the authorities and community have set themselves the goal of … read more",
    "image": "https://www.globalgiving.org/pfil/25499/pict_featured.jpg"
  },
  {
    "category": "Women and Girls",
    "country": "Senegal",
    "title": "Educate girls and fight poverty in Senegal",
    "organization": "Women\'s Global Education Project",
    "summary": "By providing access to education, our project empowers girls to fight the causes and effects of poverty in their lives and to build a bright… read more",
    "image": "https://www.globalgiving.org/pfil/2430/pict_featured.jpg"
  },
  {
    "category": "Animals",
    "country": "United States",
    "title": "End animal suffering in KCMO urban core",
    "organization": "Chain of Hope KC",
    "summary": "COH outreach ends suffering and overpopulation of animals through support and education to pet owners, rescue of abused and neglected animal… read more",
    "image": "https://www.globalgiving.org/pfil/11174/pict_featured.jpg"
  },
  {
    "category": "Women and Girls",
    "country": "India",
    "title": "Empower Future Leaders from Mumbai Red-Light Areas",
    "organization": "Kranti",
    "summary": "Kranti empowers girls from Mumbai\'s red-light areas to become agents of social change! read more",
    "image": "https://www.globalgiving.org/pfil/5490/pict_featured.jpg"
  },
  {
    "category": "Women and Girls",
    "country": "India",
    "title": "Prevent Child Marriage, Educate 150 Girls in India",
    "organization": "Care for Vrindavan",
    "summary": "Help some of poorest girls in Uttar Pradesh avoid child marriages and break the cycle of poverty by sending them to school & helping them sa… read more",
    "image": "https://www.globalgiving.org/pfil/8803/pict_featured.jpg"
  },
  {
    "category": "Hunger",
    "country": "India",
    "title": "Food support to32 starving neglected elderly women",
    "organization": "Community Health, Housing and Social Education (CHHASE)",
    "summary": "The less privileged elders need food, love and care. This project will provide meals to 32 homeless old age persons. Every day we provide nu… read more",
    "image": "https://www.globalgiving.org/pfil/30042/pict_featured.jpg"
  },
  {
    "category": "Animals",
    "country": "Russia",
    "title": "Help Tiger Rehabilitation Center in Russia",
    "organization": "Phoenix Fund",
    "summary": "Every year tiger cubs lose their mothers and become orphans. Also, tigers with injuries or affected by some diseases are found near human se… read more",
    "image": "https://www.globalgiving.org/pfil/8358/pict_featured.jpg"
  },
  {
    "category": "Children",
    "country": "Senegal",
    "title": "Hope for begging talibe children, St-Louis Senegal",
    "organization": "Maison de la Gare",
    "summary": "1000s of boys between 3 and 19, \"talibes\", beg on the streets of Senegal for their food and for money to give the \"teacher\" who controls the… read more",
    "image": "https://www.globalgiving.org/pfil/10053/pict_featured.jpg"
  },
  {
    "category": "Women and Girls",
    "country": "Cambodia",
    "title": "Lotus Pedals - Help Cambodian Girls Get to School!",
    "organization": "Lotus Outreach",
    "summary": "Lotus Pedals provides heavy-terrain bicycles to hundreds of at-risk Cambodian girls who would not otherwise be able to traverse the consider… read more",
    "image": "https://www.globalgiving.org/pfil/3885/pict_featured.jpg"
  },
  {
    "category": "Children",
    "country": "Kenya",
    "title": "Educating street children in the Mathare slums",
    "organization": "Mathari\'s Children Fund",
    "summary": "120 impoverished children from the Mathare slums in Kenya will be given an education, technical training, school materials, food and medical… read more",
    "image": "https://www.globalgiving.org/pfil/2513/pict_featured.jpg"
  },
  {
    "category": "Disaster Recovery",
    "country": "United States",
    "title": "Hurricane Irma Children\'s Relief Fund",
    "organization": "Save the Children Federation",
    "summary": "Right now, devastating Hurricane Irma is striking the Caribbean and barreling toward Florida. Save the Children relief experts are actively … read more",
    "image": "https://www.globalgiving.org/pfil/29749/pict_featured.jpg"
  },
  {
    "category": "Children",
    "country": "Kenya",
    "title": "Protecting  Girls from Genital Mutilation in Kenya",
    "organization": "Tareto Maa Organization",
    "summary": "Tareto Maa is a community based organization that aims to overcome the cruel traditions of female circumcision and child marriage within the… read more",
    "image": "https://www.globalgiving.org/pfil/9169/pict_featured.jpg"
  },
  {
    "category": "Women and Girls",
    "country": "India",
    "title": "Empower girls like Priti in slums in Pune, India",
    "organization": "Karuna Trust",
    "summary": "13 year old Priti lives in Burma Cell, a slum of corrugated iron huts in the suburbs of Pune. This empowerment project helps 1,100 girls lik… read more",
    "image": "https://www.globalgiving.org/pfil/3942/pict_featured.jpg"
  },
  {
    "category": "Children",
    "country": "India",
    "title": "Help 10 000 kids escape poverty and child labour",
    "organization": "Karuna Trust",
    "summary": "Helping children and their families from \'untouchable\' communities in rural India escape poverty, child-labour in \'bidi\' cigar factories, an… read more",
    "image": "https://www.globalgiving.org/pfil/1866/pict_med.jpg"
  },
  {
    "category": "Women and Girls",
    "country": "Afghanistan",
    "title": "Fast-Tracking Education for Afghan Women and Girls",
    "organization": "Afghan Institute of Learning",
    "summary": "Provide literacy and fast-track education to thousands of women and girls who were deprived of learning and are now eager to become literate… read more",
    "image": "https://www.globalgiving.org/pfil/1155/pict_featured.jpg"
  },
  {
    "category": "Education",
    "country": "India",
    "title": "Empower India - Internships to make future leaders",
    "organization": "Lab-X Foundation Inc",
    "summary": "Over 90% of engineering students in India attend schools that don\'t offer quality, practical STEM education, thus wasting nation\'s talent. I… read more",
    "image": "https://www.globalgiving.org/pfil/29341/pict_featured.jpg"
  },
  {
    "category": "Children",
    "country": "Philippines",
    "title": "Cancer treatment for 20 children and 30 women",
    "organization": "Asia America Initiative",
    "summary": "In 2014, 49 of our first 50 patients in Manila became cancer free. We are now adding Hope Center in Davao, Mindanao to help doctors provide … read more",
    "image": "https://www.globalgiving.org/pfil/8496/pict_featured.jpg"
  },
  {
    "category": "Education",
    "country": "Congo, Democratic Republic of the",
    "title": "Educate 60+ Vulnerable Children in DR Congo",
    "organization": "Synergie des Associations Feminines du Congo (SAFECO)",
    "summary": "For the marginalized and remote village of Rwenena (Ruh-NENN-uh), eastern DRC, this Rwenena Kids program of SAFECO provides tuition, uniform… read more",
    "image": "https://www.globalgiving.org/pfil/22943/pict_featured.jpg"
  },
  {
    "category": "Education",
    "country": "India",
    "title": "Educate 850 Underprivileged Children In India",
    "organization": "U&I",
    "summary": "U&I Teach impacts 850 underprivileged children in 10 cities across India. Government-run schools in India are stretched for resources and ma… read more",
    "image": "https://www.globalgiving.org/pfil/9357/pict_featured.jpg"
  },
  {
    "category": "Hunger",
    "country": "Sierra Leone",
    "title": "Food and Income for 500 Sierra Leone Farmers",
    "organization": "Seeds for Growth Foundation",
    "summary": "We support small farmers with loans, seeds, fertilizer and training. Started September 2016 with 20 farmers cultivating 10 Hectares (ca. 25 … read more",
    "image": "https://www.globalgiving.org/pfil/28007/pict_featured.jpg"
  },
  {
    "category": "Animals",
    "country": "United States",
    "title": "Seizure-Response Dogs for those with Epilepsy",
    "organization": "Chelsea Hutchison Foundation",
    "summary": "Epilepsy will affect 1 in 26 Americans at some point in their lives, and an estimated one-third of epilepsy-related deaths are due to SUDEP … read more",
    "image": "https://www.globalgiving.org/pfil/9264/pict_med.jpg"
  },
  {
    "category": "Environment",
    "country": "China",
    "title": "Open Green Map to Support the Greening of China",
    "organization": "Green Map System",
    "summary": "With so much at stake and so much opportunity, your donations will support the creation of printed, interactive and mural Green Maps in comm… read more",
    "image": "https://www.globalgiving.org/pfil/2167/pict_featured.jpg"
  },
  {
    "category": "Hunger",
    "country": "Ecuador",
    "title": "Cold Room for Senior Dining Room in  Ecuador",
    "organization": "Ecuadorian Volunteers Association",
    "summary": "Through the June Accelerator at GlobalGiving we raised funds to install a COLD ROOM at the Dining Room for senior citizens San Pedro Claver.… read more",
    "image": "https://www.globalgiving.org/pfil/28016/pict_featured.jpg"
  },
  {
    "category": "Children",
    "country": "Rwanda",
    "title": "Restore the Rhythm of Life for 500 Rwandan Youth",
    "organization": "Agahozo-Shalom Youth Village",
    "summary": "There are 2.8 million orphans and vulnerable children in Rwanda today. Many cannot think beyond their next meal, let alone dream about the f… read more",
    "image": "https://www.globalgiving.org/pfil/13175/pict_featured.jpg"
  },
  {
    "category": "Economic Development",
    "country": "India",
    "title": "Provide Enough Food for Poor Farmers in India",
    "organization": "Seva Mandir",
    "summary": "Seva Mandir seeks to help 5,000 farmers in rural areas near Udaipur by teaching them better agricultural practices and developing the resour… read more",
    "image": "https://www.globalgiving.org/pfil/1891/pict_featured.jpg"
  },
  {
    "category": "Health",
    "country": "Honduras",
    "title": "Improve Vision Health for 1,000 Hondurans",
    "organization": "Vision Health International",
    "summary": "Vision Health International will provide eye exams, fit eyeglasses, perform life-altering surgeries, and improve the vision health for 1000 … read more",
    "image": "https://www.globalgiving.org/pfil/28179/pict_featured.jpg"
  },
  {
    "category": "Animals",
    "country": "South Africa",
    "title": "Save Big Cats From Extinction In Africa",
    "organization": "Fiela Funds Cheetah Breeding Project",
    "summary": "Our Mission is to raise awareness of the vulnerability of Endangered and Threatened Species through educational experiences, as well as ethi… read more",
    "image": "https://www.globalgiving.org/pfil/29390/pict_featured.jpg"
  },
  {
    "category": "Arts and Culture",
    "country": "United States",
    "title": "Book Club for Youth in Federal Prison",
    "organization": "Free Minds Book Club and Writing Workshop",
    "summary": "Has a book ever changed your life? This project, \"Books Across the Miles\" will help youth charged as adults in federal prison transform thei… read more",
    "image": "https://www.globalgiving.org/pfil/8648/pict_featured.jpg"
  },
  {
    "category": "Children",
    "country": "Haiti",
    "title": "Provide a safe home for Haitian Orphans",
    "organization": "International Disaster Volunteers (IDV)",
    "summary": "This project provides a safe home for around thirty orphaned children in Haiti. The 2010 earthquake destroyed the orphanage\'s old house, lea… read more",
    "image": "https://www.globalgiving.org/pfil/6235/pict_featured.jpg"
  },
  {
    "category": "Education",
    "country": "Uganda",
    "title": "Build Two School Classrooms for Youngest Students",
    "organization": "Outreach Uganda",
    "summary": "Currently, our youngest nursery students plus our kindergarteners have classrooms in a very dilapidated mud and thatch building which was or… read more",
    "image": "https://www.globalgiving.org/pfil/25797/pict_featured.jpg"
  },
  {
    "category": "Education",
    "country": "South Africa",
    "title": "Education support for children in South Africa",
    "organization": "Maranatha Care Children",
    "summary": "THANK YOU for your support of Maranatha Care Children! Our primary project, the Siyakatala Child & Youth Care Centre in the Eastern Cape of … read more",
    "image": "https://www.globalgiving.org/pfil/9087/pict_featured.jpg"
  },
  {
    "category": "Humanitarian Assistance",
    "country": "Cambodia",
    "title": "Remove landmines from a village in Cambodia",
    "organization": "The HALO Trust",
    "summary": "Cambodia is one of the most landmine affected countries, and with over 25,000 amputees it has one of the highest ratio per capita in the wor… read more",
    "image": "https://www.globalgiving.org/pfil/7819/pict_featured.jpg"
  },
  {
    "category": "Education",
    "country": "Sudan",
    "title": "Unleash the leaders: 400 girls in South Sudan",
    "organization": "Project Education South Sudan",
    "summary": "Ayak Anguei Girl\'s Primary  School has 400 girls enrolled where 17 out of 23 P8 recently graduated onto secondary school in a country where … read more",
    "image": "https://www.globalgiving.org/pfil/11954/pict_featured.jpg"
  },
  {
    "category": "Disaster Recovery",
    "country": "Mexico",
    "title": "Helping families affected by Mexico Earthquakes",
    "organization": "World Vision",
    "summary": "When disaster strikes, World Vision is there. We are on the ground in Mexico assessing the damage and providing emergency relief for survivo… read more",
    "image": "https://www.globalgiving.org/pfil/29870/pict_featured.jpg"
  },
  {
    "category": "Hunger",
    "country": "Guatemala",
    "title": "Fighting Malnutrition in Rural Guatemala",
    "organization": "Seeds for a Future",
    "summary": "This rural Guatemala program fights malnutrition among children and moms by providing families with education about the best and most nutrit… read more",
    "image": "https://www.globalgiving.org/pfil/13523/pict_featured.jpg"
  },
  {
    "category": "Economic Development",
    "country": "Brazil",
    "title": "TETO - Construction of transitional housing",
    "organization": "Um TETO para meu Pais Brasil",
    "summary": "In September, TETO will accomplish another massive construction of transitional housing in four different communities located in Sao Paulo, … read more",
    "image": "https://www.globalgiving.org/pfil/24716/pict_featured.jpg"
  },
  {
    "category": "Education",
    "country": "Botswana",
    "title": "STEM Education in Botswana: Girls Getting Geeky",
    "organization": "Stepping Stones International",
    "summary": "Stepping Stones International plans to offer STEM education to orphaned and vulnerable girls ages 12-25 through our partnership with Design … read more",
    "image": "https://www.globalgiving.org/pfil/27328/pict_featured.jpg"
  },
  {
    "category": "Education",
    "country": "United States",
    "title": "Send an At-Risk Child to Summer Camp",
    "organization": "Purple Feet Foundation",
    "summary": "This project sends at-risk middle school students from underserved urban neighborhoods to a week-long summer enrichment experience - the thi… read more",
    "image": "https://www.globalgiving.org/pfil/12335/pict_featured.jpg"
  },
  {
    "category": "Technology",
    "country": "Nigeria",
    "title": "STEM Camp for Girls in Minna: Promoting Creativity",
    "organization": "Timeout for Africa Education and Sports Foundation",
    "summary": "Young girls in Minna, Nigeria have limited access to STEM materials.  STEM materials for kids such as legos, keva planks, k\'nexs, and snap c… read more",
    "image": "https://www.globalgiving.org/pfil/25157/pict_featured.jpg"
  },
  {
    "category": "Climate Change",
    "country": "Philippines",
    "title": "Help Filipino Communities Prepare for Disaster",
    "organization": "International Disaster Volunteers (IDV)",
    "summary": "The Philippines is one of the world\'s most disaster prone countries. It is struck by more than 20 typhoons in an average year, and with the … read more",
    "image": "https://www.globalgiving.org/pfil/12762/pict_featured.jpg"
  },
  {
    "category": "Children",
    "country": "Palestine",
    "title": "A Safe Place for Kids in Deheishe Refugee Camp",
    "organization": "Karama Organisation for Women and Children\'s Development",
    "summary": "The traumatized children of Deheishe Camp, near Bethlehem in Palestine, lack fun and hope in their lives. Karama\'s center aspires to give th… read more",
    "image": "https://www.globalgiving.org/pfil/15415/pict_featured.jpg"
  },
  {
    "category": "Children",
    "country": "United States",
    "title": "Saving Children in Poverty Worldwide",
    "organization": "Jake\'s Diapers, Inc.",
    "summary": "Jake\'s Diapers serves babies around the world living in devastatingly difficult situations, where sometimes a choice has to be made between … read more",
    "image": "https://www.globalgiving.org/pfil/23239/pict_featured.jpg"
  },
  {
    "category": "Women and Girls",
    "country": "India",
    "title": "Pitch it. The Kids Sustainable School Challenge.",
    "organization": "Going to School Fund",
    "summary": "The Kids Sustainable School Challenge is the first kids-school-enterprise challenge in rural India that asks kids: How would you change your… read more",
    "image": "https://www.globalgiving.org/pfil/26780/pict_featured.jpg"
  },
  {
    "category": "Human Rights",
    "country": "Vietnam",
    "title": "Polio Victims Home Renovation - Ho Chi Minh City",
    "organization": "Vets With A Mission",
    "summary": "In 1992, Vietnam vets visited Polio Orphanage #5 in HCMC/Saigon with Vets With A Mission. VWAM agreed to help Sister Jean Marie, the orphana… read more",
    "image": "https://www.globalgiving.org/pfil/29414/pict_featured.jpg"
  },
  {
    "category": "Climate Change",
    "country": "Costa Rica",
    "title": "Plant 30,000 native trees Costa Rican owned farms",
    "organization": "Community Carbon Trees- Costa Rica",
    "summary": "Pay community men and women to plant 30,000 trees (65 species) in biological corridors covering water springs and rivers in Guabo Valley wat… read more",
    "image": "https://www.globalgiving.org/pfil/14868/pict_featured.jpg"
  },
  {
    "category": "Children",
    "country": "Bulgaria",
    "title": "Mentoring Program for Underprivileged Youth",
    "organization": "Step for Bulgaria Foundation",
    "summary": "The Mentoring Program presents an opening for building a strong relationship between underprivileged youths and professionals. A relationshi… read more",
    "image": "https://www.globalgiving.org/pfil/16080/pict_featured.jpg"
  },
  {
    "category": "Women and Girls",
    "country": "Kosovo",
    "title": "Widows Fund Fushe Kosova",
    "organization": "The Ideas Partnership",
    "summary": "Ensuring that when a father dies, his children\'s chance of education don\'t die with him.  When a father of young children dies, it\'s always … read more",
    "image": "https://www.globalgiving.org/pfil/20369/pict_featured.jpg"
  },
  {
    "category": "Children",
    "country": "Nicaragua",
    "title": "Healing Children\'s Hearts in Nicaragua",
    "organization": "Surgeons of Hope Foundation, Inc.",
    "summary": "Surgeons of Hope Foundation sends volunteer medical teams on life-saving missions to provide heart surgery for the children of Nicaragua.   … read more",
    "image": "https://www.globalgiving.org/pfil/8657/pict_featured.jpg"
  },
  {
    "category": "Economic Development",
    "country": "Haiti",
    "title": "Contribute to Long-Term Rebuilding in Haiti",
    "organization": "Lambi Fund of Haiti",
    "summary": "Lambi fund first helped members of peasant groups get food and essentials for their families following the earthquake.  Now, Lambi Fund is w… read more",
    "image": "https://www.globalgiving.org/pfil/4571/pict_featured.jpg"
  },
  {
    "category": "Human Rights",
    "country": "Bosnia and Herzegovina",
    "title": "Sponsor Bosnian-Herzegovinian youth to build peace",
    "organization": "Center for Peacebuilding",
    "summary": "In the aftermath of a war, often the conflict remains. Such is the case of Bosnia. From the individual level to the socio-political, divisio… read more",
    "image": "https://www.globalgiving.org/pfil/10099/pict_featured.jpg"
  },
  {
    "category": "Children",
    "country": "India",
    "title": "STEM Education for 120 At-Risk Children in India",
    "organization": "Limitless Child International",
    "summary": "Marginalized children living in orphanages, institutions and extremely impoverished slums have access to live saving programs but little mor… read more",
    "image": "https://www.globalgiving.org/pfil/27576/pict_featured.jpg"
  },
  {
    "category": "Children",
    "country": "Turkey",
    "title": "Provide School Necessities for 280 Poor Children",
    "organization": "Buldan Egitim ve Dayanisma Vakfi",
    "summary": "Can you change your life with USD10.-? Of course you are not but you can change a child\'s life by supporting his/her education. Providing a … read more",
    "image": "https://www.globalgiving.org/pfil/28336/pict_featured.jpg"
  },
  {
    "category": "Health",
    "country": "Slovakia",
    "title": "Social center for mentally ill people in Slovakia",
    "organization": "Pontis Foundation",
    "summary": "Dss-Most Center helps people with mental health disorders on their way to attaining self-sufficiency.  Your support can help them develop th… read more",
    "image": "https://www.globalgiving.org/pfil/16290/pict_med.jpg"
  },
  {
    "category": "Health",
    "country": "Cameroon",
    "title": "Kitchu Community Water Project",
    "organization": "Research Center for Analytic Diagnosis and Imaging Trends (RECEADIT)",
    "summary": "Water supply is a major problem in Kitchu as the pictures show.  Specifically, the Kitchu Community Water Project is designed to provide thi… read more",
    "image": "https://www.globalgiving.org/pfil/23251/pict_featured.jpg"
  },
  {
    "category": "Microfinance",
    "country": "Nicaragua",
    "title": "Economic Empowerment for 130 Women in Nicaragua",
    "organization": "Self-Help International",
    "summary": "Self-Help has been working to alleviate hunger in Nicaragua since 1999. Providing opportunities for women to learn business operations, and … read more",
    "image": "https://www.globalgiving.org/pfil/12973/pict_featured.jpg"
  },
  {
    "category": "Children",
    "country": "Japan",
    "title": "Send 80 Fukushima Children to a Safe Summer Camp",
    "organization": "Operation Blessing Japan",
    "summary": "This project will take 80 children living near the crippled nuclear power plant from Minami Soma, Fukushima, on a special 3 days and 2 night… read more",
    "image": "https://www.globalgiving.org/pfil/28210/pict_featured.jpg"
  },
  {
    "category": "Education",
    "country": "Tanzania, United Republic of",
    "title": "Malaika Guardians - quality education in Tanzania",
    "organization": "Malaika Children\'s Friends onlus",
    "summary": "For eleven years, Malaika children\'s home has been welcoming and caring for orphaned and abandoned children in Arusha, Tanzania. We provide … read more",
    "image": "https://www.globalgiving.org/pfil/30884/pict_featured.jpg"
  },
  {
    "category": "Children",
    "country": "United States",
    "title": "Help 30 Students Become Earth Keepers",
    "organization": "Piedmont Wildlife Center",
    "summary": "This project will send over 30 elementary and middle school children to a weekly after school program at seven NC elementary and middle scho… read more",
    "image": "https://www.globalgiving.org/pfil/17429/pict_featured.jpg"
  }
];

const categories = [
  "Animals",
  "Arts and Culture",
  "Children",
  "Climate Change",
  "Disaster Recovery",
  "Economic Development",
  "Education",
  "Environment",
  "Health",
  "Human Rights",
  "Humanitarian Assistance",
  "Hunger",
  "Microfinance",
  "Technology",
  "Women and Girls"
];

const countries = [
  'Afghanistan',
  'Armenia',
	'Bosnia and Herzegovina',
	'Botswana',
	'Brazil',
	'Bulgaria',
	'Cambodia',
	'Cameroon',
	'China',
	'Colombia',
	'Congo, Democratic Republic of the',
	'Costa Rica',
	'Ecuador',
	'Ghana',
	'Guatemala',
	'Haiti',
	'Honduras',
	'India',
	'Indonesia',
	'Iraq',
	'Ireland',
	'Japan',
	'Kazakhstan',
	'Kenya',
	'Kosovo',
	'Madagascar',
	'Malawi',
	'Mexico',
	'Nicaragua',
	'Nigeria',
	'Pakistan',
	'Palestine',
	'Philippines',
	'Russia',
	'Rwanda',
	'Saint Vincent and the Grenadines',
	'Senegal',
	'Sierra Leone',
	'Slovakia',
	'South Africa',
	'South Korea',
	'Sudan',
	'Tanzania, United Republic of',
	'Turkey',
	'Uganda',
  'United Kingdom',
	'United States',
	'Vietnam'
];

// function generateInsertCode(arr, tableName, columnLabels) {
  
//   let result = '';

//   for (let i = 0; i < arr.length; i += 1) {
//     let str = `INSERT INTO ${tableName} (${columnLabels.join(', ')}) VALUES (`;
//     str += `${arr[i]}`;
//     str += `);\n`;
//     result += str;
//   }

//   return result;
// }

// const countries = charityData.map((obj) => obj.country);
// const countryData = countries.filter((country, index, array) => array.indexOf(country) === index).sort();

// console.log(generateInsertCode(countryData, 'country', ["country_name"]));

// const categories = charityData.map(obj => obj.category);
// const categoryData = categories.filter((category, index, array) => array.indexOf(category) === index).sort();

// console.log(generateInsertCode(categoryData, 'category', ["category_name"]));

// const copy = charityData.slice();
// const charities = [];

// copy.forEach((char, i, arr) => {
//   let temp = [];
//   temp.push(`'${char.image}'`);
//   let catID = categories.indexOf(char.category) + 1;
//   temp.push(catID);
//   let countryID = countries.indexOf(char.country) + 1;
//   temp.push(countryID);
//   temp.push(`'${char.title}'`);
//   temp.push(`'${char.organization}'`);
//   temp.push(`'${char.summary}'`);
//   charities.push(temp);
// });

// console.log(charities[0]);

// console.log(generateInsertCode(charities, 'charity', ['image', 'category_id', 'country_id', 'title', 'organization', 'summary']));
