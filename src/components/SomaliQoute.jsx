import { useState } from "react";

function SomaliQoute() {

    const [index, setIndex] = useState(0)

    const nextBtn = () => {
        if (index < maahmaah.length-1 ) {
            setIndex(index + 1)
        }
    }

    const previousBtn = () => {
        if (index > 0) {
            setIndex(index - 1)
        }
    }

    const maahmaah = [
        "1. Aaddane eed ma waayo",
        "2. Iskaashato ma kufto",
        "3. Af jooga looma adeego",
        "4. Biyo sacabbadaada ayaa looga dhergaa",
        "5. Intaadan fallin ka fiirso",
        "6. Hubsiimo Hal baala siistaa",
        "7. Gacmo wadajir bey wax ku jararaan",
        "8. Nin geed geli jiray geed looma galo",
        "9. Hadal badan haan ma buuxsho",
        "10. Aqoonla`aani waa iftiinla'aan"
    ]

    return <div className="mt-20 text-center">
        <p className={`text-4xl font-bold ${index === maahmaah.length - 1 ? "block" : "hidden"} text-center pb-10 text-red-500`}>Dhamaad</p>
        <p className={`mb-20 text-3xl ${index === 2 ? "text-red-500" : "text-black"} font-bold`}>{maahmaah[index]}</p>
        <button onClick={previousBtn} className="bg-blue-500 px-9 py-4 rounded-lg text-white text-xl">Previous</button>
        <button onClick={nextBtn} className="bg-blue-500 px-12 py-4 rounded-lg text-white text-xl ml-10">Next</button>
    </div>
}
export default SomaliQoute;