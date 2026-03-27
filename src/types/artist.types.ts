import type { ITrack } from "./track.type";

export interface IArtist {
    name: string;
    image: string;
    listenersCount: number;
    tracks: ITrack[];
};