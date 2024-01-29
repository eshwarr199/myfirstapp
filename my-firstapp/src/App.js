import logo from './logo.svg';
import './App.css'
import ButtonComponent from './components/button-component';
import ListComponent from './components/list';
import TableComponent from './components/table';
import Headdingcomponent,{Headcomponent2,Headcomponent3,Headcomponent4 as Head4} from './components/heddings';
import Imagecomponent  from './image';
import {Objectcomponent} from './image';
import Mounting from './components/lifecycle/mounting/mounting';
import UsestateEx3 from './components/hooks/state/usestateEx3';
import Uncontroled from './components/forms/uncontroled';
import Controlled from './components/forms/controlled/controlled';
import Circle from './components/forms/circles';

function words(){
  const bluecolor="blue"
  return(
    <div>
     
{/* <ButtonComponent></ButtonComponent>
<h1>List components</h1>
<ListComponent></ListComponent>
<TableComponent></TableComponent>
<Headdingcomponent></Headdingcomponent>
<Headcomponent2/>
<Headcomponent3/>
<Head4/>
<Imagecomponent></Imagecomponent>
<Objectcomponent/>
<Mounting color={bluecolor}></Mounting> */}
{/* <UsestateEx3></UsestateEx3> */}
{/* <Uncontroled></Uncontroled> */}
<Controlled></Controlled>
{/* <Circle></Circle> */}

</div>
)
}

  export default words


