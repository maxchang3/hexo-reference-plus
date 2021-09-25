const { JSDOM } = require('jsdom');

module.exports = (data) => {
    const dom = new JSDOM(data, { runScripts: "dangerously" })
    const { document, location } = dom.window;
    document.querySelectorAll(".refplus-num").forEach((ref) => {
        let refid = ref.firstChild.href.replace(location.href, "");
        let refnum = document.querySelector(refid).dataset.num;
        ref.firstChild.innerHTML = `[${refnum}]`;
    });
    let outerHtml = document.body.outerHTML;
    outerHtml = outerHtml.slice(6, outerHtml.indexOf('</body>'));
    return outerHtml
}