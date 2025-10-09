document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM carregado — iniciando script.js');


    const CONTENT = {
        pt: {
            htmlLang: 'pt-BR',
            flagSrc: 'imagens/brasil.jpeg',
            flagAlt: 'Português',
            languageText: 'PT',
            headerTitle: 'Wiki Folclore Norte-Americano',
            subtitle: 'Explore as lendas e histórias que moldaram a cultura americana',
            nav: ['Introdução', 'Lendas', 'Categorias', 'Quiz', 'Contato'],
            sections: {
                introducao: 'Introdução ao Folclore Norte-Americano',
                lendas: 'Lendas e Histórias',
                categorias: 'Categorias de Lendas',
                quiz: 'Quiz Folclórico',
                contato: 'Contato'
            },
            introParagraphs: [
                'O folclore norte-americano é um rico mosaico de histórias, lendas e tradições que refletem a diversidade cultural e histórica dos Estados Unidos. Desde os contos nativos americanos até as lendas urbanas modernas, essas narrativas capturam medos, esperanças e valores da sociedade americana ao longo do tempo.',
                'Este wiki reúne algumas das lendas mais fascinantes e persistentes que continuam a capturar a imaginação popular, explorando suas origens, variações e impacto na cultura contemporânea.'
            ],
            categories: [
                { title: 'Criaturas Míticas', desc: 'Seres sobrenaturais e criaturas lendárias' },
                { title: 'Lendas Urbanas', desc: 'Histórias modernas transmitidas oralmente' },
                { title: 'Folclore Regional', desc: 'Lendas específicas de determinadas áreas' },
                { title: 'Histórias Históricas', desc: 'Narrativas baseadas em eventos reais' }
            ],
            contactIntro: 'Caso conheça ou saiba de alguma nova lenda e tenha provas, entre em contato!',
            contactLabels: { name: 'Seu Nome', email: 'Seu Email', message: 'Mensagem', submit: 'Enviar' },
            modal: { characteristics: 'Características:', variations: 'Variações da Lenda:', learnMore: 'Saiba Mais' },
            footer: 'Wiki Folclore Norte-Americano. Todos os direitos reservados.',
            viewDetails: 'Ver Detalhes',
            legends: [
                {
                    title: "Pé Grande (Bigfoot)",
                    region: "Noroeste do Pacífico",
                    era: "Século XX",
                    cardDescription: "Uma criatura humanóide coberta de pelos que supostamente habita florestas remotas.",
                    description: `
            <p>Pé Grande, também chamado de Sasquatch, é descrito como uma criatura bípede gigante, coberta de pelos escuros e com altura estimada entre 2 e 3 metros. 
            A lenda possui raízes antigas no folclore de povos nativos americanos, que falavam de "homens selvagens" que viviam em harmonia ou conflito com os humanos.</p>
            <p>Relatos modernos ganharam notoriedade no século XX, com pegadas gigantes encontradas em áreas florestais e supostos vídeos e fotografias. 
            Muitos especialistas acreditam que se trata de uma combinação de fraudes, animais mal identificados e mitologia popular.</p>
        `,
                    characteristics: [
                        "Altura entre 2–3 metros",
                        "Corpo coberto de pelos castanhos ou negros",
                        "Pegadas gigantes (até 60 cm)",
                        "Odor forte característico",
                        "Comportamento evasivo e tímido"
                    ],
                    variations: `<p>Nos EUA e Canadá é chamado de Sasquatch, já na Flórida recebe o nome de Skunk Ape. Em diferentes regiões, a criatura assume pequenas variações físicas e comportamentais.</p>`,
                    link: "https://pt.wikipedia.org/wiki/P%C3%A9-grande"
                },
                {
                    title: "Chupa-cabra",
                    region: "Américas",
                    era: "Década de 1990",
                    cardDescription: "Criatura lendária que ataca animais drenando seu sangue.",
                    description: `
            <p>O Chupa-cabra ficou famoso nos anos 1990 em Porto Rico e logo se espalhou pelas Américas. É descrito como uma criatura noturna, muitas vezes reptiliana, com olhos vermelhos brilhantes e dentes afiados.</p>
            <p>Relatos indicam ataques a cabras, galinhas e outros animais, encontrados mortos com marcas de perfuração e sem sangue. A ciência, contudo, sugere que muitos desses casos envolvem doenças em cães ou coiotes.</p>
        `,
                    characteristics: [
                        "Olhos vermelhos brilhantes",
                        "Dentes e garras afiadas",
                        "Ataca animais domésticos",
                        "Sede por sangue"
                    ],
                    variations: `<p>No México e América Central é retratado como reptiliano, enquanto nos EUA relatos falam de um animal semelhante a cães com sarna severa.</p>`,
                    link: "https://pt.wikipedia.org/wiki/Chupa-cabra"
                },
                {
                    title: "Mothman (Homem-Mariposa)",
                    region: "Virgínia Ocidental",
                    era: "Década de 1960",
                    cardDescription: "Criatura alada com olhos vermelhos, famosa em Point Pleasant.",
                    description: `
            <p>O Mothman é descrito como uma criatura humanoide com asas enormes e olhos vermelhos luminosos. Entre 1966 e 1967, dezenas de moradores de Point Pleasant relataram encontros com a criatura.</p>
            <p>Seu mito ganhou força após o colapso da Silver Bridge em 1967, que matou 46 pessoas. Muitos acreditaram que o Mothman era um presságio do desastre.</p>
        `,
                    characteristics: [
                        "Olhos vermelhos brilhantes",
                        "Asas de até 3 metros",
                        "Capacidade de voo veloz",
                        "Associado a presságios de tragédias"
                    ],
                    variations: `<p>Algumas versões dizem que é uma criatura interdimensional, outras que seria um alienígena observando os humanos.</p>`,
                    link: "https://pt.wikipedia.org/wiki/Mothman"
                },
                {
                    title: "Jersey Devil",
                    region: "Nova Jersey",
                    era: "Século XVIII",
                    cardDescription: "Criatura lendária com asas de morcego e cabeça de cabra.",
                    description: `
            <p>Segundo a lenda, o Jersey Devil nasceu de uma maldição. Conta-se que a Sra. Leeds, grávida de seu 13º filho, amaldiçoou a criança, que nasceu transformando-se em uma criatura demoníaca com asas, cauda e cabeça de cabra.</p>
            <p>Relatos de avistamentos se espalharam por toda Nova Jersey ao longo dos séculos, tornando-o um dos mitos mais duradouros dos EUA.</p>
        `,
                    characteristics: [
                        "Asas de morcego",
                        "Cabeça de cabra",
                        "Cauda longa",
                        "Grito estridente"
                    ],
                    variations: `<p>Alguns o descrevem como um dragão pequeno, outros como uma mistura de animais demoníacos.</p>`,
                    link: "https://pt.wikipedia.org/wiki/Diabo_de_Jersey"
                },
                {
                    title: "Wendigo",
                    region: "Florestas do Norte",
                    era: "Lenda Nativa Americana",
                    cardDescription: "Criatura mitológica associada ao canibalismo e ganância.",
                    description: `
            <p>O Wendigo é um espírito maligno da mitologia algonquina. Ele representa a ganância, a fome insaciável e o canibalismo. 
            Muitas tradições dizem que humanos que praticavam canibalismo em tempos de fome se transformavam em Wendigos.</p>
            <p>É descrito como esquelético, alto, de pele pálida e olhos fundos, sempre faminto e perigoso.</p>
        `,
                    characteristics: [
                        "Corpo esquelético e alto",
                        "Olhos fundos e assustadores",
                        "Fome insaciável",
                        "Associado ao inverno e ao canibalismo"
                    ],
                    variations: `<p>Algumas tradições o descrevem como um gigante com coração de gelo; outras, como um espírito que possui pessoas.</p>`,
                    link: "https://pt.wikipedia.org/wiki/Wendigo"
                },
                {
                    title: "Bloody Mary",
                    region: "Nacional",
                    era: "Lenda Urbana",
                    cardDescription: "Espírito invocado diante do espelho repetindo seu nome.",
                    description: `
            <p>A lenda de Bloody Mary conta que, ao repetir o nome "Bloody Mary" três vezes diante de um espelho em um ambiente escuro, o espírito de uma mulher vingativa aparece.</p>
            <p>Algumas versões dizem que a aparição arranha, assusta ou até mata quem a invoca. Outras versões mais brandas afirmam que ela mostra o futuro do invocador.</p>
        `,
                    characteristics: [
                        "Aparece em espelhos",
                        "Figura feminina fantasmagórica",
                        "Invocada com rituais noturnos",
                        "Associada ao medo infantil"
                    ],
                    variations: `<p>Em algumas tradições, Bloody Mary é associada a figuras históricas como Maria Tudor (“Bloody Mary” da Inglaterra), enquanto em outras é apenas um espírito vingativo.</p>`,
                    link: "https://pt.wikipedia.org/wiki/Bloody_Mary"
                }
            ]

        },

        en: {
            htmlLang: 'en',
            flagSrc: 'imagens/USA.webp',
            flagAlt: 'English',
            languageText: 'EN',
            headerTitle: 'North American Folklore Wiki',
            subtitle: 'Explore the legends and stories that shaped American culture',
            nav: ['Introduction', 'Legends', 'Categories', 'Quiz', 'Contact'],
            sections: {
                introducao: 'Introduction to North American Folklore',
                lendas: 'Legends and Stories',
                categorias: 'Legend Categories',
                contato: 'Contact'
            },
            introParagraphs: [
                'North American folklore is a rich mosaic of stories, legends and traditions reflecting the cultural and historical diversity of the United States. From Native American tales to modern urban legends, these narratives capture fears, hopes and values across time.',
                'This wiki gathers some of the most fascinating and persistent legends that continue to capture popular imagination, exploring their origins, variations and impact on contemporary culture.'
            ],
            categories: [
                { title: 'Mythical Creatures', desc: 'Supernatural beings and legendary creatures' },
                { title: 'Urban Legends', desc: 'Modern stories passed down orally' },
                { title: 'Regional Folklore', desc: 'Legends specific to certain areas' },
                { title: 'Historical Stories', desc: 'Narratives based on real events' }
            ],
            contactIntro: 'If you know of a legend or have evidence, get in touch!',
            contactLabels: { name: 'Your Name', email: 'Your Email', message: 'Message', submit: 'Send' },
            modal: { characteristics: 'Characteristics:', variations: 'Legend variations:', learnMore: 'Learn more' },
            footer: 'North American Folklore Wiki. All rights reserved.',
            viewDetails: 'View Details',
            legends: [
                {
                    title: "Bigfoot",
                    region: "Pacific Northwest",
                    era: "20th Century",
                    cardDescription: "A humanoid creature covered in hair, said to inhabit remote forests.",
                    description: `
            <p>Bigfoot, also known as Sasquatch, is described as a giant bipedal creature covered in dark hair, standing between 2 and 3 meters tall. 
            The legend has roots in Native American folklore, which spoke of 'wild men' living either in harmony or conflict with humans.</p>
            <p>Modern reports gained notoriety in the 20th century, with giant footprints found in forests and alleged videos and photographs. 
            Many experts believe these accounts are a mix of hoaxes, misidentified animals, and popular mythology.</p>
        `,
                    characteristics: [
                        "Height between 2–3 meters",
                        "Body covered in brown or black hair",
                        "Giant footprints (up to 60 cm)",
                        "Strong distinctive odor",
                        "Evasive and shy behavior"
                    ],
                    variations: `<p>In the U.S. and Canada it is called Sasquatch, while in Florida it is known as the Skunk Ape. Depending on the region, the creature shows small physical and behavioral differences.</p>`,
                    link: "https://en.wikipedia.org/wiki/Bigfoot"
                },
                {
                    title: "Chupacabra",
                    region: "Americas",
                    era: "1990s",
                    cardDescription: "Legendary creature said to attack animals by draining their blood.",
                    description: `
            <p>The Chupacabra became famous in the 1990s in Puerto Rico and quickly spread across the Americas. It is often described as a nocturnal reptilian creature with glowing red eyes and sharp teeth.</p>
            <p>Reports describe attacks on goats, chickens, and other animals, found dead with puncture wounds and drained of blood. However, scientists suggest that many of these cases were due to sick dogs or coyotes.</p>
        `,
                    characteristics: [
                        "Glowing red eyes",
                        "Sharp teeth and claws",
                        "Attacks domestic animals",
                        "Thirst for blood"
                    ],
                    variations: `<p>In Mexico and Central America it is depicted as reptilian, while in the U.S. many sightings resemble hairless canines with severe mange.</p>`,
                    link: "https://en.wikipedia.org/wiki/Chupacabra"
                },
                {
                    title: "Mothman",
                    region: "West Virginia",
                    era: "1960s",
                    cardDescription: "Winged creature with glowing red eyes, famous in Point Pleasant.",
                    description: `
            <p>Mothman is described as a humanoid creature with enormous wings and glowing red eyes. Between 1966 and 1967, dozens of residents of Point Pleasant reported encounters with the creature.</p>
            <p>The myth grew after the collapse of the Silver Bridge in 1967, which killed 46 people. Many believed that Mothman was a harbinger of the tragedy.</p>
        `,
                    characteristics: [
                        "Glowing red eyes",
                        "Wings up to 3 meters wide",
                        "Fast flight ability",
                        "Associated with disaster omens"
                    ],
                    variations: `<p>Some versions say it is an interdimensional being, while others suggest it is an alien observing humans.</p>`,
                    link: "https://en.wikipedia.org/wiki/Mothman"
                },
                {
                    title: "Jersey Devil",
                    region: "New Jersey",
                    era: "18th Century",
                    cardDescription: "Legendary creature with bat-like wings and a goat’s head.",
                    description: `
            <p>According to legend, the Jersey Devil was born from a curse. Mrs. Leeds, pregnant with her 13th child, cursed it, and the baby transformed into a demonic creature with wings, a tail, and a goat’s head.</p>
            <p>Sightings spread across New Jersey for centuries, making it one of the most enduring American myths.</p>
        `,
                    characteristics: [
                        "Bat-like wings",
                        "Goat’s head",
                        "Long tail",
                        "Piercing shriek"
                    ],
                    variations: `<p>Some describe it as a small dragon, while others say it is a mix of demonic animals.</p>`,
                    link: "https://en.wikipedia.org/wiki/Jersey_Devil"
                },
                {
                    title: "Wendigo",
                    region: "Northern Forests",
                    era: "Native American Legend",
                    cardDescription: "Mythological creature associated with cannibalism and greed.",
                    description: `
            <p>The Wendigo is an evil spirit from Algonquian mythology. It represents greed, endless hunger, and cannibalism. 
            Many traditions say that humans who practiced cannibalism during times of famine were transformed into Wendigos.</p>
            <p>It is described as skeletal, tall, pale-skinned, with sunken eyes, always hungry and dangerous.</p>
        `,
                    characteristics: [
                        "Tall and skeletal body",
                        "Sunken, frightening eyes",
                        "Insatiable hunger",
                        "Associated with winter and cannibalism"
                    ],
                    variations: `<p>Some traditions describe it as a giant with a heart of ice, while others say it is a spirit that possesses people.</p>`,
                    link: "https://en.wikipedia.org/wiki/Wendigo"
                },
                {
                    title: "Bloody Mary",
                    region: "Nationwide",
                    era: "Urban Legend",
                    cardDescription: "Spirit said to be summoned in front of a mirror by repeating her name.",
                    description: `
            <p>The Bloody Mary legend says that if you repeat the name "Bloody Mary" three times in front of a mirror in a dark room, the vengeful spirit of a woman will appear.</p>
            <p>Some versions claim the apparition scratches, terrifies, or even kills the summoner, while others say she reveals the person’s future.</p>
        `,
                    characteristics: [
                        "Appears in mirrors",
                        "Ghostly female figure",
                        "Summoned through nighttime rituals",
                        "Associated with childhood fears"
                    ],
                    variations: `<p>In some traditions, Bloody Mary is linked to historical figures like Mary Tudor (“Bloody Mary” of England), while in others she is simply a vengeful ghost.</p>`,
                    link: "https://en.wikipedia.org/wiki/Bloody_Mary_(folklore)"
                }
            ]


        }
    };


    const languageToggle = document.getElementById('language-toggle') || document.querySelector('.language-toggle');
    const languageFlag = document.getElementById('language-flag') || (languageToggle ? languageToggle.querySelector('img') : null);
    const languageText = document.getElementById('language-text') || (languageToggle ? languageToggle.querySelector('span') : null);
    const yearEl = () => document.getElementById('year');


    let currentLanguage = localStorage.getItem('siteLanguage') || 'pt';
    let legends = CONTENT[currentLanguage].legends;


    function updateYear() {
        const y = yearEl();
        if (y) y.textContent = new Date().getFullYear();
    }


    function applyLanguage(lang) {
        if (!CONTENT[lang]) return;
        const data = CONTENT[lang];


        try { document.documentElement.lang = data.htmlLang; } catch (e) { }


        if (languageFlag) {
            languageFlag.src = data.flagSrc;
            languageFlag.alt = data.flagAlt;
        }
        if (languageText) {
            languageText.textContent = data.languageText;
        }
        if (languageToggle) {
            languageToggle.setAttribute('title', lang === 'pt' ? 'Mudar idioma' : 'Change language');
            languageToggle.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');
        }


        const headerTitle = document.querySelector('header h1');
        if (headerTitle) headerTitle.textContent = data.headerTitle;
        const subtitle = document.querySelector('.subtitle');
        if (subtitle) subtitle.textContent = data.subtitle;


        const navAnchors = document.querySelectorAll('nav a');
        navAnchors.forEach((a, idx) => {
            if (data.nav[idx]) a.textContent = data.nav[idx];
        });


        const introH2 = document.querySelector('#introducao h2');
        if (introH2) introH2.textContent = data.sections.introducao;
        const lendasH2 = document.querySelector('#lendas h2');
        if (lendasH2) lendasH2.textContent = data.sections.lendas;
        const categoriasH2 = document.querySelector('#categorias h2');
        if (categoriasH2) categoriasH2.textContent = data.sections.categorias;
        const contatoH2 = document.querySelector('#contato h2');
        if (contatoH2) contatoH2.textContent = data.sections.contato;


        const introParas = document.querySelectorAll('#introducao .intro-text p');
        introParas.forEach((p, i) => {
            if (data.introParagraphs[i]) p.textContent = data.introParagraphs[i];
        });


        const cards = document.querySelectorAll('.legend-card');
        cards.forEach((card, i) => {
            const legendData = data.legends[i];
            if (!legendData) return;

            const h3 = card.querySelector('h3');
            if (h3) h3.textContent = legendData.title;

            const region = card.querySelector('.legend-region');
            if (region) region.textContent = legendData.region;

            const era = card.querySelector('.legend-era');
            if (era) era.textContent = legendData.era;

            const desc = card.querySelector('.legend-description');
            if (desc) desc.textContent = legendData.cardDescription;

            const img = card.querySelector('img');
            if (img) img.alt = legendData.title;

            const btn = card.querySelector('.view-details');
            if (btn) btn.textContent = data.viewDetails;
        });


        const categoryElems = document.querySelectorAll('.categories .category');
        categoryElems.forEach((c, i) => {
            const t = c.querySelector('h3');
            const p = c.querySelector('p');
            if (data.categories[i]) {
                if (t) t.textContent = data.categories[i].title;
                if (p) p.textContent = data.categories[i].desc;
            }
        });

        const contatoIntro = document.querySelector('#contato .intro-text');
        if (contatoIntro) contatoIntro.textContent = data.contactIntro;

        const labelName = document.querySelector('label[for="nome"]');
        if (labelName) labelName.textContent = data.contactLabels.name;
        const inputName = document.getElementById('nome');
        if (inputName) inputName.placeholder = data.contactLabels.name;

        const labelEmail = document.querySelector('label[for="email"]');
        if (labelEmail) labelEmail.textContent = data.contactLabels.email;
        const inputEmail = document.getElementById('email');
        if (inputEmail) inputEmail.placeholder = data.contactLabels.email;

        const labelMessage = document.querySelector('label[for="mensagem"]');
        if (labelMessage) labelMessage.textContent = data.contactLabels.message;
        const inputMessage = document.getElementById('mensagem');
        if (inputMessage) inputMessage.placeholder = data.contactLabels.message;

        const submitBtn = document.querySelector('#contato button[type="submit"]');
        if (submitBtn) submitBtn.textContent = data.contactLabels.submit;


        const modalCharH4 = document.querySelector('.legend-characteristics h4');
        if (modalCharH4) modalCharH4.textContent = data.modal.characteristics;
        const modalVarH4 = document.querySelector('.legend-variations h4');
        if (modalVarH4) modalVarH4.textContent = data.modal.variations;
        const modalLink = document.getElementById('modal-link');
        if (modalLink) modalLink.innerHTML = `<i class="fas fa-external-link-alt"></i> ${data.modal.learnMore}`;


        const footerP = document.querySelector('footer .container p');
        if (footerP) {
            footerP.innerHTML = `&copy; <span id="year"></span> ${data.footer}`;
            updateYear();
        }


        legends = data.legends;

        console.log(`Idioma aplicado: ${lang}`);
    }


    applyLanguage(currentLanguage);


    function toggleLanguage() {
        currentLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
        localStorage.setItem('siteLanguage', currentLanguage);
        applyLanguage(currentLanguage);
    }

    if (languageToggle) {
        languageToggle.addEventListener('click', function (e) {
            e.preventDefault();
            toggleLanguage();
        });
        languageToggle.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleLanguage();
            }
        });
        console.log('Event listener adicionado ao botão de idioma');
    } else {
        console.warn('Botão de idioma não encontrado!');
    }


    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href') || '';
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });


    const modal = document.getElementById('legend-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalRegion = document.getElementById('modal-region');
    const modalEra = document.getElementById('modal-era');
    const modalDescription = document.getElementById('modal-description');
    const modalCharacteristics = document.getElementById('modal-characteristics');
    const modalVariations = document.getElementById('modal-variations');
    const modalLinkEl = document.getElementById('modal-link');
    const closeModal = document.querySelector('.close-details');


    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const card = this.closest('.legend-card');
            const legendId = parseInt(card.getAttribute('data-legend-id'), 10);
            const legend = legends[legendId];
            if (!legend) return;

            const cardImage = card.querySelector('img');
            if (modalImage && cardImage) {
                modalImage.src = cardImage.src;
                modalImage.alt = cardImage.alt;
            }

            if (modalTitle) modalTitle.textContent = legend.title;
            if (modalRegion) modalRegion.textContent = legend.region;
            if (modalEra) modalEra.textContent = legend.era;
            if (modalDescription) modalDescription.innerHTML = legend.description;

            if (modalCharacteristics) {
                modalCharacteristics.innerHTML = '';
                legend.characteristics.forEach(char => {
                    const li = document.createElement('li');
                    li.textContent = char;
                    modalCharacteristics.appendChild(li);
                });
            }

            if (modalVariations) modalVariations.innerHTML = legend.variations;
            if (modalLinkEl) modalLinkEl.href = legend.link;

            document.body.classList.add('modal-open');
            if (modal) modal.classList.add('active');
        });
    });

    function closeLegendModal() {
        document.body.classList.remove('modal-open');
        if (modal) modal.classList.remove('active');
    }

    if (closeModal) closeModal.addEventListener('click', closeLegendModal);
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) closeLegendModal();
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) closeLegendModal();
    });


    const sections = document.querySelectorAll('.section');
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });


    updateYear();
});

// ===== QUIZ =====
const QUIZ_CONTENT = {
    pt: [
        { question: "Qual criatura é associada ao canibalismo e à ganância?", options: ["Pé Grande", "Wendigo", "Mothman", "Bloody Mary"], correct: 1 },
        { question: "Qual lenda fala de um espírito invocado diante do espelho?", options: ["Bloody Mary", "Chupa-cabra", "Jersey Devil", "Pé Grande"], correct: 0 },
        { question: "Onde é dito que o Mothman foi visto?", options: ["Nova Jersey", "Florestas do Norte", "Virgínia Ocidental", "México"], correct: 2 },
        { question: "Qual criatura teria asas de morcego e cabeça de cabra?", options: ["Chupa-cabra", "Jersey Devil", "Wendigo", "Pé Grande"], correct: 1 },
        { question: "O Chupa-cabra ficou famoso em qual década?", options: ["1950", "1960", "1990", "2000"], correct: 2 },
        { question: "O Pé Grande também é conhecido como:", options: ["Yeti", "Sasquatch", "Skunk Ape", "Beast of Bray Road"], correct: 1 },
        { question: "A lenda de Bloody Mary envolve qual objeto?", options: ["Espelho", "Amuleto", "Livro", "Vela"], correct: 0 },
        { question: "O Wendigo faz parte da mitologia de qual povo?", options: ["Africano", "Nativo Americano", "Europeu", "Asiático"], correct: 1 },
        { question: "O Jersey Devil teria surgido após:", options: ["Um ritual", "Uma maldição", "Um eclipse", "Um pacto"], correct: 1 },
        { question: "O Mothman costuma ser associado a:", options: ["Presságios de tragédias", "Boa sorte", "Sonhos", "Tempestades"], correct: 0 }
    ],
    en: [
        { question: "Which creature is associated with cannibalism and greed?", options: ["Bigfoot", "Wendigo", "Mothman", "Bloody Mary"], correct: 1 },
        { question: "Which legend speaks of a spirit summoned before a mirror?", options: ["Bloody Mary", "Chupacabra", "Jersey Devil", "Bigfoot"], correct: 0 },
        { question: "Where was Mothman reportedly seen?", options: ["New Jersey", "Northern Forests", "West Virginia", "Mexico"], correct: 2 },
        { question: "Which creature has bat wings and a goat’s head?", options: ["Chupacabra", "Jersey Devil", "Wendigo", "Bigfoot"], correct: 1 },
        { question: "In which decade did the Chupacabra become famous?", options: ["1950s", "1960s", "1990s", "2000s"], correct: 2 },
        { question: "Bigfoot is also known as:", options: ["Yeti", "Sasquatch", "Skunk Ape", "Beast of Bray Road"], correct: 1 },
        { question: "The Bloody Mary legend involves what object?", options: ["Mirror", "Amulet", "Book", "Candle"], correct: 0 },
        { question: "The Wendigo belongs to which mythology?", options: ["African", "Native American", "European", "Asian"], correct: 1 },
        { question: "The Jersey Devil was said to appear after:", options: ["A ritual", "A curse", "An eclipse", "A pact"], correct: 1 },
        { question: "Mothman is often linked to:", options: ["Disaster omens", "Good luck", "Dreams", "Storms"], correct: 0 }
    ]
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

window.addEventListener("load", function () {
    let lang = localStorage.getItem('siteLanguage') || 'pt';
    let quizData = QUIZ_CONTENT[lang];
    let shuffledQuiz = shuffle([...quizData]);
    let currentQuestion = 0;
    let score = 0;

    const questionEl = document.getElementById("quiz-question");
    const optionsEl = document.getElementById("quiz-options");
    const nextBtn = document.getElementById("next-question");
    const resultEl = document.getElementById("quiz-result");
    const langToggle = document.getElementById("language-toggle");

    if (!questionEl || !optionsEl || !nextBtn) {
        console.warn("Elementos do quiz não encontrados no HTML.");
        return;
    }

    if (langToggle) {
        langToggle.addEventListener("click", () => {
            setTimeout(() => {
                lang = localStorage.getItem('siteLanguage') || 'pt';
                quizData = QUIZ_CONTENT[lang];
                restartQuiz();
            }, 400);
        });
    }

    function loadQuestion() {
        const q = shuffledQuiz[currentQuestion];
        questionEl.textContent =
            (lang === "en"
                ? `Question ${currentQuestion + 1} of ${shuffledQuiz.length}: `
                : `Pergunta ${currentQuestion + 1} de ${shuffledQuiz.length}: `) + q.question;

        optionsEl.innerHTML = "";
        resultEl.textContent = "";

        const shuffledOptions = shuffle(q.options.map((opt, i) => ({ text: opt, index: i })));

        shuffledOptions.forEach((optObj) => {
            const btn = document.createElement("button");
            btn.textContent = optObj.text;
            btn.classList.add("quiz-option");
            btn.onclick = () => checkAnswer(optObj.index, btn);
            optionsEl.appendChild(btn);
        });

        nextBtn.style.display = "none";
    }

    function checkAnswer(selectedIndex, clickedButton) {
        const correct = shuffledQuiz[currentQuestion].correct;
        const buttons = document.querySelectorAll(".quiz-option");

        buttons.forEach((btn) => {
            btn.disabled = true;
            if (btn.textContent === shuffledQuiz[currentQuestion].options[correct]) {
                btn.classList.add("correct");
            } else if (btn === clickedButton && selectedIndex !== correct) {
                btn.classList.add("wrong");
            }
        });

        if (selectedIndex === correct) {
            score++;
            resultEl.textContent = lang === "en" ? "Correct!" : "Resposta certa!";
        } else {
            resultEl.textContent = lang === "en" ? "Wrong answer." : "Resposta Errada!";
        }

        setTimeout(() => {
            currentQuestion++;
            if (currentQuestion < shuffledQuiz.length) {
                loadQuestion();
            } else {
                showFinalScore();
            }
        }, 1500);
    }

    function showFinalScore() {
        const msgPT =
            score >= 8
                ? "Excelente, você sabe sobre o folclore americano."
                : score >= 5
                ? "Bom, você ainda pode aprender mais."
                : "Dessa vez não deu, mas você pode estudar e tentar novamente.";

        const msgEN =
            score >= 8
                ? "Excellent, you know about American folklore."
                : score >= 5
                ? "Good, you can still learn more."
                : "Not this time, but you can study and try again.";

        const total = shuffledQuiz.length;
        const wrong = total - score;

        questionEl.textContent = lang === "en" ? "Final Result" : "Resultado Final";
        optionsEl.innerHTML = `
            <p>${lang === "en" ? "You got" : "Você acertou"} <strong>${score}</strong> ${lang === "en" ? "out of" : "de"} <strong>${total}</strong> ${lang === "en" ? "questions." : "perguntas."}</p>
            <p>${lang === "en" ? "Wrong answers:" : "Erros:"} <strong>${wrong}</strong></p>
            <p>${lang === "en" ? msgEN : msgPT}</p>
        `;
        nextBtn.style.display = "inline-block";
        nextBtn.textContent = lang === "en" ? "Restart Quiz" : "Reiniciar Quiz";
        nextBtn.onclick = restartQuiz;
        resultEl.textContent = "";
    }

    function restartQuiz() {
        currentQuestion = 0;
        score = 0;
        shuffledQuiz = shuffle([...quizData]);
        nextBtn.style.display = "none";
        loadQuestion();
    }

    loadQuestion();
});
  
  