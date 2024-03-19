function asideOpenActivate():void {
    document.querySelector('aside')?.classList.remove('aside-close')
    document.querySelector('aside')?.classList.add('aside-open')
    document.querySelector('#background')?.classList.add('black-bg')
}
export default asideOpenActivate