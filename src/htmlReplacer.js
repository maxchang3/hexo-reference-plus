const {parseHTML} = require('linkedom');

module.exports = (data) => {
    const { document }  = parseHTML(data);
    document.querySelectorAll(".refplus-num").forEach((ref) => {
        let refid = ref.firstChild.href;
        let refnum = document.querySelector(refid)?.dataset?.num;
        if(!(refnum)) console.error(`[hexo-reference-plus] Alias error, unknown alias: ${refid}!`)
        ref.firstChild.innerHTML = `[${refnum}]`;
    });
    let outerHtml = document.toString();;
    return outerHtml
}