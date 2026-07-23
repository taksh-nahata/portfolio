// ╔═╗┌┐ ┌─┐┬ ┬┌┬┐  ╔═╗┌─┐┌─┐┌─┐  ╔═╗┌┐┌┬┌┬┐┌─┐┌┬┐┬┌─┐┌┐┌┌─┐
// ╠═╣├┴┐│ ││ │ │   ╠═╝├─┤│ ┬├┤   ╠═╣│││││││├─┤ │ ││ ││││└─┐
// ╩ ╩└─┘└─┘└─┘ ┴   ╩  ┴ ┴└─┘└─┘  ╩ ╩┘└┘┴┴ ┴┴ ┴ ┴ ┴└─┘┘└┘└─┘

// SCRIPT FOR ANIMATING THE PHRASE "ABOUT TAKSH NAHATA"
const aboutText = "ABOUT TAKSH NAHATA"

const aboutHeaderElement = document.getElementById("aboutHeader");
const aboutWords = aboutText.split(' ');

const aboutHTML = aboutWords.map((word, wordIndex) => {
    const wordDelay = wordIndex * 1.1;
    const letters = word.split('');
    
    const letterHTML = letters.map((letter, letterIndex) => {
        const initialDelay = 0.5;
        const letterDelay = letterIndex * 0.18;
        const totalDelay = initialDelay + wordDelay + letterDelay;
        return `<span class="letter" style="animation-delay: ${totalDelay}s">${letter}</span>`;
    }).join('');

    return `<div class="word" style="animation-delay: ${wordDelay}s">${letterHTML}</div>`;
}).join('');
aboutHeaderElement.innerHTML = aboutHTML;

// SCRIPT FOR ANIMATING THE PHRASE "SO... YOU REALLY WANT TO KNOW WHO I AM?"
const firstPhrase = "SO... YOU REALLY WANT TO KNOW WHO I AM?";
const secondPhrase = "I MEAN, I GUESS..."
const stageContainer = document.getElementById("phrase-stage-about");
const stageContainerGuess = document.getElementById("phrase-stage-guess");
const firstPhraseWords = firstPhrase.split(' ');
const secondPhraseWords = secondPhrase.split(' ');

const firstPhraseHTML = firstPhraseWords.map((word, index) => {
    const startPercent = 12 + (index * 7);
    const endPercent = startPercent + 7;
    return `<span class="smash-word" style="animation-range: ${startPercent}% ${endPercent}%;">${word}</span>`;
}).join(' ');

stageContainer.innerHTML = firstPhraseHTML;

const secondPhraseHTML = secondPhraseWords.map((word, index) => {
    const startPercent = 12 + (index * 10);
    const endPercent = startPercent + 10;
    return `<span class="smash-word" style="animation-range: ${startPercent}% ${endPercent}%;">${word}</span>`;
}).join(' ');

stageContainerGuess.innerHTML = secondPhraseHTML;

// SCRIPT FOR HANDLING PHOTO GRID ANIMATION AND MEDIA FILES
const rawFiles = [
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333952/aabbd7a4-60c1-435f-ad81-f4c498a314d5_higygp.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333952/IMG_20260413_213746_jopfgb.heic'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333952/IMG_20250615_092327664_BURST000_COVER_dnrdvo.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333951/IMG-20260331-WA0053_wqod83.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333951/IMG-20260331-WA0041_uup6wb.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333951/IMG-20251229-WA0023_iampq5.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333951/IMG-20251018-WA0068_cmrdio.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333951/IMG_20240520_124123_o0na1s.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333951/IMG-20250720-WA0081_scvupv.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333951/IMG-20250720-WA0054_yftegv.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333950/IMG_20250215_121236_mz7lxj.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333950/IMG-20250506-WA0001_yiygmo.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333950/IMG_20170904_195131630_tkwtii.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333950/DSCN2491_vshaxa.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333950/PXL_20230618_184100849_xsg5rk.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333949/IMG_20210521_140937_qy9th7.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333949/IMG_0094_v4zgcv.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333948/IMG_20190614_100256_vo0cpt.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333948/IMG_20190531_185905_b9qz1y.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333948/IMG-20190528-WA0030_yd9bxs.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333947/IMG_20190616_161321_cwpsax.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333947/IMG_20190614_100302_gadq7d.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333947/IMG_20190617_122105_fkaw7u.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333946/IMG_20210520_150417_woonxw.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333946/20210523_140223_dmctkm.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333946/IMG_20210522_140516_Bokeh_rn84hv.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333945/IMG_20210521_160536_Bokeh_wiiv2j.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333945/IMG_20210619_142423_zakaos.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333945/IMG_20210613_133011_btbyvg.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333945/20210609_075646_kl8ffw.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333943/IMG_20211128_083032_e0navw.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333943/IMG_20211010_123502_pckftk.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333943/IMG_20211010_173627_hymmp4.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333943/IMG_20211024_192317_obkxfm.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333942/PXL_20260619_202916853.MP_i3vgbe.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333942/IMG_20211127_163536_mjjali.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333942/PXL_20260630_223312183.MP_y77x1w.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333941/20211127163804_IMG_6021_n7pxrx.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333941/IMG_20220130_133655_udt4cu.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333941/20211128_103828_mfmax4.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333941/20211127181411_IMG_6047_vcvjnu.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333940/IMG_20220212_134659_ccrfgd.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333940/IMG_20220417_111500_njzwif.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333940/IMG_20220116_171638_qnfnu2.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333939/PXL_20260630_170429662.MP_oqiyzp.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333939/IMG_20220319_153850_lrnd2z.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333939/PXL_20240730_152159515.MP_ywr72w.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333938/20220409_143144_vacxdl.jpg'},
    {type: 'img', src: 'https://res.cloudinary.com/gxkyclnt/image/upload/v1784333937/PXL_20260629_211344986_cww9yg.jpg'},
    {type: 'video', src: 'https://res.cloudinary.com/gxkyclnt/video/upload/v1784333956/VID-20260401-WA0001_mlo5hp.mp4'},
    {type: 'video', src: 'https://res.cloudinary.com/gxkyclnt/video/upload/v1784333955/VID_20260630_152922040_fjfz1s.mp4'},
    {type: 'video', src: 'https://res.cloudinary.com/gxkyclnt/video/upload/v1784333949/VID_20211005_205448_dd44ph.mp4'},
    {type: 'video', src: 'https://res.cloudinary.com/gxkyclnt/video/upload/v1784333948/VID_20211031_173352_naswau.mp4'}
];

const mediaFiles = rawFiles.map(file => {
    if (file.type === 'img') {
        return {
            type: 'img',
            src: file.src.replace('/upload/', '/upload/q_auto,f_auto,w_600/')
        };
    } else {
        return {
            type: 'video',
            src: file.src.replace('/upload/', '/upload/q_auto,w_600,du_9/')
        };
    }
});

for (let i = mediaFiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [mediaFiles[i], mediaFiles[j]] = [mediaFiles[j], mediaFiles[i]];
}

const grid = document.getElementById('photo-grid');

if (grid) {
    const sizes = ['span-1', 'span-1', 'span-1', 'span-1','span-col-2', 'span-row-2','span-row-2', 'span-2x2'];

    mediaFiles.forEach((file, index) => {
        const card = document.createElement('div');
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
        card.className = `photo-card ${randomSize}`;

        const startRange = 10 + (index * 0.8);
        card.style.setProperty('animation-range', `${startRange}% ${startRange + 10}%`);

        if (file.type === 'img') {
            card.innerHTML = `<img src="${file.src}" loading="lazy" alt="Taksh">`;
        } else {
            card.innerHTML = `<video src="${file.src}" autoplay muted loop playsinline></video>`;
        }
        grid.appendChild(card);
    });

    setTimeout(() => {
        let isJagged = true;

        while (isJagged) {
            const cards = Array.from(grid.querySelectorAll('.photo-card'));
            if (cards.length === 0) break;

            const bottoms = cards.map(c => Math.round(c.offsetTop + c.offsetHeight));
            const maxBottom = Math.max(...bottoms);

            const lowestCards = cards.filter(c => Math.round(c.offsetTop + c.offsetHeight) >= maxBottom -5);
            let totalWidthOfLowestRow = lowestCards.reduce((sum, card) => sum + card.offsetWidth, 0);
            totalWidthOfLowestRow += (lowestCards.length - 1) * 6;

            const gridContentWidth = grid.clientWidth - 12;

            if (gridContentWidth - totalWidthOfLowestRow > 20) {
                lowestCards.forEach(card => card.remove());
            } else {
                isJagged = false;
            }
        }
    }, 500);
}


const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

function getSectionProgress(sectionElement) {
    if (!sectionElement) return 0;
    const rect = sectionElement.getBoundingClientRect();
    const scrollHeight = sectionElement.offsetHeight - window.innerHeight;
    if (scrollHeight <= 0) return 0;
    const progress = -rect.top /scrollHeight;
    return clamp(progress, 0, 1);
}



// SCRIPT FOR HANDLING SEARCH QUERY ANIMATION, RESPONSE, AND COMMENTARY
const act5Wrapper = document.getElementById('act-5-wrapper');
const aiSearchStage = document.getElementById('ai-search-stage');
const searchGlow = document.querySelector('.search-glow');
const aiCardGlow = document.querySelector('.ai-card-glow');
const typingText = document.querySelector('.typing-text-wrapper');
const aiLines = Array.from(document.querySelectorAll('.ai-line'));
const aiCommentary = document.querySelector('.ai-commentary');
const typingFullText = typingText ? typingText.textContent.trim() : '';

if (typingText) {
    typingText.textContent = '';
}

const aiSequenceNodes = [searchGlow, aiCardGlow, typingText, ...aiLines, aiCommentary].filter(Boolean);
aiSequenceNodes.forEach(node => {
    node.style.animation = 'none';
    node.style.transition = 'none';
});


function getScrollProgress() {
    const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    return clamp(window.scrollY / maxScroll, 0, 1);
}

function applyAiSequence() {
    const progress = getSectionProgress(act5Wrapper);

    if (aiSearchStage) {
        aiSearchStage.style.opacity = '1';
    }

    if (searchGlow) {
        const glowProgress = clamp((progress - 0.05) / 0.15, 0, 1);
        searchGlow.style.opacity = glowProgress.toFixed(3);
        searchGlow.style.transform = `translateY(${20 * (1 - glowProgress)}px)`;
        searchGlow.style.filter = `drop-shadow(0 0 ${18 * glowProgress}px rgba(0, 240, 255, 0.35))`;
    }

    if (typingText) {
        const typingProgress = clamp((progress - 0.2) / 0.2, 0, 1);
        const typedCharacters = Math.floor(typingProgress * typingFullText.length);
        typingText.textContent = typingFullText.slice(0, typedCharacters);
        typingText.style.opacity = '1';
    }
    

    if (aiCardGlow) {
        const cardProgress = clamp((progress - 0.42) / 0.15, 0, 1);
        aiCardGlow.style.opacity = cardProgress.toFixed(3);
        aiCardGlow.style.transform = `translateY(${20 * (1 - cardProgress)}px)`;
        aiCardGlow.style.filter = `drop-shadow(0 0 ${18 * cardProgress}px rgba(168, 199, 250, 0.25))`;
    }

    const revealStarts = [0.58, 0.66, 0.74, 0.82];
    const revealEnds   = [0.66, 0.74, 0.82, 0.90];
    const revealNodes  = [...aiLines, aiCommentary].filter(Boolean);

    revealNodes.forEach((node, index) => {
        const revealProgress = clamp((progress - revealStarts[index]) / (revealEnds[index] - revealStarts[index]), 0, 1);
        node.style.opacity = revealProgress.toFixed(3);
        node.style.transform = `translateY(${10 * (1 - revealProgress)}px)`;
        node.style.backgroundPosition = `${100 - (revealProgress * 100)}% 0`;
    });
}

let aiFrame = null;
function scheduleAiSequenceUpdate() {
    if (aiFrame !== null) {
        return;
    }

    aiFrame = window.requestAnimationFrame(() => {
        aiFrame = null;
        applyAiSequence();
    });
}

window.addEventListener('scroll', scheduleAiSequenceUpdate, { passive: true });
window.addEventListener('resize', scheduleAiSequenceUpdate);
applyAiSequence();

// SCRIPT FOR ANIMATING THE PHRASE "BUT HOW DID I GET HERE?"
const bridgePhase = "BUT HOW DID I GET HERE?";
const stageContaierBridge = document.getElementById("phrase-stage-bridge");
const bridgeWords = bridgePhase.split(' ');

const bridgeHTML = bridgeWords.map((word, index) => {
    const startPercent = 15 + (index * 4);
    const endPercent = startPercent + 3;
    return `<span class="smash-word" style="animation-range: ${startPercent}% ${endPercent}%;">${word}</span>`;
}).join(' ');

stageContaierBridge.innerHTML = bridgeHTML;

// SCRIPT FOR ANIMATING TIMELINE ITEMS
const squigglyPath = document.getElementById('squiggly-path');
if (squigglyPath) {
    const pathLength = squigglyPath.getTotalLength();
    squigglyPath.style.strokeDasharray = pathLength;
    squigglyPath.style.strokeDashoffset = pathLength;
    function drawSquiggleOnScroll() {
        const timelineEl = document.getElementById('timeline');
        if (!timelineEl) return;
        const rect = timelineEl.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const sectionHeight = rect.height;
        const scrollDistance = viewportHeight - rect.top;
        let scrollPercentage = scrollDistance / sectionHeight;
        scrollPercentage = Math.min(Math.max(scrollPercentage, 0), 1);
        const drawLength = pathLength * scrollPercentage;
        squigglyPath.style.strokeDashoffset = pathLength - drawLength;
    }
    window.addEventListener('scroll', drawSquiggleOnScroll);
    drawSquiggleOnScroll();
}

const timelineItems = document.querySelectorAll('.timeline-item');
if (timelineItems.length > 0) {
    const itemObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, {
        threshold: 0.2
    });
    timelineItems.forEach(item => itemObserver.observe(item));
}

// 3. ZOOM-OUT 90° ROTATION FINALE SCRIPT
const mainTimeline = document.getElementById('main-timeline');
const act7Wrapper = document.getElementById('act-7-wrapper');
const finaleSpace = document.getElementById('finale-scroll-space');

let cachedTimelineHeight = 0;

function handleZoomOutRotation() {
    if (!mainTimeline || !act7Wrapper || !finaleSpace) return;
    
    // Cache the initial height so the progress calculation is immune to dynamic layout changes!
    if (cachedTimelineHeight === 0) {
        cachedTimelineHeight = mainTimeline.offsetHeight;
    }
    
    const act7Rect = act7Wrapper.getBoundingClientRect();
    const windowH = window.innerHeight;
    
    // The scroll position where the user reaches the bottom of the timeline
    const startFinaleTop = windowH - cachedTimelineHeight;
    
    // How far have we scrolled past this point?
    const pixelsPastTimeline = startFinaleTop - act7Rect.top;
    
    // Total distance of the finale is 300vh
    const scrollDistance = windowH * 3;
    
    let progress = pixelsPastTimeline / scrollDistance;
    progress = Math.max(0, Math.min(1, progress));
    
    // Update cached height ONLY when safely at progress 0, 
    // to adapt to image loading but ignore finale layout shifts.
    if (progress === 0 && !mainTimeline.classList.contains('rotated-finale')) {
        cachedTimelineHeight = mainTimeline.offsetHeight;
    }
    
    // 1. Rotate -90deg smoothly
    const angle = progress * -90;
    
    // Now we can safely read the dynamic expanding height for visual transforms,
    // because it doesn't feed back into the progress calculation!
    const actualHeight = mainTimeline.offsetHeight;
    
    // 2. Scale down so the entirely expanded timeline STILL fits horizontally!
    const targetScale = (window.innerWidth * 0.85) / actualHeight;
    const minScale = Math.min(1, targetScale);
    const scale = 1 + (minScale - 1) * progress;
    
    // 3. Keep the timeline perfectly centered vertically on screen!
    // The top of mainTimeline is exactly act7Rect.top.
    const currentNaturalCenterY = act7Rect.top + (actualHeight / 2);
    const targetCenterY = windowH / 2;
    
    const requiredTranslateY = targetCenterY - currentNaturalCenterY;
    
    // Linear translation perfectly counters linear native scrolling
    const translateY = progress * requiredTranslateY;
    
    mainTimeline.style.transform = `translateY(${translateY}px) rotate(${angle}deg) scale(${scale})`;
    mainTimeline.style.setProperty('--finale-progress', progress);
    
    if (progress > 0.05) {
        mainTimeline.classList.add('rotated-finale');
    } else {
        mainTimeline.classList.remove('rotated-finale');
    }
}
window.addEventListener('scroll', handleZoomOutRotation, { passive: true });