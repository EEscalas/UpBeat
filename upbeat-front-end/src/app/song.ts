export class Song {
    constructor(
        public name: string = "",
        public artist: string = "",
        public partyid: number = null,
        public upcount: number = 0
    ) {}
}
export const SONGS: Song[] =[
    { name: "Hey", artist: "him", partyid: 1, upcount: 0},
    { name: "LIT", artist: "her", partyid: 1, upcount:5 },
    { name: "Fire", artist: "they", partyid: 1, upcount:2 },
     { name: "fef", artist: "him", partyid: 2, upcount: 0},
    { name: "sdfsef", artist: "her", partyid: 3, upcount:5 },
    { name: "Firsdfse", artist: "they", partyid: 4, upcount:2 }
]