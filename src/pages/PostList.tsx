import { useEffect, useState } from 'react';
import Header from '../component/Header/Header';
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
        <Header></Header>
            <div>
                {
                    bookList.map((a,i) => {
                        return(
       
                       <div key={i}>
                            <div><h3>{bookList[i].bookTitle}</h3></div>
                            <div>{bookList[i].bookContent}</div>
                       </div>
              
                    )
                    })
                }
                {/* <span>{bookList[0].bookTitle}</span> */}
            </div>
        </>
    );
}

export default PostList;
