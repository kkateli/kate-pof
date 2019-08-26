import React from "react";
import label_a from "../../assets/images/label_a.png";
import label_b from "../../assets/images/label_b.png";
import label_e from "../../assets/images/label_e.png";
import label_ex from "../../assets/images/label_ex.png";
import label_i from "../../assets/images/label_i.png";
import css from "../../assets/images/css.png";
import html from "../../assets/images/html.png";
import java from "../../assets/images/java.png";
import python from "../../assets/images/python.png";
import javascript from "../../assets/images/Javascript.png";
import jest from "../../assets/images/jest.png";
import react from "../../assets/images/react.png";
import redux from "../../assets/images/redux.png";
import enzyme from "../../assets/images/enzyme.png";
import leaf from "../../assets/images/leaf.png";
import "./LanguageTable.css";
const languageTable = () => {
  return (
    <div className="languageTable">
      <table>
        <tr>
          <th xs lg="3" />
          <th>
            <img src={javascript} alt="javascript" className="languages" />
          </th>
          <th>
            <img src={react} alt="react" className="languages" />
          </th>
          <th>
            <img src={redux} alt="redux" className="languages" />
          </th>
          <th>
            <img src={css} alt="css" className="languages" />
          </th>
          <th>
            <img src={html} alt="html" className="languages" />
          </th>
          <th>
            <img src={java} alt="java" className="languages" />
          </th>
          <th>
            <img src={python} alt="python" className="languages" />
          </th>
          <th>
            <img src={jest} alt="jest" className="languages" />
          </th>
          <th>
            <img src={enzyme} alt="enzyme" className="languages" />
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
          <td xs lg="3" />
          <td xs lg="3" />
          <td xs lg="3" />
          <td xs lg="3" />
          <td xs lg="3" />
          <td xs lg="3" />
        </tr>
        <tr>
          <td>
            <img className="languageLabel" src={label_i} alt="label_i" />
          </td>
          <td xs lg="3" />
          <td xs lg="3" />
          <td xs lg="3" />
          <td xs lg="3" />
          <td xs lg="3" />
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
          <td xs lg="3" />
          <td xs lg="3" />
          <td xs lg="3" />
          <td xs lg="3" />
          <td xs lg="3" />
          <td xs lg="3" />
          <td xs lg="3" />
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
        </tr>
      </table>
    </div>
  );
};
export default languageTable;
