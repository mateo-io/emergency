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
  )}

  handleSubmit = e => {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.setState( {input: ''})
      this.props.addComment(this.props.callId, text)
    }
  }

  render() {

    const { callId, comments  } = this.props;

    return (
      <Panel title={"Comentarios"} >

      <TextField
        hintText="Añade detalles adicionales"
        value={this.state.input}
        onChange={this.updateText}
        onKeyDown={this.handleSubmit}
      />
        <ul>
        {comments.map( (comment, index) => {
          return (
            <li key={index}>{comment}</li>
          )
        })}
        </ul>
      </Panel>
    );
  }
}

export default CallComments;
