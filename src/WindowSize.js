/**
 * Utility function to query the viewport size
 */
const windowSizes = {
    small: 800,
    medium: 1000
}

export const windowSize = () => {
    if (window.innerWidth < windowSizes.small) {
        return "small";
    }
    else if (window.innerWidth < windowSizes.medium) {
        return "medium";
    } else {
        return "large";
    }
}