const { Platform } = require("react-native");
const { default: colors } = require("./colors");

const defaultStyles = {
    colors,
    text: {
        color: colors.dark,
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir"
    }
}

export default defaultStyles;