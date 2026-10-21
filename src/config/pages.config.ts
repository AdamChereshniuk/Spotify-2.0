export class PagesConfig {
    static HOME = "/";
    static DISCOVER = "/"; // discover
    static RADIO = "/"; // radio

    static MADE_FOR_YOU = "/"; // made-for-you
    static RECENTLY_PLAYED = "/"; // recently-played
    static LIKED_SONGS = "/"; // liked-songs

    static PLAYLIST(id: string) {
        console.log(id);
        return `/`;
    };
    static ALBUMS(id?: string) {
        console.log(id);
        return `/`;
    };
    static ARTISTS(id?: string) {
        console.log(id);
        return `/`;
    };
    static PODCASTS(id?: string) {
        console.log(id);
        return `/`;
    };
};