//import bar from './red.component';

(function () {
    'use strict';

    const root = document.querySelector('#app');

    const loadStyles = (callback) => {
        const head = document.getElementsByTagName('head')[0];
        const styles = document.createElement('link');

        styles.setAttribute('rel', 'stylesheet');
        styles.setAttribute('href', 'index.css');
        head.appendChild(styles);

        styles.addEventListener('load', callback);
    };

    const onStylesLoad = () => {
        const redParagraph = document.createElement('p');
        redParagraph.innerHTML = 'This text is red';
        redParagraph.setAttribute('class', 'red');
        root.appendChild(redParagraph);
    };

    const run = () => { loadStyles(onStylesLoad); };

    run();

}());
