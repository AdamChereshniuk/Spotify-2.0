import type { ITrack } from "../types/track.type";
import { ARTISTS } from "./artist.data";

import audio_90s_Bitch from "../assets/audio/90s_Bitch.mp3";
import audio_Emergency from "../assets/audio/Emergency.mp3";
import audio_Free_Yourself from "../assets/audio/Free_Yourself.mp3";
import audio_Insomnia from "../assets/audio/Insomnia.mp3";
import audio_Konje from "../assets/audio/Konje.mp3";
import audio_Oldskool_Sound from "../assets/audio/Oldskool_Sound.mp3";
import audio_Open_Sesame__Abracadabra___feat_Leila_K_ from "../assets/audio/Open_Sesame__Abracadabra___feat._Leila_K_.mp3";
import audio_Pjanoo from "../assets/audio/Pjanoo.mp3";
import audio_Sex_Drugs_Energie__Stan_Christ___Zeltak_Remix_ from "../assets/audio/Sex_Drugs_Energie__Stan_Christ___Zeltak_Remix_.mp3";
import audio_Sexy_Chick from "../assets/audio/Sexy_Chick.mp3";
import audio_SUBMARINE from "../assets/audio/SUBMARINE.mp3";
import audio_Take_Me_Higher from "../assets/audio/Take_Me_Higher.mp3";
import audio_The_Violator from "../assets/audio/The_Violator.mp3";
import audio_We_Are_The_People_southstar_Remix__1_ from "../assets/audio/We_Are_The_People_-_southstar_Remix__1_.mp3";
import audio_When_I_Push_Edit from "../assets/audio/When_I_Push_-_Edit.mp3";

import cover_90s_Bitch from "../assets/cover/90s_Bitch.jpg";
import cover_Emergency from "../assets/cover/Emergency.jpg";
import cover_Free_Yourself from "../assets/cover/Free_Yourself.jpg";
import cover_Insomnia from "../assets/cover/Insomnia.jpg";
import cover_Konje from "../assets/cover/Konje.jpg";
import cover_Oldskool_Sound from "../assets/cover/Oldskool_Sound.jpg";
import cover_Open_Sesame__Abracadabra___feat_Leila_K_ from "../assets/cover/Open_Sesame__Abracadabra___feat._Leila_K_.jpg";
import cover_Pjanoo from "../assets/cover/Pjanoo.jpg";
import cover_Sex_Drugs_Energie__Stan_Christ___Zeltak_Remix_ from "../assets/cover/Sex_Drugs_Energie__Stan_Christ___Zeltak_Remix_.jpg";
import cover_Sexy_Chick from "../assets/cover/Sexy_Chick.jpg";
import cover_SUBMARINE from "../assets/cover/SUBMARINE.jpg";
import cover_Take_Me_Higher from "../assets/cover/Take_Me_Higher.jpg";
import cover_The_Violator from "../assets/cover/The_Violator.jpg";
import cover_We_Are_The_People_southstar_Remix__1_ from "../assets/cover/We_Are_The_People_-_southstar_Remix__1_.jpg";
import cover_When_I_Push_Edit from "../assets/cover/When_I_Push_-_Edit.jpg";

export const TRACKS: ITrack[] = [
	{
		name: "90s Bitch",
		file: audio_90s_Bitch,
		cover: cover_90s_Bitch,
		artist: ARTISTS[0],
		duration: 196
	},
	{
		name: "Emergency",
		file: audio_Emergency,
		cover: cover_Emergency,
		artist: ARTISTS[1],
		duration: 227
	},
	{
		name: "Free Yourself",
		file: audio_Free_Yourself,
		cover: cover_Free_Yourself,
		artist: ARTISTS[2],
		duration: 339
	},
	{
		name: "Insomnia",
		file: audio_Insomnia,
		cover: cover_Insomnia,
		artist: ARTISTS[3],
		duration: 180
	},
	{
		name: "Konje",
		file: audio_Konje,
		cover: cover_Konje,
		artist: ARTISTS[4],
		duration: 181
	},
	{
		name: "Oldskool Sound",
		file: audio_Oldskool_Sound,
		cover: cover_Oldskool_Sound,
		artist: ARTISTS[5],
		duration: 216
	},
	{
		name: "Open Sesame (Abracadabra) [feat. Leila K]",
		file: audio_Open_Sesame__Abracadabra___feat_Leila_K_,
		cover: cover_Open_Sesame__Abracadabra___feat_Leila_K_,
		artist: ARTISTS[0],
		duration: 220
	},
	{
		name: "Pianoo",
		file: audio_Pjanoo,
		cover: cover_Pjanoo,
		artist: ARTISTS[6],
		duration: 180
	},
	{
		name: "Sex Drugs Energie (Stan Christ & Zeltak Remix)",
		file: audio_Sex_Drugs_Energie__Stan_Christ___Zeltak_Remix_,
		cover: cover_Sex_Drugs_Energie__Stan_Christ___Zeltak_Remix_,
		artist: ARTISTS[7],
		duration: 229
	},
	{
		name: "Sexy Chick",
		file: audio_Sexy_Chick,
		cover: cover_Sexy_Chick,
		artist: ARTISTS[8],
		duration: 168
	},
	{
		name: "SUBMARINE",
		file: audio_SUBMARINE,
		cover: cover_SUBMARINE,
		artist: ARTISTS[9],
		duration: 317
	},
	{
		name: "Take Me Higher",
		file: audio_Take_Me_Higher,
		cover: cover_Take_Me_Higher,
		artist: ARTISTS[10],
		duration: 300
	},
	{
		name: "The Violator",
		file: audio_The_Violator,
		cover: cover_The_Violator,
		artist: ARTISTS[11],
		duration: 241
	},
	{
		name: "We Are The People - southstar Remix (1)",
		file: audio_We_Are_The_People_southstar_Remix__1_,
		cover: cover_We_Are_The_People_southstar_Remix__1_,
		artist: ARTISTS[12],
		duration: 236
	},
	{
		name: "When I Push - Edit",
		file: audio_When_I_Push_Edit,
		cover: cover_When_I_Push_Edit,
		artist: ARTISTS[13],
		duration: 214
	},
];