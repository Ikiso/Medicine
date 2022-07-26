import "./style/App.css";
import "./style/table.css";
import "./style/button.css";
import "./style/download.css";
import AppRoutes from "./routes/AppRoutes";

//TODO: для БД:
//              1. + ссылку на другие модули в Navbar
//              2. + связи между коллекциями
//              3. + постраничный вывод информации
//              4. + статический заголовок таблицы
//              5. - изменить парсер
//      для КС:
//              1. - в Navbar страницы с чтением, созданием, изменением, удалением
//              2. - создать авторизацию с шифрованием и JWT Token
//              3. - разобрать read/write lock
//      Доп:
//              1. - создание диаграммы на основе выведенных данных
//              2. - Context, при переходе страницы не менялись данные
//              3. - localStorage, чтобы при перезагрузке страницы не сбивались данные
//              4. - добавить hover для кол-во в форме поиска
//              5. - заменить select и option на что-то более кастомизированное
//              6. - динамические списки в форме поиска
//              7. -


function App() {
  return (
    <div className="App">
      <AppRoutes/>
    </div>
  );
}

export default App;
