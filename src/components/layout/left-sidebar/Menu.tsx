import { playlistStore } from "@/store/playlist.store";
import type { IMenuItem } from "@/types/menu.types";
import { Trash } from "lucide-react";
import type { ReactNode } from "react";

interface Props {
    items: IMenuItem[];
    title?: string;
    children?: ReactNode;
};

export function Menu({ items, title, children }: Props) {
    return (
        <div className={title === "Playlists" ? "playlists-menu" : ""}>
            {title && <div className="opacity-60 text-xxs uppercase font-medium mb-5">{title}</div>}
            {items.length === 0 && <div>No items found</div>}

            <ul>
                {items.map((item, index) => (
                    <li className="mb-5" key={index}>
                        <a className="flex gap-2 items-center group" href={item.link ? item.link : "#"}>
                            {item.icon && <item.icon className="group-hover:text-primary duration-300" />}
                            <span className="group-hover:text-primary duration-300 font-medium">{item.name}</span>
                        </a>

                        {title === "Playlists" && (
                            <button onClick={() => playlistStore.removePlaylist(item.name)}>
                                <Trash />
                            </button>
                        )}
                    </li>
                ))}
            </ul>

            {children}
        </div>
    );
};