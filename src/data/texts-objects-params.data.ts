/**
 * This file contains predefined objects that hold the text of different sections of various components.
 * These objects are used to validate the expected text of the components.
 * The text values are retrieved from environment variables.
 * If the environment variables are not defined, the values are set to empty strings.
 * The objects are exported to be used in the tests.
 */
import * as login  from './login-texts.data';
import * as header from './header-texts.data';
import { configDotenv } from 'dotenv';
configDotenv()

const validCredentials = { 
    username: process.env.STANDARD_USER ?? '',
    password: process.env.PASSWORD ?? ''
}
const LoginFormStatusValues = {
    placeholderUsernameValue: login.loginTexts().USERNAME_PLACEHOLDER,
    placeholderPasswordValue: login.loginTexts().PASSWORD_PLACEHOLDER,
    loginButtonValue        : login.loginTexts().LOGIN_BUTTON
}
const validHeaderText = {
    appLogoText     : header.headerTexts().APP_LOGO,
    titleSectionText: header.headerTexts().SECTION_TITLE
}

const validateMenuOptionsTexts = {
    allItemsOptionText: '',
    aboutOptionText: '',
    logoutOptionText: '',
    resetAppStateOptionText: ''
}

export {
    validCredentials,
    LoginFormStatusValues,
    validHeaderText,
    validateMenuOptionsTexts
}
