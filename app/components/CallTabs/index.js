import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';
import CallView from 'components/CallView';

          /*
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
            >
            <div>
              <h2 style={styles.headline}>Tabs with slide effect</h2>
              Swipe to see the next slide.<br />
            </div>
              <div style={styles.slide}>
                slide n°2
              </div>
              <div style={styles.slide}>
                slide n°3
              </div>
          </SwipeableViews>
          */




export default class CallTabs extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const CallLink = ({ match }) => (
      <div>

      </div>
    )

    const { calls, actions } = this.props;
    return (
      <div>
        <Tabs>
        {calls.map( (call) => {
          return (
              <Tab
              containerElement={ <Link to={`/dashboard/call/${call.id}`} /> }
              key={call.id}
              icon={<FontIcon className="material-icons">phone</FontIcon>}
              label={call.origin}
            />
            )
          })
        } </Tabs>
          <CallLink />
        <Route path={`/dashboard/call/:id`} component={CallView}/>
        {this.props.children}
        </div>
      )
    }
  }
