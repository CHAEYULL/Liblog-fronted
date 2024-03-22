import { useEffect, useState } from 'react';
import Header from '../../component/Header/Header';
import './PostList.scss'
type Book = {
    bookId: number,
    bookTitle: string,
    bookContent: string
}

function PostList(): JSX.Element {
    const [bookList, setBookList] = useState<Book[]>([]);
    console.log(bookList);

    useEffect(() => {
        fetch("/postLists", {
            method: 'GET'
        })
        .then((r) => {
            if (!r.ok) {
                throw new Error(`에러남`);
            } else {
                return r.json();
            }
        })
        .then((data: Book[]) => {
            setBookList(data);
        })
        .catch((e) => {
            console.log(`에러남 ${e}`);
        });
    }, []);

    return (
        <>
            <Header/>
            <br/>
            <br/>
            <br/>
            <div>
                {bookList.map((book, i) => (
                    <div key={i}>
                        <img src={"https://placehold.co/400X500"} width={'200px'} alt="" />
                        <div><h3>{book.bookTitle}</h3></div>
                    </div>
                ))}
            </div>
                
            
        </>
    );
}

export default PostList;
