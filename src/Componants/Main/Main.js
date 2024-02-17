import React from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import dollar from "./../assets/dollar.PNG";
import doc from "./../assets/doc.PNG";
import stat from "./../assets/stat.PNG";
import paper from "./../assets/paper.PNG";
import secton from "./../assets/section.png";
import i from "./../assets/l.PNG";
import Button from "react-bootstrap/Button";

import "./Main.css";
import Lastsection from "../lastsection/Lastsection";

function Main() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-8">
            <Box>
              <div className="scroll-bg">
                <div className="scroll-div">
                  <div className="scroll-object">
                    <Paper
                      style={{
                        display: "flex",
                        marginTop: "5px",
                        backgroundColor: "#313131",
                        textAlign: "center",
                      }}
                    >
                      <img src={dollar} alt="" />
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "40px",
                        }}
                      >
                        {" "}
                        AMZN{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={doc} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        200{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={stat} alt="" />
                      <span
                        style={{
                          color: "red",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        -0.25%{" "}
                      </span>

                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={paper} style={{ maxWidth: "80%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        Low Risk{" "}
                      </span>
                    </Paper>
                    <Paper
                      style={{
                        display: "flex",
                        marginTop: "5px",
                        backgroundColor: "#313131",
                        textAlign: "center",
                      }}
                    >
                      <img src={dollar} alt="" />
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "40px",
                        }}
                      >
                        {" "}
                        TSLA{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={doc} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        200{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={stat} alt="" />
                      <span
                        style={{
                          color: "green",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        -0.25%{" "}
                      </span>

                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={paper} style={{ maxWidth: "80%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        High Risk{" "}
                      </span>
                    </Paper>
                    <Paper
                      style={{
                        display: "flex",
                        marginTop: "5px",
                        backgroundColor: "#313131",
                        textAlign: "center",
                      }}
                    >
                      <img src={dollar} alt="" />
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "40px",
                        }}
                      >
                        {" "}
                        ABQQ{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={doc} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        200{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={stat} alt="" />
                      <span
                        style={{
                          color: "green",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        -0.25%{" "}
                      </span>

                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={paper} style={{ maxWidth: "80%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        High Risk{" "}
                      </span>
                    </Paper>
                    <Paper
                      style={{
                        display: "flex",
                        marginTop: "5px",
                        backgroundColor: "#313131",
                        textAlign: "center",
                      }}
                    >
                      <img src={dollar} alt="" />
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "40px",
                        }}
                      >
                        {" "}
                        MSFT{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={doc} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        200{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={stat} alt="" />
                      <span
                        style={{
                          color: "green",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        -0.25%{" "}
                      </span>

                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={paper} style={{ maxWidth: "80%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        Low Risk{" "}
                      </span>
                    </Paper>
                    <Paper
                      style={{
                        display: "flex",
                        marginTop: "5px",
                        backgroundColor: "#313131",
                        textAlign: "center",
                      }}
                    >
                      <img src={dollar} alt="" />
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "40px",
                        }}
                      >
                        {" "}
                        PYPL{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={doc} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        200{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={stat} alt="" />
                      <span
                        style={{
                          color: "green",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        -0.25%{" "}
                      </span>

                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={paper} style={{ maxWidth: "80%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        Low Risk{" "}
                      </span>
                    </Paper>
                    <Paper
                      style={{
                        display: "flex",
                        marginTop: "5px",
                        backgroundColor: "#313131",
                        textAlign: "center",
                      }}
                    >
                      <img src={dollar} alt="" />
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "40px",
                        }}
                      >
                        {" "}
                        NFLX{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={doc} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        200{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={stat} alt="" />
                      <span
                        style={{
                          color: "red",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        -0.25%{" "}
                      </span>

                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={paper} style={{ maxWidth: "80%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        Law Risk{" "}
                      </span>
                    </Paper>
                    <Paper
                      style={{
                        display: "flex",
                        marginTop: "5px",
                        backgroundColor: "#313131",
                        textAlign: "center",
                      }}
                    >
                      <img src={dollar} alt="" />
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "40px",
                        }}
                      >
                        {" "}
                        NFLX{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={doc} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        200{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={stat} alt="" />
                      <span
                        style={{
                          color: "red",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        -0.25%{" "}
                      </span>

                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={paper} style={{ maxWidth: "80%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        Law Risk{" "}
                      </span>
                    </Paper>
                    <Paper
                      style={{
                        display: "flex",
                        marginTop: "5px",
                        backgroundColor: "#313131",
                        textAlign: "center",
                      }}
                    >
                      <img src={dollar} alt="" />
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "40px",
                        }}
                      >
                        {" "}
                        NFLX{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={doc} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        200{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={stat} alt="" />
                      <span
                        style={{
                          color: "red",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        -0.25%{" "}
                      </span>

                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={paper} style={{ maxWidth: "80%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        Law Risk{" "}
                      </span>
                    </Paper>
                    <Paper
                      style={{
                        display: "flex",
                        marginTop: "5px",
                        backgroundColor: "#313131",
                        textAlign: "center",
                      }}
                    >
                      <img src={dollar} alt="" />
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "40px",
                        }}
                      >
                        {" "}
                        NFLX{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={doc} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        200{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={stat} alt="" />
                      <span
                        style={{
                          color: "red",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        -0.25%{" "}
                      </span>

                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={paper} style={{ maxWidth: "80%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        Law Risk{" "}
                      </span>
                    </Paper>
                    <Paper
                      style={{
                        display: "flex",
                        marginTop: "5px",
                        backgroundColor: "#313131",
                        textAlign: "center",
                      }}
                    >
                      <img src={dollar} alt="" />
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "40px",
                        }}
                      >
                        {" "}
                        NFLX{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={doc} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        200{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={stat} alt="" />
                      <span
                        style={{
                          color: "red",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        -0.25%{" "}
                      </span>

                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={paper} style={{ maxWidth: "80%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        Law Risk{" "}
                      </span>
                    </Paper>
                    <Paper
                      style={{
                        display: "flex",
                        marginTop: "5px",
                        backgroundColor: "#313131",
                        textAlign: "center",
                      }}
                    >
                      <img src={dollar} alt="" />
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "40px",
                        }}
                      >
                        {" "}
                        NFLX{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={doc} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        200{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={stat} alt="" />
                      <span
                        style={{
                          color: "red",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        -0.25%{" "}
                      </span>

                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={paper} style={{ maxWidth: "80%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        Law Risk{" "}
                      </span>
                    </Paper>
                    <Paper
                      style={{
                        display: "flex",
                        marginTop: "5px",
                        backgroundColor: "#313131",
                        textAlign: "center",
                      }}
                    >
                      <img src={dollar} alt="" />
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "40px",
                        }}
                      >
                        {" "}
                        NFLX{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={doc} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        200{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={stat} alt="" />
                      <span
                        style={{
                          color: "red",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        -0.25%{" "}
                      </span>

                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={paper} style={{ maxWidth: "80%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        Law Risk{" "}
                      </span>
                    </Paper>
                    <Paper
                      style={{
                        display: "flex",
                        marginTop: "5px",
                        backgroundColor: "#313131",
                        textAlign: "center",
                      }}
                    >
                      <img src={dollar} alt="" />
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "40px",
                        }}
                      >
                        {" "}
                        NFLX{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={doc} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        200{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={stat} alt="" />
                      <span
                        style={{
                          color: "red",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        -0.25%{" "}
                      </span>

                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={paper} style={{ maxWidth: "80%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        Law Risk{" "}
                      </span>
                    </Paper>
                    <Paper
                      style={{
                        display: "flex",
                        marginTop: "5px",
                        backgroundColor: "#313131",
                        textAlign: "center",
                      }}
                    >
                      <img src={dollar} alt="" />
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "40px",
                        }}
                      >
                        {" "}
                        NFLX{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={doc} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        200{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={stat} alt="" />
                      <span
                        style={{
                          color: "red",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        -0.25%{" "}
                      </span>

                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={paper} style={{ maxWidth: "80%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        Law Risk{" "}
                      </span>
                    </Paper>
                    <Paper
                      style={{
                        display: "flex",
                        marginTop: "5px",
                        backgroundColor: "#313131",
                        textAlign: "center",
                      }}
                    >
                      <img src={dollar} alt="" />
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "40px",
                        }}
                      >
                        {" "}
                        NFLX{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={doc} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        200{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={stat} alt="" />
                      <span
                        style={{
                          color: "red",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        -0.25%{" "}
                      </span>

                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={paper} style={{ maxWidth: "80%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        Law Risk{" "}
                      </span>
                    </Paper>
                    <Paper
                      style={{
                        display: "flex",
                        marginTop: "5px",
                        backgroundColor: "#313131",
                        textAlign: "center",
                      }}
                    >
                      <img src={dollar} alt="" />
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "40px",
                        }}
                      >
                        {" "}
                        NFLX{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={doc} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        200{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={stat} alt="" />
                      <span
                        style={{
                          color: "red",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        -0.25%{" "}
                      </span>

                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={paper} style={{ maxWidth: "80%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        Law Risk{" "}
                      </span>
                    </Paper>
                    <Paper
                      style={{
                        display: "flex",
                        marginTop: "5px",
                        backgroundColor: "#313131",
                        textAlign: "center",
                      }}
                    >
                      <img src={dollar} alt="" />
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "40px",
                        }}
                      >
                        {" "}
                        NFLX{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={doc} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        200{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={stat} alt="" />
                      <span
                        style={{
                          color: "red",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        -0.25%{" "}
                      </span>

                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={paper} style={{ maxWidth: "80%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        Law Risk{" "}
                      </span>
                    </Paper>
                    <Paper
                      style={{
                        display: "flex",
                        marginTop: "5px",
                        backgroundColor: "#313131",
                        textAlign: "center",
                      }}
                    >
                      <img src={dollar} alt="" />
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "40px",
                        }}
                      >
                        {" "}
                        NFLX{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={doc} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        200{" "}
                      </span>
                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={stat} alt="" />
                      <span
                        style={{
                          color: "red",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        -0.25%{" "}
                      </span>

                      <img src={i} style={{ maxWidth: "50%" }} alt="" />
                      <img src={paper} style={{ maxWidth: "80%" }} alt="" />
                      <span
                        style={{
                          color: "white",
                          marginTop: "10px",
                          marginRight: "40px",
                          borderRadius: "30px",
                        }}
                      >
                        {" "}
                        Law Risk{" "}
                      </span>
                    </Paper>
                  </div>
                </div>
              </div>
            </Box>
          </div>

          <div className="col-lg-4 col-md-4">
            <div className="Card">
              <h1>Filters</h1>
              <span style={{ marginRight: "300px", color: "#313131" }}>
                Filters Applied
              </span>
              <span style={{ color: "#313131" }}> Clear All</span>
              <div className="smallcard">
                <span className="real" style={{cursor:"pointer"}}> Real Estate x</span>
              </div>
              <div className="Stock">
                <b>Stock</b>

                <form class="d-flex">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="$ TICKER"
                    aria-label="Search"
                    className="searchq"
                  />
                </form>
                <b> ▼ Industry</b>
                <div className="container">
                  <img src={secton} style={{ cursor: "pointer" }} alt="" />
                </div>
                <Lastsection />
              </div>

              <Button variant="primary" size="lg" className="buttonq">
                Apply
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Main;
