import React, { useState } from "react";
import img1 from "./img/7.png";
import img2 from "./img/6.png";
import img3 from "./img/8.png";
import img5 from "./img/5.png";
import "./App.css";
import { FourSquare } from "react-loading-indicators";
function App() {
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [listResult, setListResult] = useState([]);

  const onClickButton = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      getRandomInt(40);
    }, 3000);
  };

  function getRandomInt(max) {
    var result;
    var flag = true;
    while (flag) {
      result = `${Math.ceil(Math.random() * max)}`;
      console.log("result", result);
      flag = listResult.includes(result);
    }

    setNumber(result);
    setListResult(listResult.concat(result));
  }
  const renderString = () => {
    return listResult.slice(0, 3).toString();
  };

  return (
    <div className="App">
      <div
        style={{
          height: "100vh",
          width: "100vw",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "70vw",
            height: "40vh",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "50vw",
              height: "40vh",
            }}
          >
            <div className="showResult">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 220,
                }}
              >
                {loading ? (
                  <FourSquare style={{ fontSize: "8px" }} color="white" />
                ) : (
                  <h1
                    style={{
                      fontSize: 80,
                      color: "white",
                    }}
                  >
                    {number}
                  </h1>
                )}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <button
                disabled={loading || listResult.length > 4}
                onClick={onClickButton}
                class="button"
              >
                &nbsp;
              </button>
            </div>
          </div>
          <div
            style={{
              width: "50vw",
              height: "60vh",
            }}
          >
            <div className="tableResult">
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "80%",
                    height: 50,
                    marginTop: 20,
                    marginBottom: 20,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{
                      width: 200,
                      marginTop: 15,
                    }}
                    src={img1}
                  />
                  <p
                    style={{
                      fontSize: 45,
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    {listResult[4]}
                  </p>
                </div>

                <img
                  style={{
                    width: "80%",
                    marginTop: 15,
                  }}
                  src={img5}
                />

                <div
                  style={{
                    width: "80%",
                    height: 50,
                    marginTop: 20,
                    marginBottom: 20,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{
                      width: 200,
                      marginTop: 15,
                    }}
                    src={img2}
                  />
                  <p
                    style={{
                      fontSize: 45,
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    {listResult[3]}
                  </p>
                </div>

                <img
                  style={{
                    width: "80%",
                    marginTop: 15,
                  }}
                  src={img5}
                />
                <div
                  style={{
                    width: "80%",
                    height: 50,
                    marginTop: 20,
                    marginBottom: 20,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{
                      width: 200,
                      marginTop: 15,
                    }}
                    src={img3}
                  />
                  <p
                    style={{
                      fontSize: 45,
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    {renderString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
