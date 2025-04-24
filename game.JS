const game = [
    {
        q:'נתוץ ',
        answer1:'שבור',
        answer2:'כינוי לחפץ עזוב',
        answer3:'מילה נרדפת למילה הכרחי',
        good:1,
        level: 1
    },
    {
        q:'בוז',
        answer1:'',
        answer2:'זלזול',
        answer3:'סוג של עוף ימי',
        good:2,
        level: 1
    },
    {
        q:'דניס',
        answer1:'דג מאכל',
        answer2:'שם משפחה',
        answer3:'ביתו של מלך אנגליה',
        good:1,
        level: 1
    },
    {
        q:'טאבוק',
        answer1:'טאבק',
        answer2:'חומר כימי',
        answer3:'עיר בצפון מערב סעודיה ',
        good:3,
        level: 1
    },
    {
        q:'ביתא',
        answer1:'סוג של ביקתה ',
        answer2:'ארגון המעסיק בעלי צרכים',
        answer3:'שם ארמי לאות ב',
        good:3,
        level: 1
    },
    {
        q:'סגין',
        answer1:'ביטוי חסר משעמות',
        answer2:'תרופה לצמחים',
        answer3:'מעיל צבאי ',
        good:3,
        level: 2
    },
    {
        q:'שדמה',
        answer1:'חברה המייצרת מוצרי בריאות',
        answer2:'',
        answer3:'שדה-תבואה',
        good:3,
        level: 2
    },
    {
        q:'תגליף',
        answer1:'תבנית מגולפת',
        answer2:'דבר חילופי',
        answer3:'כינוי לגילוי חדש',
        good:1,
        level: 2
    },
    {
        q:'ראדום',
        answer1:'רדיו עתיק',
        answer2:'מכשיר אלקטרוני לקביעת מרחקים',
        answer3:'עיר במרכז פולין ',
        good:3,
        level: 2
    },
    {
        q:'גואם',
        answer1:'שם של נחל',
        answer2:'אי באוקיינוס השקט',
        answer3:'שם של הר געש רדום',
        good:2,
        level: 2
    },
    {
        q:'גלב',
        answer1:'סוג של כלב',
        answer2:'צמח בר',
        answer3:'ספר (אומן תספורת)',
        good:3,
        level: 3
    },
    {
        q:'בנגל',
        answer1:'חבל ארץ בהודו ',
        answer2:'תופעת טבע נדירה',
        answer3:'מכשיר צליה בשטח',
        good:1,
        level: 3
    },
    {
        q:'צקלון',
        answer1:'תרמיל',
        answer2:'מקל הליכה למטיילים',
        answer3:'עץ עם גזע צר ובעל ענפים רבים',
        good:1,
        level: 3
    },
    {
        q:'פלגרה?',
        answer1: 'אומנות לחימה',
        answer2: 'מחלת עור מעיים ועצבים',
        answer3: 'בעל חיים המתגורר באיי המזרח הרחוק',
        good: 2,
        level: 3
    },
    {
        q:'חכלילי',
        answer1:'כלי נשיפה',
        answer2:'אדמדם',
        answer3:'עיר נופש',
        good:2,
        level: 3
    }
]

const arr = [];
all();

// גוף המשחק
function all() {
alert("🤗ברוכים הבאים למשחק טריוויה🤗"); 
let levelChosen = chooseLevel();
StartQuestions(levelChosen);
}

// בחירת שלב למשחק
let levelChosen;

function chooseLevel() {
    let levelChosen = prompt('בחר/י שלב: 0/1/2/3');
    if (levelChosen >= 0 && levelChosen <= 3)
        return parseInt(levelChosen);
    else {
        alert("בחירה לא תקינה. נסה/י שוב.");
        return chooseLevel();
    }
}



// הפעלת השאלות
function StartQuestions(levelChosen) {
 let countQ = 0; // ספירת תשובות נכונות
 let countT = 0; // ספירת שאלות
    for (let i = 0; i < game.length; i++) {
        if (levelChosen === 0 || game[i].level === levelChosen) {
            countT++;
            let userAnswer = prompt(`${game[i].q}\n1: ${game[i].answer1}\n2: ${game[i].answer2}\n3: ${game[i].answer3}`);
            if (parseInt(userAnswer) === game[i].good) {
                countQ++;
                alert("תשובה נכונה!");
            } else {
                alert("תשובה שגויה.");
            }
        }
    }
    alert(`ענית ${countQ} תשובות נכונות, מתוך ${countT} שאלות`);
}

// הפעלת המשחק
// הפעלת לולאת המשחק
let wantsAgain;
do {
    all(); // הפעל מחדש את המשחק
    wantsAgain = confirm("רוצה לשחק שוב?");
} while (wantsAgain);