[%bs.raw {|require('./app.css')|}];

external logo : string = "./logo.svg" [@@bs.module];

type state = {
  name: string,
  count: int
};

type actions =
  | ChangeName string
  | Increment
  | Decrement;

let component = ReasonReact.reducerComponent "App";

let make _children => {
  ...component,
  initialState: fun () => {name: "", count: 0},
  reducer: fun action state =>
    switch action {
    | ChangeName text => ReasonReact.Update {...state, name: text}
    | Increment => ReasonReact.Update {...state, count: state.count + 1}
    | Decrement => ReasonReact.Update {...state, count: state.count - 1}
    },
  render: fun self =>
    <div className="App">
      <div className="App-header">
        <img src=logo className="App-logo" alt="logo" />
        <h2> (ReasonReact.stringToElement "Welcome!") </h2>
      </div>
      <div style=(ReactDOMRe.Style.make marginTop::"20px" ())>
        <div>
          <input
            onChange=(
              self.reduce (
                fun ev => {
                  /* Accessing the underlying dom `target` requires wrapping the React event in several calls */
                  let text = (ReactDOMRe.domElementToObj (ReactEventRe.Form.target ev))##value;
                  ChangeName text
                }
              )
            )
            value=self.state.name
          />
        </div>
        (ReasonReact.stringToElement "Count: ")
        (ReasonReact.stringToElement (string_of_int self.state.count))
        <div>
          <button onClick=(self.reduce (fun _ => Increment))>
            (ReasonReact.stringToElement "+")
          </button>
          <button onClick=(self.reduce (fun _ => Decrement))>
            (ReasonReact.stringToElement "-")
          </button>
        </div>
      </div>
    </div>
};

/* export the component for use in JS */
let default = ReasonReact.wrapReasonForJs ::component (fun _ => make [||]);