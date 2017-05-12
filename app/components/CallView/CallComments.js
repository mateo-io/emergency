import React from "react";
import Title from 'components/Title';
import Text from 'components/Text';
import PaperBox from 'components/PaperBox';
import TimePicker from 'material-ui/TimePicker';
import Panel from 'components/Panel';
import TextField from 'material-ui/TextField';

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class CallComments extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }
  updateText = (evt) => {
    this.setState({input: evt.target.value},
    ()=> {console.log("input is ", this.state.input)}
  )}

  handleSubmit = e => {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.addComment(this.props.callId, text)
      console.log("IM good", text)
    }
  }

  render() {

    const { callId, comments  } = this.props;

    return (
      <Panel title={"Comentarios"}>

      <TextField
        hintText="Añade detalles adicionales"
        onChange={this.updateText}
        onKeyDown={this.handleSubmit}
      />
        {comments.map( (comment, index) => {
          return (
            <p key={index}>{index+1} - {comment}</p>
          )
        })}
      </Panel>
    );
  }
}

export default CallComments;
