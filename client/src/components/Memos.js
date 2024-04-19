import { useState, useEffect } from "react";
const Memos = ({ state, data }) => {
  const [memos, setMemos] = useState([]);
  const { contract } = data;

  useEffect(() => {
    const memosMessage = async () => {
      const memos = await contract.getMemos();
      console.log(memos, "memos inside");
      setMemos(memos);
    };
    contract && memosMessage();
  }, [contract]);

  return (
    <>
      {/* <p style={{ textAlign: "center", marginTop: "20px" }}>Messages</p> */}

      <div
        className="container-fluid"
        style={{ width: "100%" }}
        key={Math.random()}
      >
        <table
          style={{
            marginBottom: "10px",
          }}
          className="table table-dark"
        >
          <tbody>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Task</th>
              </tr>
            </thead>

            {data.map((memo) => {
              return (
                <tr>
                  <td
                    style={{
                      // backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "100px",
                    }}
                  >
                    {memo.message}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Memos;
