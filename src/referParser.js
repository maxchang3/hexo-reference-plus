module.exports = (content) => {
    let reference = content.replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm,"").split('\n');
    reference = reference.map((ref, index) => {
        let alias_start = ref.indexOf("[");
        let alias_end = ref.indexOf("]", 1);
        if (alias_start == -1 && alias_end == -1) console.error("[hexo-reference-plus]Wrong grammar! Please use [your-alias] as the start!");
        let alias = ref.slice(alias_start + 1, alias_end);
        let content = ref.slice(alias_end + 1);
        return `<li id='ref-${alias}' data-num='${index + 1}'>[${index + 1}] ${content}</li>`
    })
    return reference;
}