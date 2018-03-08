export class Song {
    constructor(
        public name: string = "",
        public artist: string = "",
        public partyid: number = null,
        public upcount: number = 0
    ) {}
}
export const SONGS: Song[] =[
    { name: "Hey", artist: "him", partyid: 1, upcount:0 },
    { name: "LIT", artist: "her", partyid: 1, upcount:0 },
    { name: "Fire", artist: "they", partyid: 1, upcount:0 }
]