
const $ = (selector) =>
{
    const el = document.querySelector(selector);
    el.on = (event, handler) => el.addEventListener(event, handler);
    el.hide = () => el.style.display = 'none';
    el.show = () => el.style.display = '';
    el.toggle = () => el.style.display = el.style.display === 'none' ? '' : 'none';
    el.addClass = (className) => el.classList.add(className);
    el.removeClass = (className) => el.classList.remove(className);
    el.hasClass = (className) => el.classList.contains(className);
    el.attr = (name, value) => value === undefined ? el.getAttribute(name) : el.setAttribute(name, value);
    el.css = (styleName, value) => value === undefined ? getComputedStyle(el).getPropertyValue(styleName) : el.style[styleName] = value;
    el.remove = () => el.parentNode.removeChild(el);
    el.scrollTo = (options) => el.scrollIntoView(options);
    el.id = () => el.getAttribute('id');
    return el;
};

const $$ = (selector) =>
{
    const elements = document.querySelectorAll(selector);
    elements.hide = () => elements.forEach((el) => el.style.display = 'none');
    elements.show = () => elements.forEach((el) => el.style.display = '');
    return elements;
};
const _ = msg => console.log(msg); // _('hello')
const on = {
    click: el => ({ // on.click(el).then(() => console.log('Button clicked!'));
        then: func => el.addEventListener('click', e =>
        {
            e.preventDefault();
            func();
        }),
    }),
};

module.exports = {$, $$, on, _};