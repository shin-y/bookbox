'use client';

import { gql, useQuery } from '@apollo/client';
import client from '@/lib/apolloClient';

const GET_BOOKS = gql`
  query {
    books {
      id
      title
      author
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_BOOKS, { client });

  if (loading) return <p>読み込み中...</p>;
  if (error) return <p>エラー: {error.message}</p>;

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-2">📚 書籍一覧</h1>
      <ul className="space-y-1">
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          data.books.map((book: any) => (
            <li key={book.id}>
              {book.title} - <span className="text-gray-600">{book.author}</span>
            </li>
          ))
        }
      </ul>
    </main>
  );
}