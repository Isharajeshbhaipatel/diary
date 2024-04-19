import { ethers } from "ethers";
import { useState } from "react";
const Buy = ({ state, setData, contracts, setContracts }) => {
  const buyChai = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = "";
    const message = document.querySelector("#message").value;
    console.log(name, message, contract, "contract");

    const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction = await contract.buyChai(name, message, amount);
    await transaction.wait();
    let user = {
      name: name,
      message: message,
      contract: contract,
      from: transaction.from,
    };

    setData(transaction);
    contracts.push(user);

    alert("Transaction is done");
    console.log(state.contract, "state.contract");
  };

  return (
    <>
      <div className="container-md" style={{ width: "50%", marginTop: "25px" }}>
        <form onSubmit={buyChai}>
          <div className="mb-3">
            <label className="form-label">Enter Your Thoughts</label>
            <input
              type="text"
              className="form-control"
              id="message"
              placeholder="Enter Your Thoughts"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!state.contract}
          >
            Add Diary
          </button>
        </form>
      </div>
    </>
  );
};
export default Buy;
