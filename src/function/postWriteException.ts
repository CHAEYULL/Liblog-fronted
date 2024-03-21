function postWriteException(e:any):void{
    let title:HTMLInputElement | null = document.querySelector('#title');
    if ( title instanceof HTMLInputElement ){
        let titleValue:String = title.value;
    }

}
export default postWriteException