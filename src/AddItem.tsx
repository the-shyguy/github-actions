import React from "react";
import { Item } from "./ToDoList";

const isValid = (item: Item): boolean => {
  return item.task !== "" && item.priority !== -1;
};

class AddItem extends React.Component<{ addItem: any }, Item> {
  constructor(props: any) {
    super(props);
    this.state = {
      task: "",
      priority: -1,
    };
    this.setTask = this.setTask.bind(this);
    this.setPriority = this.setPriority.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  setTask(evt: React.ChangeEvent<HTMLElement>) {
    this.setState({
      task: (evt.target as HTMLInputElement).value,
    });
  }

  setPriority(evt: React.ChangeEvent<HTMLElement>) {
    this.setState({
      priority: parseInt((evt.target as HTMLInputElement).value),
    });
  }

  addItem() {
    const item = this.state;
    if (isValid(item)) {
      this.props.addItem(item);
    }

    this.setState({
      task: "",
      priority: -1,
    });
  }

  render() {
    return (
      <table>
        <tbody>
          <tr key={""}>
            <td>Task:</td>
            <td>
              <input
                id="task"
                type="text"
                placeholder="Enter task here"
                onChange={this.setTask}
              />
            </td>
            <td>Priority:</td>
            <td>
              <input
                id="prioity"
                type="text"
                placeholder="Enter priority here"
                onChange={this.setPriority}
              />
            </td>
            <td>
              <input id="submit" type="submit" onClick={this.addItem} />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default AddItem;
