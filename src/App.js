import React from 'react';
import './App.css';
import { FaRegTrashCan } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import { TbArrowsUpDown } from "react-icons/tb";
import { BsToggleOn } from "react-icons/bs";
import { MdOutlineAddBox } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import { TbBaselineDensitySmall } from "react-icons/tb";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

function App() {
  return (
  <>
  <div>
    <table className='first'>
    <h1>Maintenance</h1>
    <div className='top-btn'>
      <button className='btn1'>Equipment Maintenance
        <hr className='line'/>
      </button>
      <button className='btn2'>Crusher Maintenance
        <hr/>
      </button>
    </div>
    <div className='equip1'>
    <div className='equip'>
        <button className='eq-btn'>Maintenance/ Breakdown</button>
        <button className='eq-btn1'>Pre Start Checklist</button>
        <button className='eq-btn1'>Conditional Parameters</button>
    </div>
    </div>
    <div className='table'>
    <p className='para1'> <BsToggleOn className='toggle'/>
    
     Active Records   
     
     <MdOutlineAddBox className='add'/>

     <button  className='filter'>
     <FaFilter />
     </button>
     <button   className='density'>
     <TbBaselineDensitySmall />
     </button>
     </p>
    <table className='style-table'>
      <tr className='table-row'>
        <th >Equipment<br/>Type<TbArrowsUpDown /></th>
        <th >Equipment ID<TbArrowsUpDown /></th>
        <th>Maintenance Type<TbArrowsUpDown /></th>
        <th>Reason</th>
        <th>Initiated By<TbArrowsUpDown /></th>
        <th>Planned From<TbArrowsUpDown /></th>
        <th>Planned To<TbArrowsUpDown /></th>
        <th>Status<TbArrowsUpDown /></th>
        <th>Action From<TbArrowsUpDown /></th>
        <th>Action To<TbArrowsUpDown /></th>
        <th>Action</th>
      </tr>
  
      <tr>
        <td>Excavator</td>
        <td>Ex-1</td>
        <td>Planned Maintenance</td>
        <td>test</td>
        <td>Master Admin</td>
        <td>23/07/2024 16:13</td>
        <td>31/07/2024 16:13</td>
        <td><button className='ubtn'>Under Maintenance</button></td>
        <td>23/07/2024 16:13</td>
        <td></td>
        <td>
          <button  className='pencil'>
        <FaPencilAlt/>
        </button>
        <button className='trash'>
          <FaRegTrashCan  />
        </button>
        </td>
      </tr>
     
    
  </table>

  <p className='para'> showing 1 to 1 of entries</p> 
    <div className='button'>
    <button className='butto'><FaAngleDoubleLeft /></button>
    <button className='butto'><FaAngleLeft/></button>
    <button className='bt1n'>1</button>
    <button className='butto'><FaAngleRight/></button>
    <button className='butto'><FaAngleDoubleRight/></button>
    <button className='buttoo'>10<FaAngleDown/></button>
    </div>
    </div>
  </table>
  </div>
  </>
  );
}

export default App;
