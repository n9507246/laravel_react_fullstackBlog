import { useLocation } from 'react-router-dom'
import { useRef} from 'react'

//При переходе по ссылке в React сохраняется положение экрана при скролле, 
//потому что React Router использует HTML5 History API, который сохраняет 
//состояние истории браузера, включая положение прокрутки страницы. 
//Для того что бы изменить это поведение я методом тыка нашел такой способ(КОСТЫЛЬ)

//Данный хук вызвращает ссылку на элемент для которого нужно будет обновить скрол
export default function useUpdateScroll(props){

    useLocation() //к сожалению я не знаю почему, но без данного хука это работать не будет 
    
    const componentToUpdate = useRef() //создаем ссылку на DOM-элемент
    if(componentToUpdate.current !== undefined) { //если текущий DOM-элемент существует 
        componentToUpdate.current.scrollTo(0, 0) // обновляем для него скрол
    }

    window.scroll(0,0) //так же обновляем положение экрана 

    return componentToUpdate //возвращаем элемент

}