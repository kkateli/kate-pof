import React from "react";
import label_a from "../../assets/images/label_a.png";
import label_b from "../../assets/images/label_b.png";
import label_e from "../../assets/images/label_e.png";
import label_ex from "../../assets/images/label_ex.png";
import label_i from "../../assets/images/label_i.png";
import leaf from "../../assets/images/leaf.png";
import "./LanguageTable.css";
const languageTable = () => {
  return (
    <div className="languageTable">
      <table>
        <tr>
          <th xs lg="3" />
          <th>
            <div className="languages">JavaScript</div>
          </th>
          <th>
          <div className="languages">React</div>
          </th>
          <th>
          <div className="languages">Redux</div>
          </th>
          <th>
          <div className="languages">CSS</div>
          </th>
          <th>
          <div className="languages">HTML</div>
          </th>
          <th>
          <div className="languages">Java</div>
          </th>
          <th>
          <div className="languages">Python</div>
          </th>
          <th>
          <div className="languages">Jest</div>
          </th>
          <th>
          <div className="languages">Enzyme</div>
          </th>
        </tr>
        <tr>
          <td>
            <img className="languageLabel" src={label_ex} alt="label_ex" />
          </td>
          <td xs lg="3" />
          <td xs lg="3" />
          <td xs lg="3" />
          <td>
            <img className="leafDetail" id="cssLeaf" src={leaf} alt="leaf" />
          </td>
          <td>
            <img className="leafDetail" src={leaf} alt="leaf" />
          </td>
          <td xs lg="3" />
          <td xs lg="3" />
          <td xs lg="3" />
          <td xs lg="3" />
        </tr>
        <tr>
          <td>
            <img className="languageLabel" src={label_a} alt="label_a" />
          </td>
          <td>
            <img className="leafDetail" src={leaf} alt="leaf" />
          </td>
          <td>
            <img className="leafDetail" id="reactleaf" src={leaf} alt="leaf" />
          </td>
          <td>
            <img className="leafDetail" src={leaf} alt="leaf" />
          </td>
          <td>
            <img className="leafDetail" id="cssLeaf" src={leaf} alt="leaf" />
          </td>
          <td>
            <img className="leafDetail" id="cssLeaf" src={leaf} alt="leaf" />
          </td>
          <td xs lg="3" />
          <td xs lg="3" />
          <td xs lg="3" />
          <td xs lg="3" />
        </tr>
        <tr>
          <td>
            <img className="languageLabel" src={label_i} alt="label_i" />
          </td>
          <td>
            <img className="leafDetail" id="cssLeaf" src={leaf} alt="leaf" />
          </td>
          <td>
            <img className="leafDetail" id="cssLeaf" src={leaf} alt="leaf" />
          </td>
          <td>
            <img className="leafDetail" id="cssLeaf" src={leaf} alt="leaf" />
          </td>
          <td>
            <img className="leafDetail" id="cssLeaf" src={leaf} alt="leaf" />
          </td>
          <td>
            <img className="leafDetail" id="cssLeaf" src={leaf} alt="leaf" />
          </td>
          <td>
            <img className="leafDetail" id="javaLeaf" src={leaf} alt="leaf" />
          </td>
          <td>
            <img className="leafDetail" src={leaf} alt="leaf" />
          </td>
          <td xs lg="3" />
          <td xs lg="3" />
        </tr>
        <tr>
          <td>
            <img className="languageLabel" src={label_e} alt="label_e" />
          </td>
          <td>
            <img className="leafDetail" id="jestLeaf" src={leaf} alt="leaf" />
          </td>
          <td>
            <img className="leafDetail" id="jestLeaf" src={leaf} alt="leaf" />
          </td>
          <td>
            <img className="leafDetail" id="jestLeaf" src={leaf} alt="leaf" />
          </td>
          <td>
            <img className="leafDetail" id="jestLeaf" src={leaf} alt="leaf" />
          </td>
          <td>
            <img className="leafDetail" id="jestLeaf" src={leaf} alt="leaf" />
          </td>
          <td>
            <img className="leafDetail" id="jestLeaf" src={leaf} alt="leaf" />
          </td>
          <td>
            <img className="leafDetail" id="jestLeaf" src={leaf} alt="leaf" />
          </td>
          <td>
            <img className="leafDetail" id="jestLeaf" src={leaf} alt="leaf" />
          </td>
          <td>
            <img className="leafDetail" src={leaf} alt="leaf" />
          </td>
        </tr>
        <tr>
          <td>
            <img className="languageLabel" src={label_b} alt="label_b" />
          </td>
          <td>
            <img className="leafDetail" id="jestLeaf" src={leaf} alt="leaf" />
          </td>
          <td>
            <img className="leafDetail" id="jestLeaf" src={leaf} alt="leaf" />
          </td>
          <td>
            <img className="leafDetail" id="jestLeaf" src={leaf} alt="leaf" />
          </td>
          <td>
            <img className="leafDetail" id="jestLeaf" src={leaf} alt="leaf" />
          </td>
          <td>
            <img className="leafDetail" id="jestLeaf" src={leaf} alt="leaf" />
          </td>
          <td>
            <img className="leafDetail" id="jestLeaf" src={leaf} alt="leaf" />
          </td>
          <td>
            <img className="leafDetail" id="jestLeaf" src={leaf} alt="leaf" />
          </td>
          <td>
            <img className="leafDetail" id="jestLeaf" src={leaf} alt="leaf" />
          </td>
          <td>
            <img className="leafDetail" id="jestLeaf" src={leaf} alt="leaf" />
          </td>
        </tr>
      </table>
    </div>
  );
};
export default languageTable;
