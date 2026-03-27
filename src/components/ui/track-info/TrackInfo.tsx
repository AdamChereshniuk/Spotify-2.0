import type { ITrack } from "@/types/track.type";
import { playerStore } from "@/store/player.store";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Pause, Play } from "lucide-react";
import cn from "clsx";

interface Props {
    title: string;
    subTitle: string;
    image: string;
    track?: ITrack;
};

export function TrackInfo({ title, subTitle, image, track }: Props) {
    const isActive = playerStore.currentTrack?.name === track?.name;

    return (
        <div className="flex items-center gap-3">
            {track ? (
                <button className="block relative group" onClick={() => {
                    if(!isActive) playerStore.setTrack(track);
                    playerStore.togglePlayPause();
                }}>
                    {isActive && (
                        <CircularProgressbar
                            className="absolute"
                            value={playerStore.progress}
                            strokeWidth={5}
                            styles={{
                                trail: { stroke: "#2E3235" },
                                path: {
                                    stroke: "var(--color-primary)",
                                    transition: "stroke-dashoffset 0.5s ease 0s",
                                },
                            }}
                            counterClockwise
                        />
                    )}
                    
                    <div className={cn("absolute inset-0 flex items-center justify-center group-hover:opacity-100", isActive ? "opacity-100" : "opacity-0 duration-300")}>
                        {!isActive ? <Play /> : (playerStore.isPlaying ? <Pause /> : <Play />)}
                    </div>

                    <img className="w-12 h-12 rounded-full m-1.5" src={image} alt={title} />
                </button>
            ) : <img className="w-12 h-12 rounded-full" src={image} alt={title} />}

            <div>
                <div className="text-white text-lg font-medium">
                    {track ? (
                        <button
                            className="hover:underline"
                            onClick={() => {
                                if(!isActive) {
                                    playerStore.setTrack(track);
                                    playerStore.isPlaying = false;
                                } else {
                                    playerStore.togglePlayPause();
                                };
                            }}
                        >{title}</button>
                    ) : title}
                </div>
                <div>{subTitle}</div>
            </div>
        </div>
    );
};