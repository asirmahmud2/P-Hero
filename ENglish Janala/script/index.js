const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res => res.json())
        .then(json => displayLessons(json.data));
}

const removeActive = () => {
    const lessonButtons = document.querySelectorAll('.lesson-btn');
    lessonButtons.forEach(btn => btn.classList.remove('active'));
}

const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;

    fetch(url)
        .then(res => res.json())
        .then(json => {
            removeActive();

            const clickBtn = document.getElementById(`lesson-btn-${id}`);
            displayLevelWord(json.data);

            if (clickBtn) {
                clickBtn.classList.add('active');
            }
        })
}

// {
//     "id": 75,
//     "level": 1,
//     "word": "Eat",
//     "meaning": "খাওয়া",
//     "pronunciation": "ইট"
// }

const loadWordDetails = async (id) => {
    const url = `https://openapi.programming-hero.com/api/word/${id}`;
    const res = await fetch(url);
    const details = await res.json();
    displayWordDetails(details.data);
}

const displayWordDetails = (word) => {

    const detailsBox = document.getElementById("details-container");

    detailsBox.innerHTML = `
        <h2 class="text-3xl font-bold mb-4">${word.word}</h2>

        <p class="text-lg"><span class="font-semibold">Meaning:</span> 
        ${word.meaning ?? "অর্থ নেই"}</p>

        <p class="text-lg"><span class="font-semibold">Pronunciation:</span> 
        ${word.pronunciation ?? "N/A"}</p>

        <p class="text-lg"><span class="font-semibold">Sentence:</span> 
        ${word.sentence ?? "No sentence available"}</p>

        <p class="text-lg"><span class="font-semibold">Synonyms:</span> 
        ${word.synonyms && word.synonyms.length > 0 ? word.synonyms.join(", ") : "None"}
        </p>
    `;

    document.getElementById("word_modal").showModal();
}

const displayLevelWord = (words) => {
    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = "";

    if (words.length === 0) {
        wordContainer.innerHTML = `
        <div class="text-center col-span-full py-10 rounded-xl space-y-6 bangla">
            <img class="mx-auto" src="assets/alert-error.png" alt="">
            <p class="font-medium text-xl text-gray-700">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h2 class="font-bold text-4xl">নেক্সট Lesson এ যান</h2>
        </div>
        `;
        return;
    }

    words.forEach(word => {
        const card = document.createElement("div");

        card.innerHTML = `
        <div class="bg-white rounded-xl shadow-sm text-center py-10 px-7 space-y-4">
            <h2 class="font-bold text-2xl">${word.word}</h2>
            <p class="font-semibold">Meaning / Pronunciation</p>
            <div class="bangla text-2xl font-medium">
                ${word.meaning ?? "অর্থ নেই"} / ${word.pronunciation}
            </div>

            <div class="flex justify-between items-center">
                <button onclick="loadWordDetails(${word.id})" class="btn bg-gray-300">
                    <i class="fa-solid fa-circle-info"></i>
                </button>

                <button class="btn bg-gray-300">
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
        </div>
        `;

        wordContainer.append(card);
    });
}

const displayLessons = (lessons) => {
    const levelContainer = document.getElementById('level-container');
    levelContainer.innerHTML = '';

    for (let lesson of lessons) {
        const btnDiv = document.createElement('div');

        btnDiv.innerHTML = `
        <button 
            id="lesson-btn-${lesson.level_no}" 
            onclick="loadLevelWord(${lesson.level_no})" 
            class="btn btn-outline btn-primary lesson-btn">
            <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}
        </button>
        `;

        levelContainer.append(btnDiv);
    }
}

loadLessons();