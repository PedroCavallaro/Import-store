type MEDIA_STATES =
    | "IMAGE_MODAL_OPEN"
    | "IMAGE_MODAL_CLOSE"
    | "VIDEO_MODAL_OPEN"
    | "VIDEO_MODAL_CLOSE";

export const MEDIA_INIT_STATE = {
    videoOpen: false,
    imageOpen: false,
};

type mediaActions = {
    type: MEDIA_STATES;
};
export const mediaReducer = (
    state: typeof MEDIA_INIT_STATE,
    action: mediaActions
) => {
    switch (action.type) {
        case "IMAGE_MODAL_OPEN":
            return { ...state, imageOpen: true };
        case "IMAGE_MODAL_CLOSE":
            console.log("Oi");
            return { ...state, imageOpen: false };
        case "VIDEO_MODAL_CLOSE":
            return { ...state, videoOpen: false };
        case "VIDEO_MODAL_OPEN":
            return { ...state, videoOpen: true };
    }
};
