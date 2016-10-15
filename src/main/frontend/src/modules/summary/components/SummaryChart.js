import React from "react";
import { Line, Bar, Pie } from "react-chartjs";

export default class SummaryEntry extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let label = this.props.label;
    let data = this.props.data;

    let totalCompareData = {
      labels:  label,
      datasets: [
        {
          data: data,
          backgroundColor: [
            "#BEE3DB",
            "#5DFDCB",
            "#FFD6BA"
          ],
          hoverBackgroundColor: [
            "#BEE3DB",
            "#5DFDCB",
            "#FFD6BA"
          ]
        }
      ]
    };

    return (
      <div className="charts">
        <Bar data={totalCompareData} width="600" height="400" />
      </div>
    );
  }
}
