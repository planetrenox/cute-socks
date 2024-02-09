//Yml0Lmx5L2luY2Vzc2FudC12aWJyYXRpb24=

const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

const listen = (el, handler) => el.addEventListener('click', async e => {
    e.preventDefault();
    await handler(e);
});

module.exports = {$, $$, listen};