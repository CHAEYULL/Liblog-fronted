function asideCloseActivate():void{
    document.querySelector('aside')?.classList.remove('aside-open')
    document.querySelector('aside')?.classList.add('aside-close')
    document.querySelector('#background')?.classList.remove('black-bg')
}
export default asideCloseActivate