//imports
const { getWeth } = require("../scripts/getWETH")
async function main() {
    await getWeth()
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
