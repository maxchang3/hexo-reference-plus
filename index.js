const htmlReplacer = require('./src/htmlReplacer');
const referParser = require('./src/referParser');

hexo.extend.tag.register('references', function (args, content) {
    let reference = referParser(content)

    return `<ul id='refplus'>${reference.join('')}</ul>`;
}, { ends: true });

hexo.extend.tag.register('ref', function (args) {
    args = args.map(arg => `<sup class='refplus-num'><a href="#ref-${arg}">[${arg}]</a></sup>`)
    return args.join('');
});

hexo.extend.filter.register('after_post_render', (data) => {
    if (!(data.refplus)) return data;
    data.content = htmlReplacer(data.content);
    data.content += `
    <style>
    #refplus, #refplus li{ 
        padding:0;
        margin:0;
        list-style:none;
    }；
    </style>
    <script src="https://unpkg.com/@popperjs/core@2"></script>
    <script src="https://unpkg.com/tippy.js@6"></script>
    <script>
    document.querySelectorAll(".refplus-num").forEach((ref) => {
        let refid = ref.firstChild.href.replace(location.origin+location.pathname,'');
        let refel = document.querySelector(refid);
        let refnum = refel.dataset.num;
        let ref_content = refel.innerText.replace(\`[\${refnum}]\`,'');
        tippy(ref, {
            content: ref_content,
        });
    });
    </script>
    `
    return data
});