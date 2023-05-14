const Vibe = require("../index").default

async function test() {
    await Vibe.fetchStats().then((d) => {
        console.log(d)
    }).catch((e) => {
        console.log(e)
    })
}
test()