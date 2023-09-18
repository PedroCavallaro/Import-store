import { ReactNode, createContext, useContext, useState } from "react";

interface MediaContext {
    isModalOpen: boolean;
    handleMediaModal: () => void;
}

const MediaContext = createContext({} as MediaContext);
export const MediaProvider = ({ children }: { children: ReactNode }) => {
    const [isModalOpen, setIsModaOpen] = useState(false);

    const handleMediaModal = () => {
        setIsModaOpen(!isModalOpen);
    };
    return (
        <MediaContext.Provider value={{ isModalOpen, handleMediaModal }}>
            {children}
        </MediaContext.Provider>
    );
};
export const useProductMedia = () => useContext(MediaContext);
