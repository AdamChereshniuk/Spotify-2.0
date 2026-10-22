export class PagesConfig {
    static HOME = "/Spotify-2.0";
    static DISCOVER = "/Spotify-2.0"; // discover
    static RADIO = "/Spotify-2.0"; // radio

    static MADE_FOR_YOU = "/Spotify-2.0"; // made-for-you
    static RECENTLY_PLAYED = "/Spotify-2.0"; // recently-played
    static LIKED_SONGS = "/Spotify-2.0"; // liked-songs

    static PLAYLIST(id: string) {
        console.log(id);
        return `/Spotify-2.0`;
    };
    static ALBUMS(id?: string) {
        console.log(id);
        return `/Spotify-2.0`;
    };
    static ARTISTS(id?: string) {
        console.log(id);
        return `/Spotify-2.0`;
    };
    static PODCASTS(id?: string) {
        console.log(id);
        return `/Spotify-2.0`;
    };
};