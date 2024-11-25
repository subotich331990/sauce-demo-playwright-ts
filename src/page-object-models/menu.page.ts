import { Page } from "@playwright/test"

export class MenuPage {

    readonly page               : Page
    readonly menuContainer      : string
    readonly allItemsOption     : string
    readonly aboutOption        : string
    readonly logoutOption       : string
    readonly resetAppStateOption: string
    constructor(page: Page) {
        this.page           = page;
        this.menuContainer  = '.bm-menu';
        this.allItemsOption = '#inventory_sidebar_link';
        this.aboutOption    = '#about_sidebar_link';
        this.logoutOption   = '#logout_sidebar_link';
    }


}