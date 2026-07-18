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
    const startPercent = 18 + (index * 3);
    const endPercent = startPercent + 3;
    return `<span class="smash-word" style="animation-range: ${startPercent}% ${endPercent}%;">${word}</span>`;
}).join(' ');

stageContainer.innerHTML = firstPhraseHTML;

const secondPhraseHTML = secondPhraseWords.map((word, index) => {
    const startPercent = 52 + (index * 3); // Synced to exactly 3% steps!
    const endPercent = startPercent + 3;
    return `<span class="smash-word" style="animation-range: ${startPercent}% ${endPercent}%;">${word}</span>`;
}).join(' ');

stageContainerGuess.innerHTML = secondPhraseHTML;

// SCRIPT FOR HANDLING PHOTO POUR
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
            src: file.src.replace('/upload/', '/upload/q_auto,w_600/')
        };
    }
});

const grid = document.getElementById('photo-grid');
if (grid) {
    mediaFiles.forEach((file, index) => {
        const card = document.createElement('div');
        card.className = `photo-card`;

        card.style.top = `${Math.random() * 70}%`;
        card.style.left = `${Math.random() * 75}%`;
        card.style.setProperty('--rot', `${(Math.random() - 0.5) * 40}deg`);

        const startRange = 84 + (index * 0.25);
        card.style.animationRange = `${startRange}% ${startRange + 6}%`;

        if (file.type === 'img') {
            card.innerHTML = `<img src="${file.src}" loading="lazy" alt="Taksh">`;
        } else {
            card.innerHTML = `<video src="${file.src}" autoplay muted loop playsinline></video>`;
        }
        grid.appendChild(card);
    });
}
