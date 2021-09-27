import Head from "next/head";
import { useState, useRef, useEffect } from "react";
const subjects = ["Mathematics", "English Language", "CRK", "Basic Science"];
const cols = 9;
export default function Home() {
  const [state, setState] = useState(0);
  const ref = useRef(null);

  // useEffect(() => {
  //   console.log(ref.current.children[0].children[3].type);
  // });

  const addData = (e) => {
    setState(() => state + Number(e.target.value));
    // console.log(state);
  };
  return (
    <div>
      <Head>
        <title> Create Next App </title>{" "}
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container my-5 text-center">
        <div className="row">
          <div className="col-md-12 table-responsive">
            <h3>Midterm Result</h3>
            <table className="table table-bordered ">
              <thead className="table-light">
                <tr>
                  <th scope="col"></th>
                  <th scope="col" style={{ width: "20%" }}></th>
                  <th scope="col">Project</th>
                  <th scope="col">Weekly</th>
                  <th scope="col">Notes</th>
                  <th scope="col">First C.A.</th>
                  <th scope="col">Total</th>
                  <th scope="col">Grade</th>
                  <th scope="col">Sign.</th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col" style={{ width: "20%" }}>
                    Subject
                  </th>
                  <th scope="col">5</th>
                  <th scope="col">3</th>
                  <th scope="col">2</th>
                  <th scope="col">10</th>
                  <th scope="col">20</th>
                  <th scope="col">A1 - F9</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((x, i) => (
                  <tr key={x}>
                    <th scope="row">{i + 1}</th>
                    <td>{x}</td>
                    {Array.from({ length: 4 }, (_, i) => (
                      <td key={`content${i}`}>
                        <input type="text" onChange={addData} />
                      </td>
                    ))}
                    <td>{state}</td>
                    <td>grade here</td>
                    <td>sign here</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
