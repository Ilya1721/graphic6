import React from "react";

class InputData extends React.Component {
  render() {
    const taskOne = this.props.taskOne;
    const taskTwoThree = this.props.taskTwoThree;

    return (
      <div className="input-data">
        <h3>Початкові дані до задачі 1</h3>
        <table>
          <thead>
            <tr>
              <th>Сумарна інтенсивність відмов одного елементу γ</th>
              <th>Середній час відновлення θ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{taskOne.l}</td>
              <td>{taskOne.o}</td>
            </tr>
          </tbody>
        </table>
        <h3 className="margin-top">Початкові дані до задач 2 та 3</h3>
        <table>
          <thead>
            <tr>
              <th>Загальна кількість машин в комплексі n</th>
              <th>Кількість машин, які відмовили, k</th>
              <th>Інтенсивність відмов, γ</th>
              <th>Час відновлення машини, яка відмовила, τ</th>
              <th>Коефіцієнт втрат, p</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{taskTwoThree.n}</td>
              <td>{taskTwoThree.k}</td>
              <td>{taskTwoThree.l}</td>
              <td>{taskTwoThree.t}</td>
              <td>{taskTwoThree.p}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default InputData;
