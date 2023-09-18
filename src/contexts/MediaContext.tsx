import { MEDIA_INIT_STATE, mediaReducer } from "@/reducers/media";
import {
    ReactNode,
    createContext,
    useContext,
    useReducer,
    useState,
} from "react";

interface MediaContext {
    isModalOpen: boolean;
    handleMediaModal: () => void;
}

const MediaContext = createContext({} as MediaContext);
export const MediaProvider = ({ children }: { children: ReactNode }) => {
    const [isModalOpen, setIsModaOpen] = useState(false);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);

    const handleMediaModal = () => {
        setIsModaOpen(!isModalOpen);
    };
    const [mediaState, dispatch] = useReducer(mediaReducer, MEDIA_INIT_STATE);

    const handleImageModal = () => {
        setIsImageModalOpen(!isImageModalOpen);
    };
    return (
        <MediaContext.Provider value={{ isModalOpen, handleMediaModal }}>
            {children}
        </MediaContext.Provider>
    );
};
export const useProductMedia = () => useContext(MediaContext);
