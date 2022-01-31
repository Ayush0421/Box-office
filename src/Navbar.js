import {React,useState} from 'react';
import { NavLink } from 'react-router-dom';
import {apiGet} from './config';
import ShowGrid from './show/ShowGrid';
import ActorGrid from './actor/ActorGrid'

const LINKS=[
    { to:'/',text:'Home'},
    { to:'/starred',text: 'Starred'},
 ];
const Navbar = () => {
   const [input,setInput] = useState('');
   const [results,setResults]=useState(null);
   const [searchOption,setSearchOption]=useState('shows');
   const isShowsSearch= searchOption==='shows';
   const changeInput=ev=>{
    setInput(ev.target.value);
   };
const onSearch= ()=>{
    apiGet(`/search/${searchOption}?q=${input}`).then(result=>{
        setResults(result);
    });
};
const onkeydown=ev=>{
    if(ev.keyCode===13){
        onSearch();
    }
};
const renderResults=()=>{
    if(results&&results.length===0){
        return <div>No Results Found</div>
    }
    if(results&&results.length>0){
        return results[0].show?<ShowGrid data={results}/>:<ActorGrid data={results}/>;
    }
    return null;
};
const onRadioCHange=(ev)=>{
    setSearchOption(ev.target.value);
};
return (
        <div>
           <ul>
               {LINKS.map(item=>(
                   <li key={item.to}><NavLink to={item.to}>{item.text}</NavLink></li>
               ))}</ul> 
            <input type="text" value={input} onChange={changeInput}/>
            <div class="form-check">
                <label htmlFor="shows-search" class="form-check-label" for="flexCheckDefault">Shows</label>
                <input id="shows-search" class="form-check-input" type="checkbox" value="shows" onChange={onRadioCHange} />
                <label htmlFor="actors-search" class="form-check-label" for="flexCheckDefault" checked={isShowsSearch}>Actors</label>
                <input id="actors-search" class="form-check-input" type="checkbox" value="people" checked={!isShowsSearch} onChange={onRadioCHange}/>
            </div>
            <button type="button" placeholder="Search for something" class="btn btn-primary" onClick={onSearch} onKeyPress={onkeydown}>Primary</button>
            {renderResults()}

        </div>
    )
}

export default Navbar;
