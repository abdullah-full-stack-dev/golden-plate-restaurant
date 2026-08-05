import React from 'react'
import line from "../assets/images/line2.png"

export const SubTitle = ({ text }) => {
    return (
        <div style={{ display: "flex", justifyContent: "center", margin: "20px 0 30px" }}>
            <div>
                <span style={{ fontSize: "14px", textAlign: "center", color: "#ffbd67" }}>{text}</span>
                <div style={{ margin: "6px auto 14px", width: "100px", height: "10px" }}>
                    <img src={line} alt="line" style={{ width: "100%", height: "100%" }} />
                </div>
            </div>
        </div>
    )
}
