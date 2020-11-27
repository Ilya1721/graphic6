import React from "react";

class OutputData extends React.Component {
  calculate = () => {
    return {
      taskOne: this.calcOne(),
      taskTwoThree: this.calcTwoThree(),
    };
  };

  calcOne = () => {
    const { sqrt, exp, pow } = Math;
    const { l, o } = this.props.taskOne;
    const u = 1 / o;
    const A1 = sqrt(pow(l, 2) + 6 * l * u + pow(u, 2));
    const B1 = 3 * l + u;
    const t = 1;
    const p1 =
      ((A1 + B1) / (2 * A1)) * exp(-0.5 * (B1 - A1) * t) +
      ((A1 - B1) / (2 * A1)) * exp(-0.5 * (B1 + A1) * t);
    const A2 = sqrt(4 * l * u + pow(u, 2));
    const B2 = 2 * l + u;
    const p2 =
      ((A2 + B2) / (2 * A2)) * exp(-0.5 * (B2 - A2) * t) +
      ((A2 - B2) / (2 * A2)) * exp(-0.5 * (B2 + A2) * t);

    return {
      p1,
      p2,
    };
  };

  calcTwoThree = () => {
    const { pow, exp } = Math;
    const factorial = this.factorial;
    const A = this.A;
    const C = this.C;
    const { n, k, l, t, p } = this.props.taskTwoThree;
    const p1 = exp(-(n * pow(p, n - 1) * l * t) / pow(1 + p, n));
    let temp = 0;
    for (let j = 0; j <= n; j++) {
      temp += A(n, j) * pow(p, j);
    }
    const p2 = exp(-(factorial(n) * pow(p, n - 1) * t) / temp);
    const p3 = (C(n, k) * pow(p, k)) / pow(1 + p, n);
    const p4 = (A(n, k) * pow(p, k)) / temp;
    const p5 =
      (1 - pow(p, n) / pow(1 + p, n)) *
      exp(-(n * pow(p, n - 1) * l * t) / pow(1 + p, n));
    let temp2 = 0;
    for (let j = 0; j <= n; j++) {
      temp2 += A(n, j) * pow(p, n);
    }
    const p6 =
      (1 - (factorial(n) * pow(p, n)) / temp2) *
      exp(-(factorial(n) * pow(p, n - 1) * t) / temp);

    return {
      p1,
      p2,
      p3,
      p4,
      p5,
      p6,
    };
  };

  A = (n, k) => {
    const factorial = this.factorial;

    return factorial(n) / factorial(n - k);
  };

  C = (n, k) => {
    const factorial = this.factorial;

    return factorial(n) / (factorial(n - k) * factorial(k));
  };

  factorial = (n) => {
    if (n === 0 || n === 1) {
      return 1;
    }
    let f = 1;
    for (let i = 1; i <= n; i++) {
      f *= i;
    }

    return f;
  };

  render() {
    const { taskOne, taskTwoThree } = this.calculate();

    return (
      <div className="output-data">
        <h3>Завдання 1</h3>
        <table>
          <thead>
            <tr>
              <th colSpan={2}>
                Імовірність безвідмовної роботи дубльованої групи
              </th>
            </tr>
            <tr>
              <th>Навантажений резерв</th>
              <th>Ненавантежений резерв</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{taskOne.p1.toFixed(4)}</td>
              <td>{taskOne.p2.toFixed(4)}</td>
            </tr>
          </tbody>
        </table>
        <h3 className="margin-top">Завдання 2</h3>
        <table>
          <thead>
            <tr>
              <th colSpan={2}>
                Загальна імовірність безвідмовної роботи дубльованої ЕОМ
              </th>
            </tr>
            <tr>
              <th>Необмежений ремонт</th>
              <th>Обмежений ремонт</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{taskTwoThree.p1.toFixed(8)}</td>
              <td>{taskTwoThree.p2.toFixed(4)}</td>
            </tr>
          </tbody>
        </table>
        <h3 className="margin-top">Завдання 3</h3>
        <table>
          <thead>
            <tr>
              <th colSpan={2}>
                Імовірність безвідмовної роботи для машин, які ремонтуються під
                час експлуатації
              </th>
            </tr>
            <tr>
              <th>Необмежений ремонт</th>
              <th>Обмежений ремонт</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{taskTwoThree.p5.toFixed(8)}</td>
              <td>{taskTwoThree.p6.toFixed(4)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default OutputData;
