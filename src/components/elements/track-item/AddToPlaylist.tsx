import { CustomMenu } from "@/components/ui/custom-menu/CustomMenu";
import { playlistStore } from "@/store/playlist.store";
import type { ITrack } from "@/types/track.type";
import { Ellipsis } from "lucide-react";
import { useState } from "react";
import cn from "clsx";

interface Props {
    track: ITrack;
};

export function AddToPlaylist({ track }: Props) {
    const [isShow, setIsShow] = useState<boolean>(false);

    return (
        <div className="relative">
            <button onClick={() => setIsShow(prev => !prev)}>
                <Ellipsis className="opacity-30 duration-300 hover:opacity-100" />
            </button>

            {isShow && (
                <CustomMenu side="right">
                    <div className="p-1.5 space-y-1.5 w-full max-w-[800px]">
                        {playlistStore.playlists.length > 0 ? playlistStore.playlists.map(playlist => {
                            const isAdded = playlistStore.isTrackInPlaylist(playlist.name, track.name);

                            return (
                                <button
                                    className={cn(
                                        "w-full block text-left transition-opacity duration-300 hover:opacity-100 text-sm",
                                        isAdded ? "opacity-100 font-semibold" : "opacity-60"
                                    )}
                                    key={playlist.name}
                                    onClick={() => playlistStore.toggleTrackInPlaylist(playlist.name, track.name)}
                                >
                                    {playlist.name}
                                </button>
                            );
                        }) : <div className="w-full text-left transition-opacity duration-300 hover:opacity-100 text-sm opacity-60">No items found</div>}
                    </div>
                </CustomMenu>
            )}
        </div>
    );
};