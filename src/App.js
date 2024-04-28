import Header from './component/header';
import DayList from './component/DayList';
import Day from './component/Day';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmptyPage from './component/EmptyPage';

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Header />
                <Routes>
                    <Route path="/" element={<DayList />} />        {/* element prop을 사용하여 컴포넌트 지정 */}
                    <Route path="/day/:day" element={<Day />} />    
                    <Route path="*" element={<EmptyPage />} />      {/* 정의되지 않은 모든 경로에 대해 EmptyPage 렌더링 */}
                </Routes>
                
            </div>
        </BrowserRouter>
    );
}
export default App;