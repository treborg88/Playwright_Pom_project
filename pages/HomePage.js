const {BasePage} = require('./BasePage')

class HomePage extends BasePage{
    constructor(page){
        super(page)

    this.getStartedButton = page.getByRole('link', {name:'Get started'});
    this.searchBar = page.locator('.DocSearch-Button');
    this.searchBarField = page.locator('#docsearch-input');
    this.clearQuery = page.getByRole('button', {name:'Clear the query'});

    }


    async openBrowser() {await this.goto('./')}
    async clickGetStarted() {await this.click(this.getStartedButton)}
    async clickSearchBar() {await this.click(this.searchBar)}
    async typeOnSearchBar(text) {await this.fill(this.searchBarField, text)}
    async clickClearQuery() {await this.click(this.clearQuery)}

}

module.exports = {HomePage};