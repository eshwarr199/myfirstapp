import logo from './logo.svg';
import './App.css'
import ButtonComponent from './components/button-component';
import ListComponent from './components/list';
import TableComponent from './components/table';
import Headdingcomponent,{Headcomponent2,Headcomponent3,Headcomponent4 as Head4} from './components/heddings';
import Imagecomponent  from './image';
import { Objectcomponent } from './image';
function words(){
  return(
    <div>
<ButtonComponent></ButtonComponent>
<h1>List components</h1>
<ListComponent></ListComponent>
<TableComponent></TableComponent>
<Headdingcomponent></Headdingcomponent>
<Headcomponent2/>
<Headcomponent3/>
<Head4/>
<Imagecomponent></Imagecomponent>
<Objectcomponent/>

</div>
)
}

  export default words


