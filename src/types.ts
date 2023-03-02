export interface Package {
    /**
     * @param {string} var - global variable
     * if undefined, the package will be imported as a css file.
     */
    var?: string
    /**
     * @param {string} filePath - file path
     * if undefined, the package will be imported as a default file, see https://www.jsdelivr.com/documentation.
     */
    filePath?: string
}

export interface Options {
    /**
     * @param {string} auto - auto import packages from package.json dependencies
     */
    auto?: boolean
    /**
     * @param {string} key - package name
     * @param {Package} value - package options
     */
    packages?: Record<string, Package>
}
