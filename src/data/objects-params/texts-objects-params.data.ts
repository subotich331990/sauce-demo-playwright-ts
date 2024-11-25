/**
 * This file contains predefined objects that hold the text of different sections of various components.
 * These objects are used to validate the expected text of the components.
 * The text values are retrieved from environment variables.
 * If the environment variables are not defined, the values are set to empty strings.
 * The objects are exported to be used in the tests.
 */
import * as login    from '../texts-data/login-texts.data';
import * as header   from '../texts-data/header-texts.data';
import * as cart     from '../texts-data/cart-page-texts.data';
import * as checkout from '../texts-data/checkout-page-texts.data';
import * as button   from '../texts-data/buttons-texts.data';
import { configDotenv } from 'dotenv';
import { faker }        from '@faker-js/faker'
configDotenv()

export const validCredentials = { 
    username: process.env.STANDARD_USER ?? '',
    password: process.env.PASSWORD ?? ''
}

export const LoginFormStatusValues = {
    placeholderUsernameValue: login.loginTexts().USERNAME_PLACEHOLDER,
    placeholderPasswordValue: login.loginTexts().PASSWORD_PLACEHOLDER,
    loginButtonValue        : login.loginTexts().LOGIN_BUTTON
}

export const validHeaderMainText = {
    appLogoText     : header.headerTexts().APP_LOGO,
    titleSectionText: header.headerTexts().SECTION_TITLE
}

export const validCartHeaderText = {
    appLogoText     : header.headerTexts().APP_LOGO,
    titleSectionText: cart.cartPageTexts().CART_TITLE,
}

export const validCartButtonTexts = {
    primaryButton  : button.buttonsTexts().CHECKOUT_BUTTON,
    secondaryButton: button.buttonsTexts().CONTINUE_SHOPPING_BUTTON
}

export const ValidCartLabelTexts = {
    cartQuantityLabelText   : cart.cartPageTexts().CART_QUANTITY_LABEL,
    cartDescriptionLabelText: cart.cartPageTexts().CART_DESCRIPTION_LABEL
}

export const validCheckoutMainHeaderText = {
    appLogoText      : header.headerTexts().APP_LOGO,
    titleSectionText: checkout.checkoutPageInformationTexts().CHECKOUT_TITLE
}

export const validaCheckoutPlaceHolderTexts = {
    firstNamePlaceholderText: checkout.checkoutPageInformationTexts().FIRSTNAME_PLACEHOLDER,
    lastNamePlaceholderText : checkout.checkoutPageInformationTexts().LASTNAME_PLACEHOLDER,
    postalCodePlaceholderText  : checkout.checkoutPageInformationTexts().ZIPCODE_PLACEHOLDER
}

export const validateMenuOptionsTexts = {
    allItemsOptionText: '',
    aboutOptionText: '',
    logoutOptionText: '',
    resetAppStateOptionText: ''
}

export const validCheckoutDataForm = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    postalCode: faker.location.zipCode(),
}

export const validCheckoutButtonTexts = {
    primaryButton: button.buttonsTexts().CONTINUE_BUTTON,
    secondaryButton: button.buttonsTexts().CANCEL_BUTTON
}

export const validCheckourHeaderOverviewTexts = {
    appLogoText     : header.headerTexts().APP_LOGO,
    titleSectionText: checkout.checkoutPageOverviewTexts().CHECKOUT_TITLE    
}

export const validCheckoutOverviewTexts = {
    paymentInformationLabel: checkout.checkoutPageOverviewTexts().PAYMENT_INFO_LABEL,
    shippingInformationLabel: checkout.checkoutPageOverviewTexts().SHIPPING_INFO_LABEL,
    priceTotalLabel: checkout.checkoutPageOverviewTexts().PRICE_LABEL,
    itemTotalLabel: checkout.checkoutPageOverviewTexts().ITEM_TOTAL_LABEL,
    taxLabel: checkout.checkoutPageOverviewTexts().TAX_LABEL,
    totalLabel: checkout.checkoutPageOverviewTexts().TOTAL_LABEL
}

export const validCheckoutOverviewButtonTexts = {
    primaryButton: button.buttonsTexts().FINISH_BUTTON,
    secondaryButton: button.buttonsTexts().CANCEL_BUTTON
}

export const validCheckoutCompletedHeaderTexts = {
    appLogoText     : header.headerTexts().APP_LOGO,
    titleSectionText: checkout.checkoutCompletePageTexts().CHECKOUT_TITLE,
}

export const ValidCheckoutCompletedMessageTexts = {
    completedHeader: checkout.checkoutCompletePageTexts().THANKS_MESSAGE_TITLE,
    completedSubtitle: checkout.checkoutCompletePageTexts().THANKS_MESSAGE_SUBTITLE,
    backHomeButton: button.buttonsTexts().BACK_HOME_BUTTON
}

