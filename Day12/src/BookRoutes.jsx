import { Routes, Route } from 'react-router-dom';
import { Book } from './pages/Book.jsx';
import { BookList } from './pages/BookList.jsx';
import { NewBook } from './pages/NewBook.jsx';
import { BorderLayout } from './BorderLayout.jsx';

export function BookRoutes() {
  return (
    <Routes>
      <Route element={<BorderLayout />}>
        <Route index element={<BookList />} />
        <Route path=":id" element={<Book />} />
        <Route path="new" element={<NewBook />} />
      </Route>
    </Routes>
  );
}
