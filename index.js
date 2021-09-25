const { JSDOM } = require('jsdom');

hexo.extend.tag.register('references', function (args, content) {
    let reference = content.split('\n');
    reference = reference.map((ref, index) => {
        let alias_start = ref.indexOf("[");
        let alias_end = ref.indexOf("]", 1);
        if (alias_start == -1 && alias_end == -1) console.error("[hexo-reference-plus]Wrong grammar! Please use [your-alias] as the start!");
        let alias = ref.slice(alias_start + 1, alias_end);
        let content = ref.slice(alias_end + 1);
        return `<li id='ref-${alias}' data-num='${index+1}'>[${index + 1}] ${content}</li>`
    })
    return `<ul id='refplus'>${reference.join('<br>')}</ul>`;
}, { ends: true });

hexo.extend.tag.register('ref', function (args) {
    args = args.map(arg => `<sup class='refplus-num'><a href="#ref-${arg}">[${arg}]</a></sup>`)
    return args.join('');
}
);

hexo.extend.filter.register('after_post_render', (data) => {
    if (!(data.refplus)) return data;
    const dom = new JSDOM(data.content,{ runScripts: "dangerously" })
    const { document, location } = dom.window
    document.querySelectorAll(".refplus-num").forEach(
        (ref) => {
            let refid = ref.firstChild.href.replace(location.href, "");
            let refnum = document.querySelector(refid).dataset.num;
            ref.firstChild.innerHTML = `[${refnum}]`
        }
    )
    let outerHtml = document.body.outerHTML
    outerHtml =outerHtml.slice(6,outerHtml.indexOf('</body>'))
    data.content = outerHtml
    return data
});