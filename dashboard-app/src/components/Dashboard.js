import {Link} from "react-router-dom";
function Dashboard(){
      return (
    
        <>
        <p>
          <h2>Dashboard</h2>
          <Link to="/LogIn">Logout</Link>
          </p>
        <p></p>
        <table>
          <tr>
            <td>
              <p>Category 1</p>
              <p>Category 1</p>
              <p>Category 1</p>
              <p>Category 1</p>
            </td>
            <td>
              <p>Category 2</p>
            </td>
            <td>
              about
            </td>
          </tr>
        </table>
        <p></p>
        <span>Footer @ 2025</span>
       
        </>
      );
    };

    export default Dashboard;