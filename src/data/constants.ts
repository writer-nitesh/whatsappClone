import { generatePhone } from "../utils"

export interface Contact {
    image: string
    name: string
    number: number
    caption?: string
    lastMessage?: string
    isOffical?: boolean
}

export const contacts: Contact[] = [
    {
        name: "Elon Musk",
        caption: "Building SpaceX",
        image: "https://www.hindustantimes.com/ht-img/img/2024/04/12/550x309/TESLA-MUSK--0_1712895077103_1712910970484.JPG",
        number: generatePhone(),
        lastMessage: "you have to be ASAP",
        isOffical: true
    },
    {
        name: "Coolest Family",
        caption: "Prime Minister",
        image: "https://i.natgeofe.com/k/88de42b8-764c-40d2-89ee-e72d55dc95b8/emperor-penguin-chicks.jpg",
        number: generatePhone(),
        lastMessage: "आपका दिन शुभ हो, सुप्रभात"
    },
    {
        name: "Bill Gates",
        caption: "Building Microsoft",
        image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQIK3Ia9w8UrWjaDIwjCf4b1phOf17KmbURPtfgoBJGfWc-tQoKXCKFDOEM_B899BG5fpmOBsygR9b-XwY",
        number: generatePhone(),
        lastMessage: "😅",
        isOffical: true

    },
    {
        name: "IPhone Wala Dost",
        image: "https://pbs.twimg.com/media/DMKYMi8VwAAy1Bl.jpg",
        number: generatePhone(),
        lastMessage: "Bhai kal photo click krne k liye iphone le ana"
    },

    {
        name: "Allu Arjun",
        caption: "Actor",
        image: "https://wowhyderabad.com/wp-content/uploads/2023/12/Allu-Arjun2-2-scaled.jpg",
        number: generatePhone(),
        lastMessage: "lets go",
        isOffical: true
    },
    {
        name: "Narendra Modi",
        caption: "Prime Minister",
        image: "https://bsmedia.business-standard.com/_media/bs/img/article/2023-12/12/full/1702343014-0912.jpg?im=FitAndFill=(826,465)",
        number: generatePhone(),
        lastMessage: "Bhai meine tujhse baat hi nhi krni",
        isOffical: true
    },
    {
        name: "Bhai Online Payment kar de",
        image: "https://lh3.googleusercontent.com/OToo0jbXJU2JgzyRXJkLNvJMj0gzCINmiq5BFVe0kUNR5ML_OkP5rDcG7afL43Iz8uT521XWI-vpnOe3ZSy9evU1dJLLKHK58Qae5sFiBA=w512-rw",
        number: generatePhone(),
        lastMessage: "Bhai nhi hai mere pass paise"
    },
    {
        name: "Tushar Patel",
        image: "https://lh3.googleusercontent.com/98R1ep_o7FOJFflFA552A45LD_bCFfEQrhdhoVetR6fw4bb6kLVrLRsJ5rdxCz6RSdpAPnU2gTFQ9HXQM6SOPnrtoJmTgSB9V4Za3iA=w512-rw",
        number: generatePhone(),
        lastMessage: "kal milte hai"
    },

]