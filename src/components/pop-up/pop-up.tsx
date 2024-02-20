import * as s from './pop-up.styled'
import 'react-toastify/dist/ReactToastify.css';

export const PopUp: React.FC = () => {
    return (
        <s.StyledPopUp 
            theme={'dark'}
            position={'top-right'}
            draggable={false}
        />
    )
}
